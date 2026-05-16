#!/usr/bin/env python3
"""
本命色卡 PDF 生成器
====================

读取 palette/colors.yaml（19 色全集 + 八门 SKU + 12 月色卡日历）
+ clients/<客户ID>/data.yaml（客户本命色配置）
→ 生成 4 档色卡的 PDF + HTML 预览。

用法：
    python3 build.py <客户ID>              生成 PDF
    python3 build.py --validate <客户ID>   仅校验 data.yaml，不出 PDF

依赖：
    pip install jinja2 pyyaml weasyprint
"""

import sys
from pathlib import Path

import yaml
# jinja2 + weasyprint 是 build() 才需要的重依赖（weasyprint 拉 Pango/Cairo）；
# --validate 模式只用 yaml，所以延迟导入到 build() 内部，让 CI 校验作业更快。

ROOT = Path(__file__).parent.resolve()
TEMPLATES_DIR = ROOT / "templates"
PALETTE_FILE = ROOT / "palette" / "colors.yaml"
CLIENTS_DIR = ROOT / "clients"

# ============================================================
# 校验
# ============================================================

REQUIRED_TOP_KEYS = ["meta", "signature", "tier_a", "tier_b", "tier_c", "tier_d"]
REQUIRED_META_KEYS = ["client_id", "client_name", "client_seal_char", "edition"]


class ValidationReport:
    def __init__(self):
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.infos: list[str] = []

    def err(self, m): self.errors.append(m)
    def warn(self, m): self.warnings.append(m)
    def info(self, m): self.infos.append(m)

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


def _has_placeholder(value) -> bool:
    import re
    if isinstance(value, str):
        return bool(re.search(r"<[^>]+>", value))
    if isinstance(value, list):
        return any(_has_placeholder(v) for v in value)
    if isinstance(value, dict):
        return any(_has_placeholder(v) for v in value.values())
    return False


def validate_client(client: dict, valid_color_ids: set[str], report: ValidationReport) -> None:
    # ─── 顶层 ─────────────────────────────────────
    for k in REQUIRED_TOP_KEYS:
        if k not in client:
            report.err(f"缺少顶层字段：{k}")

    # ─── meta ────────────────────────────────────
    meta = client.get("meta") or {}
    for k in REQUIRED_META_KEYS:
        if not meta.get(k):
            report.err(f"meta.{k} 为空")

    # ─── signature · 必须是合法 color id ─────────
    sig = client.get("signature") or {}
    for bucket in ("primary", "secondary", "forbidden"):
        ids = sig.get(bucket) or []
        if not isinstance(ids, list):
            report.err(f"signature.{bucket} 必须是列表")
            continue
        if bucket == "primary" and len(ids) < 1:
            report.err("signature.primary 至少 1 个颜色")
        for i, cid in enumerate(ids):
            if not isinstance(cid, str) or not cid:
                report.err(f"signature.{bucket}[{i}] 为空")
                continue
            if cid not in valid_color_ids:
                report.err(
                    f"signature.{bucket}[{i}] = {cid!r} 不在 palette/colors.yaml · "
                    f"合法 ID：{sorted(valid_color_ids)}"
                )

    # ─── tier_a · cards 也必须是合法 id ─────────
    tier_a = client.get("tier_a") or {}
    if tier_a.get("enabled"):
        cards = tier_a.get("cards") or []
        if not cards:
            report.warn("tier_a.enabled=true 但 cards 为空 · 至少 1 张")
        for i, cid in enumerate(cards):
            if cid not in valid_color_ids:
                report.err(f"tier_a.cards[{i}] = {cid!r} 不在 palette/colors.yaml")

    # ─── tier_b ─────────────────────────────────
    if (client.get("tier_b") or {}).get("enabled"):
        # 八门套票来自 palette，不需客户额外字段
        pass

    # ─── tier_c · edition_full 不能是占位符 ─────
    tier_c = client.get("tier_c") or {}
    if tier_c.get("enabled"):
        ef = tier_c.get("edition_full") or ""
        if not ef:
            report.warn("tier_c.enabled=true 但 edition_full 为空")

    # ─── tier_d · scarf/wallpaper 必须是合法 id ─
    tier_d = client.get("tier_d") or {}
    if tier_d.get("enabled"):
        for k in ("scarf_color", "wallpaper_color"):
            cid = tier_d.get(k)
            if not cid:
                report.err(f"tier_d.{k} 为空")
            elif cid not in valid_color_ids:
                report.err(f"tier_d.{k} = {cid!r} 不在 palette/colors.yaml")

    # ─── 占位符未替换 ───────────────────────────
    if _has_placeholder(client):
        report.err("data.yaml 中仍含 <…> 占位符 · 请替换为真实数据")

    # ─── 至少启用一档 ───────────────────────────
    if not any((client.get(t) or {}).get("enabled") for t in ("tier_a", "tier_b", "tier_c", "tier_d")):
        report.warn("ABCD 四档全部 disabled · PDF 将只有空封面")


# ============================================================
# IO
# ============================================================

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


# ============================================================
# 主流程
# ============================================================

def validate_only(client_id: str) -> int:
    print(f"[*] 校验 {client_id} ...")
    if not PALETTE_FILE.exists():
        print(f"[✗] palette/colors.yaml 不存在")
        return 1
    palette = load_palette()
    valid_ids = {c["id"] for c in (palette.get("colors") or []) if c.get("id")}
    client = load_client(client_id)
    report = ValidationReport()
    report.info(f"色谱共 {len(valid_ids)} 个合法 color id")
    validate_client(client, valid_ids, report)
    report.print()
    return 0 if report.ok else 1


def build(client_id: str):
    from jinja2 import Environment, FileSystemLoader, select_autoescape
    from weasyprint import HTML

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

    css_target = client_dir / "_styles.css"
    css_source = TEMPLATES_DIR / "_styles.css"
    css_target.write_text(css_source.read_text(encoding="utf-8"), encoding="utf-8")

    output_pdf = client_dir / "output.pdf"
    HTML(string=html, base_url=str(TEMPLATES_DIR)).write_pdf(str(output_pdf))
    size_kb = output_pdf.stat().st_size / 1024
    print(f"[+] PDF 已写入 {output_pdf} ({size_kb:.0f} KB)")

    print(f"[+] 包含档位: " + ", ".join([
        f"A({len(client.get('tier_a', {}).get('cards', []))}张)" if client.get("tier_a", {}).get("enabled") else "",
        "B(8门×双色=16张)" if client.get("tier_b", {}).get("enabled") else "",
        f"C(19色×2页)" if client.get("tier_c", {}).get("enabled") else "",
        "D(B端配件)" if client.get("tier_d", {}).get("enabled") else "",
    ]).replace(", , ", ", ").strip(", "))

    print("[✓] 完成")


def usage_and_exit(code=1):
    print("用法：")
    print("  python3 build.py <客户ID>             # 生成 PDF")
    print("  python3 build.py --validate <客户ID>  # 仅校验，不生成")
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
