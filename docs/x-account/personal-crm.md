# Personal CRM Playbook · Top Fans 追踪 + 1:1 池子培养

> 状态：v1.0 · 2026-05-30
> 触发：v3 collab 协议追踪 30 个外部目标，**完全没有追踪自己的 50-200 个最活跃受众**——这是 1:1 Briefing / Founding Member / Paid Tier 的真正基础。
> 配套：[peer-collab-playbook.md](./peer-collab-playbook.md) · [audience-research.md](./audience-research.md) · [revenue-stack-2026.md](./revenue-stack-2026.md)

---

## 一、为什么必须追踪自己的核心受众

### 1.1 100 True Fans 经济学

```
[a16z 2024 框架](https://a16z.com/1000-true-fans-try-100/)：
  · 100 fans × $100/year = $10K/月（生活费够）
  · 100 fans × $500/year = $50K/月（全职 + 团队）
  · 100 fans × $1000/year = $100K/月（独立媒体公司）

对比：100K 浅 followers × $1/year = $8K/年（远低于 100 true fans）

[Kevin Kelly 1000 True Fans 2008]：deeper 1000 fans × $100/year =
$100K/year sustainable creator income。

行业一致结论：核心 100-1000 fans 是 creator 业务的真正基础。
```

### 1.2 你目前阶段（M1 早期）

```
v3+v4 系统目标：
  · M2 末粉丝 5K-12K
  · 但其中 100-300 是 true fans（高互动 / 高 LTV）
  · 这 100-300 = 你 90% 收入潜力

如果不追踪：
  · 错过谁是 1:1 候选（按粉丝量 8 个月才偶然碰到）
  · 错过 Founding Member 50 个 cap（早期填满 = $25K 一次性）
  · 没法做 personalized DM / cold call
  · 不知道 cohort 流失率
  · 升级 Paid Tier 时盲卖
```

### 1.3 行业证据（2026-05 联网验证）

