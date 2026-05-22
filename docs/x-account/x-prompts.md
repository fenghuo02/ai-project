# X 英文账号 · AI 提示词工具包

> 用法：每天打开 X 之前，先用对应 Prompt 在 Claude / GPT / Kimi / Grok 里跑一遍当天素材。
> 状态：v0.1 · 待审阅
> 配套：[strategy](./x-strategy.md) · [reply scripts](./x-reply-scripts.md) · [72h window](./x-musk-like-72h-window.md)

---

## 元提示词（meta prompt）· 整套设计是怎么来的

> 这是给 AI 做账号设计时的元提示词。本目录所有内容都是用这条提示词的变体跑出来的。
> 你也可以再次喂给任何 AI（建议用 Claude 3.5 Sonnet 或更高）来重新设计。

```
你是一个深度运营过英文 X 账号的策略师，给 solo founder 做账号孵化。

我的背景：
- 中国独立开发者，在重庆
- 主项目是"东方美学 × AI"（用 AI 把八字 / 五行 / 节气 / 19 色 等中国传统美学
  做成可运行的产品：mingshu-builder 命书生成器 / swatch-builder 色卡生成器）
- 已经在中文小红书 + 公众号 + 抖音 + B站运营，4 平台矩阵
- 英文 X 账号原本是 reply guy 玩票，今天 (2026-05-22) 被 @elonmusk 点赞了一条 reply

我的诉求：
- 利用 Musk 点赞的 72h 窗口期，把英文 X 做成主力赛道之一
- 1 个月内涨到 1-3K 粉
- 6 个月内月收入 $5K-30K（X Ads 分成 + newsletter + 1:1 + 数字产品 + sponsorship）
- 内容围绕 Musk / Tesla / xAI / OpenAI / AI / 中国 AI 圈 / 东方美学 × AI

请给我设计：

1. 账号一句话定位（要差异化，不能是另一个 thread bro 或 AI commentator）
2. 4 大内容支柱（含比例 + 模板）
3. 30 天内容日历（每周 7 天选题）
4. 月底要拿到的具体数字（保底 vs 拉满）
5. M1-M6 变现路线图（按月分阶段，给具体 $ 预期）
6. 平台避坑清单（X 算法 + 合规 + 品牌）
7. 一套"无人机味"回复话术库（含 Musk / Sam / xAI / Tesla / OpenAI / Naval / Anthropic 分场景，
   每场景 5-10 条模板，全部小写、有具体性、有立场，禁用 "Absolutely / Indeed / Furthermore"）
8. 一套 AI 提示词工具包（每天发推 / 回复 / 复盘前用的元提示词）

约束：
- 反 AI 味是第一原则。所有产出的英文文案都要符合：全小写开头 / 没破折号 / 没"Absolutely Indeed Furthermore"
  / 偶尔一个 typo 不改 / 有具体名词 + 数字 + 时间 + 地点
- 不碰政治敏感（中美 / 台海 / 新疆 / 俄乌 / 以巴）
- 不蹭低质 meme（"Sir this is a Wendy's"）
- 钩子 / 落地页要明确（free 19-color PDF + newsletter）
```

---

## 日常使用的 7 个核心 Prompt

### Prompt 1 · 账号体检（profile audit）

**何时用**：72h 窗口期 Step 1，或者每月 1 次例行优化。

**输入**：你当前的 display name / handle / bio / location / website / header / pinned tweet 截图。

**Prompt**：

```
你是英文 X 账号 profile 优化专家。我把当前 profile 全部信息给你，请你按"Musk 点赞后涌入的人，
3 秒内决定要不要关注"的标准给我体检。

【当前 profile】
display name: <填>
handle: <填>
bio (160 char): <填>
location: <填>
website: <填>
header image 描述: <填>
pinned tweet 描述: <填>

【我的定位】
A solo AI builder in China — shipping products with AI, posting what i see from inside.

【输出要求】
1. 现状打分（10 分制），逐项指出哪 3 个字段最拖后腿
2. 给出 3 版改写方案（保守 / 推荐 / 激进），每版含完整 5 个字段
3. 每版方案预测的"3 秒决定关注率"（基于经验估算，不要假装精确数字）
4. Pin 一条推的 3 个候选选题（含一个"Musk 点赞后顺势开 thread"的版本）
5. 反 AI 味自检：所有文案全小写 / 没破折号 / 没 "Absolutely Indeed Furthermore"

不要废话，直接给方案。
```

---

