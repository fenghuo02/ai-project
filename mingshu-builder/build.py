#!/usr/bin/env python3
"""
《X之书》命书生成器
=====================

用法：
    python3 build.py 主理人-19880808            生成 PDF
    python3 build.py --validate 主理人-19880808 仅校验 data.yaml + 图片，不出 PDF

它会读取 clients/<客户ID>/data.yaml 并生成 output.pdf
"""

import re
import sys
from pathlib import Path

import yaml
# jinja2 + weasyprint 是 build() 才需要的重依赖（weasyprint 拉 Pango/Cairo）；
# --validate 模式只用 yaml，所以延迟导入到 build() 内部，让 CI 校验作业更快。

ROOT = Path(__file__).parent.resolve()
TEMPLATES_DIR = ROOT / "templates"
CLIENTS_DIR = ROOT / "clients"
# 共享色谱（项目 19 色单一真相来源）
SHARED_PALETTE = ROOT.parent / "swatch-builder" / "palette" / "colors.yaml"

# ============================================================
# 校验所需常量
# ============================================================

HEX_RE = re.compile(r"^#[0-9A-Fa-f]{6}$")

# 必填的顶层 key
REQUIRED_TOP_KEYS = [
    "meta", "bazi", "colors", "personality", "lifestyle",
    "aesthetic_signature", "wardrobe", "preface",
    "ba_men", "festivals", "solar_terms", "afterword", "appendix_intro",
]

REQUIRED_META_KEYS = [
    "client_id", "client_name", "client_seal_char",
    "edition", "year_label", "book_color_name",
]

# 八门必须有这 8 个 id 且顺序固定（模板/CSS 依赖）
EXPECTED_BA_MEN_IDS = [
    "kai", "xiu", "sheng", "shang", "du", "jing", "si_men", "jing_men",
]

# 七节日必须有这 7 个 id
EXPECTED_FESTIVAL_IDS = [
    "chuxi", "chunjie", "yuanxiao", "duanwu",
    "qixi", "zhongqiu", "chongyang",
]

EXPECTED_SOLAR_SEASONS = ["spring", "summer", "autumn", "winter"]

# 24 节气 id（每季 6 个）
EXPECTED_SOLAR_TERM_IDS = {
    "spring": ["lichun", "yushui", "jingzhe", "chunfen", "qingming", "guyu"],
    "summer": ["lixia", "xiaoman", "mangzhong", "xiazhi", "xiaoshu", "dashu"],
    "autumn": ["liqiu", "chushu", "bailu", "qiufen", "hanlu", "shuangjiang"],
    "winter": ["lidong", "xiaoxue", "daxue", "dongzhi", "xiaohan", "dahan"],
}

# 客户面禁词（出现在客户可见字段就报警）
FORBIDDEN_WORDS = [
    "算命", "看相", "用神", "调候", "命格",
    "奇门", "八门", "死门", "惊门",
]
# bazi.* 是内部工作字段，可以保留这些词；其它字段都要扫描
PUBLIC_TEXT_PATHS_TO_SCAN_FOR_FORBIDDEN_WORDS = (
    "preface", "personality", "aesthetic_signature",
    "afterword", "appendix_intro",
    # ba_men / festivals 里的 egg/pengyouquan/uses 等也对外
    "ba_men", "festivals",
)


# ============================================================
# 校验：错误收集器
# ============================================================

class ValidationReport:
    def __init__(self):
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.infos: list[str] = []

    def err(self, msg: str): self.errors.append(msg)
    def warn(self, msg: str): self.warnings.append(msg)
    def info(self, msg: str): self.infos.append(msg)

    @property
    def ok(self) -> bool:
        return not self.errors

    def print(self):
        for m in self.infos:
            print(f"  [i] {m}")
        for m in self.warnings:
            print(f"  [!] {m}")
        for m in self.errors:
            print(f"  [✗] {m}")
        print()
        if self.ok:
            print(f"[✓] 校验通过 · {len(self.warnings)} 条警告")
        else:
            print(f"[✗] 校验失败 · {len(self.errors)} 条错误 · {len(self.warnings)} 条警告")


# ============================================================
# 校验：data.yaml
# ============================================================

def _has_placeholder(value) -> bool:
    """递归检测占位符 <…> ；忽略 dict 的 key。"""
    if isinstance(value, str):
        return bool(re.search(r"<[^>]+>", value))
    if isinstance(value, list):
        return any(_has_placeholder(v) for v in value)
    if isinstance(value, dict):
        return any(_has_placeholder(v) for v in value.values())
    return False


def _walk_strings(node, path=""):
    """yield (path, str) for every string in nested structure."""
    if isinstance(node, str):
        yield path, node
    elif isinstance(node, list):
        for i, item in enumerate(node):
            yield from _walk_strings(item, f"{path}[{i}]")
    elif isinstance(node, dict):
        for k, v in node.items():
            yield from _walk_strings(v, f"{path}.{k}" if path else k)