- [a16z · 1000 True Fans? Try 100](https://a16z.com/1000-true-fans-try-100/)：少数 superfans × 高单价 = 真实业务
- [andrew.today Personal CRM guide](https://www.andrew.today/p/how-to-build-a-100x-personal-crm)：top creator 都建 personal CRM
- [Tradablebits 2025](https://blog.tradablebits.com/transforming-fans-into-super-fans)：industry pouncing on superfan idea with renewed vigor
- [Influencer-Hero CRM 2026](https://www.influencer-hero.com/blogs/top-influencer-crm-and-best-relationship-management-tools)：creator CRM 是 2026 必须 infrastructure

---

## 二、Personal CRM 数据 schema

### 2.1 表格字段（Notion / Airtable / Google Sheets）

```
| ID | Handle | Name | Tier | Stage | Followers |
| First seen | Last interacted | Reply count | Quote count |
| Bookmark count | DM count | 1:1 booked? | Founding? |
| Paid sub? | Email known? | Email | Topics interested |
| Notes | Next action | Next review |
```

### 2.2 7 状态梯度（Stage）

```
1. lurker (0-2 月)
   · 只 like / 不 reply
   · 数量最大（90%+ followers 在这层）
   · 价值：minor

2. reply (2-4 月)
   · 偶尔 reply 你的主推
   · 1-3 次 / 月
   · 价值：medium · 已表达兴趣

3. bookmark (3-6 月)
   · 看到 bookmark 行为（X 不 notify，但 hash tracker 可识别 high engagement 受众）
   · 价值：high · 明显在用你的内容

4. quote (4-8 月)
   · quote-tweet 你的某条推
   · 价值：very high · 已成 promoter

5. DM (4-12 月)
   · 主动 DM 提问 / 反馈
   · 价值：极高 · 已建立 1:1 关系

6. 1:1 / paid (6-15 月)
   · 已 booked 1:1 Briefing 或 paid newsletter sub
   · 价值：top tier · 直接收入

7. Founding (12+ 月)
   · $499/year founding member 或 lifetime member
   · 价值：核心圈 · 长期 ambassador
```

### 2.3 Tier 分类（基于价值）

```
S Tier · top 10
   · 我跟他互动了 50+ 次
   · 他付费了或 1:1 / Founding
   · 他在自己 timeline 公开提过我
   · 我应该叫得出他名字

A Tier · top 10-50
   · 25-50 次互动
   · paid sub 或常 reply 我每条
   · 他给我提过有价值反馈

B Tier · top 50-200
   · 10-25 次互动
   · 偶尔互动 + 偶尔 quote / bookmark
   · 是潜在 A Tier

C Tier · 200-1000
   · < 10 次互动
   · 偶尔 reply / like
   · 是 prospects pool

D Tier · 其余 followers
   · 不追踪（数据噪音）
```

---

## 三、初始建表（M1 Day 1，60 分钟）

### 3.1 找出当前 Top 50 fans

```
Step 1（15 min）· 通过 X analytics
  · X profile → Analytics → Top engagers (last 90 days)
  · export 列表
  · 去重 + 排除 obvious bots

Step 2（15 min）· 通过 reply 历史
  · X profile → 你最近 30 天的 main tweets
  · 看每条的 replies
  · 记下重复 reply 你的人

Step 3（15 min）· 通过 newsletter 数据
  · Tally / Beehiiv 后台看 active subscribers
  · 看哪些人 open rate > 80%
  · 这些人重叠 X follower

Step 4（15 min）· 综合 + 录入 Notion
  · 50-100 个候选录入
  · Stage 初始按已知行为标
  · 不知道的标 lurker
```

### 3.2 Notion 模板（推荐 schema）

```
[Database: Personal CRM]

Properties:
  · Handle (Title)
  · Name (Text · 真名如果知道)
  · Tier (Select · S/A/B/C/D)
  · Stage (Select · lurker/reply/bookmark/quote/DM/1:1/Founding)
  · Followers (Number)
  · Topics (Multi-select · tesla/AI race/markets/IPO/cultural/build)
  · Reply count (Number)
  · Quote count (Number)
  · DM count (Number)
  · 1:1 booked (Checkbox)
  · Founding (Checkbox)
  · Paid sub (Checkbox)
  · Email known (Checkbox)
  · Email (Email · 如已知)
  · First seen (Date)
  · Last interacted (Date)
  · Notes (Text · 自由记录)
  · Next action (Text · 下一步动作)
  · Next review (Date · 下次 review 日期)

Views:
  1. All by Tier
  2. Recent interactions (sort by Last interacted desc)
  3. Need re-engagement (Last interacted > 30 days ago)
  4. Top 10 (S Tier only)
  5. Stage progression candidates (high stage + recent interaction)
  6. Email pool (Email known = checked)
```

---

## 四、Weekly maintenance（10-15 min/周日）

### 4.1 周日 retro 加新动作

```
□ 10 min: 录入本周新互动
  · 看本周 X timeline 谁 reply / quote 我
  · 加进 Personal CRM（如果没有）
  · 升 Stage（如果有变化）
  · 更新 Last interacted date

□ 5 min: review S Tier (10 人)
  · 谁 30 天没互动？ → 主动暖（reply 他们一条）
  · 谁有升 Stage 信号？ → 加 Next action

□ 月度（不是周度）：
  · review B + C Tier
  · 升级 candidates
  · 删除 inactive 的（90 天 0 互动）
```

### 4.2 暖关系的 4 个动作

```
1. 主动 reply 他们的推
   · 不夸赞 · substantive 反馈
   · 这是最常见 + 最有效

2. Quote-tweet 他们的有价值 take
   · 加你视角
   · 跟 [peer-collab-playbook.md §三协议 7](./peer-collab-playbook.md) 双向放大

3. DM 1 句话感谢 / 反馈
   · "good take on [event] earlier this week"
   · 不卖产品 · 真实 reaction

4. Reading List 引用他们
   · 如果他们写 newsletter / blog
   · v4 用 Quote-tweet 归因（[growth-mechanics-2026.md §六](./growth-mechanics-2026.md)）
```

---

## 五、Tier 升级触发器

### 5.1 lurker → reply

```
触发：他们第 1 次 reply 你的主推

动作：
  · 录入 Personal CRM Stage = reply
  · review 他们 timeline 30 秒
  · 评估是不是 spam / bot
  · 如真：reply 他们一句话回应
```

### 5.2 reply → bookmark / quote

```
触发：
  · X analytics 显示某条主推 bookmark > 5%
  · 或他们 quote-tweet 你

动作：
  · 升 Stage
  · S Tier 候选加注 ⭐
  · 主动 reply 他们 2 条（非 spam）
  · 加进 weekly review S Tier 池
```

### 5.3 quote → DM

```
触发：他们 DM 你提问 / 反馈

动作：
  · Stage = DM
  · 详细 reply（5-10 min 写）
  · 不 immediate sell
  · 1 周后 follow-up（"see if [recommendation] worked for you"）
  · 录入 email（如他们提到）
```

### 5.4 DM → 1:1 / paid

```
触发：他们 ask "do you offer 1:1?" 或 "is there a paid newsletter?"

动作：
  · 直接 send link / Calendly
  · 提供 first-time 8 折券（FOUNDER10）
  · 转 1:1 → 跟踪 booking
  · 转 paid → Beehiiv 后台追踪
  · Tier S 锁定
```

### 5.5 1:1 → Founding

```
触发：1:1 / paid 之后 6 个月仍活跃 + paid

动作：
  · DM offer Founding Member ($499/year)
  · 强调："first 50 only" + lifetime badge + 4× 1:1
  · 不 push · 拒绝接受 · 仍 retain 关系
```

---

## 六、Outreach Cadence（按 Tier）

### 6.1 频率指南

```
S Tier (10 人)
  · 每周至少 1 次 reply / quote
  · 每月 1 次 DM
  · 每季度 1 次 personalized email

A Tier (40 人)
  · 每月至少 2 次 reply
  · 每季度 1 次 DM

B Tier (150 人)
  · 每月 1 次接触（reply 或 quote）

C Tier (500-1000 人)
  · 季度 1 次（在 Reading List 提过）
```

### 6.2 永远不要

```
❌ Mass DM "hey check out my newsletter"（spammy）
❌ 自动化 reply（每个 reply 必须真实）
❌ 把 personal CRM 公开（receivers 知道被追踪 = 退订）
❌ 区别对待 Tier（S 受众享受公开关怀，A-D 受众也保持公开礼貌）
❌ "follow me back" / "promote each other" 之类乞讨
```

---

## 七、月度 Personal CRM Review (30 min)

每月最后一天加进 monthly retro：

```
□ Top 10 S Tier review
  · 谁本月升 Stage？
  · 谁本月 inactive？
  · 谁是新 S Tier 候选？

□ Tier movement
  · 多少 lurker → reply（健康指标）
  · 多少 reply → bookmark
  · 多少 bookmark → quote
  · 多少 quote → DM
  · 多少 DM → 1:1 / paid
  · 多少 paid → Founding（M3+）

□ 清理 D Tier
  · 90 天 0 互动 = 删除
  · 保持表格干净

□ Email 收集进度
  · S Tier 应该 80%+ have email
  · A Tier 50%+
  · B Tier 20%+
  · 缺 email 的 S Tier ★ 优先 outreach

□ 漏斗 health
  · S Tier 数 / 总 followers
    · M2: 0.5-1%（ok）
    · M3: 1-2%（healthy）
    · M5: 3-5%（excellent）
```

---

## 八、Founding Member 50-cap 池子培养

### 8.1 时间线

```
M1 (now)        : 录入 Personal CRM 50-100 人
M2 (1-3 月)     : Tier S 锁定 5-10 人
M3 (3-6 月)     : 启动 Paid Newsletter ($10/月)
                  Tier S 给 8 折券，期望 8/10 转化
M4 (6-9 月)     : 启动 Founding Member ($499/year, 50 cap)
                  Top 10 S Tier 直接 DM offer
                  10 个全填的话 = $5K 立刻
                  之后慢推到 25-30 人 = $12-15K
M5 (9-12 月)    : 50-cap 满 = $25K 一次性 + 长期 ambassador
M6+             : 不再开放 Founding (强稀缺感)
                  之后 paid 转化全靠 $10/月 路径
```

### 8.2 Founding Member 设计

```
价格：$499/year
位置：50 个永久 cap

权益：
  · "Founding Member" badge（X profile 显示）
  · 4 × 1:1 Briefing / 年（即 $99 × 4 = $396 价值）
  · Cheat Sheet PDF 提前 1 周
  · Annual Outlook PDF 提前 / 含
  · 月度 group AMA Spaces（仅 founding）
  · 永久 access · 不涨价

营销：
  · "first 50 only · then closed forever"
  · "doubles as deepest support, not just transaction"
  · "your name in the colophon of all annual outlooks"
```

### 8.3 Outreach DM 模板（M4）

```
hey [first name],

quick + specific.

i'm capping founding member at 50.
$499/year · 4 × 1:1 + early cheat sheet + monthly AMA + permanent badge.

based on our [N] interactions over the past [N] months,
i'd be honored to have you in.

if interested, here's the link: [Stripe Checkout]
if not, no follow-up. our public conversation continues.

— @Skub0k
```

---

## 九、Personal CRM 与其他文档的接入

| 文档 | 接入点 |
|---|---|
| [peer-collab-playbook.md](./peer-collab-playbook.md) | tracking 同行（外部）vs personal CRM（自己受众）严格分开 |
| [audience-research.md](./audience-research.md) | quarterly survey 候选优先选 S + A Tier |
| [revenue-stack-2026.md](./revenue-stack-2026.md) | 1:1 / paid / Founding 转化漏斗 = 这套 CRM 的输出 |
| [_self-operation-handbook.md](./_self-operation-handbook.md) | weekly retro 加 §四 maintenance · monthly retro 加 §七 review |

---

## 十、本文档维护

| 频率 | 动作 |
|---|---|
| 每周日 retro | §四 weekly maintenance（10-15 min）|
| 每月最后一天 | §七 monthly review（30 min）|
| 每季度 | review Tier 比例 / 漏斗 health |
| 每年 | review 是否升级到付费 CRM 工具（Streak / Folk / Affinity）|

---

## 十一、5 件不要做

```
1. ❌ 把 Personal CRM 公开（信任崩）
2. ❌ Mass action（mass DM / mass like / mass follow）
3. ❌ 用付费 mass tool（v4 anti-aggregator 严打）
4. ❌ 区别对待（公开 reply 区不能看出谁是 S Tier）
5. ❌ 强 conversion（push 1:1 / push Founding）
```

---

**版本**：v1.0 · 2026-05-30
**配套**：[peer-collab-playbook.md](./peer-collab-playbook.md) · [audience-research.md](./audience-research.md) · [revenue-stack-2026.md](./revenue-stack-2026.md) · [_self-operation-handbook.md](./_self-operation-handbook.md)
