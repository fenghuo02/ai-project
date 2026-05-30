# Signature Series · 5 个命名周固定栏目

> 状态：v1.0 · 2026-05-30
> 触发：账号缺乏"周期性命名栏目"。大 V 都跑 3-5 个并行的周固定栏目，让回访读者形成期待。本文档定义 5 个栏目 + 协同节奏。
> 配套：[brand-v2-activation-checklist.md](./brand-v2-activation-checklist.md) · [visual-identity.md](./visual-identity.md) · [x-articles-playbook.md](./x-articles-playbook.md)

---

## 一、为什么需要"命名栏目"

### 现状问题

```
现在的内容：
  · daily 1 main + 5 humor + 1 expansion
  · weekly newsletter（无名）
  · 月度退款（无名）

问题：受众不知道"周三应该等什么"。算法不知道你有"系列"。
        没有可期待感 → 没有 bookmark → 没有 search demand。
```

### 大 V 的做法

| 创作者 | 命名栏目 | 何时 |
|---|---|---|
| Naval | "Almanack" thread | 不定但有名字 |
| Sahil Bloom | "Saturday Sahil" newsletter | 每周六 |
| Packy McCormick | "Not Boring" weekly essay | 每周一 |
| Lenny | "Lenny's Newsletter" weekly | 每周二 / 周日 |
| Trung Phan | "Tube of Trung" weekly | 每周日 |

**共同点**：

1. **栏目名 + 时间槽固定**（受众设了 reminder）
2. **格式模板可识别**（视觉一致 + 开头句式可复制）
3. **每期之间累计**（Issue 14 比 Issue 1 信号强）
4. **栏目本身可被搜索 / 引用**（"reading list 14 from @Skub0k"）

### 我们要做的 5 个

```
周一 07:30   Monday Empire Map         · empire 9-tweet thread
周三 11:30   Wednesday AI Race Card    · 跨 lab 对比数据图
周五 19:30   Friday Reading List       · 本周 5 篇值得读的
周日 21:00   Sunday Long Read          · X Article 深度长文
月末       Last-Day Monthly Map      · 月度大盘 + 下月看点
```

每个栏目都用 [visual-identity.md](./visual-identity.md) `template-decoder-frame.html` 的同一封面模板，**只换 series 名**。这是大 V 视觉一致性的核心。

---

## 二、Monday Empire Map · 周一帝国大图

### Pitch

> "周一早上看完它，我就知道这周 Musk 帝国发生了什么。"

每周一早 07:30 北京（= 美东周日晚 19:30 黄金时段）发一条 9-推 thread。Empire 主题，承接 v1 时期的 Decoder Thread #01 形态，**改名 + 视觉一致化**。

### 为什么放周一

- 美东周日晚 19:30 = 整周第一个高互动窗口（X 算法本周首推会被推荐池放大）
- 受众心智："周一早上看 Empire Map" = 设置 ritual
- 周日是新闻空档 → 我把过去 7 天聚合成一条 thread = 高密度信息

### 模板结构（9 推）

```
1/  钩子 + 视觉封面图（template-decoder-frame.html · "monday empire map · week N"）
    where each musk company stands as of week N / 2026.
    + observer take in 1 sentence.
    + decoded weekly. follow if you want this monday morning instead of reading 200 elon tweets a day.

2/  Tesla         · Q 数据 + 1 关键变化 + observer 视角
3/  SpaceX        · 同上
4/  Starlink      · 同上
5/  xAI           · 同上
6/  Neuralink     · 同上
7/  Boring Co     · 同上（最短，1-2 行即可）
8/  AI race state · 5-horse 当前快照（这是 Empire Map 与 v1 Decoder Thread 不同的地方：
                    把 AI race 拉回来作为帝国背景）
9/  下 7 天看点 + 钩子（newsletter / cheat sheet pdf / next week's release）
```

### 与 v1 Decoder Thread 的差异