### Prompt 2 · Thread 生成器

**何时用**：每周一 ship report + 每周三 China inside view + 重大事件后写 thread 时。

**输入**：1 句核心观点 + 3-5 个支撑材料（数字 / 产品截图 / 链接 / 个人故事片段）。

**Prompt**：

```
你帮我把一个核心观点写成 5-7 条 X 英文 thread。

【账号定位】
solo AI builder in china. east x AI products. shipping not commenting.

【本条 thread 的核心观点】
<填一句话，比如："the meme that china just copies AI from the US is 5 years out of date">

【支撑材料】
- 数据 / 产品截图 / 时间地点：<填，越具体越好>
- 个人故事片段：<填，比如"上周在深圳华强北看到 4 个 AI 硬件 pin 卖 $19">
- 反差点：<填，比如"百度文心一言已经被 doubao + kimi 反超">

【输出要求】
- 5-7 条，每条 ≤ 280 字符
- 第 1 条是钩子（数字 / 反常识 / 时间地点其中一个抓眼球）
- 第 2-5 条递进展开，每条至少 1 个具体名词（产品名 / 公司名 / 数字 / 地点）
- 倒数第 2 条放一个反问或邀请讨论
- 最后 1 条放钩子（dm "palette" for free PDF / newsletter link）
- 全小写开头
- 不用破折号 — 不用 "Absolutely / Indeed / Furthermore / In conclusion"
- 偶尔留一个 typo 或省略号不改（增加人味，但不要超过 1 处）
- 不要 emoji 列表（最多 1-2 个 emoji 整条 thread）

输出 3 个版本（保守 / 推荐 / 激进），让我挑。
```

---

### Prompt 3 · Meta 推生成器（"被 Musk 点赞"专用）

**何时用**：72h 窗口期 Step 6，或者下次任何"被大 V 互动"的事件后。

**Prompt**：

```
你帮我把"被 @elonmusk 点赞"这件事本身写成一条 X 推文，目标是病毒传播 + 把围观者转化成关注者。

【事实材料】
- 被赞的那条 reply 的话题：<填>
- 我看到通知时的时间地点：<填，比如"凌晨 3 点重庆"，地点+时间锚很重要>
- 18-24h 内的真实数据：profile 访问 ___ / 新粉 ___ / DM ___
- 我后续要承诺的运营节奏：<填，比如"以后每周 1 thread，只发实际 ship 的">

【模板风格参考】
- 不能写成"Today, Elon Musk liked my reply. Here are 5 things I learned."（thread bro 味）
- 要写成"凌晨 3 点点开通知吓了一跳，以为是钓鱼"（自嘲 + 真实细节）

【输出要求】
- 给我 5 个版本，从极端自嘲到适度严肃
- 每个版本 ≤ 280 字符（除非明确标 thread）
- 全小写开头，没破折号，没 "Absolutely / Indeed"
- 必须包含一个真实数字
- 必须包含一个时间或地点锚
- 结尾必须有钩子（dm 'palette' / newsletter link）
- 标注每个版本的目标人群（"硬核 AI 圈" / "普通好奇路人" / "indie hacker 圈"）
```

---

### Prompt 4 · Reply 个性化（最高频，每天用）

**何时用**：每天打开 X 后，看到目标大 V 的新推，决定回什么。

**Prompt**：

```
你是英文 X 高质量 reply 写手。我会给你一条目标推文（@elonmusk / @sama / @xai / @tesla / 
@OpenAI / @naval / @AnthropicAI / @levelsio 等），你给我 3 个 reply 方案。

【目标推文】
作者：@<填>
内容：<粘原文>
推主话题倾向（AI / Tesla / SpaceX / first principles / etc）：<填>

【我的身份切入点】
solo AI builder in china. 重庆. 项目是 east x AI（八字 / 五行 / 节气 / 19 色 → 用 AI 做产品）。
最近一周在做：<填本周实际在做的事>

【输出要求】
3 个 reply 方案，每个方案要：
1. ≤ 280 字符
2. 全小写开头
3. 标注切入角度（"中国视角" / "实操派" / "数据 / 反常识" / "玩笑梗" / "真诚反问" / "respectful 反对"）
4. 每个方案给一个"为什么这条可能涨粉"的一句话理由
5. 必须避开的雷：
   - 没破折号 —
   - 没 "Absolutely / Indeed / Furthermore / In conclusion"
   - 没 "Great point!" / "Thanks for sharing!"
   - 不能 @ 推主之外的人（避免 spam 判定）
   - 不能复制粘贴别处的话术（X 反作弊会标记）
   - 不能政治敏感（中美 / 台海 / 新疆 / 俄乌 / 以巴）
   - 不能伪造内部消息

3 个方案至少有 1 个是"反对 / 补充"型，不要全部捧哏。
```

