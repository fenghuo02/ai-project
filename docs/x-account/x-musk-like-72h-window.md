# 72 小时窗口期紧急行动清单

> 触发：2026-05-22，@elonmusk 给我的一条回复点了赞。
> 目的：把这次"算法红利窗口"利用到极致。
> 时效：**0-72h 是黄金期，72-168h 是衰减期，超过 7 天衰减为零**。
> 状态：v0.1 · 待审阅

---

## 一、为什么 72 小时是窗口期

X 的推荐算法对"被超大 V 互动过的内容"会有一段时间的加权放大：

| 时间窗 | 算法表现 |
|---|---|
| 0-12h | 该 reply 的 impression 会被推到 Musk 的部分粉丝信息流，是首个流量峰 |
| 12-72h | 该 reply 出现在"Musk likes"派生流（部分用户会刷 musk 的 like 列表）+ 你的 profile 被点入率拉高 5-20x |
| 72-168h | 衰减期，但 profile 访问量仍高于基线 2-3x，**新关注者还在持续涌入** |
| 168h+ | 回到基线 |

**结论**：把这 72 小时当成一次"产品发布会"来运营，不要当成日常发推。

---

## 二、8 步行动清单（按时间顺序，0-72h 内必须做完）

### Step 1 · 立刻（0-30 分钟）：把 profile 改成"接得住流量"的样子

**问题**：Musk 点赞后涌入的人，第一动作是点你头像看 profile，**3 秒决定关不关注**。如果 profile 还是日常状态，转化率会低 70%。

**改 4 个字段**：

```
Display name: <你的英文名> | AI builder in China
Handle (@): 不动（账号沉淀）

Bio (160 字符限额，建议这样写)：
solo founder. shipping AI tools from chongqing 🇨🇳
building tools for eastern aesthetics x AI
posting what western AI twitter can't see from inside china
↓ free 19-color palette pdf

Location: Chongqing, China
Website: <放一个 lead magnet 落地页，比如 19色 PDF 的领取页 / Notion 公开页 / Beehiiv 邮件订阅页>
Header image: 一张能看出"中国 + AI 工作台"的照片，不要纯色
```

**3 秒判断逻辑**：
- 第 1 秒：看到 "AI builder in China" → 这是个有差异化身份的人
- 第 2 秒：看到 bio 里 "shipping" "from inside" → 这是实操派不是评论员
- 第 3 秒：看到 "free pdf" → 有钩子，可以低成本试试 → 关注

### Step 2 · 立刻（0-30 分钟）：Pin 那条被赞的回复

把被 Musk 点赞的那条 reply **作为引文转推（quote tweet）**置顶到自己 profile 顶部。

引文文案模板（三选一，**全小写**）：

```
模板 A · 自嘲式（最推荐，反 AI 味最强）：
2 years of replying to elon. one like. worth it.
（附图：那条被赞 reply 的截图 + 像是被红圈标出来的 like）

模板 B · 顺势抛钩子：
elon liked this. so here's my actual thesis on <你那条 reply 的话题> ↓
（接 1 条 thread 展开 5-7 条）

模板 C · 玩梗（如果你的 reply 本身就有梗）：
the like that paid for my coffee budget for the next decade
```

> ⚠️ 模板 B 要求你**马上**写一条 5-7 条的 thread 接下去，详见 Step 3。

### Step 3 · 0-6h 内：发一条"接得住流量"的主帖 / Thread

**目标**：让那 3 秒决定关注的人，进来后**多停留 30 秒**，把"关注"的犹豫转化掉。

**Thread 模板（5-7 条，每条 ≤ 280 字符）**：