| 维度 | v1 Decoder Thread | v2 Monday Empire Map |
|---|---|---|
| 名称 | "Decoder Thread #01 / #02..." | "Monday Empire Map · Week N" |
| 频率 | 每周一发，无固定时段 | 每周一 07:30 BJ 固定 |
| 封面 | 无 | template-decoder-frame.html |
| AI race | 单独段落 | 第 8 推固定槽 |
| 与 newsletter 关系 | 暧昧（newsletter 跟 thread 重叠 60%）| **明确分工**：thread = 5min 速读 / newsletter = 30min 深度 / Article = 50min 原创视角 |

### 复合内容循环

```
周日 21:00   写本周 Newsletter（thread 是 newsletter 的精华提炼）
周一 07:30   发 Monday Empire Map thread + 同时 send newsletter
周一 09:30   thread reply 1（喂算法的 text TL;DR）
周一 11:30   thread reply 2（CTA · 链接 newsletter / pdf）
周二-周日    日常运营，但 thread 数据持续累积
```

每条 Monday Empire Map 在 7 天后归档到 `decoder-threads/` 目录，形成历史 corpus（M3 时整理成"过去 12 周帝国回顾" $49 PDF）。

### 命名约定

文件名：`decoder-threads/MM-week-N-empire-map.md`（其中 MM = 期号，N = 当年 ISO week 号）。
例：`decoder-threads/02-week-23-empire-map.md`、`03-week-24-empire-map.md`。

### Anti-AI tone 自检（已嵌入 thread 规则）

- [ ] 全小写开头
- [ ] 9 推每条都有具体数字
- [ ] Tweet 1 钩子不是"absolutely groundbreaking week"
- [ ] AI race 段不超过 280 字符
- [ ] 钩子结尾不是问号（"thoughts?"）

---

## 三、Wednesday AI Race Card · 周三 AI race 速查

### Pitch

> "30 秒看完今天的 AI race 谁领先在哪个维度。"

每周三 11:30 北京（美东周二 23:30）发一张 [template-comparison-table.html](./visual/template-comparison-table.html) 对比表 + 1 段文字解读。**是数据图主导，文字辅助**。

### 为什么放周三

- 周三是周中"学习需求高峰"（受众已经看完周一 thread 在等下一波）
- 11:30 BJ = 美西凌晨 + 美东深夜 = 全球科技圈睡前刷推时段
- 数据图是 X 算法重权（图片推权重 +30-50%）

### 模板结构

**视觉**：[template-comparison-table.html](./visual/template-comparison-table.html) 1200×900 PNG

**文案（推文 ≤ 280 字符）**：

```
wednesday AI race card · week 23.

[一句话 take，必须有"输赢点"，例：
 anthropic is the cheapest AI multiple right now. xai is the most expensive.]

verdict in image. data sources in reply. ↓
```

**Reply 1（喂算法 + 关键文字）**：

```
quick text version:
- openai $300B / $15B rev = 20×
- anthropic $965B / $30B rev = 32×
- xai $250B / $5B rev = 50×
- google AI n/a / $50B rev (embedded)

caveat: revenue numbers are annualized estimates from filings + reports.
not financial advice. just observation.
```

**Reply 2（钩子）**：

```
fri reading list will include 2-3 sources behind these numbers.
sun long read drops next anthropic / xai head-to-head.
```

### 内容池（每周三选 1 个角度）

| 周次 | 主题候选 | 数据维度 |
|---|---|---|
| 偶数周 | AI lab valuation × revenue | 估值 / 收入 / 倍数 |
| 奇数周 | AI lab compute × output | GPU 数 / 模型参数 / benchmark |
| 月初 | Frontier model 能力对比 | 5 task benchmark |
| 月中 | AI funding / M&A 动态 | 本月融资 / 估值变化 |
| 财报周 | Big Tech AI 收入披露 | NVDA / MSFT / GOOG / META |
| IPO 周 | AI 公司 IPO 进展 | 8 个候选 IPO |

