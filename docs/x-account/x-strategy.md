# X 英文账号 · 整体运营策略

> 配套：[72h 窗口期清单](./x-musk-like-72h-window.md) → [AI 提示词工具包](./x-prompts.md) → [回复话术库](./x-reply-scripts.md)
> 状态：v0.1 · 待审阅

---

## 一、账号定位

### 一句话人设

> **A solo AI builder in China — shipping products with AI, posting what i see from the inside.**

**不是** 什么：

- ❌ 不是 AI commentary 评论员（那个赛道已饱和：scaling01 / kimmonismus / nearcyan…）
- ❌ 不是 thread bro（10 条三段论 + emoji 列表的"21 lessons from elon"那种）
- ❌ 不是 China explainer 中国问题解释员（中美关系 / 政治议题）
- ❌ 不是搬运工（不是把墙内中文新闻翻译成英文）

**是** 什么：

- ✅ 是**实际在 ship 产品**的独立开发者，每周有产品截图 / 数字 / 翻车故事
- ✅ 是**身在中国**的开发者，能给西方观众真实的 inside view（百度贴吧梗、淘宝供应链、深圳硬件、上海 AI 圈八卦…）
- ✅ 是**做东方美学 × AI 这个稀缺组合**的人（差异化 moat）
- ✅ 是**有审美**的人（不只是工程师视角，还有 19 色 palette / 易学 / 节气美学的视觉表达）

### 三个记忆点

1. **"i shipped X this week"** — 每周固定有产品交付物（截图 / 视频 / 数字）
2. **"from chongqing"** — 地点锚反复出现，建立"中国独立开发者"的身份图腾
3. **"east x AI"** — 用 AI 把东方美学（八字 / 节气 / 19 色 / 国风）做成可运行的产品，这是没人做的赛道

---

## 二、4 大内容支柱

> 比例不是绝对的，按热度调整。每周大致按这个分布。

| 支柱 | 占比 | 形式 | 作用 |
|---|---|---|---|
| **A · Reply Guy（高质量回复）** | 40% | 单条 reply | 每天 5-10 条，主要打 Musk / Sam / xAI / Tesla / OpenAI / Naval 圈，**这是涨粉主引擎** |
| **B · 实操 Build-in-Public** | 25% | 单推 + thread | 每周 2-3 条，晒产品截图 / 代码 / 数字 / 翻车，建立 builder 身份 |
| **C · China Inside View** | 20% | 单推 + 短 thread | 每周 1-2 条，从 Tesla 上海 / 深圳硬件 / 百度贴吧 / 中国 AI 圈给西方看不见的视角 |
| **D · 东方美学 × AI 实验** | 15% | 图 + 短文 | 每周 1-2 条，19 色 palette / 八字 → 性格底色 / 节气壁纸 等差异化内容（可复用本仓库 mingshu-builder / swatch-builder 输出）|

### 各支柱的发推模板

#### A · Reply Guy（详见 [x-reply-scripts.md](./x-reply-scripts.md)）

#### B · 实操 Build-in-Public

**三种 sub-format**：

1. **Ship report**（每周一固定）
   ```
   what i shipped this week:
   
   - <feature 1，1 行>
   - <feature 2，1 行>
   - <翻车 1，1 行>
   
   numbers:
   - users: <数字>
   - $: <数字>
   - lines of code (claude wrote 80% of it lol): <数字>
   
   <附 1-2 张截图>
   ```

2. **Behind the scenes**（不定期）
   ```
   trying to make claude generate yaml for chinese 五行 attributes.
   3 hours of "almost works" then realized i was using GB18030 not utf-8 in
   one file. one of those days.
   
   <附终端 / 编辑器截图>
   ```

3. **Lesson learned**（不定期）
   ```
   spent 2 weeks trying to be clever with vector DBs.
   ended up with a 50-row YAML file and grep.
   
   never going back. solo founders don't need pinecone for everything.
   ```

#### C · China Inside View

**模板：1 句反常识 + 1 个具体细节 + 1 个反问**

```
the meme that "china just copies AI from the US" is 5 years old.

baidu's 文心一言 lost the consumer war to 豆包 (bytedance) and kimi 
(moonshot) over the past 12 months. neither of those exist in english media.

what other "china is X" memes are y'all still running on 2019 data?
```

```
visited shenzhen huaqiangbei last month for sourcing.
saw 4 different "AI hardware" pin shipping for $19-49.
all worse than rabbit r1, all profitable.

the gap between what you can prototype here vs SF in 2 weeks is 
embarrassing. and most of these will never reach western twitter.
```

#### D · 东方美学 × AI 实验

**这是账号的护城河。** 西方 AI Twitter 几乎没有同类内容。

**模板：图（产品截图 / palette）+ 一段实操叙述**

