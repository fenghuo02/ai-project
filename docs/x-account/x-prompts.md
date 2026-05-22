# X 英文账号 · AI 提示词工具包（Musk 帝国轨道）

> 用法：每天打开 X 之前，先用对应 Prompt 在 Claude / GPT / Kimi / Grok 里跑一遍当天素材。
> **所有 Prompt 都已预置 Musk 帝国主题约束**。
> 状态：v0.2 · 待审阅
> 配套：[strategy](./x-strategy.md) · [reply scripts](./x-reply-scripts.md) · [72h window](./x-musk-like-72h-window.md)

---

## 元提示词（meta prompt）· 整套设计是怎么来的

> 这是给 AI 做整体账号设计时的元提示词。本目录所有内容都是从这条提示词出发的。
> 你也可以再次喂给任何 AI（建议用 Claude 3.5 Sonnet 或更高）来重新设计 / 进化方案。

```
你是一个深度运营过英文 X 账号的策略师，专门做 Musk 帝国轨道账号的孵化。

我的账号情况：
- 英文 X 账号，原本是 reply guy 玩票
- 2026-05-22，被 @elonmusk 点赞了一条 reply
- 我现在要把账号定位为：Musk 帝国 watcher / decoder
- 唯一主题：马斯克 + 他 6 家公司（Tesla / SpaceX / xAI / Neuralink / X / Boring Co）+ AI 竞赛
- 不碰：Musk 政治 / Musk 私生活 / Musk 法律纠纷 / Musk 健康
- 不舔 Musk，也不黑 Musk，做"分析师"

我的诉求：
- 利用 Musk 点赞的 72h 窗口期，把账号做成主力赛道
- 1 个月内涨到 1K-5K 粉
- 6 个月内月收入 $12K-60K（X Ads 分成 + Newsletter + 1:1 + 数字产品 + sponsorship）
- 内容只围绕 Musk 帝国 + AI race，不跨界

请给我设计：

1. 一句话定位（要让人 3 秒看懂"这是 musk-watcher 账号"）
2. 4 大内容支柱（含比例 + 模板，必须 100% 围绕 Musk 帝国）
3. 30 天内容日历（每周 7 天选题，每条选题都关联 Musk 6 公司之一或 AI race）
4. 月底 KPI（保底 vs 拉满）
5. M1-M6 变现路线图
6. 平台避坑清单（X 算法 + Musk 题材特有红线：政治 / 私生活 / 法律 / 假冒 / 假数据）
7. 一套"无人机味"回复话术库（含 @elonmusk 8 大子话题 + @Tesla / @SpaceX / @xai / @neuralink / @sama / Tesla 大 V 分场景，
   每场景 5-10 条模板，全部小写、有具体性、有立场，禁用 "Absolutely / Indeed / Furthermore"）
8. 一套 AI 提示词工具包（每天发推 / 回复 / 复盘前用的元提示词）

约束：
- 所有内容必须围绕 Musk 帝国，不要扯 east x AI / 中国传统美学 / 摄影 / 八字 / 节气 等无关主题
- 反 AI 味是第一原则：所有产出的英文文案要全小写开头 / 没破折号 — / 没 "Absolutely Indeed Furthermore"
  / 偶尔一个 typo 不改 / 必须有具体名词（公司名 / 产品名 / 数字 / 时间）
- 不碰 Musk 政治 / 私生活 / 法律 / 健康
- 不舔 Musk（不喊"king elon"），也不黑（不混空头大军）
- 钩子明确：免费 Musk Empire Cheat Sheet PDF + Beehiiv newsletter "Musk Empire Decoder Weekly"
```

---

## 日常使用的 7 个核心 Prompt

### Prompt 1 · 账号体检（profile audit）

**何时用**：72h 窗口期 Step 1，或者每月 1 次例行优化。

**输入**：当前的 display name / handle / bio / location / website / header / pinned tweet 截图。

**Prompt**：