### 数据 disclaimer 必须出现

每张图 + 每条推都加"sources in reply / not financial advice"。这是 observer 品牌的底线。**不省略。**

---

## 四、Friday Reading List · 周五推荐阅读

### Pitch

> "本周我读到的 5 篇最值得花时间的东西。"

每周五 19:30 北京（美东周五 07:30 上班路上）发一条 6-7 推 thread：

- 1 推钩子
- 5 推每条 1 篇推荐（来源 + 1 句话 take + 链接）
- 1 推 CTA

**这是大 V 最高 ROI 栏目**：

1. 不需要原创内容（curation = 高产出 / 低成本）
2. 信任建立最快（推荐别人的好东西 = 显得不自私）
3. Newsletter / Substack / Beehiiv 有"newsletter recommends"机制 → friday list 直接对接
4. 推荐其他大 V 内容 → 自然形成 cross-promo 入口

### 模板结构

**Tweet 1（钩子）**：

```
friday reading list · week N.

5 things i read this week that changed how i'm thinking about
[当周主题，例：anthropic at $965B / wwdc framing / starship v3 implications].

each one ↓
```

**Tweet 2-6（每篇 1 推）**：

```
[N/5] [来源 + 作者，handle 形式]

[一句话总结 / 我的 take，最多 2 句]

[链接（缩短版 URL）]

why it matters: [1 句话]
```

**例**：

```
2/5 @stratechery · ben thompson

apple's WWDC framing is "AI is just another input" rather than 
"AI is the operating system." that's a fundamentally different bet 
than google or microsoft.

stratechery.com/2026/wwdc-...

why it matters: this is the missing context for any apple AI 
reaction post-keynote.
```

**Tweet 7（CTA）**：

```
that's the list.
spaces tonight 21:00 BJ to discuss → [link]
sun long read picks one of these to go deeper on.

bookmark thread for the weekend. forward to anyone you read with.
```

### 内容来源（每周固定 6 个池子选 5 个）

| 类别 | 池子 | 频率 |
|---|---|---|
| Tech analysis | @stratechery / @benedictevans / @azeem | 必有 1 |
| AI lab content | OpenAI blog / Anthropic blog / DeepMind / xAI | 必有 1 |
| Markets | Bloomberg / Reuters / Matt Levine / @ChrisOmori | 必有 1（observer 标识）|
| Long form | Not Boring / @Lenny / @paul_skallas | 1 |
| Filings / data | SEC filings 直接链 / 10-Q 摘抄 | 偶尔 1 |
| 反常识 / 小众 | @vgr / @nayafia / @balajis | 偶尔 1 |

**硬规则**：

- ❌ 不推自己的 thread / newsletter（把 5 个槽都给别人）
- ❌ 不推付费墙后的内容（除非全文公开摘要可读）
- ❌ 不推 AI 生成的"文章总结"（那不是阅读）
- ✅ 每周必须有 1 篇是**反对自己当周 take** 的（观点平衡）
- ✅ 推荐别人 = 必然 @ 作者，引发 collab 概率

### 与 collab 协议互补

Friday Reading List 是 [peer-collab-playbook.md](./peer-collab-playbook.md) 的**最大引擎**：

- 每周固定推荐 5 个创作者 → 1 年累计 ~250 个引用 → 自然形成"observer 推荐过我"的网络效应
- 任何被推荐的创作者都会感受到（X 通知会到）→ 转发率 30-40%
- M2 起可以加 "if you'd like me to read your work, dm" → 主动 inbound

### 命名 + 归档

文件名：`reading-lists/MM-week-N-reading-list.md`。每期 archive 保留，形成"过去 12 期总论"的回顾素材。

---

## 五、Sunday Long Read · 周日深度长文

### Pitch

> "周日傍晚一杯咖啡 50 分钟读完。"

每周日 21:00 北京（美东周日 09:00 = 美西周日 06:00）发一篇 X Article。详见 [x-articles-playbook.md](./x-articles-playbook.md)。