def validate_data(data: dict, report: ValidationReport) -> None:
    # ─── 顶层 key ───────────────────────────────────────
    for k in REQUIRED_TOP_KEYS:
        if k not in data:
            report.err(f"缺少顶层字段：{k}")

    # ─── meta ───────────────────────────────────────────
    meta = data.get("meta") or {}
    for k in REQUIRED_META_KEYS:
        if not meta.get(k):
            report.err(f"meta.{k} 为空")
    if isinstance(meta.get("client_seal_char"), str) and len(meta["client_seal_char"]) != 1:
        report.warn(f"meta.client_seal_char 建议只用 1 个字（当前 {len(meta['client_seal_char'])} 字符）")

    # ─── colors ────────────────────────────────────────
    colors = data.get("colors") or {}
    primary = colors.get("primary") or []
    if len(primary) < 1:
        report.err("colors.primary 至少需要 1 个主色")
    elif len(primary) > 2:
        report.warn(f"colors.primary 通常 1-2 个，当前 {len(primary)} 个")
    for i, c in enumerate(primary):
        for f in ("name", "hex", "en", "desc", "meaning"):
            if not c.get(f):
                report.err(f"colors.primary[{i}].{f} 为空")
        if c.get("hex") and not HEX_RE.match(c["hex"]):
            report.err(f"colors.primary[{i}].hex 格式错误（{c.get('hex')}），需 #RRGGBB")

    sec = colors.get("secondary") or {}
    for f in ("name", "hex", "en", "desc"):
        if not sec.get(f):
            report.err(f"colors.secondary.{f} 为空")
    if sec.get("hex") and not HEX_RE.match(sec["hex"]):
        report.err(f"colors.secondary.hex 格式错误（{sec.get('hex')}），需 #RRGGBB")

    forb = colors.get("forbidden") or {}
    for f in ("name", "hex", "en", "desc", "note"):
        if not forb.get(f):
            report.err(f"colors.forbidden.{f} 为空")
    if forb.get("hex") and not HEX_RE.match(forb["hex"]):
        report.err(f"colors.forbidden.hex 格式错误（{forb.get('hex')}），需 #RRGGBB")

    # ─── ba_men · 8 个固定 id ─────────────────────────
    ba_men = data.get("ba_men") or []
    actual_ids = [m.get("id") for m in ba_men]
    if actual_ids != EXPECTED_BA_MEN_IDS:
        report.err(
            f"ba_men 必须按顺序包含 8 个 id：{EXPECTED_BA_MEN_IDS}，"
            f"实际：{actual_ids}"
        )
    best_count = sum(1 for m in ba_men if m.get("is_best"))
    if best_count == 0:
        report.warn("ba_men 中没有任何 is_best=true（建议选 1 门作为客户最佳匹配）")
    elif best_count > 1:
        report.err(f"ba_men 中 is_best=true 的有 {best_count} 个，最多 1 个")
    for i, m in enumerate(ba_men):
        for f in ("name", "deco_char", "color_1", "color_2", "label", "quote", "uses", "rituals", "pengyouquan"):
            if m.get(f) in (None, "", []):
                report.err(f"ba_men[{i}] ({m.get('id')}).{f} 为空")
        for hex_field in ("color_1", "color_2"):
            v = m.get(hex_field)
            if v and not HEX_RE.match(v):
                report.err(f"ba_men[{i}] ({m.get('id')}).{hex_field} HEX 格式错误：{v}")
        if m.get("is_best") and not m.get("egg"):
            report.warn(
                f"ba_men[{i}] ({m.get('id')}) is_best=true 但 egg 为空 · "
                f"建议为最佳匹配门写客户专属彩蛋"
            )

    # ─── festivals · 7 个固定 id ──────────────────────
    festivals = data.get("festivals") or []
    fest_ids = [f.get("id") for f in festivals]
    missing_fest = set(EXPECTED_FESTIVAL_IDS) - set(fest_ids)
    if missing_fest:
        report.err(f"festivals 缺少 id：{sorted(missing_fest)}")
    extra_fest = set(fest_ids) - set(EXPECTED_FESTIVAL_IDS)
    if extra_fest:
        report.warn(f"festivals 出现非预期 id：{sorted(extra_fest)}")
    for i, f in enumerate(festivals):
        for k in ("name", "title", "deco_char", "color_1", "color_2", "label", "origin", "color_text", "actions", "pengyouquan"):
            if f.get(k) in (None, "", []):
                report.err(f"festivals[{i}] ({f.get('id')}).{k} 为空")

    # ─── solar_terms · 4 季 × 6 节气 ──────────────────
    st = data.get("solar_terms") or {}
    for season in EXPECTED_SOLAR_SEASONS:
        if season not in st:
            report.err(f"solar_terms.{season} 缺失")
            continue
        items = (st[season] or {}).get("items") or []
        actual = [it.get("id") for it in items]
        expected = EXPECTED_SOLAR_TERM_IDS[season]
        if actual != expected:
            report.err(
                f"solar_terms.{season}.items id 必须按顺序为 {expected}，实际 {actual}"
            )

    # ─── 客户面禁词 ───────────────────────────────────
    for top_key in PUBLIC_TEXT_PATHS_TO_SCAN_FOR_FORBIDDEN_WORDS:
        if top_key not in data:
            continue
        for path, text in _walk_strings(data[top_key], path=top_key):
            for word in FORBIDDEN_WORDS:
                if word in text:
                    report.warn(
                        f"客户面字段 {path} 出现禁词「{word}」 · "
                        f"应包装成东方美学语汇"
                    )

    # ─── 占位符未替换 ─────────────────────────────────
    for path, text in _walk_strings(data, ""):
        if "<" in text and ">" in text and re.search(r"<[^>]+>", text):
            report.err(f"{path} 仍含占位符：{text!r}")