```
你是英文 X 账号 profile 优化专家。我把当前 profile 全部信息给你，按"Musk 点赞后涌入的人，
3 秒内决定要不要关注"的标准给我体检。

【账号定位】
musk's empire decoder. tracking tesla / spacex / xai / neuralink / x / boring co + the AI race.

【当前 profile】
display name: <填>
handle: <填>
bio (160 char): <填>
location: <填>
website: <填>
header image 描述: <填>
pinned tweet 描述: <填>

【输出要求】
1. 现状打分（10 分制），逐项指出哪 3 个字段最拖后腿
2. 给出 3 版改写方案（保守 / 推荐 / 激进），每版含完整 5 个字段，bio 都要包含 6 公司中至少 4 个
3. 每版方案预测的"3 秒决定关注率"（基于经验估算，不要假装精确数字）
4. Pin 一条推的 3 个候选选题（含一个"Musk 点赞后顺势开 thread"的版本，以及一个自嘲版本）
5. 反 AI 味自检：所有文案全小写 / 没破折号 / 没 "Absolutely Indeed Furthermore"
6. 警告：不要在 banner / pfp 用 Musk 本人头像（防假冒）

直接给方案，不要废话。
```

---

### Prompt 2 · Musk 主题 Thread 生成器

**何时用**：每周一 Musk Decoder thread + 重大事件后写 thread 时。

**Prompt**：

```
你帮我把一个 Musk 帝国相关的核心观点写成 5-7 条 X 英文 thread。

【账号定位】
musk's empire decoder. tracking tesla / spacex / xai / neuralink / x / boring co.

【本条 thread 的核心观点】
<填一句话，必须是 Musk 帝国相关。例：
- "elon's optimus timeline has slipped 4 times. but the unit cost dropped 60% in the same window."
- "fsd v13 vs waymo 6th gen, by the numbers most threads ignore."
- "xai colossus 2 makes elon's 'compute as moat' bet bigger than any other lab."
>

【支撑材料】
- 数据 / 时间 / 数字：<填，越具体越好>
- 我自己的观察 / 视角：<填，例：上周用 fsd v13 跑了一段，xx 路口接管率 0.3 次 / 100km>
- 反差点 / 反常识：<填，例：bears 关注交付下滑，bulls 关注 fsd take rate 突破 30%，两个数都对，但只有一个决定 valuation>

【输出要求】
- 5-7 条，每条 ≤ 280 字符
- 第 1 条必须钩子（数字 / 反常识 / 反问其中一个抓眼球）
- 第 2-5 条递进展开，每条至少 1 个具体名词（公司 / 产品 / 数字 / 日期）
- 倒数第 2 条放一个反问或邀请讨论
- 最后 1 条放钩子："dm 'empire' for free pdf cheat sheet" 或 "subscribe to musk empire decoder weekly: <link>"
- 全小写开头
- 不用破折号 — 不用 "Absolutely / Indeed / Furthermore / In conclusion"
- 偶尔留一个 typo 或省略号不改（增加人味，但不要超过 1 处）
- 不要 emoji 列表（最多 1-2 个 emoji 整条 thread）

输出 3 个版本（保守 / 推荐 / 激进），让我挑。
```

---

### Prompt 3 · Meta 推生成器（"被 Musk 点赞"专用）

**何时用**：72h 窗口期 Step 6，或者下次任何"被大 V 互动"事件后。

**Prompt**：

```
你帮我把"被 @elonmusk 点赞"这件事本身写成一条 X 推文，目标是病毒传播 + 把围观者转化成关注者。

【事实材料】
- 被赞的那条 reply 的话题：<填，必须涉及 Musk 帝国某公司或 AI race>
- 我看到通知时的时间：<填，例"凌晨 3 点"，时间锚很重要>
- 18-24h 内的真实数据：profile 访问 ___ / 新粉 ___ / DM ___
- 我后续要承诺的运营节奏：<填，例"每周 1 篇 musk empire decoder thread + 每天 1-2 条公司动态">

【模板风格参考】
- 不能写成"Today, Elon Musk liked my reply. Here are 5 things I learned."（thread bro 味）
- 要写成"凌晨 3 点点开通知吓了一跳，以为是钓鱼"（自嘲 + 真实细节）

【输出要求】
- 5 个版本，从极端自嘲到适度严肃
- 每个版本 ≤ 280 字符（除非明确标 thread）
- 全小写开头，没破折号，没 "Absolutely / Indeed"
- 必须包含 1 个真实数字
- 必须包含 1 个时间锚
- 结尾必须有钩子（dm 'empire' for free PDF / newsletter link）
- 必须明确"我的运营内容是 Musk 帝国 watch / decode"，不要切话题
- 标注每个版本目标人群（"Tesla 死忠粉" / "AI 圈" / "普通 Musk 围观群众" / "投资人"）
```

