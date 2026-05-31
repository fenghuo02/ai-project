# X 2026 Algorithm Playbook · 算法现实手册

> 状态：v1.0 · 2026-05-30
> 触发：v3.0 部分前提（thread-first / link-in-main / 5K 才上 Community）已被 2026 年最新算法机制颠覆。本文档是 2026 年 X 算法的 single source of truth，所有其他文档以此为锚。
> 配套：[signature-series.md](./signature-series.md) · [growth-mechanics-2026.md](./growth-mechanics-2026.md) · [_self-operation-handbook.md](./_self-operation-handbook.md)

---

## 零、来源 + 引用

数据来自 2026 年 1-5 月多源验证（联网搜索 2026-05-30）：

- [X Engineering 官方算法仓库](https://github.com/xai-org/x-algorithm)（2026-01-20 开源 + 每 4 周月更）
- [X Business Blog · Creator Updates](https://business.x.com/en/blog/creator-updates-and-article-contest-replacement)（Verified Home Timeline 收入算法）
- [Forbes 2026-05-29 · X 严打 aggregator](https://www.forbes.com/sites/conormurray/2026/05/29/x-cracks-down-on-stolen-content-demonetizes-major-account-for-gaming-monetization-system/)
- [TechStory 2026-05-23 · 反 aggregator 流量重定向](https://techstory.in/x-alters-payout-and-reach-system-to-redirect-viral-impressions-to-original-content-creators/)
- [SocialMediaToday 2026-05](https://www.socialmediatoday.com/news/x-looks-to-improve-its-incentives-for-original-creators/821051/)
- [posteverywhere.ai · X Algorithm 2026](https://posteverywhere.ai/blog/how-the-x-twitter-algorithm-works)
- [adlibrary.com · X Algorithm Source Code Explained](https://adlibrary.com/guides/x-twitter-algorithm-explained)
- [fansgurus.com · 2026 growth methods](https://fansgurus.com/blog/9-twitter-growth-methods-2026)
- [Truth Tide · Algorithm Playbook](https://members.truthtide.tv/)（not_dwelled 信号）
- [Circleboom Medium · 2026-05](https://circleboom.medium.com/why-your-twitter-posts-drive-zero-traffic-and-the-real-fix-in-2026-b3aeb557f145)（链接降权）
- [wenhaofree.com · Core Rules 2026](https://blog.wenhaofree.com/en/posts/articles/x-algorithm-2026-core-rules/)（4× / 2× boost）

> 内容已转述合规化（每来源不超过 30 连续词）。引用是 2026-05-30 当下数据，**月度可能变动**，见 §十一 monthly review SOP。

---

## 一、核心机制（5 件 v3 时期不知道的事）

### 1.1 Long-form 单推 > Thread

**事实**：2026 年 X 算法对 long-form（Premium 4000-字符上限）单推的分发权重已超过等价 thread。Thread 仍工作但**不再是默认格式**。

**证据**：fansgurus 2026 增长方法 #4、Forbes 5/29 报道、posteverywhere 实测数据。

**为什么**：

- Long-form 把 engagement 集中到 1 条，hook → 内容 → CTA 完整闭环
- 算法首小时打分按 engagement-per-impression，long-form 单条比 thread 第 1 推更易吸住注意力
- not_dwelled 信号（见 §1.4）让 thread 第 2 推之后的滑过率高，反而拖累整 thread 排名
- bookmark 行为对 long-form 更频繁（"留着以后再读"）

**v3 → v4 改动**：

| 内容 | v3 默认 | v4 默认 |
|---|---|---|
| Monday Empire Map | 9-tweet thread | **long-form 单推 + 选配 thread companion** |
| Friday Reading List | 6-7 tweet thread | **long-form 单推 + Quote-tweet 内嵌** |
| Sunday Long Read X Article | Article（不变）| Article + 主推 long-form 摘要（不是 thread）|
| Last-Day Monthly Map | 12-tweet thread | **long-form 单推**（更密集）|
| Wednesday AI Race Card | 1 推 + 数据图（不变）| 1 推 + 数据图 |
| Daily 5 humor | 单推（不变）| 单推 |

**留 thread 的场景**：

- E3 Live event thread（实时连续报道，需要时间线感）
- 突发危机响应（quick succession of corrections）
- ≥ 2,500 字符的内容（超过 long-form 上限）

### 1.2 链接放主推 = 流量自杀

**事实**：

- **Premium 账号**主推带链接 → reach 减权 30-50%
- **Non-Premium**主推带链接 → 几乎零曝光（"Absolute Zero Exposure" per wenhaofree）
- 链接放 reply 1 → 算法不计入主推排名

**算法逻辑**：X 想最大化 on-platform time。外链等于"用户离开平台"，所以预防性降权。

**v3 → v4 改动**：

旧（v3 错误）：

```
主推：今天的 long read · [link]
```

新（v4 正确）：

```
主推（无链接）：
  read [today's long read]: 3 things i noticed about anthropic at $965B.
  [核心 take 一句]
  [钩子 + "↓"]

reply 1（链接 + 长摘要）：
  full piece: [link]
  5-bullet TL;DR:
  - ...

reply 2（CTA）：
  for the weekly digest: [tally / mailchimp link]
```

**绝对铁律 v4**：

- ❌ 主推任何位置不带 https / x.com / beehiiv.com / mailchimp / tally / gumroad
- ❌ 主推不带 t.co 缩短链
- ✅ 链接全部进 reply 1（"full piece" / "data sources" / "context"）
- ✅ 主推可以带 X 平台内 @ 提及（@username 不算外链）
- ✅ 主推可以带 X Article 内嵌引用（X 内部跳转算 on-platform）

### 1.3 Verified-Only Home Timeline 决定收入

**事实**：[X 官方 5/29 公告](https://business.x.com/en/blog/creator-updates-and-article-contest-replacement)：Revenue Sharing 现仅按 **Verified（Premium）用户的 Home Timeline impressions** 计算。

**影响**：

- 100K total impressions if 80% from non-Premium users → 仅 20K 算入 revenue
- v3 收入预测（M2 $800-2,500 / M3 $1,500-5,000）应**调到 0.4-0.6×**
- M2 实际：$300-1,500 / M3 实际：$600-3,000

**v3 → v4 改动**：

- M2-M5 收入预期下调 40-50%
- 主战场转向：付费产品（Cheat Sheet Pro / Annual Outlook / 1:1 Briefing），不依赖 ad share
- 加 X Articles $1M Contest（[X 官方](https://business.x.com/en/blog/creator-updates-and-article-contest-replacement)）作为新收入路径，详见 [x-articles-playbook.md](./x-articles-playbook.md)

### 1.4 not_dwelled = 新负向信号

**事实**：2026 年 X 算法新增 `not_dwelled` 负向信号（[Truth Tide playbook](https://members.truthtide.tv/)）。用户看到推但不停留（即时滑过）= 算法降权。

**算法层级**：

```
Heavy Ranker 评分公式（简化）：
score = w1 × P(reply)
      + w2 × P(bookmark)
      + w3 × P(quote)
      + w4 × P(retweet)
      + w5 × P(like)
      - w6 × P(not_dwelled)         ← 新增 2026
      - w7 × P(not_interested)
      - w8 × P(report)
```

**w6 (not_dwelled)** 在 2026 年 GitHub 公开权重中是 -0.74（参考 like 的 +0.5）。**滑过的负权重比赞的正权重还大**。

**对 v3 影响**：

- v3 的钩子模式（"noting that..." / "read [source]..."）多数是"信息密度"，不是"stop-scroll"
- 算法只给 1-2 秒决定用户停不停
- 必须 **第 1 行 = 视觉 hook，不是 verbal hook**

**v3 → v4 改动**：见 [growth-mechanics-2026.md §三 stop-scroll hook 工程](./growth-mechanics-2026.md)。

### 1.5 X Communities 公开化（2026-02）

**事实**：2026 年 2 月 X Communities 全部公开化（[posteverywhere](https://posteverywhere.ai/blog/how-to-get-more-x-followers)）。Community 内的帖子会出现在 For You feed，**不再是封闭社群**。

**对 v3 影响**：

- v3 把 Community 定位为"5K+ 触发的留存层 Tier 2"
- 现实：**Community 现在是 discovery 层 Tier 0.5**（在公开 timeline 之外的额外发现入口）

**v3 → v4 改动**：

- v3：等到 5K+ 才启动 Community
- v4：**M1 Day 1 立刻加入 2-3 个 niche Community**（不创建，先加入），把当周 Empire Map / Reading List 在那里同步发布
- 创建自己的 Community 仍等到 5K+，但参与别人的 Community 是**立刻**

详见 [spaces-and-community.md §三 v4 Communities 升级](./spaces-and-community.md)（已更新）。

---

## 二、Heavy Ranker 排序模型

### 2.1 X 算法实际跑的是什么

```
For You Feed 生成（每个 session）：
1. 候选池：~1500 posts
   ├─ 50% in-network（你关注的人 + 关注你的人发的）
   └─ 50% out-of-network（基于兴趣）

2. 每条 post 经过 Heavy Ranker（Grok-based Transformer）
   读懂内容 + 看图视频 + 判断主题 + 评分

3. 最终展示 ~50-100 posts
```

**关键洞察**：

- 算法**不看 follower count**（来源：adlibrary.com 解读源码）
- 算法看 **作者 reputation score** + **post engagement signals** + **内容质量信号**
- author reputation 缓慢累积，每条 post 的"质量分"会反哺 author reputation

### 2.2 排名信号权重表（2026-05 GitHub 公开值）

| 信号 | 权重 | 含义 |
|---|---|---|
| Reply | +13.5 | 算法之神 · 1 reply ≈ 27 likes |
| Bookmark | +12 | 第二高信号 · 比 retweet 还强 |
| Quote | +6.4 | 中等正向 |
| Retweet | +1 | 基线（已大幅降权）|
| Like | +0.5 | 浅信号 |
| not_dwelled | -0.74 | 滑过 |
| not_interested | -74 | 用户主动点"不感兴趣" |
| report | -369 | 用户举报 |

**实战推论**：

- 1 个 reply > 27 个 like
- **1 个 bookmark > 24 个 like > 12 个 retweet**
- 1 次 not_interested 抵消 148 次 like → 一旦被点不感兴趣，那条推基本死了
- 重点优化 reply + bookmark 这两个信号

### 2.3 Premium / Premium+ 加权系数

| 账号类型 | In-network reach | Out-of-network reach |
|---|---|---|
| Free | 1× | 1× |
| Premium | 4× | 2× |
| Premium+ | **10×** | **5×** |
| Premium+ + Verified Org | 12× | 6× |

[来源：wenhaofree, posteverywhere 多源一致]

**实战推论**：你已经 Premium+，每条推默认 10× 入网。**这是你的底层杠杆，不要浪费在窄主题或链接降权场景**。

### 2.4 首小时（First 60 min）= 决定 95% 分发

```
First 30 min (T+0 → T+30):
  · 算法把推给一个小测试集（你的关注者 + ~50-100 OON）
  · 测engagement-per-impression
  · 计算 score

T+30 → T+60:
  · 如果 score 高 → 推到更大池子（10K-100K imp 目标）
  · 如果 score 低 → 流量天花板锁定在 ~500-2K
  · ←  90% 的推卡在这里

T+60 之后:
  · 大局已定，long tail engagement 影响很小
  · 持续 high engagement-per-impression 的推会被持续扩散 24-72h
  · 但起点必须打通 T+30 测试关
```

**对 v3 影响**：v3 daily SOP 把发完推 → 设定时器 → 等下条。**首小时 0 主动 SOP**。

**v3 → v4 改动**：见 [_self-operation-handbook.md §三.5 First 60-min Engagement SOP](./_self-operation-handbook.md)（新加章节）+ [_prompts-pack.md §23 First 60-min Engagement Scripts](./_prompts-pack.md)（新 prompt）。

---

## 三、链接处理 SOP（实战）

### 3.1 在 reply 1 放链接的标准格式

```
主推（无链接，标题文案）

↓ reply 1（30 秒内紧跟，必须发出）：

full piece: [link]

5-bullet text version (algo-friendly):
- [bullet 1 + 数字]
- [bullet 2 + 数字]
- [bullet 3 + 数字]
- [bullet 4 + 数字]
- [bullet 5 + 数字]

↓ reply 2（5 分钟内）：

context / data sources:
- [source 1 link]
- [source 2 link]

↓ reply 3（订阅 / CTA）：

for the weekly digest: [link]
free monthly tracker pdf: [link]
```

### 3.2 哪些可以保留在主推

- ✅ X 内部 @ mention（@elonmusk / @anthropic / @sama 等）
- ✅ X 内部 article 嵌入（粘贴 X Article URL 会自动 unfurl 为 card，X 视为 on-platform）
- ✅ 普通文字 / 数字 / 代码片段
- ✅ 图片 / 视频（在主推里，但不带 caption 链接）

### 3.3 哪些必须搬到 reply

- ❌ 任何 https:// / http:// 链接
- ❌ Beehiiv / Substack / Mailchimp / Tally / Gumroad / Lemon Squeezy 域名
- ❌ Bio link / Linktree
- ❌ "DM me empire" 这种文字 CTA（轻度，可在主推但不要每条都来）

### 3.4 检查 protocol（每条主推发布前）

```
□ 主推无 https://
□ 主推无 .com / .ai / .co
□ 主推无 t.co 缩短链
□ Reply 1 已写好，30 秒内可发
□ Reply 2 已写好，5 分钟内可发
```

---

## 四、Communities 公开化升级（v4 关键改动）

### 4.1 v3 → v4 战略翻转

| 维度 | v3 设计 | v4 现实 |
|---|---|---|
| Community 是什么 | 留存层 Tier 2 | **发现层 Tier 0.5 + 留存层 Tier 2** |
| 何时启动参与 | 5K+ 粉 | **M1 Day 1** |
| 何时启动创建 | 5K+ 粉 | 5K+ 粉（不变）|
| 主战场 | 自己的 Community | **别人的 Community** |
| 频率 | 每月 1 次 community-only post | **每周 1-2 次 cross-post 当周内容** |

### 4.2 立刻加入的 5 个 niche Communities

[需要用户在 X 内手动搜索 + 确认]，候选优先级：

| Community 关键词 | 估算成员 | 主题契合度 |
|---|---|---|
| `frontier AI` / `AI race` | 100K-500K | 极高（A 支柱） |
| `tesla earnings` / `tsla bulls` | 200K-1M | 高（B 支柱） |
| `IPO watch` / `markets analysis` | 50K-300K | 极高（C 支柱） |
| `tech IPOs` / `stocks` | 200K-1M | 高（C 支柱） |
| `build in public` | 100K-500K | 中（E 支柱） |

**步骤**：

1. 在 X 搜索栏输入关键词，切到"Communities"标签
2. 看每个 Community 的 member 数 + 最近 7 天 post 频率
3. 加入 5-7 个，先 lurk 1 周看节奏
4. 第 2 周开始 cross-post：当周 Monday Empire Map / Wednesday AI Race Card / Friday Reading List 同步到 1-2 个最契合的 Community
5. 不要在所有 Community 同步发同一篇（会被算法判 spam）

### 4.3 Cross-post 节奏

| 周几 | 主 timeline | Community A | Community B |
|---|---|---|---|
| Mon 07:30 | Empire Map | post 副本 09:00（错峰）| skip |
| Wed 11:30 | AI Race Card | skip | post 副本 13:00 |
| Fri 19:30 | Reading List | post 副本 21:30 | skip |
| Sun 21:00 | Long Read | skip | post 副本 22:30 |

**关键纪律**：

- 同一篇内容只 post 到 **1 个** Community（不并发同步）
- Community post 时间错开主 timeline 1-2 小时
- Community post 文案做轻度调整（针对该 Community 的关注点）
- 不要每天都 post（每周 ≥ 2 次，≤ 4 次）

---

## 五、Anti-Aggregator Rules（v4 关键合规）

### 5.1 X 严打的对象（2026-05-23 规则更新）

```
判定为"内容窃取"会被减少 60% 收入分成 + 下个周期再减 20%。
判定标准：
- 程序化重发其他用户的 viral 视频
- 大量复制热门 thread / long-form 内容到自己账号
- 模仿不致敬（imitation without attribution）
```

### 5.2 对 Friday Reading List 的影响

v3 协议（@ + URL + 1 句 take）**可能**触发 anti-aggregator 风险。X 要求**正式归因**：

| 行动 | v3（旧）| v4（新）| 安全性 |
|---|---|---|---|
| 引用别人的 X 推 | "@ + URL + my take" | **Quote tweet + my take** | 100% 安全 |
| 引用别人的 newsletter | "@ + URL + my take" | "@ + URL + my take"（保持）| 安全（不是 X 平台内容）|
| 引用 Substack / Beehiiv | 同上 | 同上 | 安全 |
| 引用别人的 Article | "@ + Article URL + take" | **X 内嵌引用 + take** | 100% 安全 |
| 截图别人的 X 推 | ❌ 不要做 | ❌ **绝对禁止** | 高危 |

### 5.3 Quote-as-attribution 标准化

详见 [peer-collab-playbook.md §三协议 2 v4 升级](./peer-collab-playbook.md)。

---

## 六、Bookmark Engineering

### 6.1 Bookmark 是 Heavy Ranker 第 2 高权重信号

```
1 bookmark ≈ 24 likes ≈ 2 retweets
```

为什么 bookmark 这么强：

- 算法读 bookmark 为"内容有保存价值" = 高质量信号
- bookmark 通常意味着"以后再读" → 用户对账号产生长期记忆
- 不像 like 可以泛滥，bookmark 是稀缺行为

### 6.2 5 种触发 bookmark 的内容模式

| 模式 | 例 | bookmark 率 |
|---|---|---|
| **Reference list** | "5 things that decide whether tesla q2 beats" | 8-15% |
| **Specific data table** | "AI race · valuations + multiples" | 6-12% |
| **Numbered checklist** | "13 humor pillars · how to choose" | 5-10% |
| **Anti-cliché take** | "anthropic at $965B is actually conservative" | 4-8% |
| **Long-form summary** | Sunday Long Read 摘要 | 7-15% |

对比基线：普通 take 推 bookmark 率 0.5-2%。

### 6.3 让推"值得 bookmark" 的 6 条规则

1. **数字密度 ≥ 3 个**（一段话至少 3 个具体数字）
2. **结构化**（list / 表格 / 编号 / 时间线，单段拒绝）
3. **可重复使用**（"3 takes" / "5 things" / "current state" 这种 framing）
4. **未来时间锚**（"watching next 90 days" / "by june" → 用户回头查准确性）
5. **对比矩阵**（A vs B / before vs after / consensus vs reality）
6. **明确的"我的立场"** + "**为什么**" → 用户 bookmark 是因为想"以后引用这个 take"

### 6.4 NOT to do

- ❌ pure quote-only（没有自己的 take）
- ❌ "what do you think?" 收尾（这是 reply bait，不是 bookmark bait）
- ❌ "thread 1/15 ↓" 这种钩子（v4 禁用 thread 默认格式）
- ❌ emoji 占了 30% 字符（视觉重，bookmark 信号反而弱）

---

## 七、Quote-Tweet Engineering（让别人 quote 你）

### 7.1 Quote 的算法价值

Quote 权重 +6.4，介于 reply (+13.5) 和 retweet (+1) 之间。**关键**：被 quote 时，原推获得对方关注者池的曝光，等于免费跨圈广告。

### 7.2 4 种"高 quote 率"内容模式

| 模式 | 为什么被 quote | 例 |
|---|---|---|
| **Strong contrarian take** | quoter 想加 "+1" 或 "-1" | "anthropic $965B is the floor not peak" |
| **Specific data point** | quoter 想用作引用源 | "fsd subs hit 1.28M, +51% YoY" |
| **Framework / mental model** | quoter 想推荐给 followers | "AI race in one sentence: compute scale × data flywheel" |
| **Concise prediction** | quoter 想 6 个月后回头看 | "spacexai ipo prices at $1.85T median. revisiting 7/13." |

### 7.3 "quote me" 钩子工程

在 long-form 主推末尾加：

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

### 7.4 频率控制

- 每周 **1-2 条**长推故意设计成"高 quote 率"（不能每条都强 take 否则人设畸形）
- 通常放在 Monday Empire Map / Sunday Long Read 摘要
- 配合时段：周一 / 周日早晚高峰发，让 quote 流量趁热

详见 [peer-collab-playbook.md §三协议 7 quote engineering](./peer-collab-playbook.md)（v4 新增）。

---

## 八、Small Account Boost Window

### 8.1 现实

X 2026 年新增"small account boost"机制（[fansgurus](https://fansgurus.com/blog/9-twitter-growth-methods-2026)）：

```
followers < ~500    · 较强 boost · 第一波 quality posts 算法主动放量
followers 500-2K   · 中等 boost · 仍有但减弱
followers 2K-5K    · 弱 boost   · 边际效用递减
followers > 5K      · 无 boost   · 完全靠常规算法
```

**critical**：window 一旦关闭就不再开。一次性窗口。

### 8.2 你目前阶段（M1 Day 1，~50-200 粉？）= 最高 boost 期

**实操建议**：

- ❌ 不要在 small account boost 期间发不打磨的内容
- ✅ 每条主推都假设"这条会被 1000 个陌生人看到" → 不要 lazy 输出
- ✅ 这段时间多做 long-form（更易 stop scroll）+ data-dense 内容（更易 bookmark）
- ✅ 不要"先暖一暖再发好的" → 算法在测的就是头几周

### 8.3 capture 小窗口的具体动作

详见 [growth-mechanics-2026.md §二 boost capture playbook](./growth-mechanics-2026.md)。

---

## 九、Foreign Creator Risk

### 9.1 现实

[Nikita Bier 2026-05](https://techbuzz.ai/articles/musk-overrules-x-exec-s-plan-to-cut-foreign-creator-payouts) 提议过：海外创作者从美国用户获取 engagement 的 revenue 减权（"engagement farming around U.S. politics"）。

后被 Musk 推翻，但**风向已存**：未来可能再启用。

### 9.2 对 @Skub0k 的影响

你 bio 写 `🇨🇳 perspective from outside silicon valley`（v4 plan），Location `GMT+8 watcher` → **明确海外身份**。

风险：

- 短期：低（Musk 推翻了）
- 中期（6-12 月）：中（policy 可能反复）
- 长期：取决于内容质量（observer 视角 + 不碰美国政治 = 不会被划入"engagement farming"）

### 9.3 mitigation

- ✅ 不碰任何美国政治话题（v3 已强制）
- ✅ Voice DNA 强调 "observation, not advice" → 不引战
- ✅ 内容 70%+ 是 tech / markets / AI race（普世主题）
- ⚠️ 如果未来 6 个月 X 启用 foreign creator 减权，准备转向 X Articles $1M Contest（不依赖 ad share）

---

## 十、X Articles $1M Contest

### 10.1 事实

[X 2026-05 官方](https://business.x.com/en/blog/creator-updates-and-article-contest-replacement)：X Articles 推出 $1M / 月奖金池，按 Article impressions / engagement 排名，前 N 名分奖金。

### 10.2 对 v3 影响

v3 把 Sunday Long Read 视为 "信任产品 + newsletter sub 转化"。v4 加：**也是 $1M Contest 候选 → 直接现金收入**。

### 10.3 提交参赛流程

[X 内部入口] · 每篇 Article 发布时勾选"submit to monthly contest"。

详见 [x-articles-playbook.md §十二 $1M Contest playbook](./x-articles-playbook.md)（v4 新增章节）。

---

## 十一、Monthly Algorithm Review SOP

### 11.1 X 算法仓库每 4 周更新

[github.com/xai-org/x-algorithm](https://github.com/xai-org/x-algorithm) 是 X 官方公开的算法源码。每 4 周月更，附带 changelog。

### 11.2 每月最后一天复盘加一项

在 [_self-operation-handbook.md §十 6 个月路线图](./_self-operation-handbook.md) 月度复盘清单加：

```
□ check github.com/xai-org/x-algorithm 最近 30 天的 commits
□ 看 changelog 有无信号权重 / 内容形式 / 链接策略 / Premium 加权 变化
□ 如有变化：
  · 直接修订本文档对应章节
  · 在 _self-operation-handbook.md / _prompts-pack.md 同步
  · 用 §6 Crisis Response prompt 让 AI 帮你判断对账号的影响
```

### 11.3 重大变化触发临时升级

如果月度 review 发现以下任一变化 → **立刻**进入临时调整模式（无需等下个月）：

- 信号权重变动 ≥ 30%（如 reply 从 +13.5 改成 +9）
- 内容形式偏好变动（如 thread 重新被 boost）
- 新增 / 删除 信号类别（如新增 "audio_dwelled"）
- 链接策略变动（如恢复主推链接全曝光）
- Premium 加权变动

---

## 十二、当下（2026-05-30）重要数字快查

| 项 | 值 | 来源 |
|---|---|---|
| X For You 候选池 | ~1,500 posts/session | adlibrary 源码解读 |
| Heavy Ranker 评分模型 | Grok-based Transformer | xai-org/x-algorithm |
| Reply 信号权重 | +13.5 | GitHub 公开权重 |
| Bookmark 信号权重 | +12 | 同上 |
| not_dwelled 信号权重 | -0.74 | 同上（2026 新增）|
| not_interested 权重 | -74 | 同上 |
| report 权重 | -369 | 同上 |
| Premium+ in-network reach | 10× | wenhaofree, posteverywhere |
| Premium+ out-of-network reach | 5× | 同上 |
| Free 主推链接 reach | ~0×（绝对零曝光）| wenhaofree |
| Premium 主推链接 reach | 0.5-0.7× | Circleboom |
| First 30-min engagement | 决定 95% 分发 | adlibrary, Buffer |
| 长内容 vs thread 优先级 | long-form > thread | fansgurus 2026 |
| Communities 公开化时间 | 2026-02 | posteverywhere |
| Articles $1M / 月 Contest | 进行中 | X 官方 |
| Aggregator 减权率 | -60% + 第 2 周期再 -20% | Forbes 5/29 |

每月最后一天 review 这张表，过期数据**立刻**更新。

---

## 十三、Quick Reference Card（贴墙上版本）

```
═══════════════════════════════════════════════════════
X 2026 ALGORITHM RULES · stick to fridge
═══════════════════════════════════════════════════════

1. Long-form > thread （4000-char single post is default）

2. NO LINKS in main tweet
   YES links in reply 1 / reply 2

3. First 60 min decides 95% reach
   Have reply 1 / 2 ready in 30s / 5min after main

4. Bookmark > reply > quote > retweet > like
   1 bookmark ≈ 24 likes
   1 reply ≈ 27 likes

5. not_dwelled is now negative (-0.74)
   First line MUST stop scroll

6. Premium+ reach = 10× in-network, 5× out
   Don't waste it on link-poisoned tweets

7. Communities are public now (Feb 2026)
   Cross-post to 2 niche communities/week

8. Reading List = Quote-tweet, not @ + URL
   X is anti-aggregator since May 2026

9. Articles $1M/mo contest is live
   Submit every Sunday Long Read

10. github.com/xai-org/x-algorithm updates monthly
    Last day of month, review changelog

═══════════════════════════════════════════════════════
```

---

## 十四、本文档维护

| 频率 | 动作 |
|---|---|
| 每月最后一天 | §11.1 GitHub algo review + 更新 §十二数字表 |
| 每月最后一天 | 看 X Engineering 的 X 公告 / Nikita Bier 的推 |
| 每季度 | 大 review · 全文每章重新核 |
| 每年末 | 全文 rewrite（算法每年变化太大）|

---

**版本**：v1.0 · 2026-05-30
**配套**：[growth-mechanics-2026.md](./growth-mechanics-2026.md) · [vertical-video-pillar.md](./vertical-video-pillar.md) · [cross-platform-funnel.md](./cross-platform-funnel.md) · [signature-series.md](./signature-series.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md)