```
1/ <一句话钩子，复用你被赞那条 reply 的核心观点>
   例："china's AI scene from inside is not what western twitter thinks. here's
        what i see shipping products from chongqing every week:"

2/ <反常识 / 数据 / 时间地点>
   例："this week i shipped a tool that turns a person's birth chart into
        a 19-color personal palette. built by 1 person + claude + a lot of yaml."

3/ <具体细节，最好带数字 / 截图>
   例："cost: $0 in API for the first 50 users. ran on local llama.cpp +
        3.5 sonnet for the hard parts. <附产品截图>"

4/ <反西方刻板印象的一个点>
   例："the meme that 'china just copies' is 5 years out of date. half my
        feature ideas come from baidu tieba threads no one in SF reads."

5/ <你的钩子 / 钩子链接>
   例："dm me 'palette' for the 19-color pdf. it's free.
        it's the same one i'm building products on top of."

6/（可选）<更深的论点 / 邀请讨论>
   例："genuine question: what would you want to see from a solo builder
        in china that you can't get on western twitter?"

7/（可选）<再放一张图 / 一个数字结尾>
```

**反 AI 味校验**：
- 全小写 ✅
- 没有破折号 — ✅
- 没有 "Furthermore" "In conclusion" ✅
- 每条都有具体名词（"chongqing" "claude" "$0" "baidu tieba"）✅
- 至少一处有真实截图 / 数字 ✅

### Step 4 · 6-12h 内：Reply Guy 双倍下注

利用 profile 流量峰，**主动去 5-8 个相关大 V 的最新推下面留高质量回复**：

| 优先级 | 账号 | 为什么打这个 |
|---|---|---|
| 1 | @elonmusk | 不要再 @ 他这条之外的，但他下一条新推（特别是 AI / Tesla China / Optimus 主题）必须 30 分钟内回复 |
| 1 | @sama (Sam Altman) | OpenAI 任何动态下抢前 50 reply |
| 1 | @xai / @grok | xAI 官号每条必回 |
| 2 | @naval | 哲学 / first principles 类下回中国视角 |
| 2 | @levelsio | indie hacker / solo founder 角度回 |
| 2 | @garrytan | YC + 美国创业视角，留中国视角对照 |
| 3 | @AnthropicAI / @claude | Claude 用户视角 |
| 3 | @scaling01 / @kimmonismus / 其他 AI commentary 大 V | 他们的论调下偶尔补充信息 |

**回复要符合** [x-reply-scripts.md](./x-reply-scripts.md) 的话术库（无人机味）。

**雷区**：
- ❌ 不要再 @elonmusk 在新的推下面，会显得在追着蹭
- ❌ 不要在同一个大 V 下连续回 3 条，X 会判 spam
- ❌ 不要复制粘贴同一句话到多个大 V 下（X 反作弊会标记）

### Step 5 · 12-24h 内：开通 / 升级 X Premium

如果还没开 X Premium：**立刻开**。原因：

1. 蓝标后回复的可见性提升 30-50%（X 算法明牌加权）
2. 解锁 4000 字符长推 + 视频上传（thread 之外多一种内容形式）
3. 解锁 ads revenue share 资格（500 粉 + 5M impression / 3 个月就能分成）
4. 这次窗口期带来的流量峰能直接拉满 5M impression 的 KPI

**预算**：约 $8/月（基础版） / $16/月（Premium+，可关广告）。建议直接 **Premium+**，正经做账号一年内一定回本。

### Step 6 · 24-48h 内：把"被点赞"做成内容

**meta 内容**最容易病毒传播。把"被 Musk 点赞"这件事本身做成一条独立推：

```
推文模板（独立发，不是 quote）：

elon liked one of my replies today.
checked my notifs at 3am chongqing time.
thought it was a phishing scam at first.

stats so far in the last 18 hours:
- profile visits: <填数字>
- new followers: <填数字>
- DMs from people i've followed for years: <填数字>

posting from inside china is a weird kind of asymmetric leverage.
i'm going to lean into it. 1 thread per week from now on,
no fluff, just what i actually shipped that week.

dm 'palette' for the free PDF i mentioned.
```

**为什么这条管用**：
1. 数字真实（具体可信）
2. "3am chongqing time" 是地点 + 时间锚，反 AI 味满分
3. "thought it was phishing" 自嘲（亲和力）
4. 顺势宣布"每周 1 thread"（建立预期）
5. 钩子收尾

### Step 7 · 24-72h 内：清扫账号 + 转化路径打通