### 关键差异（vs thread）

| 维度 | thread | Article |
|---|---|---|
| 长度 | 9 推 ≈ 2K 字符 | 2,000-4,000 字 |
| 时间 | 5 min 速读 | 30-50 min 深读 |
| 算法 | 推荐池 + reply | 长内容池 + bookmark + share |
| 转化 | follow / bookmark | newsletter sub + 1:1 booking |
| 频率 | thread = 每天 | Article = 每周 1 |

### 与 Monday Empire Map / Wednesday AI Race / Friday Reading List 的关系

```
Friday Reading List      "5 篇值得看"
       ↓ 选 1 个最有共鸣的
Sunday Long Read         深度展开 + 我的视角
       ↓ 提炼 take
Monday Empire Map        把 take 套进 empire 维度
       ↓ 数据更新
Wednesday AI Race Card   下次的对比数据 = 来自 Sunday 的研究
```

每个栏目互喂，每周内容不重复但相互引用 → 受众"哪天断了都不行"。

详细模板见 [x-articles-playbook.md](./x-articles-playbook.md)。

---

## 六、Last-Day Monthly Map · 月末大图

### Pitch

> "每个月最后一天，告诉你这一个月真正发生了什么。"

每月最后一天 19:00 北京（美东 07:00）发：

1. 12-推 thread
2. 同时把 Empire Cheat Sheet PDF 升级到下个月版本
3. 同时发 Newsletter 月度增刊（issue + .5）

### 模板结构（12 推）

```
1/  钩子 + 月度封面图（template-decoder-frame.html · "last-day monthly map · june 2026"）
    + 一句话 month summary + 一个反常识 take

2-3/  Tesla / SpaceX / xAI 月度 highlight（2 brand 1 推合并）
4-5/  Neuralink / Boring / X / Starlink 月度（同上）
6/    AI race · 月度 valuation / model 对比

7/    Markets · 本月最大 IPO / 财报 / Fed
8/    Cultural · 本月最大文化事件（observer 视角）

9-10/ 我个人 · build in public 月度（涨粉 / newsletter 数据 / 1:1 数据）

11/   下个月看点 · 7-10 个具体事件 + 日期

12/   钩子 · cheat sheet pdf vNext + 1:1 booking + sub link
```

### 为什么放月末而不是月初

- 月末是当月 closure（不是 prediction）→ 数据扎实
- 月初被各家媒体的"month review"挤占
- 月末发 → 月初的人会回头看 → 复利曝光
- 与每月 §3 monthly retro 同时跑（一份数据双用）

### 数据 anchor

12 个推每个推都引用 1 个具体数字。**不引用模糊形容词**（"巨大"/"重要"/"前所未有"）。如果某个 brand 当月没有数字变化，那一推用 1 句话带过：

```
4/12 Boring: nothing material this month. nashville BNA still pre-construction.
     watch july for groundbreaking.
```

诚实 > 凑长度。

---

## 七、整合周历 · 5 series + 日常的协同

### 7.1 周一到周日的统一时间表

```
                7am       9am       11am-12pm     2pm       5pm       7pm       9pm       10pm
    ─────────────────────────────────────────────────────────────────────────────────────────────
    Mon         🟢 EMPIRE MAP thread          E1-5 expansion   humor4    humor5
                + reply1 + reply2

    Tue         main     humor1   humor2/E     humor3    humor4    humor5

    Wed         main     humor1   🟢 AI RACE CARD                  humor3    humor4    humor5
                                  (+ reply data sources)

    Thu         main     humor1   humor2/E     humor3    humor4    humor5

    Fri         main     humor1   humor2/E     humor3    humor4   🟢 READING LIST
                                                                  (~7 推 thread)

    Sat (轻量)  humor1            humor2                  humor3              humor4

    Sun (轻量)  humor1            humor2                            🟢 LONG READ Article
                                                                            + newsletter send
                                                                                          + retro
```

