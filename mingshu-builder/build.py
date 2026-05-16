#!/usr/bin/env python3
"""
《X之书》命书生成器
=====================

用法：
    python3 build.py 主理人-19880808

它会读取 clients/主理人-19880808/data.yaml 并生成 output.pdf
"""

import sys
import os
import yaml
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML

ROOT = Path(__file__).parent.resolve()
TEMPLATES_DIR = ROOT / "templates"
CLIENTS_DIR = ROOT / "clients"
# 共享色谱（项目 19 色单一真相来源）
SHARED_PALETTE = ROOT.parent / "swatch-builder" / "palette" / "colors.yaml"


def find_image(client_dir: Path, key: str) -> str:
    """
    在客户的 images 目录里查找以 key 开头的第一张图。
    支持 jpg/jpeg/png/webp 后缀。
    返回相对于 HTML 的 file:// URI；找不到时返回空串。
    """
    images_dir = client_dir / "images"
    if not images_dir.exists():
        return ""
    for ext in ("jpg", "jpeg", "png", "webp", "JPG", "PNG"):
        # 完整匹配
        f = images_dir / f"{key}.{ext}"
        if f.exists():
            return f.absolute().as_uri()
    # 前缀匹配（如果客户文件名带后缀编号）
    for f in images_dir.iterdir():
        if f.is_file() and f.stem.lower().startswith(key.lower()):
            return f.absolute().as_uri()
    return ""


def build(client_id: str):
    client_dir = CLIENTS_DIR / client_id
    data_file = client_dir / "data.yaml"

    if not data_file.exists():
        print(f"[!] 找不到 {data_file}")
        sys.exit(1)

    with open(data_file, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f)

    # 注入项目 19 色共享色谱（附录·二·项目色谱全集 用）
    if SHARED_PALETTE.exists():
        with open(SHARED_PALETTE, "r", encoding="utf-8") as f:
            atlas = yaml.safe_load(f)
        # 标记客户的本命色 / 避忌色（用 hex 匹配，鲁棒一些）
        primary_hexes = {c["hex"].upper() for c in data.get("colors", {}).get("primary", [])}
        forbidden = data.get("colors", {}).get("forbidden") or {}
        forbidden_hex = (forbidden.get("hex") or "").upper()
        for c in atlas.get("colors", []):
            chex = c.get("hex", "").upper()
            c["is_primary"] = chex in primary_hexes
            c["is_forbidden"] = bool(forbidden_hex) and chex == forbidden_hex
        data["atlas"] = atlas
        print(f"[+] Loaded shared palette: {len(atlas.get('colors', []))} colors")
    else:
        data["atlas"] = None
        print(f"[!] Shared palette not found at {SHARED_PALETTE} — skipping atlas page")

    # 注入图片 URI
    data["img"] = {}
    image_keys = [
        # 五行肖像
        "portrait",
        # 八门
        "kai", "xiu", "sheng", "shang", "du", "jing", "si_men", "jing_men",
        # 7 节日
        "chuxi", "chunjie", "yuanxiao", "duanwu", "qixi", "zhongqiu", "chongyang",
        # 24 节气
        "lichun", "yushui", "jingzhe", "chunfen", "qingming", "guyu",
        "lixia", "xiaoman", "mangzhong", "xiazhi", "xiaoshu", "dashu",
        "liqiu", "chushu", "bailu", "qiufen", "hanlu", "shuangjiang",
        "lidong", "xiaoxue", "daxue", "dongzhi", "xiaohan", "dahan",
    ]
    for key in image_keys:
        data["img"][key] = find_image(client_dir, key)

    # 渲染
    env = Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=False,
    )
    template = env.get_template("mingshu.html.j2")
    html = template.render(**data)

    # 输出 HTML（用于调试）
    debug_html = client_dir / "output.html"
    debug_html.write_text(html, encoding="utf-8")
    print(f"[+] HTML written to {debug_html}")

    # 生成 PDF
    output_pdf = client_dir / "output.pdf"
    HTML(string=html, base_url=str(client_dir)).write_pdf(str(output_pdf))
    print(f"[+] PDF written to {output_pdf}")
    print(f"    size: {output_pdf.stat().st_size:,} bytes")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("usage: python3 build.py <client_id>")
        print("example: python3 build.py 主理人-19880808")
        sys.exit(1)
    build(sys.argv[1])
