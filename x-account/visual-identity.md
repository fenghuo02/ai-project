# Visual Identity System · 视觉资产规范

> 状态：v1.0 · 2026-05-30
> 触发：launch 阶段视觉占位（"黑底白字 musk empire decoder"），已严重落后于内容质量。本文档建立完整视觉系统。
> 配套：[brand-v2-activation-checklist.md](./brand-v2-activation-checklist.md) · [empire-cheat-sheet/cheat-sheet.html](./empire-cheat-sheet/cheat-sheet.html)（已有视觉锚点）

---

## 一、设计原则

| # | 原则 | 含义 |
|---|---|---|
| 1 | **editorial, not promotional** | 看起来像 Bloomberg / The Atlantic，不像 SaaS 落地页 |
| 2 | **monochrome with intentional accents** | 黑白灰为主，红 / 琥珀 2 种 accent 用于"警示 / 重点"，不超过 3 色总数 |
| 3 | **typography over imagery** | 不用 stock photos，不用 AI 渲染人物，不用渐变背景。**字体本身就是视觉** |
| 4 | **screenshot-friendly** | 每张图都假设会被截图二次传播，所以必须有水印（@Skub0k）+ 高对比 + 16:9 或 4:3 比例 |
| 5 | **consistent with cheat-sheet** | 复用 cheat-sheet.html 的色板和字体系统，不另起炉灶 |
| 6 | **anti-AI feel** | 没有任何 AI 生图（dalle / midjourney 出来的人物 / 场景），不要"未来感渐变"。**人手做出来的克制感**才是身份信号 |

---

## 二、Design Tokens（所有视觉资产共用）

### 2.1 Color

| Token | Hex | 用法 |
|---|---|---|
| `--ink` | `#111111` | 主文字 / 强调 |
| `--paper` | `#ffffff` | 背景 |
| `--gray-50` | `#f8f8f8` | 极浅面板（structure note 区）|
| `--gray-100` | `#f3f3f3` | 浅灰面板（metric 强调）|
| `--gray-150` | `#f5f5f5` | parent-row 表行 |
| `--gray-200` | `#eeeeee` | 表格底边 |
| `--gray-300` | `#dddddd` | 卡片边框 |
| `--gray-500` | `#999999` | parent label 灰 |
| `--gray-600` | `#888888` | dt label 灰 |
| `--gray-700` | `#666666` | meta 文字 |
| `--accent-red` | `#cc0000` | decoder dictionary 短语 / watch list 警示 |
| `--accent-amber` | `#f0a000` | verdict box 边 |
| `--bull-green` | `#1f7a3a` | bull case 数字（新增，sparingly）|
| `--bear-red` | `#a01818` | bear case 数字（新增，sparingly）|

> ⚠️ **不要**新增第 4 种 accent。如果你想强调"新东西"，用 `--accent-amber` 加 verdict box。视觉一致性比"漂亮"重要。

### 2.2 Typography

```
sans:   -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI',
        'Helvetica Neue', sans-serif
mono:   'SF Mono', Menlo, Monaco, Consolas, monospace
```

**字号阶梯**（PDF / 截图均通用）：

| 层级 | 字号 | 字重 | 用途 |
|---|---|---|---|
| H1 / Wordmark | 18pt | 800 | header 主标题 |
| H2 / Card title | 11pt | 800 | brand 卡 / section 标题 |
| H3 / Section | 10pt | 800 | 中段标题 |
| body | 8.5pt | 400 | 正文 |
| caption | 7pt | 400 | 注释 / 时间戳 |
| label | 6pt | 600 | uppercase / 来源标 |
| footnote | 6.5pt | 400 italic | source / disclaimer |

**字距**：标题 `-0.3pt~-0.5pt`（紧）；label `+0.4pt~+0.5pt`（uppercase 用）。

### 2.3 Spacing

8pt 网格。不要 7pt / 9pt / 11pt 这种破网格的数字。

### 2.4 文件命名规范

```
visual/
├── header.html              · X header 模板（1500×500 渲染源）
├── avatar.svg               · 头像源（400×400）
├── template-quote-overlay.html       · E5-a · 媒体引用 + 观点叠加
├── template-comparison-table.html    · E5-b · 横向对比表
├── template-timeline.html            · E5-c · 时间线 / 日历
├── template-decoder-frame.html       · 招牌 thread / article 封面帧
└── README.md                · 渲染指南（见 §九）
```

---

## 三、X Header 模板（1500×500）

> 文件：[visual/header.html](./visual/header.html)
> 渲染：浏览器打开 → F12 → device mode → 1500×500 → 截图（或全页截屏）→ PNG 上传到 X

### 设计概念