```
spent the weekend building this:

input: a person's birth date + birth time + birth city
output: a 19-color personal palette grounded in chinese 五行 theory,
        plus a 38-page PDF "book of personal colors"

it's basically MBTI for color, but with 1500 years of source material 
behind it instead of 3 questions on a forum.

dm "palette" for the free version. <附 19 色色板截图>
```

```
ran an experiment: gave claude the full 节气 (24 solar terms) calendar 
+ traditional color names + each term's 物候 (phenological signs)

asked it to generate a "wallpaper for next monday" based on 立夏.

the output is more 中国 than what most chinese AI image models generate. 
context > parameters.

<附 4 张节气壁纸生成图>
```

> 本支柱可以复用本仓库 [mingshu-builder](../../mingshu-builder/) / [swatch-builder](../../swatch-builder/) 的输出，等于一份资产两个市场（中文小红书 + 英文 X）。

---

## 三、30 天内容日历（M1）

### 节奏总览

| 频次 | 内容类型 | 来源支柱 |
|---|---|---|
| 每天 5-10 条 | Reply Guy 高质量回复 | A |
| 每周一晚（北京时间）| Ship report 周报推 / thread | B |
| 每周三 | China inside view 单推 / 短 thread | C |
| 每周五 | 东方美学 × AI 实验 图 + 文 | D |
| 每周日（机动）| 复盘推 / meta 推 / 互动推 | 混合 |

> ⚠️ 时区策略：账号的目标受众是美东 / 美西 时区。
> - **黄金发推时段**：美东 7-9pm = 北京时间 早 7-9 点
> - **次优**：美东 12-2pm = 北京时间 凌晨 0-2 点（用 TweetHunter / Hypefury 提前定时）

### 4 周日历

#### 第 1 周：Musk 点赞热度延续 + 立人设

| 周几 | 推文类型 | 选题 |
|---|---|---|
| 周一 | B - Ship report | 上周从无到有做了什么（首篇 ship report 模板）|
| 周二 | A - Reply guy day | 全天打 5-8 个大 V，重点：xAI / Sam / Tesla |
| 周三 | C - China inside | 中国 AI 圈第 1 个反常识："文心一言已经不是中国 AI 第一了"（数据驱动）|
| 周四 | A + B | 1 条 build-in-public 短推 + 5 条 reply |
| 周五 | D - 东方美学 | 19 色 palette 项目首推（附产品截图 + 钩子）|
| 周六 | A - Reply guy day | 周末打 indie hacker 圈（@levelsio / @marckohlbrugge / @yongfook）|
| 周日 | meta / 互动 | 第 1 周复盘 meta 推（数据 + 一个反问）|

#### 第 2 周：开始有 thread + 转化测试

| 周几 | 推文类型 | 选题 |
|---|---|---|
| 周一 | B - Ship report | 第 2 周 ship 进展 |
| 周二 | A | 全天 reply |
| 周三 | C - Thread | 5-7 条 thread："5 things western AI twitter is wrong about china right now" |
| 周四 | A | 全天 reply |
| 周五 | D - 八字 × AI | "i fed a person's birth chart to claude. here's what it got right (and wrong)" |
| 周六 | A | 周末 reply |
| 周日 | 互动 | 投票 / 反问推："what would you want to see from a solo AI builder in china?" |

#### 第 3 周：开始上钩子 / 落地页

| 周几 | 推文类型 | 选题 |
|---|---|---|
| 周一 | B - Ship report + lead magnet | "shipped the 19-color PDF this week. dm 'palette' for free copy. <附 PDF 封面>" |
| 周二 | A | 全天 reply |
| 周三 | C - 反 meme | "the 'china is years behind on AI' meme is dying. here's what's replacing it." |
| 周四 | A | 全天 reply |
| 周五 | D - 节气 | "today is 小满. here's what claude did with the date. <附 4 张节气壁纸>" |
| 周六 | A + B | reply + 翻车故事 |
| 周日 | 互动 | "AMA: solo AI builder in china, 3 weeks on this account. ask me anything." |

#### 第 4 周：评估 + 调整 + 第一个变现实验

| 周几 | 推文类型 | 选题 |
|---|---|---|
| 周一 | B - Ship report + 数据复盘 | "1 month on this account. here are the numbers (incl. embarrassing ones)" |
| 周二 | A | 全天 reply |
| 周三 | C | 第 4 周中国 inside view 选题（按当时热点定）|
| 周四 | A | 全天 reply |
| 周五 | D - 一对一服务测试推 | "running 5 free 1:1 'personal palette readings' next week. dm if interested. limited to 5." |
| 周六 | A | reply |
| 周日 | meta | 月度 meta 复盘 + bullish 一下下个月 |

### 月底要拿到的数字（保底 vs 拉满）

