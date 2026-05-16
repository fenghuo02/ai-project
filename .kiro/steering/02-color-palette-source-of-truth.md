---
inclusion: always
---

# 19 色色谱单一真相来源

> **背景**：项目所有色彩相关产品（命书 PDF / 4 档色卡 PDF / 笔记封面 / 头像 / 钩子 PDF / 公众号视觉）的 HEX 必须**完全一致**。任何不一致都会让客户拿到的色卡 ≠ 命书 ≠ 朋友圈背景，直接砸品牌。

---

## 一、唯一数据源

```
swatch-builder/palette/colors.yaml
```

包含 19 色完整数据：
- `hex` / `pantone_match` / `name_cn` / `name_en`
- `family` / `family_hue`（五行 / 色相）
- `poem`（东方典故 1 句）
- `appears_in`（应景节气清单）
- `mineral_recipe`（矿物配方 + 单价）
- `star: true`（标记主理人本命色 / 辅色）

外加 2 个衍生表：
- `calendar`：12 月色卡日历（每月 → color_id + 应景 label）
- `ba_men`：八种生活场景（每场景 → 主色 + 辅色 color_id）

---

## 二、修改原则（重要）

### 🌟 只增不删

删除颜色会让旧客户拿到的实物色卡和文档对不上。即使某个色 6 个月没用过，也只能标 deprecated，不能删。

### 🌟 修改 HEX 时必须 version + 1

```yaml
version: "1.0"
date: "2026-04-01"
```

每次微调 HEX → version 升到 1.1 / 2.0，date 同步更新，并在 commit message 里记录。

### 🌟 任何客户都不应该只看到自己用神色

色卡都是 19 色全集（A 档 PDF / 实物色卡 / 命书附录·二）。
**主理人本命色 ⭐ 标记**只在 2 处：
- `colors.yaml` 里的 `star: true` 字段
- 命书 PDF / 钩子 PDF 的少数页面（如 P.09 暖驼 + P.13 米白）

不要在客户面文档里给客户的"个人本命色"标 ⭐ —— 那是 1V1 命主画像服务做的事。

---

## 三、谁在引用 colors.yaml

| 消费者 | 用法 | 自动同步？ |
|--------|------|----------|
| `swatch-builder/build.py` | 直接读 yaml 渲染 4 档色卡 PDF | ✅ 是 |
| `mingshu-builder` v2.1.2+ | 命书 PDF 附录·二 项目色谱全集 | ✅ 是 |
| `tools/check_palette_consistency.py` | CI 校验 yaml 与业务计划书 §5.2.1 一致 | ✅ 是（CI 强校验）|
| `docs/playbook/covers/*.html` × 5 | 笔记封面 / 头像 HTML 模板 | ⚠️ **手动同步**（HEX 写在 CSS 里）|
| `docs/playbook/covers-design.md` 等 md 文档 | 配色规范 + AI 提示词 | ⚠️ **手动同步**（HEX 嵌在 markdown 里）|
| `docs/playbook/lead-magnet-19-colors.md` | 钩子 PDF 大纲 | ⚠️ **手动同步** |
| 业务计划书 §5.2.1 | 19 色对照表（人工对照表）| ⚠️ **手动同步**（CI 校验）|

> ⚠️ 当前 5 个 HTML 模板和 md 文档**没有**接入 yaml 程序生成。如果改了 yaml 的 HEX，要同步改这些文件。**未来 PR E 计划**：在 swatch-builder 加 lead-magnet 模板，让 PDF 也从 yaml 程序生成。

---

## 四、引用约定

### Markdown 文件里引用 HEX

总是同时给中文名 + HEX：

```markdown
✅ 暖驼 #C9A66B
✅ 米白 `#FAF7F2`
✅ 朱砂（zhusha）#C0392B
```

不要只给中文色名（"穿暖驼色"），也不要只给 HEX（"穿 #C9A66B 色"）—— 前者 AI 不知道具体 RGB，后者读者看不懂。

### AI 绘图提示词里引用 HEX

直接给 HEX，**不要相信 AI 知道中文色名的 RGB**：

```
✅ "warm camel gold #C9A66B"
✅ "indigo black (#2C3E50)"
❌ "黛青色"            ← AI 不一定知道是 #2C3E50
❌ "warm camel"       ← AI 可能渲染成 #B08D6E
```

### 在 covers/ HTML 模板里加注释

```css
/* 色谱母本：swatch-builder/palette/colors.yaml
   米白 mibai     #FAF7F2  背景
   暖驼 nuantuo   #C9A66B  ★ 主理人本命色
   ...
   调整 HEX 时请同步 colors.yaml，version + 1。 */
```

---

## 五、封面 / 头像 / 钩子的 5+1 色子集

虽然 19 色都可以用，但**封面 / 头像 / 钩子 PDF / 公众号视觉**只用 5+1 色子集（避免视觉混乱）：

```
#FAF7F2  米白 mibai          ─ 背景主色 / 大留白
#F5E6C8  米麦 mimai          ─ 次底色 / 浅色块
#2C3E50  墨青 moqing         ─ 主标题 / 大字
#C9A66B  暖驼 nuantuo  ⭐    ─ 强调块 / 钩子色（主理人本命色）
#C0392B  朱砂 zhusha         ─ 数字 / 印章 / 重点
#D4AF37  烛光金 zhuguangjin  ─ 高定感点缀（限量 < 5%）
```

详见 [`docs/playbook/covers-design.md`](../../docs/playbook/covers-design.md) §一。

---

## 六、参考资料

- 母本：[`swatch-builder/palette/colors.yaml`](../../swatch-builder/palette/colors.yaml)
- 配色规范：[`docs/playbook/covers-design.md`](../../docs/playbook/covers-design.md)
- AI 提示词：[`docs/playbook/cover-ai-prompts.md`](../../docs/playbook/cover-ai-prompts.md)
- HTML 模板索引：[`docs/playbook/covers/README.md`](../../docs/playbook/covers/README.md)
- CI 校验脚本：[`tools/check_palette_consistency.py`](../../tools/check_palette_consistency.py)
