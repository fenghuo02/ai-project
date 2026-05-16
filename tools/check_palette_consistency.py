#!/usr/bin/env python3
"""
校验业务计划书 §5.2.1 表格 ↔ swatch-builder/palette/colors.yaml 一致性
=====================================================================

19 色全集是项目级数据，会同时出现在两处：

1. swatch-builder/palette/colors.yaml ← 代码使用（mingshu + swatch 都从这里取）
2. docs/business-plan-chongqing-yixue-photo.md §5.2.1 ← 人工对照、
                                                       谈判、采购参考

本脚本双向 diff，确保两边一致。CI 会调用它，任何漂移都阻塞合并。

用法：
    python3 tools/check_palette_consistency.py

退出码：0 = 一致，1 = 有 diff
"""

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
PALETTE_FILE = ROOT / "swatch-builder" / "palette" / "colors.yaml"
DOC_FILE = ROOT / "docs" / "business-plan-chongqing-yixue-photo.md"

# 文档表格定位锚点：从 §5.2.1 标题到下一个 ### / #### 之间
DOC_SECTION_START = "#### 5.2.1"

# 单行表格的解析正则：
#   | 1 | **朱砂** | `#C0392B` | 火 / 红 | ...
ROW_RE = re.compile(
    r"^\|\s*(?P<num>\d+)\s*"                 # 序号
    r"\|\s*\*\*(?P<name>[^*]+?)\*\*\s*(?:⭐+)?\s*"  # **名称** + 可选 ⭐
    r"\|\s*`(?P<hex>#[0-9A-Fa-f]{6})`\s*"    # `#HEX`
    r"\|\s*(?P<family>[^|]+?)\s*"            # 五行属性 + 色相（如"火 / 红"）
    r"\|"                                     # 后面还有列，不再解析
)


# ============================================================
# 解析 yaml
# ============================================================

def load_yaml_colors() -> list[dict]:
    """返回形如 [{name_cn, hex, family, family_hue}, ...] 的列表。"""
    with open(PALETTE_FILE, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f) or {}
    out = []
    for c in data.get("colors", []):
        out.append({
            "name_cn": c.get("name_cn", ""),
            "hex": (c.get("hex") or "").upper(),
            "family": c.get("family", ""),
            "family_hue": c.get("family_hue", ""),
        })
    return out


# ============================================================
# 解析 markdown
# ============================================================

def load_doc_colors() -> list[dict]:
    """从业务计划书 §5.2.1 表格抽出 19 色。"""
    text = DOC_FILE.read_text(encoding="utf-8")

    # 找到 §5.2.1 标题往后的第一个 ### / #### 之间的内容
    start = text.find(DOC_SECTION_START)
    if start < 0:
        raise RuntimeError(f"在 {DOC_FILE} 找不到 '{DOC_SECTION_START}'")
    # 下一个 ### 或 #### 标题（不含本节自己）
    after_start = text[start + len(DOC_SECTION_START):]
    end_match = re.search(r"\n##+\s", after_start)
    section_body = after_start if end_match is None else after_start[:end_match.start()]

    out = []
    for line in section_body.splitlines():
        m = ROW_RE.match(line)
        if not m:
            continue
        family_full = m.group("family").strip()
        # "火 / 红淡" → ("火", "红淡")
        if " / " in family_full:
            family, family_hue = family_full.split(" / ", 1)
        else:
            family, family_hue = family_full, ""
        out.append({
            "num": int(m.group("num")),
            "name_cn": m.group("name").strip(),
            "hex": m.group("hex").upper(),
            "family": family.strip(),
            "family_hue": family_hue.strip(),
        })

    return out


# ============================================================
# 比对
# ============================================================

def diff(yaml_colors: list[dict], doc_colors: list[dict]) -> tuple[list[str], list[str]]:
    """返回 (errors, infos)。"""
    errors: list[str] = []
    infos: list[str] = []

    yaml_by_name = {c["name_cn"]: c for c in yaml_colors}
    doc_by_name = {c["name_cn"]: c for c in doc_colors}

    infos.append(f"yaml 共 {len(yaml_colors)} 色  ·  doc §5.2.1 表格共 {len(doc_colors)} 色")

    # ─── 数量 ────────────────────────────────────────
    if len(yaml_colors) != len(doc_colors):
        errors.append(
            f"色数不一致：yaml {len(yaml_colors)} 色 vs doc {len(doc_colors)} 色"
        )

    # ─── yaml 有但 doc 没有 ──────────────────────────
    for name, c in yaml_by_name.items():
        if name not in doc_by_name:
            errors.append(f"doc §5.2.1 缺少颜色：{name} ({c['hex']})")

    # ─── doc 有但 yaml 没有 ──────────────────────────
    for name, c in doc_by_name.items():
        if name not in yaml_by_name:
            errors.append(f"yaml 缺少颜色：{name} ({c['hex']})")

    # ─── 对名字相同的逐字段比对 ──────────────────────
    common = set(yaml_by_name) & set(doc_by_name)
    for name in sorted(common):
        y = yaml_by_name[name]
        d = doc_by_name[name]
        if y["hex"] != d["hex"]:
            errors.append(
                f"{name}: HEX 不一致 · yaml={y['hex']}  doc={d['hex']}"
            )
        if y["family"] != d["family"]:
            errors.append(
                f"{name}: 五行不一致 · yaml={y['family']!r}  doc={d['family']!r}"
            )
        if y["family_hue"] != d["family_hue"]:
            errors.append(
                f"{name}: 色相不一致 · yaml={y['family_hue']!r}  doc={d['family_hue']!r}"
            )

    return errors, infos


# ============================================================
# 入口
# ============================================================

def main() -> int:
    print("[*] 校验色谱一致性 ...")
    print(f"    yaml: {PALETTE_FILE.relative_to(ROOT)}")
    print(f"    doc:  {DOC_FILE.relative_to(ROOT)} §5.2.1")
    print()

    if not PALETTE_FILE.exists():
        print(f"[✗] 找不到 {PALETTE_FILE}")
        return 1
    if not DOC_FILE.exists():
        print(f"[✗] 找不到 {DOC_FILE}")
        return 1

    try:
        yaml_colors = load_yaml_colors()
    except Exception as e:
        print(f"[✗] 解析 yaml 失败：{e}")
        return 1

    try:
        doc_colors = load_doc_colors()
    except Exception as e:
        print(f"[✗] 解析 doc 表格失败：{e}")
        return 1

    errors, infos = diff(yaml_colors, doc_colors)

    for m in infos:
        print(f"  [i] {m}")
    for m in errors:
        print(f"  [✗] {m}")
    print()

    if errors:
        print(f"[✗] 不一致 · {len(errors)} 条 diff")
        print()
        print("修复方法：")
        print("  - 选 yaml 为权威 → 把 doc §5.2.1 表格改齐")
        print("  - 选 doc 为权威 → 把 swatch-builder/palette/colors.yaml 改齐")
        print("  - 改完后本地跑 `python3 tools/check_palette_consistency.py` 复验")
        return 1

    print(f"[✓] 19 色完全一致（名称 + HEX + 五行 + 色相）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
