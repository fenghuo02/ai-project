# Newsjacking Playbook · 24h 突发新闻劫持 SOP

> 状态：v1.0 · 2026-05-30
> 触发：v4 First 60-min SOP 是"自己发推后"的引爆，**完全没有"突发新闻发生时"的反应模板**。每月 2-4 次科技 / 市场 / IPO 大事件突发，是 big-V 跳跃的关键窗口。
> 配套：[algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [growth-mechanics-2026.md](./growth-mechanics-2026.md) · [_prompts-pack.md](./_prompts-pack.md) (§25 Newsjacking Generator)

---

## 一、什么是 newsjacking

### 1.1 定义

突发新闻发生后**第一波**（通常 2-6 hr 内），用你的视角 / 数据 / 框架插入正在发酵的 conversation，借势获取曝光。

### 1.2 为什么对 observer & investor 极度有效

```
普通主推 reach：1× baseline
trending topic 主推 reach：10-50× baseline（X 算法把热门话题主动推到 For You）
60min 内反应主推 reach：50-200× baseline（你是少数 first-takes）

数据来源：
  · Semrush newsjacking 完整指南
  · BuzzStream 2025
  · posteverywhere.ai newsjacking 词条
```

### 1.3 行业证据（2026-05 联网验证）

- [Semrush newsjacking 完整指南](https://www.semrush.com/blog/how-to-leverage-newsjacking/)：top creator 把突发新闻视为"timing × wit"放大器
- [Hallam newsjacking 模板](https://hallam.agency/blog/newsjacking-template-and-guide/)：在突发故事核心放置 thoughts 是 PR 第一手段
- [BuzzStream 2025](https://www.buzzstream.com/blog/newsjacking/)：3 类成功 newsjacking——insert expert quotes / pitch new content / leverage existing assets
- [SerpsGrowth](https://serpsgrowth.com/blog/what-is-newsjacking/)：每日监控、专业领域相关、行动迅速 = 三要素

---

## 二、@Skub0k 的 7 类突发触发器

### 2.1 触发器分类（每月发生频次估计）

| # | 类型 | 月频次 | 24h 反应窗口 |
|---|---|---|---|
| **A** | IPO 上市 / S-1 / 定价 | 1-2 | < 60 min（极敏感）|
| **B** | 财报 surprise（beat / miss）| 4-6 | < 30 min（财报当晚）|
| **C** | 大公司收购 / 合并 | 1-2 | < 2 hr |
| **D** | Musk 重大推 / 重大事件 | 2-4 | < 30 min |
| **E** | AI 模型大发布（Anthropic / OpenAI / xAI / Google）| 2-4 | < 60 min |
| **F** | 监管 / 政策事件（SEC / FTC / 中国监管）| 1-2 | < 2 hr |
| **G** | 地缘 / 宏观事件（Fed / 大盘崩 / 危机）| 1-2 | < 60 min |

**累计每月反应机会**：12-22 次。**每次反应正确 = 一次曝光跳跃**。

---

## 三、7 类反应模板

### 3.1 类型 A · IPO 上市 / S-1 / 定价

**触发**：spacexai 6/12 IPO 定价 / openai 8 月 S-1 / anthropic h2 IPO 等

**60 min 内主推模板**：

```
[公司] IPO priced at $[价格]. 

what most threads will miss:
- [关键 1：valuation 多倍数 vs 行业]
- [关键 2：发行规模 / 市场容量]
- [关键 3：post-IPO 90 天看点]

context: [类似公司过去 IPO 数据]

(observation, not advice. revisiting in 30 days.)
```

**例**（spacexai 6/12 IPO 假定）：

```
spacexai priced at $1.85T. middle of the $1.75T-$2T range.

what most threads will miss:
- 30× revenue multiple vs nvidia 33× = priced like compute infra not space company
- $75B raise = 4% dilution post-IPO
- starlink + xai + spacex = 3 different growth curves under 1 ticker

context: aramco 2019 was $1.7T at IPO. 7 years later still $1.8T. that's the ceiling without execution.

(observation, not advice. revisiting in 30 days.)
```

**Reply 1**（T+15s · 链接 + 数据源）：

```
sources:
- spacexai S-1 (filed may 20)
- bloomberg / reuters live coverage
- cnbc tape

text version of the take:
- $1.85T = 30× revenue
- vs nvidia 33×
- post-IPO 90 days: starlink expansion / xai capex / starship cadence
```

**Reply 2**（T+5min · 跨 series 引用）：

```
this 30-day prediction will be in next monday's empire map.
sun long read may 31 / week 22 will deep-dive the comp set.
weekly digest: [beehiiv link]
```

### 3.2 类型 B · 财报 surprise

**触发**：tesla q1 / nvidia q1 / anthropic 季报 / openai 季报

**反应窗口**：财报发布后 30 min 内（财报通常美东 4-5pm 发布）

**模板**：

```
[公司] q[N] [年]: 
  revenue: $[数字] vs $[预期] consensus
  [key metric]: [数字] vs [预期]

what gets covered: the headline number
what gets missed: [the buried metric in note 23 / the q/q delta / the 4-quarter trend]

[一句话观察 + 立场]

(observation, not advice. revisiting next quarter.)
```

**例**（tesla q1 假定 miss）：

```
tesla q1 2026: 
  deliveries: 358k vs 365k consensus (miss by 7.6k)
  fsd subs: 1.28M vs 1.05M consensus (beat by 22%)

what gets covered: deliveries miss → "tesla in trouble"
what gets missed: fsd revenue is now 6× faster YoY than auto deliveries

if fsd take rate stays > 14%, tesla becomes a software co regardless of unit deliveries.

(observation, not advice. revisiting next quarter.)
```

### 3.3 类型 C · 大公司收购 / 合并

**触发**：apple 收购 anthropic / google 合并 deepmind / 任何 $10B+ M&A

**反应窗口**：< 2 hr

**模板**：

```
[A] just announced [acquisition / merger] with [B] for $[N]B.

3 things this means:
1. [战略：A 想要的能力 / 数据 / 受众]
2. [反应：竞争对手 [C] 现在怎么办？]
3. [二阶：监管会过吗？时间多久？]

context: [类似 deal 的 outcome]

(this is a phase transition not a one-day story.)
```

### 3.4 类型 D · Musk 重大推 / 重大事件

**触发**：starship 试飞 / fsd 重大版本 / xai 大新闻 / cybertruck recall / etc

**反应窗口**：< 30 min

**模板**（适用于 Musk 任何主题）：

```
musk just posted: "[原推内容]"

decoder dictionary check:
- [关键短语]: [实际意思]
- timeline phrase: [Musk 短语 → 真实时间转换]

what this actually means: [一句话框架]

[my take + observation]

(see decoder dictionary in pinned for the full translation matrix.)
```

**例**（musk 推 "robotaxi launching this year"）：

```
musk just posted: "robotaxi by year end. !!"

decoder check:
- "by year end" + "!!" = imminent (1-3 weeks per his pattern)
- but past 7 timeline predictions: 4 missed by 6+ months
- 1 hit on time, 2 hit early

what this actually means: high probability launch event Q3 2026, not necessarily end-of-year delivery to consumers.

(decoder dictionary in pinned, full pattern data over 6 months.)
```

### 3.5 类型 E · AI 模型大发布

**触发**：grok V9 / gpt-5 / claude 5 / gemini 4 / llama 5

**反应窗口**：< 60 min

**模板**：

```
[Lab] just released [Model].

quick benchmark check:
- coding (HumanEval): [data]
- reasoning (MATH): [data]
- real-time data (HLE): [data]

vs [competitor model]:
- wins on: [维度]
- loses on: [维度]

what this means for the AI race state:
[一句话 framework]

(testing on [5 standard prompts] over the next 2 hr. follow for results.)
```

### 3.6 类型 F · 监管 / 政策事件

**触发**：SEC 罚单 / FTC 行动 / 中国监管 / EU AI Act

**反应窗口**：< 2 hr（敏感性高，需要冷静）

**模板**：

```
[Regulator] just [action] against [company] for $[amount].

what this changes:
- short-term [30 day]: [影响]
- medium-term [6 month]: [影响]
- long-term [12+ month]: [影响]

historical context: [类似 case 的 outcome]

(observation, not legal advice. follow [official source] for updates.)
```

**重要纪律**：

- ❌ 不要预测案件结果（法律风险）
- ❌ 不要嘲讽监管 / 监管员（社交风险）
- ❌ 不要给"我会怎么交易"的建议
- ✅ 客观 framing + 历史 context + 观察立场

### 3.7 类型 G · 地缘 / 宏观事件

**触发**：Fed 利率决议 / 大盘崩 5%+ / 战争 / 危机 / 中美关系

**反应窗口**：< 60 min（市场反应密集）

**模板**：

```
[Event] just [happened].

3 ways this hits the empire:
1. [Tesla: 利率敏感 / 贸易战 / etc]
2. [SpaceX: 政府合同 / 国防 / etc]
3. [xAI: capex / 算力 / etc]

context: [上一次类似事件的反应数据]

(observation, not investment advice. revisiting in 30 days.)
```

**重要纪律**：

- ❌ 不要碰美国政治站队（v3 红线）
- ❌ 不要碰中美博弈话题（v3 红线）
- ❌ 不要建议 "buy" / "sell"（法律 + brand 风险）
- ✅ 把宏观事件**翻译到 empire 语境**（这是你的 USP）

---

## 四、监控工具栈（持续运行）

### 4.1 Push 通知配置

```
1. Grok app（X Premium+ 自带）
   · push: musk, anthropic, openai, xai, fed, ipo
   · 即时 notification

2. Bloomberg app（free with X Premium+ 部分功能）
   · push: breaking news in markets / tech

3. CNBC app
   · push: earnings season alerts

4. Stocktwits app
   · 实时 ticker（NVDA / TSLA / etc）
   · 监控 unusual volume

5. X 关键字 search column（TweetDeck / X 内置）
   · "BREAKING" + "[company]"
   · "earnings" + "[ticker]"
   · "ipo" + "priced"

每天早晚 2 次扫一遍（05:30 起床 + 22:00 睡前）
```

### 4.2 信号优先级

```
P0（< 15 min 反应）:
  · Musk 重大推
  · 财报 surprise（你跟踪的公司）
  · IPO 定价（重点公司）

P1（< 60 min 反应）:
  · AI 模型大发布
  · 大公司收购
  · Fed 利率决议

P2（< 2 hr 反应）:
  · 监管事件
  · 地缘 / 宏观

P3（< 24 hr 反应）:
  · 行业 trend 形成
  · 长期 framework 转变
```

### 4.3 不反应的信号

```
❌ 名人八卦（无 empire 关联）
❌ 美国政治
❌ 突发悲剧 / 灾难
❌ 体育赛事
❌ 娱乐 / 文化八卦
❌ 你不懂的领域
```

---

## 五、Newsjacking 5 大铁律

### 5.1 速度 > 完美

```
60 min 内的 80% 完成版 > 24h 后的 100% 完成版

为什么：算法窗口极短。突发后 6 小时内是黄金期。
```

### 5.2 视角 > 信息

```
如果只是 paraphrase 新闻 = aggregator（v4 anti-aggregator 严打）
必须有自己的 framework / observation / 立场

每条 newsjack 推必有：
□ 1 个反常识 take
□ 1 个具体数字
□ 1 个 framework / decoder
□ 1 句招牌结尾
```

### 5.3 永远不预测短期价格

```
❌ "tesla goes to $500 by friday"  → 法律风险 + 输了人设崩
✅ "tesla q1 + fsd subs trajectory points to a software co rerating in 12-24 months" → observation
```

### 5.4 引用 primary source

```
反 aggregator 自我保护：
  · 直接引用 SEC / earnings call / blog post
  · 不要纯引用 bloomberg / reuters 复述
  · 在 reply 里贴原始链接
```

### 5.5 24 hr 后写 follow-up

```
所有重大 newsjacking 必须 24 hr 后发 follow-up：

"24h check on [event]:
- what happened: [事实]
- what i predicted: [我的 take]
- what i missed: [自我修正]

[update on 30-day prediction if any]"

为什么：建立 track record + 自我 accountability + 受众回头。
```

---

## 六、Pre-Written Reaction Backlog

### 6.1 提前写好 7 类的"骨架"

每个突发触发器**事件发生时缺乏的不是观点，是模板**。

```
M1 Day 1: 一次性写 7 个 reaction template skeleton
存在 [_prompts-pack.md §25](./_prompts-pack.md) 

每个 skeleton:
  · 主推填空模板（fill-in-the-blanks）
  · Reply 1 / 2 / 3 模板
  · Alt-text 模板
  · 跨 series 引用句

突发时只填具体数字 + 公司名
60 min 反应变 15 min 反应
```

### 6.2 月度 backlog 维护

```
每月最后一天 retro 时：
  · review 上月跑过哪些 newsjacking
  · 标 "ROI 高" 的 → 把那个 framework 加进 backlog
  · 标 "ROI 低" 的 → 分析为什么慢 / 视角不够
  · 加 1 个新事件类型（如果有新趋势）
```

---

## 七、5 件不要做的

```
1. ❌ 复制别人的 take（anti-aggregator 严打）
2. ❌ 反应每个突发（每天 1-2 个 P0/P1 是上限）
3. ❌ 在没数据时硬反应（错的 take 影响信誉 6 个月）
4. ❌ 借势 嘲讽 / 攻击 / 政治（短期火，长期毁）
5. ❌ 只发 newsjacking 不发常规内容（人设变 reactive，无品牌沉淀）
```

---

## 八、整合到 [_self-operation-handbook.md](./_self-operation-handbook.md)

### 8.1 Daily SOP 加 newsjacking 监控

每天早晚 2 次：

```
05:30 起床检查 push（5 min）：
  · Grok / Bloomberg / CNBC / Stocktwits 是否有 P0 / P1 信号
  · 有：决定 60 min 内是否反应（参考 §三模板）
  · 无：按常规 daily SOP 跑 §14

22:00 睡前 review（5 min）：
  · 当天有无错过的 newsjacking 机会
  · 标记到次日 retro
```

### 8.2 §八 Crisis Playbook 加类型 I

```
类型 I · 突发新闻反应（newsjacking 机会）
  · 详见 [newsjacking-playbook.md §三 7 类反应模板](./newsjacking-playbook.md)
```

### 8.3 prompts pack 加 §25

```
[_prompts-pack.md §25 Newsjacking Generator]
输入：事件 + 当前数据
输出：60 min 主推 + reply 1/2/3 + alt-text
```

---

## 九、季度评估 newsjacking ROI

每季度 review：

```
□ 当季总 newsjacking 次数（应 36-66 次 / 季）
□ 平均 imp / newsjack 推（应 > 常规推 5×）
□ 平均 follower delta（应 > 常规推 3×）
□ Top 3 newsjack ROI 最高的事件类型
□ Bottom 3 ROI 最低的（可减少 monitoring）
□ 错过的 P0 / P1 事件数（应 < 10%）
```

---

## 十、本文档维护

| 频率 | 动作 |
|---|---|
| 每天早晚 | §四 push 监控 |
| 每周日 retro | 上周 newsjacking 复盘 |
| 每月最后一天 | §6.2 backlog 维护 + 评估反应模板 |
| 每季度 | §九 ROI 评估 |
| 每年 | 全文 rewrite · 更新触发器类型 + 反应窗口 |

---

**版本**：v1.0 · 2026-05-30
**配套**：[algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [growth-mechanics-2026.md](./growth-mechanics-2026.md) · [_prompts-pack.md](./_prompts-pack.md) (§25 Newsjacking Generator) · [_self-operation-handbook.md](./_self-operation-handbook.md)
