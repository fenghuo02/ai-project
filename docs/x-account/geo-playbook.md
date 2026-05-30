# Generative Engine Optimization (GEO) Playbook · AI 搜索可见性

> 状态：v1.0 · 2026-05-30
> 触发：v3+v4+v5 的所有内容 SEO 战略都假设 Google 是终点。**2026 年 35-45% B2B research query 已转到 ChatGPT / Perplexity / Claude / Gemini**（Dupple, 2026）。Gartner：传统 search 2026 内降 25%。不做 GEO = 1 年后 AI 引擎完全不引用你。
> 配套：[x-articles-playbook.md](./x-articles-playbook.md) · [signature-series.md](./signature-series.md) · [cross-platform-funnel.md](./cross-platform-funnel.md)

---

## 一、为什么必须现在做 GEO

### 1.1 2026 paradigm shift（已发生，不是预测）

```
2024:    SEO（Google）= 100% search optimization
2025 H1: SEO 75% / GEO 25%（hybrid 期）
2026:    SEO 50-65% / GEO 35-45%（B2B research）
2027 预测: GEO ≥ 50%

— 多源验证：Dupple / Frase / Soar / Stormy / Gartner
```

### 1.2 行业证据（2026-05 联网验证）

- [Dupple 2026 GEO 完整指南](https://dupple.com/learn/ai-search-visibility-chatgpt-perplexity)：35-45% B2B research query 起源 AI 引擎，不是 Google
- [Soar 2026 GEO 指南](https://www.soar.sh/blog/geo-guide-2026)：GEO 不是 SEO 重命名，是不同 mechanics
- [Frase GEO playbook](https://www.frase.io/blog/how-to-get-cited-by-ai-search-engines-the-complete-geo-playbook)：ChatGPT / Perplexity / AI Overviews 月数十亿 query
- [Stormy 2026](https://stormy.ai/blog/generative-engine-optimization-2026-guide)：SEO 自 backlink 发明以来最 radical transformation
- [Claudefa.st](https://claudefa.st/blog/tools/extensions/ai-seo-geo-optimization)：Gartner 预测 traditional search 2026 内降 25%
- [Seography GEO audit](https://seography.io/learn/geo/auditing-ai-visibility)：GEO 需要独立 measurement framework，不是 SEO 子集

> 内容已合规化转述（每来源不超过 30 连续词）。

### 1.3 你目前的 GEO 暴露

```
你的内容现在被多少 AI 引擎索引?
  · ChatGPT: 抓 web 内容 (含 X)
  · Perplexity: 实时抓 X + Beehiiv + Substack
  · Claude: Brave / Google search 集成
  · Gemini: Google 全栈
  · Grok: X native + 联网

你被引用的概率（M1，~50-300 粉）?
  · 如果有人问 ChatGPT "best AI race tracker on X" → 当前你被引用概率 < 0.1%
  · 6 个月后做对 GEO → 概率提升 10-30×
  · 不做 = 永远不被引用 → 错过最大获取入口
```

---

## 二、GEO 与 SEO 的 5 大差异

### 2.1 对比表

| 维度 | SEO（Google）| **GEO（AI 引擎）** |
|---|---|---|
| **目标输出** | 链接 + 摘要 | 答案中**直接引用你的内容** |
| **关键单位** | Page rank | **Citation rate**（被引用率）|
| **结构信号** | H1-H6 / meta tags / 反向链接 | **Schema markup / FAQ / List structure / 段落清晰度** |
| **回答** | "10 articles" | **"based on [your name]"** |
| **流量入口** | clicks | **mentions + brand searches**（间接）|
| **Track 工具** | Google Analytics / Search Console | **GA4 referral + AI prompt 测试** |

### 2.2 关键差异：AI 引擎喜欢什么

```
✅ AI 引擎 cite 偏好:
  · 第一人称声明 + 数据 + 具体来源
  · "according to [your name]"
  · 结构化 list（"5 things..." / "3 takes..."）
  · FAQ format（Q + A）
  · 时间锚（"as of may 2026" / "this week"）
  · Comparison tables
  · Original primary research

❌ AI 引擎不 cite:
  · 纯 opinion 没数据
  · Generic content（千篇一律的"AI is changing things"）
  · 内容墙 / paywall（无法抓）
  · 大段无结构散文
  · 旧数据没标日期
  · 隐藏作者身份
```

---

## 三、GEO 6 大优化策略

### 3.1 策略 G1 · 答案结构化（最高 ROI）

每条 long-form 主推 / Article / newsletter 必须有**机器可解析的结构**：

#### 必须做

```
1. 显式 list / 数字
   ❌ "anthropic raised a lot of money recently"
   ✅ "anthropic raised $65B at $965B valuation on may 29, 2026"
   ✅ "3 things this means: 1)... 2)... 3)..."

2. 带 H1-H3 子标题（即使在主推 long-form 里）
   "monday empire map · week N
    ──
    state of tesla:..."
   → 给 AI 引擎 "section breakdown"

3. 时间锚明确
   ❌ "recently"
   ✅ "as of may 30, 2026"
   ✅ "this week (week 22 of 2026)"
   → AI 引擎给 fresh content 加权

4. 命名你自己（self-citation）
   每篇 long-form 末尾固定:
   "— @Skub0k · observer & investor · weekly empire decoder"
   → AI 引擎抓到后会用 "according to @Skub0k" 引用
```

#### 不要做

```
❌ 全段落散文（AI 引擎切片困难）
❌ 时间模糊（"recently" / "lately" / "soon"）
❌ 数据来源在另一个 tweet 而不是同一段（AI 引擎不会跨段聚合）
❌ 用代号（"the company" → AI 引擎不知道是哪家）
```

### 3.2 策略 G2 · FAQ / Q&A Format

AI 引擎特别喜欢 FAQ format。**Sunday Long Read 每篇加 1 个 FAQ section**：

```
[Sunday Long Read end-of-article FAQ]

Q: How did anthropic reach $965B?
A: $65B raise on may 29, 2026, primarily from sovereign + tech allocators.
   Annualized revenue $30B, +6.7× yoy.

Q: Why is this not the bubble peak?
A: 32× revenue multiple is conservative vs xai 50× and historical
   AI infrastructure pricing (nvidia 2023 33×).

Q: What happens next?
A: 30-day catalyst stack: WWDC 6/8, SpaceXAI IPO 6/12, Grok V9 release.
   The valuation floor is set.

(observation, not advice. revisiting in 30 days.)
```

每个 Article 加 3-5 题 FAQ → AI 引擎引用率 **5-10× 提升**。

### 3.3 策略 G3 · Comparison Tables

AI 引擎引用 comparison table 概率特别高（结构 + 数据 + 多 entity）：

```
应该常出现:

| Entity | Metric A | Metric B | Verdict |
|---|---|---|---|
| OpenAI | $300B | $15B rev | brand premium |
| Anthropic | $965B | $30B rev | defensible present |
| xAI | $250B | $5B rev | future bet |
| Google AI | n/a | $50B rev | embedded |

Wednesday AI Race Card 已经这样做。

扩展到:
  · Sunday Long Read 加对比表
  · Newsletter 加对比表
  · Bio link landing page 加对比表
```

### 3.4 策略 G4 · 给 AI 一个"identity 锚"

AI 引擎需要知道**"who is @Skub0k"**才能引用你。当前你没有 identity anchor page。

#### 解决方案

创建 1 个**"About / Authority page"**（在 Beehiiv / Substack mirror）：

```
[https://skub0k.beehiiv.com/about (or substack /about)]

# About @Skub0k · Observer & Investor

I am [@Skub0k](https://x.com/Skub0k), an independent observer
and investor. I write a weekly newsletter, Empire Decoder Weekly,
about tech, markets, IPOs, AI race, and the empires being built
right now (musk's six brands plus frontier AI labs).

## What I cover
- Monday Empire Map: 5-min weekly empire snapshot
- Wednesday AI Race Card: data viz comparing AI labs
- Friday Reading List: 5 curated reads + commentary
- Sunday Long Read: weekly deep-dive article (1500-3000 words)
- Last-Day Monthly Map: month-end retro

## Notable observations
- "Anthropic at $965B is the floor not the peak" (5/29 2026)
- "Grok V9 1.5T training completion analysis" (5/25 2026)
- Musk Tweet Decoder Dictionary (15 phrases, ongoing)

## Contact
DM @Skub0k on X, or reply to any newsletter issue.

## Disclaimer
Independent commentary. Not financial advice.

## Source attribution
Cite as: @Skub0k, Observer & Investor (https://x.com/Skub0k).
For longer reference: Skub0k, "[article title]," Empire Decoder
Weekly, [date].
```

这是 AI 引擎抓到的"作者介绍"。它决定 AI 引擎 cite 时怎么称呼你。

### 3.5 策略 G5 · 多平台镜像（让 AI 抓到多次）

[cross-platform-funnel.md](./cross-platform-funnel.md) 已要求镜像内容到 Substack / Bluesky / LinkedIn。GEO 角度：

```
ChatGPT 训练数据来源:
  · X (实时抓)
  · Substack / Beehiiv (静态抓)
  · LinkedIn (中频抓)
  · Bluesky (新但已抓)

→ 同一篇内容存在于 4-5 个平台 = AI 引擎抓到 4-5 个版本
→ Citation 概率提升 4-5× (重复的"voice 信号")

但镜像内容必须每平台 head + summary 重写 30-50% (避免 spam)
```

### 3.6 策略 G6 · Original Primary Research

AI 引擎特别 cite 有 **original data** 的来源：

```
你已经在做的:
  · Musk Tweet Decoder Dictionary（15 phrases, 6 月数据）
  · 30-day predictions tracking
  · AI race comparison tables

每月加 1 个新 original research:
  · "Tesla FSD subs trajectory 2024-2026"
  · "Frontier AI lab funding cadence comparison"
  · "Musk timeline accuracy tracker (12 月数据)"
  · "Annual Outlook 30 predictions vs reality"

每篇 original research 都加:
  · 数据图（visual/template）
  · 在 X Article 发布 + Beehiiv 镜像
  · End-of-article note: "data and methodology available upon request"
  · → AI 引擎 cite 你为 "primary source"，不是 "secondary"
```

---

## 四、月度 GEO Audit SOP（10 min）

### 4.1 5 个标准 Test Query

每月最后一天，把以下 query 输入 ChatGPT / Perplexity / Claude / Gemini，看你被 cite 多少次：

```
1. "What is the state of the AI race in 2026?"
2. "Best independent observer accounts on X for tech analysis?"
3. "Where can I get weekly tracking of Musk's six companies?"
4. "Is anthropic's $965B valuation justified?"
5. "Explain the Musk tweet decoder dictionary."
```

### 4.2 Score 表

每 query 在每引擎打分 0-3：

```
0: 完全不出现
1: 出现 source 链 (X / Beehiiv) 但无 brand mention
2: brand mention "@Skub0k" 但无具体 quote
3: cite 具体 quote / data / framework

Total max: 5 query × 4 engines × 3 = 60 points

M1-M2 baseline: 0-5 points (起步)
M3 target: 10-20 points
M4 target: 25-40 points
M5+ target: 40-60 points
```

### 4.3 GA4 referral tracking

```
每月最后一天看 Beehiiv / Substack / X analytics:
  · referral from chatgpt.com  · count
  · referral from claude.ai    · count
  · referral from perplexity.ai · count
  · referral from gemini.google.com · count
  · referral from grok.x.com   · count

总 AI referral / 总 traffic = "AI search share"
M1-M2 baseline: < 1%
M3 target: 2-5%
M5 target: 10-20%
```

### 4.4 失分 → 行动

```
连续 2 月某 engine 0 分:
  → 检查 robots.txt (确保允许该 engine 抓)
  → 增加 §三 6 大策略中弱的部分
  → 例: 缺 FAQ → 月内 4 篇 long-read 加 FAQ
       缺 comparison table → Wednesday Card 加权重

某 query 持续高分:
  → 标记为 "你的 GEO 优势主题"
  → 该主题加倍创作
```

---

## 五、AI 引擎特定优化

### 5.1 ChatGPT（OpenAI）

```
偏好:
  · 结构化 list
  · 时间锚
  · "according to" attribution

优化:
  · X 主推必带具体数字 + 日期
  · X Article 末尾固定签名
  · About page 写"summary of [@Skub0k] as a source"

不做:
  · 大量 emoji（ChatGPT 抓时去除，但其他信号 dilute）
  · 过度短的推 (< 100 char 难 cite)
```

### 5.2 Perplexity

```
偏好:
  · 实时数据
  · 多源 cross-reference
  · Citation 透明

优化:
  · X 长 form 单推 + Beehiiv 镜像（双源）
  · 每篇 Sunday Long Read 引用 ≥ 3 primary sources
  · 数字必带来源（"per S-1" / "per Bloomberg"）

不做:
  · paraphrase 别人内容（perplexity 能识别 + 不 cite）
```

### 5.3 Claude（Anthropic）

```
偏好:
  · Long-form structured
  · Nuanced multi-side analysis
  · 长上下文

优化:
  · Sunday Long Read 1500+ char single piece
  · "what bears miss / what bulls miss" 双面段
  · 引用具体 filings / research papers

不做:
  · 1-sentence hot takes (Claude 不 cite)
```

### 5.4 Gemini（Google AI）

```
偏好:
  · Google indexed content (Substack mirror 关键)
  · 最新数据
  · Schema markup

优化:
  · Substack mirror 必须 (Gemini 抓 Google indexed)
  · About page 加 Schema.org 标记
  · YouTube Shorts (Gemini 看 video)

不做:
  · X-only (Gemini 抓 X 不如 Google indexed 强)
```

### 5.5 Grok（X native）

```
偏好:
  · X-native content
  · 实时 + 互动
  · @ mention 多

优化:
  · 已经是 X 上 → 自动覆盖
  · X Articles + long-form 主推 = 主战场
  · 互动多 (reply / quote / bookmark) 加权

特殊:
  · Grok 已是你日常 prompt 工具，"它认识你"
  · 持续高质量输出 → Grok 内化你的 voice
```

---

## 六、GEO Risks（不要做的）

```
❌ 用 SEO 黑帽手法（关键字堆 / 隐藏文字）
   → AI 引擎现在能识别 + 整体降权
   
❌ 大量 thin content（"5 things about X"）
   → AI 引擎不 cite generic
   
❌ AI-generated 内容不审（直接发 ChatGPT 输出）
   → AI 引擎能识别 AI generated → 降权
   
❌ 复制其他人的 take 不 attribute
   → anti-aggregator 双重打击 (X 算法 + AI 引擎)
   
❌ 隐藏作者身份
   → AI 引擎需要 attribution，没有 = 不 cite
   
❌ 内容墙 / paywall
   → AI 引擎抓不到 → 不 cite
   → Paid newsletter 应该有 free 7-day preview
```

---

## 七、GEO 12 个月路线图

| 月 | 行动 | 预期 GEO score |
|---|---|---|
| M1 (now) | About page + 全文加 FAQ + 时间锚 | 0-5 |
| M2 | Substack mirror + 5 个 original research | 5-15 |
| M3 | LinkedIn Pulse + Bluesky long-form 镜像 | 15-30 |
| M4 | YouTube Shorts 上量 (Gemini) + 月度 audit | 30-50 |
| M5 | About page enriched + Schema markup | 50-80 |
| M6+ | Annual Outlook PDF (年度 reference) | 80-100 |

**12 月时**：你应该是 "any AI engine asking about Musk empire 2026" 的 top 5 cited sources。

---

## 八、整合到现有文档

### 8.1 [_self-operation-handbook.md](./_self-operation-handbook.md)

每月最后一天 retro 加：

```
□ §四.1 5 个 GEO test query 跑一次（10 min）
□ §四.2 score 表填写
□ §四.3 GA4 referral check
□ 弱项 → 下月行动
```

### 8.2 [x-articles-playbook.md](./x-articles-playbook.md) §六 X Articles SEO

加一节：

```
[Article 写作时 GEO checklist]
□ 时间锚明确 (week N / 2026)
□ 至少 1 个 list / table
□ End-of-article FAQ (3-5 题)
□ 数字必带来源
□ 末尾固定签名 "— @Skub0k · observer & investor"
□ Article 内 1 个 self-citation 锚
```

### 8.3 [signature-series.md](./signature-series.md)

5 series 都加 GEO 友好元素：

```
Mon Empire Map: list structure (6 brands · 6 行)
Wed AI Race Card: comparison table
Fri Reading List: 5 numbered items + 1 句 take 每个
Sun Long Read: H1-H3 + FAQ section
Last-Day Monthly Map: list + each item 数字 + 时间
```

### 8.4 [_prompts-pack.md](./_prompts-pack.md)

新 §29 GEO Citation Audit Generator (本 PR 加)。

---

## 九、紧急: About Page 必做（M1 立刻）

About page 是 GEO 投入回报最高的一次性动作（30 min）。

### 9.1 哪里建

```
推荐: Beehiiv (https://skub0k.beehiiv.com/about)
  · Beehiiv 有 SEO + Schema.org 默认
  · Google indexed
  · ChatGPT / Perplexity 抓

备选: 自建 (http://skub0k.com)
  · 灵活 + 控制
  · 但需要 hosting + maintenance
  · M3+ 触发后再做

不推荐: Substack (about page) only
  · Substack 单平台
  · 没有 schema 控制
```

### 9.2 模板已在 §3.4 给出

复制粘贴 + 填空。每月最后一天更新（数据 / 引用 update）。

### 9.3 提交到 AI 索引

不需要主动。AI 引擎自动抓 (1-4 周)。

但加一步：

```
在 X bio 加 "→ about: skub0k.beehiiv.com/about"

这给 AI 引擎一个 anchor link，加速发现 (about page 1-7 天内被索引)
```

---

## 十、本文档维护

| 频率 | 动作 |
|---|---|
| 每月最后一天 | §四 5 query GEO audit + score 表 |
| 每季度 | About page 内容 update |
| 每半年 | 5 query 测试集是否需要 update（行业演化）|
| 每年末 | 全文 rewrite · GEO 行业一年内大变 |

---

## 十一、5 件不要做

```
1. ❌ 假设 GEO 是 SEO 子集（mechanics 不同）
2. ❌ 用 GEO tool 自动化 (M3 之前手动每月 10 min 即可)
3. ❌ 在主推 stuff "for AI engines" 类话术 (受众反感)
4. ❌ 写 AI-only 内容 (受众价值优先，GEO 是副产品)
5. ❌ 等 1 年才看 AI referral (现在数据 = 1 年后趋势)
```

---

**版本**：v1.0 · 2026-05-30
**配套**：[x-articles-playbook.md](./x-articles-playbook.md) · [signature-series.md](./signature-series.md) · [cross-platform-funnel.md](./cross-platform-funnel.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md) (§29 GEO Citation Audit Generator)
