# Brand v2.0 Activation Checklist · 让 Observer 升级真正落地

> 状态：v1.0 · 2026-05-30
> 触发：[observer-brand-pivot.md](./observer-brand-pivot.md) v2.0 已设计完整，但**仓库其余文档 + X 账号本身**还在 Musk-only v1.0 口径。这份 checklist 把"设计"转成"部署"。
> 配套：[observer-brand-pivot.md](./observer-brand-pivot.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [README.md](./README.md)

---

## 零、为什么需要这份文档

`observer-brand-pivot.md` 写完了 v2.0 的全部内容（25% Musk + 25% AI + 20% Markets + 15% Cultural + 10% Build + 5% Misc），但实际状态是：

| 维度 | v1 (Musk-only) | v2 (Observer) | 当前真实状态 |
|---|---|---|---|
| README 一句话定位 | "musk's empire, decoded daily" | "an independent observer..." | ❌ 还是 v1 |
| Bio | "musk's empire, decoded daily / 6 brands..." | observer 版本（保守 / 平衡 / 激进 3 选 1）| ❌ 还是 v1 |
| Display name | `Skub · Musk Empire Decoder` | `Skub · Observer & Investor`（待定）| ❌ 还是 v1 |
| Pin 推 | Decoder Thread #01（6 brands overview）| Observer pivot 公告 + 新 manifesto thread | ❌ 还是 v1 |
| _prompts-pack §1 | Daily Content Pack v1（Musk-only）| §14 v2.0（13 pillars / 4 groups）| ⚠️ §1 标了 deprecated 但 §14 没接到日常 SOP 里 |
| handbook §一三件事 | 1 Musk + 5 humor | 1 main (4 pillars) + 5 humor (13 pool) + 1 expansion | ❌ 还是 v1 |
| reply scripts | Musk 8 子话题 + Tesla bull 大 V | + AI race CEO + 投资者大 V + observer 维度 | ❌ 还是 v1 |
| 视觉 | "黑底白字 musk empire decoder"占位 | 见 [visual-identity.md](./visual-identity.md) | ❌ 占位 |

**结论**：v2.0 不是"已部署"。是"已设计但仓库精神分裂"。这份 checklist 修复它。

---

## 一、deployment 哲学 · 软迁移 vs 硬切换

`observer-brand-pivot.md` §八定义了 4 周软迁移：bio 不变 / 比例渐变 / 第 4 周根据数据决定激进版。这份 checklist **完全沿用**那个时间表，只补两件事：

1. **文档系统提前一次性切**（仓库不再精神分裂；v1 文件保留为历史归档不删）
2. **X 账号本身按 4 周软迁移**（不在 D-Day 一次硬切，避免 7-14 天算法重校准期掉量）

```
Day 0 (今天)              文档系统 v1 → v2 一次性切完
Day 0 - Day 7 (Week 1)    X 账号不动 bio，主推减 Musk 比例
Day 8 - Day 14 (Week 2)   Bio 升保守版（如果 Week 1 掉粉 < 5%）
Day 15 - Day 21 (Week 3)  Pin 推换 / 13 段子全覆盖
Day 22 - Day 30 (Week 4)  数据复盘 → bio 是否再升激进版
```

---

## 二、Day 0 文档系统切换（一次性做完）

下面 8 件事**今天合并这个 PR 后立刻完成**。每完成一项打勾。

### 2.1 README.md 升级到 v2.0

- [ ] 顶部"一句话定位"改成 observer 版（保守版，3 选 1 见 §四）
- [ ] "为什么这个定位能赢" 5 条改成 observer 版（不再说"唯一焦点 Musk"）
- [ ] "不是什么" 6 条加一行：`不是 Musk 唯一频道（Musk 是话题之一不是品牌）`
- [ ] 文件索引顺序：observer-brand-pivot 升到"战略核心"区，与 handbook / prompts-pack 同级
- [ ] "当前阶段"列表加一行：`1.1 完成 brand v2 activation（本 PR）`
- [ ] "风险红线"保留全部 5 条不动（这些和 v2 不冲突）

> ✅ 预填好的 README 替换段见本 PR README.md 的 diff。

### 2.2 _self-operation-handbook.md §一"3 件事就够了"重写

把表格升级成：

| 频率 | 时间 | 做什么 | 用什么 |
|---|---|---|---|
| **每天** | 06:30-09:00 | 1 main tweet (4 pillars) + 5 humor (13 pool 选 5) + 1 expansion (E1-E5) | [§14 v2.0](./_prompts-pack.md#14--daily-humor-pool-generator-v20-replaces-1-use-daily-at-0630) |
| **每周日** | 21:00-22:30 | 7 天数据复盘 + Newsletter + Cheat Sheet 刷新 + **X Article 长文** | §2-5 + [§19](./_prompts-pack.md) |
| **每月最后一天** | 19:00-21:00 | 月度复盘 + Migration triggers 检查 + **品牌 v2 进度评估** | §3 + 本文档 §六 |
| **每周五**（新）| 21:00-21:30 | **30 分钟 X Spaces** | [spaces-and-community.md](./spaces-and-community.md) |

> ✅ 预填好的 handbook 替换段见本 PR _self-operation-handbook.md 的 diff。

### 2.3 _self-operation-handbook.md §二"Daily SOP"时间轴升级

旧表（5 段子按 H1-H5 时间槽）→ 新表加入 expansion 时段：

| 北京 | 美东 | 内容 |
|---|---|---|
| 07:30 | Sun-Thu 19:30 | **Main tweet**（A/B/C/D 4 pillars 轮转，不全是 Musk）|
| 09:30 | 21:30 | Humor 1（G1 / G3 / G4 之一）|
| 11:30 | 23:30 | **Expansion** E1-E5 之一（**新时段**，工作日发，周末不发）|
| 12:30 | 00:30 | Humor 2 |
| 14:30 | 02:30 | Humor 3 |
| 17:30 | 05:30 | Humor 4 |
| 19:30 | 07:30 | Humor 5 |
| 22:30 | 10:30 | （Premium+ 内置定时排好的最后一条 humor）|

每天总数：1 main + 5 humor + 1 expansion = **7 条/工作日**，5 条段子从 13 池子里按 G1-G4 算法选。

### 2.4 _prompts-pack.md §1 彻底归档

- [ ] §1 标题加 `[已归档 · 仅作历史参考]`
- [ ] §1 内容前面插一行 `> 用 §14 替代。`
- [ ] 速查表删除 §1 行（或保留但灰底）

### 2.5 README.md 文件索引升级

把"自助运营核心"区扩到 6 行：

| 角色 | 文件 |
|---|---|
| 大脑 | [_self-operation-handbook.md](./_self-operation-handbook.md) |
| 工具箱 | [_prompts-pack.md](./_prompts-pack.md) |
| 战略升级 | [observer-brand-pivot.md](./observer-brand-pivot.md) |
| 部署 | [brand-v2-activation-checklist.md](./brand-v2-activation-checklist.md)（本文件）|
| 视觉 | [visual-identity.md](./visual-identity.md) |
| 栏目化 | [signature-series.md](./signature-series.md) |

### 2.6 风险红线扩展

README 末尾的 5 条风险红线扩到 7 条：

```
6. ❌ 不要在 v2 转期发 Musk 私生活 / OpenAI vs Musk 八卦（observer 立场要求中立观察，不站队）
7. ❌ 不要因为加了 Markets/Cultural 支柱就给投资建议（"3 takes. all could be wrong" 是底线声明，不能省）
```

### 2.7 把 v1 的资料归档（不删）

- [ ] 在 README 文件索引下加一节"历史归档"：列出 `_today-2026-05-22-launch-pack.md` / `x-musk-like-72h-window.md` / `decoder-threads/01-week21-empire-overview.md`，标注 **历史阶段产物，已被 signature-series.md 替代**

> 不删原因：launch 阶段的复盘价值 + 防止任何破链。

### 2.8 git commit 规范

这次 PR 的 commit message 主体：

```
feat(x-account): big-v upgrade pack v3.0 — brand v2 activation + visual + series + articles + spaces + collab

deploys observer brand v2.0 (designed in PR #55) end-to-end:
- adds 7 new docs: brand-v2-activation-checklist / visual-identity /
  signature-series / x-articles-playbook / spaces-and-community /
  peer-collab-playbook / signature-voice
- updates README + handbook + prompts-pack to v2.0 voice
- adds prompts §19-§22 for X Articles / AI Race Card / Reading List /
  Spaces prep
- defines 5 named recurring weekly formats (Monday Empire Map /
  Wednesday AI Race Card / Friday Reading List / Sunday Long Read /
  Last-Day Monthly Map)
- closes the visual identity gap with a 4-template image system
  consistent with cheat-sheet aesthetic (#111 / #c00 / #f0a000)
- adds friday X Spaces 30-min slot to weekly cadence
- defines 10 collab targets + DM templates for cross-promotion

after merge: account is positioned for top-tier creator (1m+) trajectory.
```

---

## 三、Day 0 X 账号侧动作（**不动 bio**）

> 关键：文档切完不代表 X 账号也立刻切。X 账号按软迁移走。

Day 0 在 X 上**唯一要做**的事：

- [ ] 发一条 transition tweet（非 Pin，普通推），让现有粉丝知道方向：

```
small thing. been thinking about what this account is for.

started as "musk's empire decoded." that's still here.
but i mostly read filings, watch markets, and write down what's actually happening across tech. musk is one chapter, not the book.

bio update coming next week. content stays sharper, less narrow.
```

发布时段：今天（周六）下午北京 14:30 / 美东凌晨 02:30 → 这是 H8 投资者段子的天然时段。

---

## 四、Bio / Display Name 升级（Week 2 起）

仅当 Week 1 数据满足以下条件才执行：

```
Week 1 (Day 1-7) 监测：
- 掉粉数 < 总粉丝的 5%
- 主推 ROI 没下滑超过 30%
- 没有大 V 取关
```

如果都满足 → Day 8 升级。如果不满足 → 留在 Week 1 状态多跑 1 周再评估。

### Bio v2 保守版（推荐 · 160 字符内）

```
decoding tech, markets, and the empires being built around them.
musk / openai / anthropic / nvidia / apple / starlink, plus the macro behind it.
↓ free monthly tracker pdf
```

### Bio v2 平衡版（Week 4 数据好可升）

```
an independent observer & investor.
tech, markets, ipos, AI, and the empires being built right now.
🇨🇳 perspective from outside silicon valley.
↓ free weekly digest
```

### Bio v2 激进版（M3 才考虑，需要 10K+ 粉支撑）

```
markets are noisy. tech is loud. the world is moving. i write down what i actually see.
just an observer with a portfolio and a notebook.
```

### Display Name

| 阶段 | Display Name |
|---|---|
| 现在（Day 0）| `Skub · Musk Empire Decoder` |
| Week 2 切换 | `Skub · observer & investor` |
| Week 4 + Spaces 启动 | `Skub · observer & investor 🎙️ fri spaces` |

### Location（不变）

```
GMT+8 watcher
```

### Header

按 [visual-identity.md §三](./visual-identity.md) 的 header 模板生成（Day 0 PR 同时部署，不需要再等）。

---

## 五、Pin 推升级（Week 3 起）

旧 Pin = Decoder Thread #01（6 brands overview，2026-05-25 发布）

新 Pin = **Observer Manifesto Thread**（Week 3 发布，9-11 推）。模板：

```
1/ been on this app since 2024. mostly replied to elon, occasionally got noticed.
   started a newsletter in may 2026 because the algorithm was generous.

2/ here's what i actually do:
   read filings → watch markets → write down what's actually happening
   across tech, markets, and the empires being built right now.

3/ musk is one chapter. not the book.

4/ what gets covered weekly:
   - frontier AI race (anthropic / openai / xai / google / meta)
   - markets watch (ipos, earnings, fed, valuations)
   - empire tracking (musk's 6 brands, but as one of many topics)
   - cultural observation (work / generation / tech-on-life)

5/ what doesn't:
   - politics
   - financial advice
   - pumping anyone's bag
   - content that requires you to outrage to engage

6/ format:
   - daily 1 main + 5 humor + 1 expansion = 7 posts
   - monday: empire map thread
   - wednesday: AI race card (data viz)
   - friday: reading list + 30-min spaces 21:00 BJ
   - sunday: long-read article + weekly newsletter

7/ what you get if you stay:
   - free monthly tracker pdf (currently v0.2, week 22)
   - free weekly digest (every monday morning)
   - one-of-a-kind musk tweet decoder dictionary

8/ what i ask:
   - bookmark threads you'll re-read
   - reply with disagreement when you have it
   - tell me what's missing

9/ pinned this thread because it explains the rest.
   first newsletter issue: <link>
   first reading list: <link>

(observer brand v2.0 · effective week 24 / 2026)
```

发布时段：Day 15 周一早 07:30 北京 → 美东周日晚 19:30。**发完立刻 Pin 替换 Decoder Thread #01**（不删原 thread，只是不再 Pin）。

---

## 六、Week 4 数据评估表

`Day 22-28` 的最后一个周日跑这张表。3 列里至少要 2 列绿才升激进版。

| 指标 | 红（回退）| 黄（停留）| 绿（升级）|
|---|---|---|---|
| Day 0 → Day 28 净涨粉 | < 0% | 0-5% | > 5% |
| Day 28 周 impression | < Day 0 90% | 90-110% | > 110% |
| Tally 订阅增量 | < 5 | 5-20 | > 20 |
| 主推平均 bookmark | < Day 0 | 持平 | > Day 0 1.5× |
| Top 5 推中 v2 内容（非 Musk）占比 | 0 | 1-2 | ≥ 3 |

**结果决策**：

- **3 列以上绿** → bio 升级到平衡版 + display name 加 🎙️ + 启动 X Spaces
- **2 列黄 + 1 列绿** → bio 保留保守版 + 内容比例继续推进
- **1 列以下绿 / 任一红** → 回到 Week 1 比例（70% Musk）跑额外 2 周后重新评估

---

## 七、紧急回退预案

如果 Week 1-3 任一时间点出现：

```
- 单日掉粉 > 50
- 单日某条爆款被 ratio (replies > 3× likes 持续 6h)
- 任一 5K+ 粉的 Musk 圈大 V 取关并发文 vague 提及
- X 算法警告 / 内容受限通知
```

执行回退：

1. **立刻停止发布 v2 新主题**（Markets / Cultural），暂时回到 1 Musk + 5 humor 节奏
2. **不删任何已发 v2 内容**（删了会触发二次审核 + Streisand）
3. 7 天观察期：跑 _prompts-pack.md §6 Crisis Response 让 AI 帮判断哪条 / 哪个角度触发了
4. 判断：是品牌切太快 vs 单条内容质量问题
5. 7 天后：根据判断结果 → 回到 Week 1 比例 OR 继续 v2 节奏但避开触发点

---

## 八、最后一次 sanity check（merge PR 之前）

在 merge 这个 PR 之前，回答这 5 个问题，全是"是"才 merge：

- [ ] 我读过 [observer-brand-pivot.md](./observer-brand-pivot.md) 全文，认同 25%/25%/20%/15%/10%/5% 的分布
- [ ] 我接受 4 周软迁移过程中可能掉粉 5% 以内
- [ ] 我有意愿在 Week 4 用本文 §六的硬数据做决策（不靠感觉）
- [ ] 我接受 v1 launch thread 不再是 Pin（但作为账号原点不删）
- [ ] 我清楚回退是什么样的（§七）

---

## 九、与其他文档的依赖关系

这份 checklist 是 **deployment runbook**，需要配合：

| 文件 | 作用 |
|---|---|
| [observer-brand-pivot.md](./observer-brand-pivot.md) | 战略 source of truth（**为什么** v2）|
| [visual-identity.md](./visual-identity.md) | 视觉系统（header / avatar / 数据图 4 模板）|
| [signature-series.md](./signature-series.md) | 5 个命名固定栏目（Mon/Wed/Fri/Sun/Last-Day）|
| [x-articles-playbook.md](./x-articles-playbook.md) | Sunday Long Read 怎么写 |
| [spaces-and-community.md](./spaces-and-community.md) | Friday Spaces 怎么开 |
| [peer-collab-playbook.md](./peer-collab-playbook.md) | Week 3+ collab 启动 |
| [signature-voice.md](./signature-voice.md) | 语气 / 起源故事 / 招牌口头禅 |
| [_self-operation-handbook.md](./_self-operation-handbook.md) | 日常 SOP（已 v2 同步）|
| [_prompts-pack.md](./_prompts-pack.md) | 18 prompts 现状 + §19-§22 新增 |

任何一份 doc 之后做修改，都先回来更新这份 checklist 的状态行。

---

**版本**：v1.0 · 2026-05-30
**期限**：本文档在 v2.0 完全部署 + Week 4 评估完成后归档（约 2026-06-30）
**配套**：见 §九