| 任务 | 说明 |
|---|---|
| 删 / Archive 老推文 | 把过去 6 个月里 AI 味重 / 没具体性 / 蹭热点失败的推删了，不要让新关注者翻到"原来这账号也水" |
| Highlights 精选 | 把过去 5-10 条最好的推 pin 到 Highlights tab，让新访客有"作品集"看 |
| 落地页就位 | bio link 指向的页面必须能转化：领取 PDF / 订阅 newsletter / DM 模板 |
| Newsletter 注册 | 还没有就立刻在 Beehiiv / Substack / 公众号 海外版（如有）注册一个"china AI builder dispatch"，每周一发 |
| DM 自动回复 | 把 "palette" / "PDF" 关键词的自动回复模板写好（X 没原生功能，可以用 TweetHunter / Hypefury） |

### Step 8 · 72h 末复盘 + 写下一周计划

**第 3 天晚上做这件事**（坐下来 30 分钟，不要省）：

复盘表（直接写在本文件末尾或单独 commit 一份 `x-week0-retro.md`）：

```
日期：2026-05-22 → 2026-05-25

数据快照：
- 起点粉丝数：______
- 72h 后粉丝数：______
- 增量：______ (+%)
- 那条被赞 reply 的 impression：______
- 72h 内总 impression：______
- 新增 followers 中关注者 > 1 万的有几个：______
- DM 数（含咨询 / 合作）：______
- 落地页转化数（PDF 领取 / newsletter 订阅）：______

定性观察：
- 最意外的关注者是谁？
- 被回复 / 被引用最多的一条是哪条？为什么？
- 哪条 reply 没起来？复盘原因。
- 中国视角的哪个点最戳人？

下一周排期（按 x-strategy.md §三 30 天日历）：
- 主帖（thread 或长推）：周二 / 周五，2 条
- 短推 / 评论玩梗：每天 3-5 条
- Reply guy 时间段：每天早 7-9（北京时间，对应美东 19-21 黄金时段）
```

---

## 三、72h 内"绝对不要做"的事

| ❌ 雷区 | 原因 |
|---|---|
| 一天发超过 10 条原创推 | 算法判定灌水降权，新涨粉来看 profile 会觉得"信息密度太低" |
| 在 Musk 任何评论区刷屏 | 直接判 spam，封 reply 权限 24-72h，那就血亏窗口期 |
| 立刻开始卖东西 / 推付费产品 | 0-72h 是建立信任期，硬转化会把刚关注的 50% 立刻流失 |
| 切话题（突然发美食 / 旅游 / 政治）| 来的人是冲"AI builder in china"来的，切话题等于切流量 |
| 用 AI 生成味很重的图（midjourney 默认风）| 反而暴露 AI 味，要么用真实工作室照片，要么用产品截图，要么用东方美学定制图（参考 cover-ai-prompts.md）|
| 删那条被赞 reply | 别笑，真有人手抖删过 |

---

## 四、配套提示词

跑下面这些之前先读 [x-prompts.md](./x-prompts.md)：

- **Prompt 1（账号体检）**：把 profile 现状粘进去，让 AI 给改写建议（Step 1 用）
- **Prompt 2（Thread 生成器）**：给一句核心观点 → 输出 5-7 条 thread（Step 3 用）
- **Prompt 3（Meta 帖生成器）**：把"被 Musk 点赞"做成 meta 推（Step 6 用）
- **Prompt 4（回复个性化）**：给一条目标 reply 的截图 / 文字 → 输出 3 个无人机味回复方案（Step 4 + 日常用）
- **Prompt 5（72h 复盘）**：把数据粘进去 → 输出复盘报告 + 下周计划（Step 8 用）

---

## 五、走完 72h 之后

1. 提交 `x-week0-retro.md`（复盘文件）
2. 进入 [x-strategy.md](./x-strategy.md) §三 30 天日历的 **第 1 周** 排期
3. 这一份文件**归档**（mv 到 `docs/x-account/_archive/` 或保留作为下一次"被大 V 点赞"时的复用模板）

---

**版本**：v0.1 · 2026-05-22 草案
**配套**：[README](./README.md) · [x-strategy.md](./x-strategy.md) · [x-prompts.md](./x-prompts.md) · [x-reply-scripts.md](./x-reply-scripts.md)