```
┌──────────────────────────────────────────────────────────────────────────┐
│  observer & investor                                              week 22│
│                                                                          │
│  decoding tech, markets, and the empires being built around them.        │
│                                                                          │
│  musk · openai · anthropic · nvidia · apple · starlink · markets         │
│  ─────────────────────────────────────────────────────────────────       │
│                                                                          │
│  free monthly tracker pdf  →  link in bio                @Skub0k         │
└──────────────────────────────────────────────────────────────────────────┘
```

### 关键元素

- **左上**：定位词 `observer & investor`，small caps style，14pt，`--gray-700`
- **右上**：当前 week stamp `week 22 · 2026`，monospace，9pt，`--gray-500`
- **中央 H1**：tagline，36pt，800，`--ink`，行高 1.1
- **副线**：6 brands ticker，10pt，monospace，`--gray-700`，`·` 分隔，下方接一根 1px 黑线
- **左下**：CTA `free monthly tracker pdf  →  link in bio`，10pt，`--ink`
- **右下**：handle `@Skub0k`，monospace，10pt，`--gray-700`
- **背景**：纯白（`--paper`），不要任何纹理 / 渐变 / 图案

**不要**：

- ❌ Musk / 任何科技 CEO 的脸
- ❌ Tesla / SpaceX / OpenAI 等公司 logo（侵权 + 暗示代言）
- ❌ AI 渲染的"未来感"图
- ❌ 渐变 / 霓虹 / 玻璃质感

### 季度更新规则

每月最后一天周日跑 [_self-operation-handbook.md §三 Weekly SOP](./_self-operation-handbook.md) 的同时，把右上 `week 22` 改成当前周。**只改这一个数字**，其他不动 → 视觉一致性是品牌资产。

---

## 四、Avatar 头像（400×400）

> 文件：[visual/avatar.svg](./visual/avatar.svg)
> 用途：X profile pic / cheat-sheet header / 任何需要头像的地方

### 设计概念

一个 monogram **`S /`** —— `S` 来自 Skub，`/` 暗示"分隔 / 解码 / decoder"。整体在一个圆形描边里，黑白两色。

```
   ╭──────────╮
  │            │
  │   S  /     │
  │            │
   ╰──────────╯
```

### 规范

- 画布 400×400，圆形蒙版
- 描边 8pt，`--ink`
- 内部 `S/` 字符用 sans 800 字重，120pt，居中略偏上
- 没有任何颜色（纯黑 + 纯白）
- 没有阴影 / 渐变 / 3D

> ⚠️ 头像在小尺寸（X timeline 上仅 48px）时仍要清晰。`S/` 是仅有的两个字符，确保即使糊掉也能识别这是"S 加斜杠"。

### 备选（如果黑白圈不喜欢）

变体 B：去掉圆圈描边，直接 `S/` 占满方形。更现代，但识别度略差。SVG 文件里两版都给。

---

## 五、E5 数据图模板 a · Quote Overlay（媒体引用 + 观点叠加）

> 文件：[visual/template-quote-overlay.html](./visual/template-quote-overlay.html)
> 何时用：Bloomberg / Reuters / CNBC 报道大新闻时，截一段引用 + 加自己的解读
> 频率：每周 1-2 次（E5 主力）

### 设计

```
┌────────────────────────────────────────────────────────┐
│  bloomberg · 2026-05-29                                │
│                                                        │
│  "anthropic raised $65 billion at a                    │
│   $965 billion valuation, surpassing                   │
│   openai as the most valuable AI startup."             │
│                                                        │
│  ─────────────────────────────────────────────         │
│                                                        │
│  what nobody is highlighting:                          │
│  $30B annualized revenue / $965B valuation = 3.1×      │
│                                                        │
│  context: tesla 6%, nvidia 25%.                        │
│  the AI startup multiple just got                      │
│  cheaper than tesla.                                   │
│                                                        │
│                                          @Skub0k       │
└────────────────────────────────────────────────────────┘
```

### 关键约束

- 比例 16:9（1600×900）→ X 主推图最佳显示
- 引用部分用 `--gray-100` 浅灰背景 + 左 3pt 黑边，serif italic 区分（用 Georgia 或 Charter）
- 我的解读用 sans，跟引用形成"质感对比"（衬线 vs 无衬线）
- 数字用 `--accent-red` 强调（仅那个关键比例）
- 右下 `@Skub0k` 水印不可省

---

## 六、E5 数据图模板 b · Comparison Table（横向对比表）

> 文件：[visual/template-comparison-table.html](./visual/template-comparison-table.html)
> 何时用：5 大 AI lab / 5 大 IPO / 5 大 brand 对比时
> 频率：每周 1-2 次