| 指标 | 保底 | 拉满 |
|---|---|---|
| 粉丝数 | 800 | 3,000 |
| 月 impression | 500K | 5M（直接达到 ads 分成门槛）|
| Reply 平均 impression | 1K | 5K |
| 主帖平均 impression | 5K | 50K |
| Bio link 点击 | 200 | 1,500 |
| 落地页转化（PDF 领取 / newsletter）| 50 | 500 |
| DM 咨询数 | 5 | 30 |
| 同类大 V（>10K 粉）的关注 | 3 | 15 |

---

## 四、变现路线图（M1 → M6）

> 英文受众的 ARPU 是中文的 5-10 倍，但**变现要慢启动**，前 1-2 个月**只建立信任 + 留 lead，不直接卖**。

### M1（第 1 个月）· 0 → 1K-3K 粉

**变现动作**：0（投资期）

**铺垫动作**：
- 开 X Premium+（$16/月，分成资格 + 蓝标加权）
- 开 Beehiiv / Substack newsletter "China AI Builder Dispatch"（每周一发，免费订阅）
- bio link 指向 newsletter 订阅页 + 19 色 PDF 下载页（双钩子）
- 攒 5-10 条产品 / 服务的 testimonial（文末附 1 段客户原话）

### M2（第 2 个月）· 3K → 8K 粉

**变现动作**：

| 路径 | 收入预期（月）|
|---|---|
| X Ads 分成（如已达 5M impression / 3 个月）| $50-300 |
| Newsletter 付费订阅（$5-10/月，10-30 付费用户）| $50-300 |
| 一对一咨询试水（$99-199/小时，每月 2-5 单）| $200-1,000 |

**总月收入预期**：$300-1,500

### M3（第 3 个月）· 8K → 20K 粉

**新增变现**：
- 数字产品上架：《Eastern Aesthetics × AI prompts pack》$29-49 一份（基于本仓库现有 prompt 工具包重写英文版）
- 1-2 个广告 / sponsorship（单条 $200-1,000，需粉丝 5K+ 才有人来谈）

**总月收入预期**：$800-3,000

### M4-M6 · 20K → 50K-100K 粉

**变现矩阵**：

| 路径 | 月收入预期 |
|---|---|
| X Ads 分成 | $500-3,000 |
| Newsletter 付费 | $500-3,000 |
| 一对一咨询（$199-499/小时，10-20 单）| $2,000-10,000 |
| 数字产品销售（多个 $29-99 SKU）| $1,000-5,000 |
| Sponsorship（每月 2-4 条，单条 $500-3,000）| $1,000-12,000 |
| **合计** | **$5,000-30,000+** |

> ⚠️ 数字是行业基线参考，实际取决于内容质量 + 钩子设计 + 受众粘性。

---

## 五、避坑清单（X 平台特有）

| 类别 | 不要做 | 原因 |
|---|---|---|
| **算法** | 一天发超过 15 条原创推 | 灌水降权 |
| **算法** | 在同一大 V 评论区一天回 3 条以上 | 判 spam |
| **算法** | 大量推文带 5+ hashtag | 现在算法不喜欢 hashtag 堆 |
| **合规** | 伪造 Musk / Sam / Tesla 内部消息 | 永封 |
| **合规** | 政治敏感（中美 / 台海 / 新疆 / 俄乌 / 以巴）| 限流 + 取关潮 |
| **合规** | 任何 NSFW / 暴力 / 仇恨内容 | 永封 |
| **变现** | 1 个月内推付费产品 | 信任未建立，转化 = 0 还掉粉 |
| **变现** | 买粉 / 买互动 | X 反作弊会取消营收资格 |
| **变现** | 接和定位无关的 sponsorship（赌博 / shitcoin / SaaS 工具）| 关注者会取关 |
| **品牌** | 切话题（突然发美食 / 旅游）| 流量切片掉得很厉害 |
| **品牌** | 频繁负能量 / 抱怨 | 算法和受众都不喜欢 |
| **品牌** | "Sir, this is a Wendy's" 式的 reply（meme 蹭流量）| 短期有流量，但来的人不会留 |

---

## 六、配套提示词

每天发推前用 [x-prompts.md](./x-prompts.md) 跑一遍：

- **Prompt 2** Thread 生成器（每周一 ship report + 周三 thread 用）
- **Prompt 4** Reply 个性化（每天 5-10 条 reply 都过一下）
- **Prompt 6** 选题雷达（每周日跑下周 5-7 条选题）
- **Prompt 7** 周度数据复盘（每周日复盘）

---

**版本**：v0.1 · 2026-05-22 草案
**配套**：[README](./README.md) · [72h 窗口期](./x-musk-like-72h-window.md) · [Prompts](./x-prompts.md) · [Reply Scripts](./x-reply-scripts.md)