### 7.2 每月最后一天

不论周几，覆盖当天日常排期：

```
Last day      light morning posts only         🟢 MONTHLY MAP thread (12 推)
                                                + cheat sheet pdf vNext
                                                + newsletter issue +.5
```

### 7.3 4 series 流量交叉

```
Monday Empire Map        ─┐
                          ├─→ 推荐到 ─→ Sunday Long Read
Wednesday AI Race Card   ─┤
                          │
Friday Reading List      ─┘   ← 引用 ←  Sunday Long Read

Last-Day Monthly Map      ─→ 引用过去 4 周的 ─→ Mon/Wed/Fri 4 series
```

每个栏目至少要在 thread 内提到 2 个其他栏目（"see friday list for sources" / "next monday map will revisit"）。这是栏目化的最大价值：**把推流量串成 ecosystem**。

### 7.4 启动节奏（不要一次性全开）

| 周 | 启动栏目 | 累计栏目数 |
|---|---|---|
| Week 1 (6/1-6/7) | Monday Empire Map（升级现有 thread）| 1 |
| Week 2 (6/8-6/14) | + Friday Reading List | 2 |
| Week 3 (6/15-6/21) | + Wednesday AI Race Card | 3 |
| Week 4 (6/22-6/30) | + Sunday Long Read（第一篇 X Article）| 4 |
| Month-end (6/30) | + Last-Day Monthly Map | 5（全开）|

**为什么不一次启动**：每个栏目第一期都需要"打磨期"。一次开 5 个 = 5 个都做不好。逐周开 = 每个都精雕细琢。

---

## 八、视觉一致性

每个栏目的 thread/article **第 1 推图片** 都用 [template-decoder-frame.html](./visual/template-decoder-frame.html)，**只换 series_name**：

| Series | series_name 字段 |
|---|---|
| Monday Empire Map | `monday empire map` |
| Wednesday AI Race Card | `wednesday AI race card` |
| Friday Reading List | `friday reading list` |
| Sunday Long Read | `sunday long read` |
| Last-Day Monthly Map | `last-day monthly map` |

其余字段（hook 内容 + week + date）按当期内容填。**封面模板永远不改**。

> 一个朋友看到任何一张你的 thread 第 1 张图，3 秒内就该认出"这是 @Skub0k 的 [栏目]"。

---

## 九、栏目失败标准 + 退场规则

任何一个栏目跑 4 周后，如果连续 2 周满足以下任一条件，**降频 1 档** 或 **改格式**：

| 指标 | 失败阈值 | 动作 |
|---|---|---|
| Thread/Article 平均 impression | < 同期 daily main 的 50% | 改格式（不是栏目本身有问题，是承载格式有问题）|
| Bookmark 数 | < 5 | 降频到 2 周 1 次 |
| 引发 reply 数 | < 3 | 改钩子 + 改时段 |
| 该栏目导致的 unfollow（若可量化） | > 5 / 周 | 暂停 + 跑 §6 Crisis 分析 |

**永远不删栏目**。降频 / 改格式 / 暂停 都比删除好。栏目存在 = 受众建立期待。

---

## 十、本文档维护

每月最后一天跑 §3 monthly retro 后，回头读这个文档，问 3 件事：

1. **5 个栏目里哪个 ROI 最高**？是否值得加大投入（例：Reading List 火就升级到 weekly Article 版）
2. **5 个栏目里哪个 ROI 最低**？应该改格式还是改时段
3. **是否有新栏目候选**？例如 "Tuesday Filings Watch"（如果财报季流量好）

**本文档每季度大改一次**。不超过 5 个栏目（多了管不过来）。

---

**版本**：v1.0 · 2026-05-30
**配套**：[brand-v2-activation-checklist.md](./brand-v2-activation-checklist.md) · [visual-identity.md](./visual-identity.md) · [x-articles-playbook.md](./x-articles-playbook.md) · [_self-operation-handbook.md](./_self-operation-handbook.md)