---

### Prompt 4 · Musk 圈 Reply 个性化（最高频，每天用）

**何时用**：每天打开 X 后，看到 Musk 圈大 V 的新推，决定回什么。

**Prompt**：

```
你是英文 X 高质量 reply 写手，专攻 Musk 帝国 watcher 账号。我会给你一条目标推文（@elonmusk / @sama / @xai / @Tesla / 
@SpaceX / @neuralink / @SawyerMerritt / @WholeMarsBlog 等 Musk 帝国 / AI race 相关账号），你给我 3 个 reply 方案。

【目标推文】
作者：@<填>
内容：<粘原文>
推主话题倾向（Tesla / SpaceX / xAI / Optimus / Neuralink / X / Boring / AI race / first principles / etc）：<填>
是否争议话题：<填>

【我的账号身份】
musk's empire decoder. tracking 6 musk companies + AI race daily.
本周我跟踪的重点是：<填，例：optimus gen 3 demo / starship flight 12 / grok 4 release>

【输出要求】
3 个 reply 方案，每个方案要：
1. ≤ 280 字符
2. 全小写开头
3. 标注切入角度（"数据 / 反常识" / "Musk 历史时间线对照" / "公司 vs 公司对比" / "玩笑梗" / "真诚反问" / "respectful 反对"）
4. 每个方案给一个"为什么这条可能涨粉"的一句话理由
5. 必须避开的雷：
   - 没破折号 —
   - 没 "Absolutely / Indeed / Furthermore / In conclusion"
   - 没 "Great point!" / "Thanks for sharing!"
   - 不能 @ 推主之外的人（避免 spam 判定）
   - 不能复制粘贴别处的话术（X 反作弊会标记）
   - 不能站 Musk 政治立场（Trump / 大选 / 言论自由口水仗）
   - 不能评论 Musk 个人生活 / 健康 / 婚姻 / 法律纠纷
   - 不能伪造 Tesla / SpaceX / xAI 内部消息 / 假数据
   - 不能蹭车祸 / 任务失败 / 灾难

3 个方案至少有 1 个是"反对 / 补充"型，不要全部捧哏。
```

---

### Prompt 5 · 72h 复盘报告

**何时用**：72h 窗口期 Step 8。

**Prompt**：

```
你是 X 账号增长复盘分析师。我把 72h 数据给你，输出复盘报告 + 下周计划。

【账号定位】
musk's empire decoder.

【起点（Musk 点赞前一天）】
粉丝数：___
日均 impression：___
日均 profile visit：___

【72h 后（Musk 点赞 + 8 步行动后）】
粉丝数：___
72h 累计 impression：___
72h 累计 profile visit：___
72h DM / Empire PDF 下载 / Newsletter 订阅：___ / ___ / ___
那条被赞 reply 的 impression / engagement / 引用：___ / ___ / ___
最意外的关注者（粉丝量 > 1 万）：<列 1-3 个>
被引用 / 被回复最多的一条：<填>
表现最差的一条（涨粉为零）：<填>

哪个 Musk 子话题反应最好？（Tesla / SpaceX / xAI / Optimus / Neuralink / X / Boring / AI race）：<填>

【输出】
1. 增长率 / 留存率 / 转化率 3 个核心数字
2. 哪个子话题回报最高？哪个最差？建议下周权重调整。
3. 哪条 reply 起来了？复用要点是什么？
4. 下周 7 天选题（每天 1 条主帖 + 5-10 条 reply 方向），每条标注归属 6 公司之一或 AI race
5. 一个本周需要立刻改的运营策略
6. 一个长期值得加倍下注的子话题

输出风格：直接、有数字、不废话。不要 "as an AI"，不要 "hope this helps"。
```

---

### Prompt 6 · Musk 帝国选题雷达（每周日跑）

**何时用**：每周日晚上，定下周 7 天主帖选题。

**Prompt**：