### 设计

```
AI race · valuation vs revenue · may 2026
─────────────────────────────────────────────────────
  lab          valuation    revenue      multiple
─────────────────────────────────────────────────────
  openai       $300B        ~$15B          20×
  anthropic    $965B         $30B          32×
  xai          $250B         ~$5B          50×
  google AI    n/a          ~$50B          n/a
─────────────────────────────────────────────────────

  verdict: xai = aggressive future bet
           anthropic = defensible present
           openai = brand premium

                                              @Skub0k
```

### 关键约束

- 比例 4:3（1200×900）→ X 截图后保留较多 vertical density
- 表头用 `--ink` 黑底白字（uppercase 6.5pt）
- 表格 row 高度 28pt（密度感强但不挤）
- 关键比较列（如 multiple）右对齐 + monospace
- verdict 区用 `--accent-amber` 左边线 + 浅黄背景（`#fff8e1`）
- 始终一个 verdict，不要 3 个，不要"it depends"

---

## 七、E5 数据图模板 c · Timeline / Calendar（时间线）

> 文件：[visual/template-timeline.html](./visual/template-timeline.html)
> 何时用：30 天 / 60 天 / 90 天事件密集期 → 把分散的新闻串成"phase transition"叙事
> 频率：每月 1-2 次（重要节点）

### 设计

```
30 days that reshape the AI race · may → june 2026
─────────────────────────────────────────────────────

5/20  ●  nvidia $82B q1 (anchor reality)
5/22  ●  starship v3 first flight
5/25  ●  grok V9 1.5T training done
5/27  ●  optimus factory groundbreaking
5/29  ●  anthropic $965B + claude 4.8 + mythos
6/8   ○  wwdc apple AI comeback           ← upcoming
6/12  ○  spacexai ipo                     ← upcoming

─────────────────────────────────────────────────────

read these as a single phase transition,
not a series of unrelated headlines.

                                              @Skub0k
```

### 关键约束

- 比例 9:16 vertical（1080×1920）或 4:5（1080×1350）→ 大量 vertical scroll friendly
- ● 实心 = 已发生，○ 空心 = 即将发生（视觉差异 = 时间感）
- 日期 monospace 6 字符宽固定
- 事件描述 sans 9pt
- 标注（"← upcoming"）用 `--accent-red` 7pt
- 底部 takeaway 段斜体 italic（这是这种内容的 USP，不要省）

---

## 八、Decoder Frame · Thread / Article 招牌封面帧

> 文件：[visual/template-decoder-frame.html](./visual/template-decoder-frame.html)
> 何时用：Monday Empire Map / Sunday Long Read 的 thread 第 1 推 / Article 头图
> 频率：每周 2 次（周一 + 周日）

### 设计

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│   monday empire map                                    │
│   ──────────────────                                   │
│                                                        │
│   week 22 · 2026-06-01                                 │
│                                                        │
│                                                        │
│   how each musk company stands.                        │
│   what this means for the AI race.                     │
│   what's worth watching next 7 days.                   │
│                                                        │
│                                                        │
│   ──────────────────────────────────────────────       │
│   observer & investor      @Skub0k                     │
└────────────────────────────────────────────────────────┘
```

### 关键约束

- 比例 16:9（1600×900）
- 左上 series 名（"monday empire map" / "sunday long read" / "wednesday AI race card"）使用 18pt sans 800
- series 名下面一根细线（1px `--ink`，宽 80pt）做"标识章"感
- 中央放 1-3 行钩子，10-14pt，行高 1.5
- 底部双线 + 副标"observer & investor" + handle
- **每个 series 颜色保持一致**：所有 series 都用同一个白底黑字模板，**只换 series 名**。一致性 > 多变性

> ⚠️ Article 头图也用这个模板，只是文字内容换成 article 标题。这样所有长内容封面"看起来都是同一个账号的"。这种**视觉系列识别**是大 V 标准。

---

## 九、渲染流程（HTML → PNG）

所有 `.html` 模板用 cheat-sheet 一样的方法：

### 9.1 浏览器手动方法（推荐，0 工具门槛）

1. 用 Chrome 打开 HTML 文件（双击）
2. F12 打开 DevTools
3. 切换 device toolbar（Ctrl+Shift+M / Cmd+Shift+M）
4. 输入指定尺寸（如 1500×500 for header）
5. DevTools 三点菜单 → `Capture full size screenshot` → PNG 自动下载
6. 文件大小通常 30-100KB，X 上传无压缩问题

### 9.2 命令行方法（可选，用于自动化）

```bash
# 需要先 npm install -g playwright
playwright screenshot --viewport-size 1500,500 \
  visual/header.html visual/output/header-week22.png
