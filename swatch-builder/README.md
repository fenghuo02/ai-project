# swatch-builder · 本命色卡 PDF 生成器

> 配套业务计划书 §5.2「本命色卡产品体系」的工具——
> 一键生成 4 档色卡（A 钩子 / B 八门 / C 高定 / D B端）的 PDF + HTML 预览。

## 📐 这是什么

业务计划书 v1.3 §5.2 设计了一套 4 档色卡产品体系：

| 档 | 用途 | 售价 | 物料 |
|----|------|------|------|
| **A** | ¥9.9 钩子 | 棉感艺术纸 + 烫金 | 单张本命色卡 |
| **B** | ¥299 拳头 | 棉麻特种纸 + 朱砂蜡封 | 八门 16 张 |
| **C** ⭐ | ¥2,999 高定 | 真丝绢本 + 矿物颜料 + 楠木匣 | 19 色全色 |
| **D** ⭐⭐ | ¥6,800+ B 端 | C + 缂丝外锦囊 + 同色丝巾 | 19 色 + 配件 |

这个工具让你：
1. **设计阶段**：用 PDF 给客户/老师/供应商看视觉效果
2. **打样阶段**：印这份 PDF 直接给印刷厂当排版稿
3. **快速复用**：每个新客户改一份 `data.yaml` 就能出新 PDF

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pip install jinja2 pyyaml weasyprint
```

> macOS: `brew install pango cairo` （WeasyPrint 的系统依赖）
> Linux: `apt install libpango-1.0-0 libpangoft2-1.0-0`
> 中文字体：建议安装 [Noto Serif CJK SC](https://github.com/notofonts/noto-cjk)

### 2. 跑 demo

```bash
cd swatch-builder
python3 build.py 主理人-19880808
```

输出：
- `clients/主理人-19880808/output.pdf` （PDF 完整版）
- `clients/主理人-19880808/output.html` （浏览器预览）

### 3. 新增客户

```bash
cp -r clients/_template clients/客户ID
$EDITOR clients/客户ID/data.yaml          # 改本命色组合
python3 build.py --validate 客户ID        # 验证字段齐不齐 + ID 是否在 19 色里
python3 build.py 客户ID                   # 通过后再正式生成
```

### 4. 校验模式

```bash
python3 build.py --validate <客户ID>
```

校验脚本会检查：

- 顶层 `meta / signature / tier_a..d` 字段齐不齐
- `signature.primary/secondary/forbidden` 中的 ID 是否都在 `palette/colors.yaml` 19 色里
- `tier_a.cards`、`tier_d.scarf_color/wallpaper_color` 同样校验合法 ID
- `data.yaml` 中没有未替换的 `<…>` 占位符
- 至少启用一档（A/B/C/D）

通过返回 `0`，失败返回 `1`，可接 CI。

---

## 📂 目录结构

```
swatch-builder/
├── README.md
├── build.py                          # 主入口
├── palette/
│   └── colors.yaml                   # ⭐ 19 色全集 · 单一真相来源
├── templates/
│   ├── swatches.html.j2              # 4 档色卡 Jinja2 模板
│   └── _styles.css                   # 中式审美 + 矿物质感样式
└── clients/
    ├── _template/
    │   └── data.yaml                 # 客户配置模板
    └── 主理人-19880808/              # Demo 客户
        ├── data.yaml
        ├── output.html
        └── output.pdf
```

---

## 🎨 19 色全集（详见 `palette/colors.yaml`）

```
朱砂 #C0392B   粉霞 #F0A6A6   朱橘 #E67E22
赭石 #A0522D   暮褐 #6B4423   暖驼 #C9A66B ⭐
烛光金 #D4AF37 ⭐  菊黄 #F4D03F   米麦 #F5E6C8
米白 #FAF7F2   月光银 #E8E6E1
苍翠 #2D5F3F   深竹 #4A6B4F   嫩绿 #8FB573
青翠 #6FA88A   墨青 #2C3E50   雾蓝 #5D7B91
冷银 #A8B5C7   紫雾 #8B6F8E
```

⭐ = 主理人 1988-08-08 命主的本命色组合（暖驼 + 烛光金）

每个颜色都包含：
- 中英文名 + HEX + Pantone 近似色
- 五行属性 + 色相归属
- 诗化定义（出现在背面）
- 出现场景（哪些客户/八门/节日用过）
- **矿物颜料配方表**（C 档实物制作用）

---

## 🧬 客户配置（`data.yaml`）

```yaml
meta:
  client_id: "客户ID"
  client_name: "客户姓名"
  client_seal_char: "X"            # 印章上的一个字
  edition: "No.001 / 2026"

signature:
  primary: ["nuantuo", "zhuguangjin"]    # 主色（来自 colors.yaml 的 id）
  secondary: ["mibai"]
  forbidden: ["lengyin"]

