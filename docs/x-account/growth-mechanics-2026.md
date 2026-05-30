# Growth Mechanics 2026 · 2026 算法新机制实操

> 状态：v1.0 · 2026-05-30
> 触发：2026 年 X 算法新增 / 重大变动机制（small account boost / not_dwelled / quote-as-attribution / Articles $1M Contest / quote engineering）。本文档把这些机制变成实操 SOP。
> 配套：[algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [signature-series.md](./signature-series.md) · [peer-collab-playbook.md](./peer-collab-playbook.md)

---

## 一、本文档涵盖的 6 个机制

| # | 机制 | 触发时机 | 影响层级 |
|---|---|---|---|
| 1 | First 60-min Engagement Protocol | 每条主推发布后 | 决定 95% 分发 |
| 2 | Stop-Scroll Hook（反 not_dwelled）| 每条推 / 视频开头 | 算法首层评分 |
| 3 | Bookmark Engineering | 每条主推 | 长尾 + 复利 |
| 4 | Quote-Tweet Engineering（被 quote）| 周 1-2 条主推 | 跨圈曝光 |
| 5 | Quote-as-Attribution（引用别人）| Reading List / 评论 | 合规 + collab |
| 6 | Small Account Boost Window 捕获 | M1（< 1K 粉）期间 | 一次性窗口 |

---

## 二、First 60-min Engagement Protocol（首小时 SOP）

### 2.1 机制

```
T+0 (发布)
   · 算法发到 50-100 个测试集（你关注者 + small OON 池）
   · 开始测 engagement-per-impression

T+30 min
   · 第一波打分截止
   · 打分 = (replies × 13.5) + (bookmarks × 12) + ... + (not_dwelled × -0.74)
   · 高分 → 推到 1K-10K imp 池
   · 低分 → 锁死在 100-500 imp

T+60 min
   · 第二波 / 决定性扩散
   · 通过 = 起飞（10K-100K imp）
   · 不通过 = 寿终正寝
```

**绝大多数主推卡在 T+30 关。原因：作者在发完后**完全不主动**。**

### 2.2 6 步 SOP（每条主推后 60 分钟内必做）

```
T+0    发主推
       ↓ 立刻
T+15s  发 reply 1（喂算法的 text TL;DR + 链接）
       ↓ 5 分钟内
T+5min 发 reply 2（CTA + 钩子）
       ↓ 10 分钟内
T+10min  在自己主推下面引爆 1 条 high-signal 自己 reply
         （增加 reply count + 给受众"这有讨论"信号）
       ↓ 15 分钟内
T+15min  去 3-5 个 Tier A reply 战场打 reply
         （让自己出现在他们 timeline 头部，吸虹吸流量）
       ↓ 30 分钟内
T+30min  检查主推是否进入"扩散期"（imp > 1K）
         如果没有 → 发第 4 个 reply（"data sources" 或 "full piece"），增加 thread depth 信号
       ↓ 60 分钟内
T+60min  评估：如果 imp 仍 < 500 = 这条死了，move on
                imp 1K-5K = 中等表现，等待长尾
                imp > 5K = 起飞，加倍维护（接 quote、接 reply）
```

### 2.3 自我 reply（T+10min 这一步详解）

主推下面发 1 条**实质性补充**：

```
✅ 好的自我 reply：
   "context: anthropic was at $80B in may 2025.
    that's 12× in 12 months. either AI capex pricing reset or this is the bubble peak.
    probably both."

❌ 差的自我 reply：
   "thoughts?" / "agree?" / "let me know"

✅ 好的自我 reply：
   "1 thing this thread doesn't cover:
    xai's 50× multiple is 2.5× richer than openai's.
    that's where the real story is."

❌ 差的自我 reply：
   "if you found this useful, follow + like!"
```

自我 reply **必须有内容增量**（数字 / 视角 / 反差）。空洞的"thoughts?"算 spam，反而扣分。

### 2.4 First 60-min checklist（贴墙上）

```
□ 主推发了 (T+0)
□ Reply 1 (text TL;DR + link) 发了 (T+15s)
□ Reply 2 (CTA) 发了 (T+5min)
□ 自己在主推下补 1 条实质性 reply (T+10min)
□ 跑 3-5 个 Tier A reply 战场 (T+15min)
□ T+30min 检查 imp 数
□ T+60min 评估 + 决定下一动作
```

详细 prompt 见 [_prompts-pack.md §23 First 60-min Engagement Scripts](./_prompts-pack.md)。

---

## 三、Stop-Scroll Hook 工程（反 not_dwelled）

### 3.1 机制

`not_dwelled` 信号（[Truth Tide](https://members.truthtide.tv/)）：用户看到推不停 1 秒就划过 = 算法降权 -0.74（比 like 的 +0.5 反向更大）。

**算法判定 dwell**：用户停留 ≥ 0.8 秒 = dwelled；< 0.8 秒 = not_dwelled。

3 秒以内决定大局。

### 3.2 长推 / 长 form 的 stop-scroll 6 大模式

```
模式 1: 数字开头
   "$965B is not the AI bubble peak. it's the floor."
   → 大数字 + 反常识断言 = 必停

模式 2: 时间感 + 集合
   "30 days that reshape the AI race ↓"
   → 数字 + 集合感 + 钩子箭头

模式 3: 对比反差
   "anthropic this week: $65B raise + claude 4.8 + mythos.
    openai this week: another vague post."
   → 同时段对比 = 视觉对比

模式 4: 问号悬念（少用）
   "the spacexai s-1 is 412 pages.
    here's the 1 page that matters."
   → 数字 + 选择 = 受众想看哪页

模式 5: 第一人称 confession
   "i was wrong about grok V9 for 3 weeks.
    here's what i missed."
   → 诚实 + parasocial = 必停
```

### 3.3 不要做的 stop-scroll 错误

```
❌ "thread incoming on..." → 受众预期 thread = 划过（v4 thread 减权）
❌ "let me share my thoughts on..." → 演讲腔 = 划过
❌ "[generic topic] is changing fast..." → 没有具体性 = 划过
❌ Emoji 开头 → 视觉杂 = 算法读不懂 = 划过
❌ 全大写开头 → AI tone = 划过
❌ "Thread 1/15 ↓" → 同 thread 减权
```

### 3.4 视觉 hook（图片 / 视频）

如果带图：

```
✅ 数据表格图（前 3 秒看到具体数字）
✅ 引用 + 反常识 take 叠加
✅ 时间线（视觉密度高）

❌ 抽象 / artistic 图（受众猜不出主题）
❌ 风景 / 人物（受众疑惑"为什么发这个"）
❌ 表情包（除非 humor 推）
```

视觉 hook 的核心：**3 秒内信息密度 ≥ 3 个数字 / 名词**。

### 3.5 hook A/B 自检

每条主推发布前问：

```
1. 不读完整推 / 只看第 1 行 → 我会停吗？
2. 第 1 行有具体数字 / 名词吗？
3. 第 1 行有立场（断言、反差、情绪）吗？
4. 第 1 行 ≤ 50 字符吗？（首屏可见）
```

3 个 ✅ 才发。否则改钩子。

---

## 四、Bookmark Engineering

### 4.1 机制

Heavy Ranker 评分中 bookmark 权重 +12，仅次于 reply +13.5。**1 bookmark ≈ 24 likes ≈ 12 retweets**。

为什么 bookmark 这么强：

- bookmark = "保留价值"，算法识别为高质量信号
- bookmark 不像 like 容易泛滥（用户对 bookmark 谨慎）
- bookmark 行为暗示长期记忆 = 复利

### 4.2 5 大 bookmark-trigger 模式

| 模式 | bookmark 率 | 例 |
|---|---|---|
| **Reference list（结构化清单）** | 8-15% | "5 things that decide whether tesla q2 beats" |
| **Specific data table** | 6-12% | "AI race · valuations + multiples" |
| **Numbered checklist** | 5-10% | "13 humor pillars · how to choose by audience" |
| **Anti-cliché take + 数据支持** | 4-8% | "anthropic at $965B is conservative · here's why 32× isn't expensive" |
| **Long-form summary（4000-char single post）** | 7-15% | Sunday Long Read 摘要 |

普通 take 推 bookmark 率：0.5-2%。

### 4.3 让推 bookmark-worthy 的 6 条

```
1. 数字密度 ≥ 3
   一段话至少 3 个具体数字。
   "anthropic $965B" + "$30B annualized" + "32× multiple" = 3 个

2. 结构化（list / table / 编号 / 时间线）
   单段拒绝。受众"以后再读"必须能 scan，不是必须重读。

3. 可重复使用 framing
   "3 takes" / "5 things" / "current state" 这种结构允许受众
   "下次想用类似 framing 时回头看"。

4. 未来时间锚
   "watching next 90 days" / "by june" → 受众未来回头查准确性。

5. 对比矩阵
   A vs B / before vs after / consensus vs reality = 视觉密度高。

6. "我的立场" + "为什么"
   bookmark 的真正动机 = "以后引用这个 take"。
   没有立场 → 没有 bookmark 价值。
```

### 4.4 直接的 bookmark CTA（轻度，不要每条都来）

每周 1-2 条主推可以加（不更多）：

```
轻度：
"bookmark this if you keep forgetting [核心数字]"
"saving this for the next [event] ipo discussion"
"keep this for the q2 earnings recap"

不要：
"please bookmark!" → spammy
"if you found this useful, bookmark + like" → 受众反感
```

### 4.5 NOT to do

```
❌ pure quote-only（没有自己的 take = 没保存价值）
❌ "what do you think?" 收尾（这是 reply bait，不是 bookmark bait）
❌ "thread 1/15" 起头（v4 thread 默认禁用）
❌ Emoji 占 30%+ 字符（视觉重 = 信号弱）
❌ 全 caps 强调（视觉重 = 不像 reference）
```

---

## 五、Quote-Tweet Engineering（让别人 quote 你）

### 5.1 价值

Quote 权重 +6.4，介于 reply 和 retweet 之间。**关键差异**：被 quote 时，原推获得对方关注者池的曝光，等于免费跨圈广告。

```
1 reply  → 受众停留在你的 thread
1 retweet → 受众看到你的内容（无对方背书）
1 quote  → 受众看到你的内容 + 对方背书 + 跨圈
```

### 5.2 4 种"高 quote 率"内容模式

| 模式 | 为什么被 quote | 例 |
|---|---|---|
| **Strong contrarian take** | quoter 想加 "+1" 或 "-1" | "anthropic $965B is the floor not peak" |
| **Specific data point** | quoter 想用作引用源 | "fsd subs hit 1.28M, +51% YoY" |
| **Framework / mental model** | quoter 想推荐给 followers | "AI race in one sentence: compute scale × data flywheel" |
| **Concise prediction** | quoter 想 6 个月后回头看 | "spacexai ipo prices at $1.85T median. revisiting 7/13." |

### 5.3 高 quote 率收尾句

```
✅ 高 quote 率：
   "3 takes. all could be wrong. that's why i write them down."
   "revisiting in 30 days."
   "calling it. screenshot for accountability."
   "the contrarian view. let me know where i'm wrong."

❌ 低 quote 率：
   "thoughts?"
   "who agrees?"
   "let me know in replies"
```

理由：高 quote 率收尾**邀请有立场的回应**，而不是开放式讨论。有立场的人愿意 quote 加自己的视角。开放式问句只会引发 reply（reply 也好，但 quote 跨圈更值）。

### 5.4 频率纪律

```
每周 1-2 条长推故意设计成"高 quote 率"
（不能每条都强 take 否则人设畸形）

通常放在：
  · Monday Empire Map（周一开局，最大窗口）
  · Sunday Long Read 摘要（周日复盘，受众最有时间消化）

不放在：
  · 每天 daily 5 humor（那些是 dwell + bookmark + reply 优化）
  · Friday Reading List（那是 give 别人 quote，不是 ask quote）
```

### 5.5 配合 collab 协议

详见 [peer-collab-playbook.md §三协议 7](./peer-collab-playbook.md)（v4 新增 quote engineering 协议）。

---

## 六、Quote-as-Attribution（引用别人时的合规）

### 6.1 X 5/2026 反 aggregator 规则

[Forbes 2026-05-29](https://www.forbes.com/sites/conormurray/2026/05/29/x-cracks-down-on-stolen-content-demonetizes-major-account-for-gaming-monetization-system/)：X 现在判定"程序化重发别人 viral 内容"为内容窃取，**减 60% 收入分成 + 下个周期再减 20%**。

### 6.2 Friday Reading List 协议升级

v3 协议：`@author + URL + 1 sentence take`

**v4 协议**：

```
对 X 平台内容（thread / long-form / Article）：
  ✅ Quote tweet + my take + my data
  ❌ @author + URL + my take（这是 v3 旧协议，可能被算法判 aggregator）

对外部 newsletter / Substack / Beehiiv / blog：
  ✅ @author + URL + my take（外部链接 + 真正写出我的视角）
  · 这部分 X 不会判 aggregator（外部内容已自带原始来源）

对其他人的 Article：
  ✅ X 内嵌引用（粘贴 X Article URL，X 自动 unfurl 为 card）+ my take
  ❌ 截图别人 Article 内容（绝对禁止）

绝对禁止：
  ❌ 截图别人的推 / Article（X 严打 + 受众反感）
  ❌ 复制别人的 thread 关键句作为自己的（plagiarism + algorithm penalty）
  ❌ 大量重复别人的 viral take 不加自己的视角
```

### 6.3 Friday Reading List · v4 标准格式

```
长推主体（取代 v3 的 6-推 thread）：

friday reading list · week N.

5 things i read this week that changed how i'm thinking about [本周主题]:

1/ [@author] on [topic]:
   [my one-sentence take]
   [why it matters in 1 sentence]

2/ [@author] on [topic]:
   ... (same structure)

3/ ...
4/ ...
5/ ...

(my contrarian pick: 5/5 disagrees with my monday take. healthy.)

bookmark for the weekend. forward to anyone you read with.

reply 1（链接区）：
sources:
- 1/ [@author URL]
- 2/ [@author URL]
- 3/ [@author URL]
- 4/ [@author URL]
- 5/ [@author URL]

(for X-platform sources: see linked quote-tweet thread →)

reply 2（X 平台引用）：
quote-tweets of any X-platform sources from above ↑
（这里逐条 quote-tweet 引用的 X 内容 + 1 句话 take）

reply 3（CTA）：
weekly digest: [Beehiiv link]
spaces tonight 21:00 BJ to discuss
```

详见 [signature-series.md §四 Friday Reading List v4 升级](./signature-series.md)（已更新）+ [peer-collab-playbook.md §三协议 2 v4 升级](./peer-collab-playbook.md)。

### 6.4 自检 protocol

每发 Reading List 前问：

```
□ X 平台内容是 quote-tweet 还是 @ + URL？
  → quote-tweet（v4 标准）
□ 每篇推荐都有自己的 1-2 句独特 take（不是改写作者原话）？
□ 没有截图别人推 / Article 内容？
□ 至少 1 篇推荐和我立场不一致？
□ 末尾 CTA 不是"please follow / like"？
```

---

## 七、Small Account Boost Window（M1 关键）

### 7.1 机制

```
followers < ~500    · 较强 boost · 第一波 quality posts 算法主动放量
followers 500-2K   · 中等 boost · 仍有但减弱
followers 2K-5K    · 弱 boost   · 边际效用递减
followers > 5K      · 无 boost   · 完全靠常规算法
```

[fansgurus 2026 报告](https://fansgurus.com/blog/9-twitter-growth-methods-2026)：window 一旦关闭就不再开。

### 7.2 你目前阶段

@Skub0k 在 M1 早期，估计 ~50-300 粉，**正在最高 boost 期**。

### 7.3 capture 此窗口的 7 个动作

```
1. 不要"先暖一暖再发好的"
   算法在测的就是头几周。lazy 内容 = 浪费窗口。

2. 每条主推都假设"会被 1000 个陌生人看到"
   即便实际 imp 是 100。质量永远 dial 到 max。

3. 频率上调（M1 暂时 +30%）
   v4 默认 7 推/工作日 → M1 暂时 8-9 推/工作日（多发 1 条 humor + 1 条 expansion）
   原因：boost 期 = 多发 = 多次进入算法测试 = 多次起飞机会

4. Long-form 优先
   small account boost 给的是 quality post boost。
   long-form bookmark 率高 = 拿满 boost 信号。
   Daily prompt §14 输出在 M1 期间默认偏向 long-form 单推。

5. 主推后必跑 First 60-min SOP（§二）
   boost 期 + first 60-min 完美执行 = 起飞概率最大化。

6. 数据图 / 视频 优先（图片 +30-50%, 视频 +200-300%）
   M1 第 1 周就发第 1 条 Saturday vertical video。

7. 跨 Community post（Communities 公开化）
   M1 Day 1 就加入 2-3 个 niche Community（[algorithm-2026-playbook.md §四](./algorithm-2026-playbook.md)）
   boost 期 + Community post = 双 boost 叠加。
```

### 7.4 窗口结束信号

```
触发 1：粉丝突破 1K，imp/post 平均增长不再 > 30% / 月
触发 2：单条推峰值 imp 不再容易 > 5K
触发 3：30 天涨粉率从 > 50% / 月降到 < 20% / 月

任一触发 = boost 窗口已实质关闭，回归常规节奏。
```

到那时候，主战场转移到：

- Friday Reading List collab 池
- LinkedIn Pulse 跨圈
- Beehiiv Boost network
- Saturday video 跨平台分发

---

## 八、X Articles $1M Contest 投递（v4 新机制）

### 8.1 机制

[X 官方 2026-05](https://business.x.com/en/blog/creator-updates-and-article-contest-replacement)：每月 $1M 奖金池给 X Articles，按 impressions / engagement / reads 综合排名前 N 名分奖金。

### 8.2 投递流程

```
Step 1: 在 X 上点 "Articles" 入口（Premium+ 才有）
Step 2: 写完 Article（按 [x-articles-playbook.md] 模板）
Step 3: 发布前勾选 "Submit to monthly contest"
Step 4: 发布
```

### 8.3 提高获奖概率的 5 个动作

| # | 做什么 | 为什么 |
|---|---|---|
| 1 | 标题 60-80 字符 + 数字 + 反常识 | X Articles 搜索 + Discover 板块抓取标题 |
| 2 | 头图用 [visual/template-decoder-frame.html](./visual/template-decoder-frame.html) | 视觉一致 = 受众识别 = 持续阅读时间 |
| 3 | 文章 1500-3000 字（不是 5000+）| 完读率高的文章排名更靠前 |
| 4 | 发布后跑 First 60-min SOP（§二）| Article 也吃首小时 engagement |
| 5 | 在 Substack / Bluesky / LinkedIn 同步推荐 | 跨平台流量回灌（[cross-platform-funnel.md](./cross-platform-funnel.md)）|

### 8.4 现实预期

```
M1: < 1K 粉，几乎不可能进 contest 排名
M2: 1K-5K，可能 occasional 入榜（$50-500 月奖金）
M3: 5K-15K，每月 1-2 篇有机会（$100-1000 / 月）
M4: 15K+，主力收入路径之一（$500-3000 / 月）
M5+: 50K+，进入稳定 contest 头部（$1K-5K / 月）
```

实际数字 X 官方未公开（每月奖金分布私密），上述是行业估计。

### 8.5 与 v3 收入预期的关系

v3 假设 X ad share 是主要收入。v4 现实：

```
M1-M2: contest 收入主要 = $50-500 / 月（算补贴）
M3: contest 可能超 ad share（$500-1500 vs ad share $300-1000）
M4-M5: contest 是稳定第二大收入（仅次于 paid newsletter）
```

详见 [x-articles-playbook.md §十二 $1M Contest playbook](./x-articles-playbook.md)（v4 新增）。

---

## 九、整合 · 7 个机制的协同节奏

```
┌────────────────────────────────────────────────────┐
│ 每条主推                                           │
│   1. Stop-Scroll Hook（前 3 秒，§三）              │
│   2. Bookmark Engineering（数字密度 / 结构化，§四）│
│   3. First 60-min SOP（发布后立刻，§二）            │
└────────────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────────────┐
│ 每周 1-2 条长推                                    │
│   4. Quote-Tweet Engineering（§五）                │
└────────────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────────────┐
│ 每周 Friday Reading List                          │
│   5. Quote-as-Attribution（§六）                   │
└────────────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────────────┐
│ 每周 Sunday Long Read                             │
│   6. X Articles Contest 投递（§八）                │
└────────────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────────────┐
│ M1 期间持续                                        │
│   7. Small Account Boost Window 捕获（§七）        │
└────────────────────────────────────────────────────┘
```

每个机制不孤立。**整合执行 = 单次主推 6× ROI**（每个机制独立 +20-50%，叠加复利）。

---

## 十、本文档维护

| 频率 | 动作 |
|---|---|
| 每周日 retro | 复盘上周 First 60-min SOP 执行率（应 > 80%）|
| 每月最后一天 | review §七 boost window 是否仍开（看粉丝数 + 30 天涨粉率）|
| 每月最后一天 | 看 §八 contest 投递结果 + 调整下月策略 |
| 每季度 | 评估 §五 quote engineering 哪些钩子 ROI 最高 |
| 每月 X algo GitHub review 后 | 更新本文档对应章节 |

---

## 十一、Quick Action Card（贴墙上）

```
═══════════════════════════════════════════════════
2026 ALGORITHM ACTIONS · daily checklist
═══════════════════════════════════════════════════

每条主推：
□ Stop-scroll hook · 第 1 行有数字 + 立场
□ Bookmark trigger · 数字密度 ≥ 3 + 结构化
□ Reply 1 ready (T+15s · TL;DR + 链接)
□ Reply 2 ready (T+5min · CTA)
□ 自我 reply (T+10min · 实质性补充)
□ 5 reply guy 战场 (T+15min)
□ T+30 / T+60 检查

每周：
□ 1-2 条 quote-engineering 推（高反响立场）
□ 1 条 Friday Reading List（quote-as-attribution）
□ 1 篇 Sunday Long Read 投 contest
□ 1 条 Saturday video 跨平台

M1 持续：
□ 每条假设"1000 陌生人会看到"
□ 不写 lazy 内容
□ 频率 +30%
□ 长内容优先
═══════════════════════════════════════════════════
```

---

**版本**：v1.0 · 2026-05-30
**配套**：[algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [signature-series.md](./signature-series.md) · [peer-collab-playbook.md](./peer-collab-playbook.md) · [x-articles-playbook.md](./x-articles-playbook.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md) (§23)