```

> 不要把 playwright 装进仓库 dependencies，这是一次性工具。每月跑一次的事，手动浏览器更省心。

### 9.3 文件命名导出规范

```
visual/output/                     ← .gitignore 它（生成产物）
├── header-week22.png
├── avatar.png
├── quote-overlay-2026-06-01-anthropic.png
├── comparison-2026-06-03-AI-race.png
├── timeline-2026-06-15-30days.png
└── decoder-monday-week22.png
```

`output/` 加进 `.gitignore`，但 `.html` 模板源文件不忽略。

---

## 十、与 cheat-sheet.html 的关系

cheat-sheet 是这个视觉系统的 **fountainhead**（之前已经存在并被验证）。所以：

- 所有 token 跟 cheat-sheet **完全一致**（不创新）
- 所有新模板从 cheat-sheet `<style>` 块**复用**而不是重写
- 任何冲突，**cheat-sheet 优先**（它是 lead magnet，受众真实接触最多）

但 cheat-sheet 的 layout 是 letter portrait（用于打印 PDF），新模板按 X 屏幕尺寸做（横屏 / 竖屏 / 方形），**只共享 token 不共享 layout**。

---

## 十一、Alt-text 规范（X SEO + 无障碍）

每张发到 X 的图都填 alt-text。X 算法 2026 年开始把 alt-text 也喂给搜索 / 推荐池。

### 模板

```
[图类型]: [核心 takeaway 一句话]. [关键数字 / 时间]. by @Skub0k.
```

### 例

```
quote-overlay:    "anthropic raised $65B at $965B valuation. context: tesla 6%, nvidia 25%, anthropic now 32x revenue. 2026-05-29. by @Skub0k."

comparison-table: "AI race may 2026: openai 20x revenue, anthropic 32x, xai 50x. xai is the most aggressive future bet. by @Skub0k."

timeline:         "30 days reshaping the AI race may-jun 2026: nvidia $82B → starship v3 → grok V9 → optimus → anthropic $965B → wwdc → spacexai ipo. by @Skub0k."

decoder-frame:    "monday empire map week 22. how each musk company stands. by @Skub0k."
```

> 关键词必须出现在前 100 字符（X 搜索抓取片段）：公司名 / 数字 / 日期。

---

## 十二、品牌警察 · 不要做的事

- ❌ 用未授权的公司 logo（Tesla / SpaceX / OpenAI 等）
- ❌ 用 Musk / 任何 CEO 的脸（生成的 / 真实的都不行）
- ❌ AI 渲染的"赛博朋克未来感"插画
- ❌ 渐变背景 / 3D / 玻璃质感
- ❌ 超过 3 种颜色（黑 / 白 / 一种 accent，最多再加一种）
- ❌ 用第 5 种 accent 颜色（"再加一个绿色"会瓦解整套系统）
- ❌ Comic Sans / Papyrus / 任何"display"字体
- ❌ 弯曲 / 旋转的文字
- ❌ 文字下面阴影 / 描边
- ❌ Emoji 当装饰（emoji 仅在 caption 极少使用，每张图最多 1 个）

---

## 十三、维护节奏

| 频率 | 动作 |
|---|---|
| 每周日 22:30 | 更新 header 右上 `week N` 数字，重新渲染 PNG（30 秒）|
| 每月最后一天 | review 4 个 E5 模板的实战使用情况，删 / 改 / 新增（最多 30 分钟）|
| 每季度 | 审视 token 是否需要扩展（避免凭空加色，必须有 3 个连续月用例支撑）|
| 大事件触发 | live event thread 前 1 天准备 timeline 模板填充 |

---

## 十四、第一波部署清单（PR merge 后 24h 内做完）

- [ ] 浏览器渲染 [visual/header.html](./visual/header.html) → 上传到 X header
- [ ] 浏览器导出 [visual/avatar.svg](./visual/avatar.svg) 为 400×400 PNG → 上传到 X avatar（覆盖临时素材）
- [ ] 用 [visual/template-decoder-frame.html](./visual/template-decoder-frame.html) 生成 Week 22 Monday Map 封面 PNG
- [ ] 把 `visual/output/` 加进 `.gitignore`
- [ ] 在 [_self-operation-handbook.md](./_self-operation-handbook.md) §八工具栈中标注：所有视觉资产维护点

---

**版本**：v1.0 · 2026-05-30
**配套**：[brand-v2-activation-checklist.md](./brand-v2-activation-checklist.md) · [signature-series.md](./signature-series.md) · [empire-cheat-sheet/cheat-sheet.html](./empire-cheat-sheet/cheat-sheet.html)