---

### Prompt 5 · 72h 复盘报告

**何时用**：72h 窗口期 Step 8。

**Prompt**：

```
你是 X 账号增长复盘分析师。我把 72h 数据给你，输出复盘报告 + 下周计划。

【起点（Musk 点赞前一天）】
粉丝数：___
日均 impression：___
日均 profile visit：___
DM / 落地页转化基线：___ / 周

【72h 后（Musk 点赞 + 8 步行动后）】
粉丝数：___
72h 累计 impression：___
72h 累计 profile visit：___
72h DM / 落地页转化：___
那条被赞 reply 的 impression / engagement / 引用：___ / ___ / ___
最意外的关注者（粉丝量 > 1 万）：<列 1-3 个>
被引用 / 被回复最多的一条：<填>
表现最差的一条（涨粉为零）：<填>

【输出】
1. 增长率 / 留存率 / 转化率 3 个核心数字
2. 哪个支柱（A reply / B build / C china / D 美学）回报最高？哪个最差？
3. "中国视角"哪个具体点最戳人？给 3 个例子
4. 下周 7 天选题（每天 1 条主帖 + 5-10 条 reply 方向），每条标注归属支柱
5. 一个本周需要立刻改的运营策略
6. 一个长期值得加倍下注的方向

输出风格：直接、有数字、不废话。不要 "as an AI"，不要"hope this helps"。
```

---

### Prompt 6 · 选题雷达（每周日跑）

**何时用**：每周日晚上，定下周 7 天主帖选题。

**Prompt**：

```
你是英文 X 选题雷达，给 "solo AI builder in china" 类型账号扫下周选题。

【最近 7 天热点（你来扫）】
- @elonmusk 最近 7 天发的推里，哪 3 条互动量最高？什么主题？
- xAI / OpenAI / Anthropic / Tesla 最近有没有发布 / 翻车 / 新闻？
- 中国 AI 圈最近 7 天有没有西方 AI Twitter 没看到的进展？（Doubao / Kimi / 文心 / 通义 / 豆包 / Step / Minimax）
- 美东黄金时段（北京时间 早 7-9）当前讨论度最高的话题是什么？

【我的支柱比例】
- A reply guy 40%（不在选题里，是日常打）
- B build-in-public 25%
- C china inside view 20%
- D east x AI 15%

【输出】
给下周 7 天每天 1 条主帖选题：
- 周一：ship report 主题
- 周二：reply guy day（不出主帖，给 5 个高优先级目标推主 + 推荐切入角度）
- 周三：china inside view 主题（必须有 1 个反常识 + 1 个数字）
- 周四：reply guy day（同周二格式）
- 周五：east x AI 实验主题（必须能产出 1 张图）
- 周六：reply guy day
- 周日：互动 / 复盘 / meta 主题

每条选题给：标题钩子（≤ 280 字符）+ 核心数据 / 截图来源 + 预测 impression 区间。
```

---

### Prompt 7 · 周度数据复盘（每周日晚跑）

**何时用**：每周日晚，对完一周。

**Prompt**：

```
你是 X 增长分析师。我给你本周数据，你给我复盘 + 下周排期。

【本周（周一至周日）】
- 粉丝起点 → 终点：___ → ___
- 周 impression：___
- 周 profile visit：___
- 钩子转化（PDF 领取 / newsletter 订阅）：___
- DM 数：___
- 表现 top 3 的推文：<列内容 + 数据>
- 表现 bottom 3 的推文：<列内容 + 数据>
- 这周打的 5-10 个 reply 哪条最爆？数据？

【输出】
1. 核心 4 个比率：粉丝增速 / impression / 转化 / DM 转化（同比上周）
2. 4 大支柱本周表现排序，给 ROI 估算
3. 下周需要：① 加倍下注的 1 个方向，② 减少投入的 1 个方向，③ 试新的 1 个实验
4. 下周 7 天排期（套 Prompt 6 输出）

不要列表 + emoji，不要 "Furthermore"。直接给我能立刻执行的判断。
```

---

## 高级提示词（按需用）

### Prompt 8 · 翻车故事生成器（B 支柱专用）

