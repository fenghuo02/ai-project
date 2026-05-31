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

## 二、Monday Empire Map · 周一帝国大图 · v4 long-form 升级

### Pitch

> "周一早上看完它，我就知道过去 7 天 tech / markets / empires 发生了什么。"

每周一早 07:30 北京（= 美东周日晚 19:30 黄金时段）发一条 **long-form 单推**（Premium+ 4000 字符）。Empire / AI race / Markets 三主题集成，承接 v1 时期的 Decoder Thread #01 形态，**改名 + 视觉一致化 + v4 算法适配**。

### 为什么 v4 改成 long-form 单推（而不是 9-tweet thread）

[2026-05 算法事实，详见 [algorithm-2026-playbook.md §一.1](./algorithm-2026-playbook.md)]：

```
2026 年 X 算法对 long-form 单推 > thread：
  · long-form 把 engagement 集中到 1 条
  · thread 第 2 推之后 not_dwelled 信号高，拖累整 thread 排名
  · bookmark 率：long-form 7-15% vs thread 3-5%
  · 算法读懂 long-form 主题信号比读 thread 切片信号更准
```

仍可发的 thread 场景：

- E3 Live event thread（实时连续报道）
- 突发危机响应
- ≥ 2,500 字符的内容（超过 long-form 上限）

### 为什么放周一

- 美东周日晚 19:30 = 整周第一个高互动窗口（X 算法本周首推会被推荐池放大）
- 受众心智："周一早上看 Empire Map" = 设置 ritual
- 周日是新闻空档 → 我把过去 7 天聚合成一篇 long-form = 高密度信息

### v4 模板结构（long-form 单推 ~3,500 字符）

```
封面图（template-decoder-frame.html · "monday empire map · week N"）

────────────────────

monday empire map · week N

[反常识 hook：1 句话总结过去 7 天 + 1 个反常识 take]

──

what i tracked this week:

· tesla:    [Q 数据 1 行 + 1 关键变化 1 行 + observer take 1 行]
· spacex:   [同上结构]
· starlink: [同上]
· xai:      [同上]
· neuralink:[同上]
· boring:   [同上，最短]

──

AI race state:
· anthropic [数字]
· openai    [数字]
· xai       [数字]
· google    [数字]
· meta      [数字]
verdict: [一句话定胜负]

──

markets watch:
· [1 个 IPO / 财报 / Fed observation]
· [1 个 valuation observation]

──

watching next 7 days:
· [event 1 + 日期]
· [event 2 + 日期]
· [event 3 + 日期]

──

3 takes. all could be wrong. that's why i write them down.

bookmark this for the week. revisiting next monday.
```

### Reply 链（必发，T+15s / T+5min / T+10min）

```
Reply 1（T+15s · 链接 + 算法摘要）：
this week's decoder weekly is now live: [Beehiiv link]

5-bullet text version (algo + screen-readers):
- [bullet 1 + 数字]
- [bullet 2 + 数字]
- [bullet 3 + 数字]
- [bullet 4 + 数字]
- [bullet 5 + 数字]

──

Reply 2（T+5min · 数据来源）：
sources for the data above:
- spacex s-1 filing
- tesla 10-Q q1 2026
- anthropic blog 5/29
- nvidia q1 fy27 earnings call
- [其他 1-2 个]

──

Reply 3（T+10min · 实质性补充自我 reply）：
[一段实质性的额外视角 / 反共识 take，不是空洞 CTA]

例：
"the part i kept thinking about while writing this:
fsd subs at 1.28M is now growing 6× faster than tesla's auto deliveries.
that's the 1 chart that decides whether tsla becomes a software co or a car co."
```

### 与 v1 Decoder Thread / v3 thread 版本的差异