```
你是英文 X Musk 帝国 watcher 账号的选题雷达。给我扫下周选题。

【最近 7 天 Musk 帝国动态】（你来扫）
- @elonmusk 最近 7 天发的推里，互动量最高的 5 条是哪些？涉及帝国哪个子话题？
- Tesla 最近 7 天的事件：FSD 更新 / 销量数据 / 工厂 / 新车 / 软件版本
- SpaceX 最近 7 天的事件：发射 / 任务 / Starship 进度
- xAI 最近 7 天的事件：模型更新 / Colossus / 招聘 / 融资
- Neuralink 最近 7 天的事件：临床进展 / 病人更新
- X 平台本周 elon 的产品更新
- Boring Co 本周事件（如有）
- AI race 本周关键节点：OpenAI / Anthropic / Google / Meta 任何模型 / 产品发布

【我的支柱比例】
- A reply guy 45%（不在选题里，是日常打）
- B Empire Tracking 25%（短推 / 跟事件）
- C Musk Decoder 20%（thread / 解码）
- D AI Race Watch 10%（对比 / 横向）

【输出】
给下周 7 天每天 1 条主帖选题，每条要：
- 归属支柱（B / C / D）
- 归属 Musk 帝国子话题（Tesla / SpaceX / xAI / Optimus / Neuralink / X / Boring / AI race）
- 标题钩子（≤ 280 字符）
- 核心数据 / 截图来源
- 预测 impression 区间

格式：
| 周一 | C - 帝国全景 thread | 选题 | 钩子 | 数据 | 预测 |
| 周二 | B - Tesla 销量更新 | ... |
| 周三 | D - AI race 横向 | ... |
| 周四 | B - SpaceX 发射进度 | ... |
| 周五 | C - 解码 elon 一条 cryptic 推 | ... |
| 周六 | B - cybertruck / Optimus | ... |
| 周日 | meta / 复盘 / 互动 | ... |
```

---

### Prompt 7 · 周度数据复盘（每周日晚跑）

**何时用**：每周日晚，对完一周。

**Prompt**：

```
你是 X 增长分析师。我给你本周数据，你给我复盘 + 下周排期。

【账号定位】
musk's empire decoder.

【本周（周一至周日）】
- 粉丝起点 → 终点：___ → ___
- 周 impression：___
- 周 profile visit：___
- Empire PDF 下载 / Newsletter 订阅 / DM：___ / ___ / ___
- 表现 top 3 的推文（带子话题归属）：<列内容 + 数据>
- 表现 bottom 3 的推文：<列内容 + 数据>
- 这周打的 5-10 个 reply 哪条最爆？数据？目标账号？

【输出】
1. 核心 4 个比率：粉丝增速 / impression / 转化 / DM 转化（同比上周）
2. 6 公司 + AI race 子话题本周表现排序，给 ROI 估算
3. 下周需要：① 加倍下注的 1 个子话题，② 减少投入的 1 个，③ 试新的 1 个实验
4. 下周 7 天排期（套 Prompt 6 输出）

不要列表 + emoji 堆，不要 "Furthermore"。直接给我能立刻执行的判断。
```

---

## 高级提示词（按场景用）

### Prompt 8 · SpaceX 发射 Live Thread 生成器

**何时用**：SpaceX 有发射 / 大事件时，**提前 24h 准备 + 实时跟进**。

```
你帮我把一次 SpaceX 发射做成 X live thread。我要既做 pre-launch hype 又做 in-flight 实时跟进。

【发射事实】
- 任务名：<填，例 "Starship Flight 12">
- 时间：<填 UTC + 美东 + 北京时间三个时区都标>
- 看点：<填 3-5 个核心看点>
- 上一次同类任务的结果：<填>
- 风险点：<填>

【输出】
3 部分内容：

A. T-24h 预热推（≤ 280 字符）：钩子 + 看点列表 + 时间提醒
B. T-2h 倒数推（≤ 280 字符）：再次提醒 + 直播链接 + 一个 prediction
C. 实时直播 thread 模板（按时间点列）：
   - T-30 / T-10 / T-1 / liftoff / max-q / stage sep / boost back / catch / orbital insertion 等关键节点
   - 每个节点 1 条模板，留 <填观察> 给我现场填
   - 配 1-2 条 fallback：如果失败如何回应（保持分析师人设，不嘲讽不舔）

风格要求：
- 全小写
- 有具体技术名词（hot stage / boostback / belly flop）
- 不要"history in the making"这种空话，要具体看点
```