**何时用**：当周确实翻了车，要把翻车做成有人味的 build-in-public 推。

```
我这周翻车了，帮我把它写成 1 条 X 推（200-280 字符）。

【翻车事实】
- 我在做：<填>
- 翻车点：<填具体技术 / 业务原因>
- 损失：<时间 / $ / 用户>
- 我学到的：<填>

【风格要求】
- 全小写开头
- 自嘲但不卑微
- 必须有 1 个具体技术名词或数字（"3 hours of debugging" / "GB18030 encoding" / "$47 wasted on pinecone")
- 结尾留一句"教训"，但教训要反 thread bro（不是"5 lessons"，而是 1 句话甩出去）
- 没破折号，没 "Furthermore"

输出 3 个版本，从轻自嘲到重自嘲。
```

---

### Prompt 9 · 东方美学 × AI 实验推（D 支柱专用）

**何时用**：每周五的 D 支柱推。

```
我这周做了一个东方美学 × AI 的实验，帮我写成 1 条 X 推 + 配 1 段图说明。

【实验事实】
- 输入：<填，如"用户的出生年月日时 + 出生城市">
- 工具：<填，如"claude 3.5 sonnet + 我自己的 yaml schema">
- 输出：<填，如"19 色个人本命色板 + 38 页 PDF">
- 一句话说明这个实验对西方观众的反常识点：<填>

【风格要求】
- 推文 ≤ 280 字符，全小写
- 第 1 句钩子要有数字 / 时间 / 反差
- 必须包含 1 个英文观众没听过的中文专有名词（音译 + 简注：如 "wuxing (五行 - five elements theory)" / "节气 (jieqi - 24 solar terms)"）
- 必须有钩子收尾（dm 'palette' for free PDF）
- 配图说明：用什么图（19 色 swatch / 节气壁纸 / mingshu PDF 截图），1 张为主

【反 AI 味自检】
- 没破折号 / 没 "Absolutely Indeed Furthermore"
- 没把"中国传统美学"写成"ancient chinese wisdom"（thread bro 化）
- 不卖玄学，强调"色彩美学"和"具体可运行的产品"
```

---

### Prompt 10 · DM 自动回复模板生成器

**何时用**：钩子（"dm 'palette' for free PDF"）开始有人发 DM 时。

```
我有一个钩子：dm "palette" → 自动回 19 色 PDF 下载链接 + newsletter 邀请。
帮我写一个无人机味的 DM 模板。

【素材】
- PDF 实际链接：<填>
- newsletter 订阅页：<填>
- 我希望对方做的 1 个动作：<填，如"回复 Y 我帮你解读"或"订阅 newsletter">

【风格要求】
- 不能像 customer service 邮件
- 全小写开头
- ≤ 600 字符
- 必须有 1 处自嘲或玩笑（避免商务感）
- 结尾必须是 1 个开放问题（不是 "let me know if you have questions"，而是真正想知道答案的问题）
- 没破折号 / 没 "Absolutely Indeed Furthermore" / 没 "Hope this helps"

输出 3 个版本（极简 / 标准 / 长版本含个性化引导）。
```

---

## 提示词使用 SOP

### 每周固定节奏

| 周几 | 提示词 | 用途 |
|---|---|---|
| 周日晚 | Prompt 6 + 7 | 跑选题雷达 + 上周复盘 + 下周排期 |
| 周一晚 | Prompt 2（thread）+ Prompt 8（如有翻车） | 写 ship report |
| 周二全天 | Prompt 4（reply 个性化）每条都过 | reply guy day |
| 周三晚 | Prompt 2 | 写 China inside view |
| 周四全天 | Prompt 4 | reply guy day |
| 周五晚 | Prompt 9 | 写 east × AI 实验推 |
| 周六全天 | Prompt 4 | reply guy day（周末打 indie hacker 圈）|

### 每月 1 次

- 月初：Prompt 1（profile 体检 + 优化）
- 月末：Prompt 7 的月度变体（手动改改）

### 突发事件

- 被大 V 点赞 / 转发：Prompt 3（meta 推）+ Prompt 5（72h 复盘）
- 翻车：Prompt 8
- 大 V 发新推 / 新闻：Prompt 4（高优先级 reply）

---

**版本**：v0.1 · 2026-05-22 草案
**配套**：[README](./README.md) · [strategy](./x-strategy.md) · [reply scripts](./x-reply-scripts.md) · [72h window](./x-musk-like-72h-window.md)