tier_a:
  enabled: true
  cards: ["nuantuo"]               # 默认输出本命主色

tier_b:
  enabled: true                    # 八门所有客户都用全套

tier_c:
  enabled: true
  edition_full: "No.001 / 2026 · 暖驼之书"

tier_d:
  enabled: false                   # 仅 B 端启用
  scarf_color: "nuantuo"
  wallpaper_color: "nuantuo"
```

---

## 🔄 与 mingshu-builder 的关系

| 工具 | 输出 | 用途 |
|------|------|------|
| **mingshu-builder** | 38-80 页《X 之书》PDF 命书 | 客户的"故事书" |
| **swatch-builder** | 4 档色卡 PDF | 客户的"色谱" |

两者**共用 19 色谱**：
- `swatch-builder/palette/colors.yaml` 是单一真相来源
- `mingshu-builder` 的 §5.2.1 色谱页（v2.1.2 起）也引用这份 YAML
- 修改颜色只需改一个文件，所有产品同步更新

---

## 📊 PDF 页数预估

每档启用时新增的页数：

| 档 | 页数 |
|----|------|
| 总封面 + 命主本命色谱 | 2 页 |
| Tier A | 1 + N 页（N = `cards` 数组长度，默认 1）|
| Tier B | 1 + 2 页（章节扉页 + 8 门 × 2 页 4 张/页）|
| Tier C | 1 + 1 + 19 页（章节扉页 + 高定档封面 + 19 色每色 1 页）|
| Tier D | 2 页（章节扉页 + 配件清单）|
| 工艺溯源（终页） | 1 页 |

主理人 Demo 启用 ABC：**约 28 页 PDF**。

---

## ⚙️ 排版细节

### 字体规范
- 中文：Noto Serif CJK SC / 思源宋体
- 英文：Garamond
- 印章：朱砂红 #C0392B + 米白底 #F5E6C8

### 矿物质感 CSS
- `.color-block`：随机散布的颗粒高光（模拟矿物粉刷涂）
- `.color-block.metallic-gold`：24K 金粉的金属光泽
- `.color-block.metallic-silver`：银箔的冷白光泽
- `.foil-border`：烫金描边（A/B 档边框）

### 实物对应规格
| 档 | PDF 内卡片尺寸 | 实物尺寸 |
|----|--------------|---------|
| A | 100×70mm（1:1） | 100×70mm 棉感卡 |
| B | A6 / 4 张一页 | 105×148mm A6 |
| C | 90×130mm（1:1） | 90×130mm 真丝绢本 |
| D | A4 配件展示 | 整套礼匣 |

---

## 🔧 开发者注释

### 添加新颜色
1. 编辑 `palette/colors.yaml`，按现有结构追加一条
2. 同步更新 `mingshu-builder/templates/mingshu.html.j2` 的 12 月日历（如有改动）
3. 同步更新业务计划书 §5.2.1 的 19 色总表

### 修改样式
1. 编辑 `templates/_styles.css`
2. 重跑 `python3 build.py 主理人-19880808` 看效果

### 字体回退
模板 fallback 顺序：
```
"Noto Serif CJK SC" > "AR PL UMing CN" > "Songti SC" > serif
```

如果 PDF 渲染出方框，就是缺中文字体——装 Noto CJK 即可。

---

## 📋 已知局限

1. **预览图 ≠ 实物**：PDF 用 CSS 模拟矿物质感，但实物是真矿物颜料手刷——
   印刷厂排版稿可作参考，**不能直接代替实物打样**
2. **Pantone 色号是近似匹配**：实际生产时让印刷厂按 HEX 调专色（避免 CMYK 拼色）
3. **C 档"手写体烫金"**：模板用 CSS 渐变字模拟，实物需请书法家写过样字 + 激光复刻

---

## 🚦 启动节奏（来自业务计划书 §5.2.8）

| 阶段 | 任务 |
|------|------|
| M1 第 4 周 | 用本工具出 A 档样稿 → 重庆本地打 50 张样卡 |
| M2 第 1 周 | 量产 A 档 100 张 |
| M2 第 3 周 | 用本工具出 B 档样稿 → 长三角棉麻纸采购 |
| M3 第 1 周 | 量产 B 档 50 套 |
| **M3 第 2 周** | ⚠️ **必须**下单 C 档矿物颜料（启动 ¥3,600） |
| M3 第 4 周 | C 档首套出厂 |
| **M5 第 1 周** | ⚠️ **必须**下单苏州缂丝（45 天交期） |
| M6 第 4 周 | D 档首套交付 B 端 |

---

**版本**：v1.0 · 2026 春
**配套**：业务计划书 v1.3 §5.2