| 维度 | v1 Decoder Thread | v3 9-tweet thread | **v4 long-form 单推** |
|---|---|---|---|
| 形式 | 9-tweet thread | 9-tweet thread | **long-form 4000 字符单推** |
| 名称 | "Decoder Thread #N" | "Monday Empire Map · Week N" | "Monday Empire Map · Week N" |
| 频率 | 每周一发，无固定时段 | 周一 07:30 BJ | 周一 07:30 BJ |
| 封面 | 无 | template-decoder-frame.html | template-decoder-frame.html |
| 算法适配 | thread 时代有效 | thread 时代仍可 | **2026 long-form 优先**，与算法对齐 |
| Bookmark 率 | 3-5% | 4-6% | **7-15%** |
| 主推链接 | 收尾接 PDF link | 第 9 推接 link | **主推无链接**，链接放 reply 1 |
| AI race | 第 8 推 | 第 8 推 | long-form 内固定章节 |
| Markets 章节 | 无 | 无 | **新增 markets watch** |
| 与 newsletter 关系 | 重叠 60% | 重叠 50% | **明确分工**：long-form = 5min / newsletter = 30min / Article = 50min |

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

## 四、Friday Reading List · 周五推荐阅读 · v4 long-form + quote-attribution 升级

### Pitch

> "本周我读到的 5 篇最值得花时间的东西。"

每周五 19:30 北京（美东周五 07:30 上班路上）发一条 **long-form 单推**（v4 升级，从 6-7 tweet thread 改为 long-form 单推）。

**这是大 V 最高 ROI 栏目**：

1. 不需要原创内容（curation = 高产出 / 低成本）
2. 信任建立最快（推荐别人的好东西 = 显得不自私）
3. Newsletter / Substack / Beehiiv 有"newsletter recommends"机制 → friday list 直接对接
4. 推荐其他大 V 内容 → 自然形成 cross-promo 入口

### v4 关键改动

| 维度 | v3（thread）| **v4（long-form + quote）** |
|---|---|---|
| 形式 | 6-7 tweet thread | **long-form 单推 + reply 内 quote-tweet 链** |
| X 平台内容引用 | @ + URL | **Quote tweet（合规 + algorithm 友好）** |
| 外部 newsletter / Substack 引用 | @ + URL | @ + URL（不变）|
| 链接 | 主推内 | **链接 / quote 全在 reply** |

### 为什么 v4 改成 quote-tweet attribution