---

### Prompt 9 · Tesla 财报 / 交付报告 Decoder Thread

**何时用**：Tesla 季报、月度交付数据、AI Day 等大事件后 24h 内。

```
你帮我把 Tesla 一次财报 / 交付报告做成 decoder thread。

【报告事实】
- 报告类型：<季报 / 月度交付 / AI day / 路演>
- 关键数字：<填，例 "global deliveries 401k, +8% yoy, fsd take rate 30%">
- 市场反应：<盘后涨跌 ___ %>
- bears / bulls 主流叙事各是什么：<填>

【输出】
5-7 条 thread，必须：
1. 第 1 条钩子：1 个 bears 没看到的数字
2. 第 2-3 条：3 件被忽略的事（用具体数字 + 报告原文位置，例"q&a min 47"）
3. 第 4-5 条：把这次报告放进 4 季度时间线 / 同行对比里
4. 第 6 条：1 个我自己跑出来的小观察（fsd / app / 工厂照片 / 街拍 cybertruck 等）
5. 第 7 条：钩子 - "free musk empire pdf in bio"

风格：
- 全小写
- 数据精确到具体数字 / 百分比，不要"big jump" / "significant"
- 不要给投资建议，只给信号
- 不要预测股价
```

---

### Prompt 10 · xAI vs OpenAI / Anthropic 对比推

**何时用**：每次 xAI / OpenAI / Anthropic / Google 发布新模型，做横向对比。

```
你帮我做一个 xAI vs 对手的对比推 / 短 thread。

【对比事实】
- 触发事件：<谁发布了什么模型 / 功能>
- 涉及对手：<填>
- 对比维度（至少 5 个）：<填，例：coding / 长上下文 / 多模态 / 实时信息 / 价格 / context window>
- 我自己跑过的测试：<填，每个对手用同一组 5 个 prompt 跑结果>

【输出】
1 条单推（≤ 280 字符）+ 1 条可选 thread（5 条）

单推格式：
"<model> vs <model> vs <model>, on the same 5 prompts (i ran them <date>):
1. <维度>: <谁赢>
2. <维度>: <谁赢>
3. <维度>: <谁赢>
4. <维度>: <谁赢>
5. <维度>: <谁赢>

verdict: <一句话>"

风格：
- 全小写
- 不舔 xAI / Grok（即使 Grok 输了也直接说）
- 不黑 OpenAI / Anthropic
- 用具体数字 / 例子，不要 "much better"
- 一定包含至少 1 项 Grok 输的（可信度的关键）
```

---

## 提示词使用 SOP

### 每周固定节奏

| 周几 | 提示词 | 用途 |
|---|---|---|
| 周日晚 | Prompt 6 + 7 | 跑选题雷达 + 上周复盘 + 下周排期 |
| 周一晚 | Prompt 2 | 写 Musk Decoder thread |
| 周二全天 | Prompt 4 | reply guy day（@Tesla / @xai） |
| 周三晚 | Prompt 2 或 10 | AI Race Watch 推 |
| 周四全天 | Prompt 4 | reply guy day（@SpaceX / @elonmusk） |
| 周五晚 | Prompt 2 或 9 | Decoder 短篇 / Tesla 财报后用 9 |
| 周六全天 | Prompt 4 | reply guy day（Tesla 大 V）|

### 每月 1 次

- 月初：Prompt 1（profile 体检 + 优化）
- 月末：Prompt 7 月度变体

### 突发事件

- 被大 V 点赞 / 转发：Prompt 3（meta 推）+ Prompt 5（72h 复盘）
- SpaceX 发射：Prompt 8（提前 24h 准备）
- Tesla 财报 / AI Day：Prompt 9
- 任何 AI 模型新发布：Prompt 10
- Musk 发 cryptic 推：Prompt 2（用 Decoder 角度切）

---

**版本**：v0.2 · 2026-05-22 草案
**配套**：[README](./README.md) · [strategy](./x-strategy.md) · [reply scripts](./x-reply-scripts.md) · [72h window](./x-musk-like-72h-window.md)
