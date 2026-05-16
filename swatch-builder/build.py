#!/usr/bin/env python3
"""
本命色卡 PDF 生成器
====================

读取 palette/colors.yaml（19 色全集 + 八门 SKU + 12 月色卡日历）
+ clients/<客户ID>/data.yaml（客户本命色配置）
→ 生成 4 档色卡的 PDF + HTML 预览。

用法：
    python3 build.py 主理人-19880808

输出：
    clients/主理人-19880808/output.pdf
    clients/主理人-19880808/output.html

依赖：
    pip install jinja2 pyyaml weasyprint
"""

import sys
from pathlib import Path
import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape
from weasyprint import HTML

ROOT = Path(__file__).parent.resolve()
TEMPLATES_DIR = ROOT / "templates"
PALETTE_FILE = ROOT / "palette" / "colors.yaml"
CLIENTS_DIR = ROOT / "clients"


def load_palette() -> dict:
    """加载 19 色全集 + 八门 SKU + 12 月日历。"""
    with open(PALETTE_FILE, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_client(client_id: str) -> dict:
    """加载客户色卡配置。"""
    data_file = CLIENTS_DIR / client_id / "data.yaml"
    if not data_file.exists():
        print(f"[!] 找不到 {data_file}")
        sys.exit(1)
    with open(data_file, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def build(client_id: str):
    print(f"[*] 生成色卡 PDF: {client_id}")

    palette = load_palette()
    client = load_client(client_id)

    # 构建 colors_by_id 索引（模板里直接 colors_by_id[color_id] 取色）
    colors_by_id = {c["id"]: c for c in palette["colors"]}

    ctx = {
        # 客户元数据
        "meta": client.get("meta", {}),
        "signature": client.get("signature", {"primary": [], "secondary": [], "forbidden": []}),
        "tier_a": client.get("tier_a", {"enabled": False, "cards": []}),
        "tier_b": client.get("tier_b", {"enabled": False}),
        "tier_c": client.get("tier_c", {"enabled": False}),
        "tier_d": client.get("tier_d", {"enabled": False}),

        # 色谱数据（来自 palette/colors.yaml）
        "colors": palette["colors"],
        "colors_by_id": colors_by_id,
        "calendar": palette.get("calendar", []),
        "ba_men": palette.get("ba_men", []),
    }

    env = Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=select_autoescape(["html"]),
    )
    template = env.get_template("swatches.html.j2")
    html = template.render(**ctx)

    client_dir = CLIENTS_DIR / client_id
    client_dir.mkdir(parents=True, exist_ok=True)

    debug_html = client_dir / "output.html"
    debug_html.write_text(html, encoding="utf-8")
    print(f"[+] HTML 已写入 {debug_html}")

    # 拷贝 CSS 到 client_dir 以让 HTML 预览不依赖原 templates 路径
    # （PDF 渲染时 weasyprint 用 base_url 自己处理）
    css_target = client_dir / "_styles.css"
    css_source = TEMPLATES_DIR / "_styles.css"
    css_target.write_text(css_source.read_text(encoding="utf-8"), encoding="utf-8")

    output_pdf = client_dir / "output.pdf"
    HTML(string=html, base_url=str(TEMPLATES_DIR)).write_pdf(str(output_pdf))
    size_kb = output_pdf.stat().st_size / 1024
    print(f"[+] PDF 已写入 {output_pdf} ({size_kb:.0f} KB)")

    # 简单页数估计（粗略）
    print(f"[+] 包含档位: " + ", ".join([
        f"A({len(client.get('tier_a', {}).get('cards', []))}张)" if client.get("tier_a", {}).get("enabled") else "",
        "B(8门×双色=16张)" if client.get("tier_b", {}).get("enabled") else "",
        f"C(19色×2页)" if client.get("tier_c", {}).get("enabled") else "",
        "D(B端配件)" if client.get("tier_d", {}).get("enabled") else "",
    ]).replace(", , ", ", ").strip(", "))

    print("[✓] 完成")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法：python3 build.py <客户ID>")
        print("示例：python3 build.py 主理人-19880808")
        sys.exit(1)
    build(sys.argv[1])