[2026-05-23 起 X 严打 aggregator](https://www.forbes.com/sites/conormurray/2026/05/29/x-cracks-down-on-stolen-content-demonetizes-major-account-for-gaming-monetization-system/)：判定为内容窃取 = 减 60% 收入分成 + 下个周期再减 20%。

**纯 @ + URL 形式可能被算法误判为"程序化重发"**。Quote-tweet 是 X 官方推荐的正确归因方式（[Nikita Bier 5/2026 公告](https://www.businessinsider.com/x-cracks-down-on-stolen-content-nikita-bier-2026-5)）：使用 "Share Video" 或 "Quote" 才是合规归因。

详见 [growth-mechanics-2026.md §六 Quote-as-Attribution](./growth-mechanics-2026.md)。

### v4 模板结构（long-form 单推主体）

```
封面图（template-decoder-frame.html · "friday reading list · week N"）

────────────────────

friday reading list · week N

5 things i read this week that changed how i'm thinking about [本周主题]:

──

1/ [@author] on [topic]
   [一句话 take，自己的视角]
   why it matters: [1 句话]

2/ [@author] on [topic]
   ... (same structure)

3/ ...

4/ ...

5/ ...

──

(my contrarian pick: 5/5 disagrees with my monday take. healthy.)

──

sources + quote-tweets in reply ↓
spaces tonight 21:00 BJ to discuss
sun long read picks one to go deeper on.

bookmark for the weekend. forward to anyone you read with.
```

### Reply 链（v4 关键升级）

```
Reply 1（T+15s · 外部链接区）：
sources (newsletters / blogs / filings):
- 1/ [@author handle] · [URL]
- 2/ [@author handle] · [URL]
- 5/ [@author handle] · [URL]
（仅外部内容 · X-platform 内容见 reply 2）

──

Reply 2（T+5min · X 平台 quote-tweet 链）⭐ v4 关键
[逐条 quote-tweet 引用 X 平台内的 source]

例（针对 thread）：
"piece 3/5 above · @stratechery's analysis here:"
[quote-tweet @stratechery 的原推]

例（针对 X Article）：
"piece 4/5 above · @lennysan's article:"
[quote-tweet @lennysan 的 Article（X 内嵌）]

──

Reply 3（T+10min · CTA）：
weekly digest covers all 5 in deeper detail: [Beehiiv link]
spaces tonight 21:00 BJ to discuss → [link]
```

### Quote-tweet 操作步骤（合规归因）

```
对每个 X 平台 source：
1. 找到原推
2. 点 "..." → "Quote"（不是 "Reply" 也不是 "Repost"）
3. 在 quote 内加 1-2 句你的 take（不是改写作者原话）
4. 发出
5. 这条 quote-tweet 现在出现在你的 timeline + 算法识别为正确归因

绝对禁止：
❌ 截图别人推 / Article 内容
❌ 改写别人原话作为自己的 take
❌ 大量 RT 别人内容不加自己视角
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

## 六、Last-Day Monthly Map · 月末大图 · v4 long-form 升级

### Pitch

> "每个月最后一天，告诉你这一个月真正发生了什么。"

每月最后一天 19:00 北京（美东 07:00）发：

1. **long-form 单推**（v4 升级，从 12-推 thread 改为 4000-字符 long-form）
2. 同时把 Empire Cheat Sheet PDF 升级到下个月版本
3. 同时发 Newsletter 月度增刊（issue + .5）

### v4 关键改动

| 维度 | v3（12-tweet thread）| **v4（long-form 单推）** |
|---|---|---|
| 形式 | 12 推 thread | **long-form 4000 字符单推** |
| 算法适配 | thread 时代 | **2026 long-form 优先** |
| Bookmark 率 | 5-8% | **10-18%**（月度 reference 价值高）|
| 主推链接 | 第 12 推接 | **主推无链接**，链接放 reply 1 |

### v4 模板结构（long-form 单推）

```
封面图（template-decoder-frame.html · "last-day monthly map · [month] 2026"）

────────────────────

last-day monthly map · [month] 2026

[一句话 month summary + 反常识 take]

──

what i tracked this month:

· tesla:    [月度 highlight 1 行 + 1 关键变化]
· spacex:   [同上]
· starlink: [同上]
· xai:      [同上]
· neuralink:[同上]
· boring:   [同上]
· x:        [同上]

──

AI race · monthly state:
· anthropic [monthly 数字 + delta]
· openai    [同上]
· xai       [同上]
· google    [同上]
· meta      [同上]

──

markets · [month] highlights:
· [biggest IPO / 财报 / Fed event]
· [valuation 重大变动 1-2 个]

──

cultural observation:
· [当月最大文化事件，observer 视角，1-2 句]

──

build in public · my numbers:
· followers: +N (delta from last month)
· newsletter subs: +N
· top post: [reach 数]
· video: [if started, video views]
· 1 thing i learned:

──

watching next 30 days:
· [event 1 + 日期]
· [event 2 + 日期]
· [event 3 + 日期]
· [event 4 + 日期]

──

3 takes for the month. revisiting next month-end.
bookmark this for [month+1] retro.
```

### 12-推 thread 仍可用的场景

如果当月内容真的需要 > 4,000 字符（例：某个月发生 5+ 重大 IPO + 大事件），仍可发 12-tweet thread。但**默认使用 long-form**。

### Reply 链

同 §二 Monday Empire Map 的 3-reply 结构：

- Reply 1：Beehiiv newsletter 月度增刊 link + 5-bullet text version
- Reply 2：Cheat Sheet PDF vNext link + sources
- Reply 3：自我补充 take（month-end retro 心得）

### 为什么放月末而不是月初

- 月末是当月 closure（不是 prediction）→ 数据扎实
- 月初被各家媒体的"month review"挤占
- 月末发 → 月初的人会回头看 → 复利曝光
- 与每月 §3 monthly retro 同时跑（一份数据双用）

### 数据 anchor

每段都引用 1 个具体数字。**不引用模糊形容词**（"巨大"/"重要"/"前所未有"）。如果某个 brand 当月没有数字变化，那一行用 1 句话带过：

```
boring: nothing material this month. nashville BNA still pre-construction.
        watch july for groundbreaking.
```

诚实 > 凑长度。

---

## 七、整合周历 · 5 series + 日常的协同 v4

### 7.1 周一到周日的统一时间表（v4 加 Saturday Video）

```
                7am       9am       11am-12pm     2pm       5pm       7pm       9pm       10pm
    ─────────────────────────────────────────────────────────────────────────────────────────────
    Mon         🟢 EMPIRE MAP                  E1-5 expansion   humor4    humor5
                long-form + reply1+2+3
                + first 60-min SOP

    Tue         main     humor1   humor2/E     humor3    humor4    humor5

    Wed         main     humor1   🟢 AI RACE CARD                  humor3    humor4    humor5
                                  (data viz + reply)

    Thu         main     humor1   humor2/E     humor3    humor4    humor5

    Fri         main     humor1   humor2/E     humor3    humor4   🟢 READING LIST
                                                                  long-form + quote-attribution
                                                                  + 🎙️ SPACES 21:00

    Sat 🆕      humor1            🎬 VIDEO     humor3              humor4
                                  (11:30 BJ · vertical 9:16)

    Sun (轻量)  humor1            humor2                            🟢 LONG READ Article
                                                                            + newsletter send
                                                                                          + retro
```

### 7.2 每月最后一天

不论周几，覆盖当天日常排期：

```
Last day      light morning posts only         🟢 MONTHLY MAP long-form
                                                + cheat sheet pdf vNext
                                                + newsletter issue +.5
```

### 7.3 5 series 流量交叉

```
Monday Empire Map        ─┐
                          ├─→ 推荐到 ─→ Sunday Long Read
Wednesday AI Race Card   ─┤              ↑
                          │              Saturday Video（视频化版本，可选）
Friday Reading List      ─┘   ← 引用 ←  Sunday Long Read

Last-Day Monthly Map      ─→ 引用过去 4 周的 ─→ Mon/Wed/Fri/Sat 4 series
```

每个栏目至少要在 long-form 内提到 2 个其他栏目（"see friday list for sources" / "next monday map will revisit" / "saturday video covers this in 60s"）。

### 7.4 启动节奏 v4（更新启动顺序）

| 周 | 启动栏目 | 累计栏目数 |
|---|---|---|
| Week 1 (6/1-6/7) | Monday Empire Map（long-form 升级现有 thread）+ **Saturday Video** | 2 |
| Week 2 (6/8-6/14) | + Friday Reading List（long-form + quote attribution）| 3 |
| Week 3 (6/15-6/21) | + Wednesday AI Race Card | 4 |
| Week 4 (6/22-6/30) | + Sunday Long Read（第一篇 X Article）| 5 |
| Month-end (6/30) | + Last-Day Monthly Map | 6（全开）|

**v4 与 v3 启动差异**：v4 把 Saturday Video 和 Monday Map 同时启动（Week 1），因为 Saturday video 是 small account boost window 期最高 ROI 内容形式（详见 [growth-mechanics-2026.md §七](./growth-mechanics-2026.md)）。

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

**版本**：v2.0 · 2026-05-30（v4 升级：3 个栏目从 thread 改为 long-form 单推 / Friday Reading List 改 quote-tweet attribution / 加 Saturday Video 槽位 / 启动节奏 Week 1 同时启动 Empire Map + Saturday Video）
**配套**：[brand-v2-activation-checklist.md](./brand-v2-activation-checklist.md) · [visual-identity.md](./visual-identity.md) · [x-articles-playbook.md](./x-articles-playbook.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [vertical-video-pillar.md](./vertical-video-pillar.md) · [growth-mechanics-2026.md](./growth-mechanics-2026.md)