def validate_images(client_dir: Path, report: ValidationReport) -> None:
    """检查所有引用的图片在不在 + 报告缺图。"""
    images_dir = client_dir / "images"
    if not images_dir.exists():
        report.warn(
            f"images/ 目录不存在 · 所有图片将用 CSS 渐变 fallback "
            f"（首次跑 demo 没问题，正式交付前补齐）"
        )
        return

    image_keys = [
        "portrait",
        *EXPECTED_BA_MEN_IDS,
        *EXPECTED_FESTIVAL_IDS,
        *(t for ids in EXPECTED_SOLAR_TERM_IDS.values() for t in ids),
    ]
    found = 0
    missing: list[str] = []
    for key in image_keys:
        if find_image(client_dir, key):
            found += 1
        else:
            missing.append(key)
    report.info(f"图片：找到 {found}/{len(image_keys)}（找不到的会自动 CSS fallback）")
    if missing:
        # 用 warn 而非 err — 缺图脚本仍能跑
        report.warn(
            f"以下 {len(missing)} 个 key 在 images/ 没找到："
            f"{', '.join(missing[:8])}{' …' if len(missing) > 8 else ''}"
        )


def validate_palette_link(data: dict, report: ValidationReport) -> None:
    """提示客户主色 HEX 是否在共享色谱里（不强制，但建议同步）。"""
    if not SHARED_PALETTE.exists():
        report.warn(f"共享色谱 {SHARED_PALETTE} 不存在 · 附录·二色谱页将被跳过")
        return
    with open(SHARED_PALETTE, "r", encoding="utf-8") as f:
        atlas = yaml.safe_load(f) or {}
    palette_hexes = {c.get("hex", "").upper() for c in atlas.get("colors", [])}

    for label, c in [
        *(("colors.primary[%d]" % i, c) for i, c in enumerate(data.get("colors", {}).get("primary") or [])),
        ("colors.secondary", data.get("colors", {}).get("secondary") or {}),
        ("colors.forbidden", data.get("colors", {}).get("forbidden") or {}),
    ]:
        h = (c.get("hex") or "").upper()
        if h and h not in palette_hexes:
            report.warn(
                f"{label}.hex {h} 不在 swatch-builder/palette/colors.yaml 19 色全集里 · "
                f"附录·二无法标 ★ / 忌"
            )


# ============================================================
# 原有：图片查找
# ============================================================

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
        f = images_dir / f"{key}.{ext}"
        if f.exists():
            return f.absolute().as_uri()
    for f in images_dir.iterdir():
        if f.is_file() and f.stem.lower().startswith(key.lower()):
            return f.absolute().as_uri()
    return ""


# ============================================================
# 主流程
# ============================================================

def load_client_data(client_id: str) -> tuple[Path, dict]:
    client_dir = CLIENTS_DIR / client_id
    data_file = client_dir / "data.yaml"
    if not data_file.exists():
        print(f"[!] 找不到 {data_file}")
        sys.exit(1)
    with open(data_file, "r", encoding="utf-8") as f:
        return client_dir, yaml.safe_load(f)


def validate_only(client_id: str) -> int:
    print(f"[*] 校验 {client_id} ...")
    client_dir, data = load_client_data(client_id)
    report = ValidationReport()
    validate_data(data, report)
    validate_images(client_dir, report)
    validate_palette_link(data, report)
    report.print()
    return 0 if report.ok else 1


def build(client_id: str):
    from jinja2 import Environment, FileSystemLoader
    from weasyprint import HTML

    client_dir, data = load_client_data(client_id)

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


def usage_and_exit(code=1):
    print("用法：")
    print("  python3 build.py <客户ID>              # 生成 PDF")
    print("  python3 build.py --validate <客户ID>   # 仅校验，不生成")
    print()
    print("示例：")
    print("  python3 build.py 主理人-19880808")
    print("  python3 build.py --validate 主理人-19880808")
    sys.exit(code)


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help"):
        usage_and_exit(0)

    if args[0] == "--validate":
        if len(args) < 2:
            usage_and_exit(1)
        sys.exit(validate_only(args[1]))

    build(args[0])
