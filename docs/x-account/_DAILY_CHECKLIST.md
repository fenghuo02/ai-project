# 每天发推 · 执行卡 v6.0

> 状态：v6.0 · 2026-05-30
> 用法：早上起床打开这一页。**所有动作 self-contained，不用翻其他文档**（除非命中触发条件）。
> 这是把 [_self-operation-handbook.md](./_self-operation-handbook.md) + [_prompts-pack.md](./_prompts-pack.md) + [algorithm-2026-playbook.md](./algorithm-2026-playbook.md) + [growth-mechanics-2026.md](./growth-mechanics-2026.md) + 25 个其他 doc 炼成的 1 页执行版。

---

## 一、起床后 30 分钟主流程（北京时间 06:30-07:30）

### 06:30-06:35 · push 监控 + idea capture（5 min）

```
□ 看 X push / Grok / Bloomberg / CNBC / Stocktwits
  · 有 P0/P1 突发新闻？→ 跳「突发模式」用 §25 Newsjacking
  · 没有 → 继续常规
□ 任何"哦"的想法 → 1 句话写进 Notion Inbox
```

### 06:35-06:45 · 跑 §14 Daily Humor Pool（10 min）

```
□ 把 _prompts-pack.md §14 整段 copy 到 Grok
□ 输入：今天日期 + 今天主推话题
□ 可选：从 Notion Atom pool 挑 1-3 个 atoms 喂进去（second brain）
□ Grok 输出：1 main + 5 humor + 1 expansion 草稿
```

### 06:45-07:15 · 自检 + 微调（30 min · **最关键**）

发主推前必过这 **7 道铁律**（任 1 不过 = 改）：

| # | 红线 | 来源 |
|---|---|---|
| 1 | ❌ 主推有任何 https / .com / 外链 | v4 link-in-reply |
| 2 | ❌ 第 1 行没具体数字 + 立场（stop-scroll） | v4 not_dwelled |
| 3 | ❌ 用 thread "1/9" 格式 | v4 long-form > thread |
| 4 | ❌ 全大写开头 / 破折号 / Absolutely Furthermore Indeed | v3 anti-AI 8 铁律 |
| 5 | ❌ 引用别人 X 内容用截图 / @ + URL | v4 Quote-tweet attribution |
| 6 | ❌ Markets/IPO 主题没"observation, not advice"收尾 | v5 法务铁律 |
| 7 | ❌ 数字密度 < 3 + 没结构化 | v4 bookmark engineering |

7 道全过 → 准备 **Reply 1 / 2 草稿**：

```
Reply 1（要点 + 链接）:
  full piece: [Beehiiv link]
  5-bullet text version:
  - [bullet 1 + 数字]
  - [bullet 2 + 数字]
  - [bullet 3 + 数字]
  - [bullet 4 + 数字]
  - [bullet 5 + 数字]

Reply 2（CTA）:
  weekly digest: [link]
  next monday: [hook]
```

### 07:15-07:30 · 发主推 + 立刻 Reply（15 min）

```
□ 07:15 (T+0): 发主推
□ T+15s: 发 Reply 1（链接 + 5-bullet）
□ T+5min: 发 Reply 2（CTA）
```

---

## 二、First 60-min SOP（v4 算法关键）

不做 = 95% 分发卡死。

```
T+10 min  发自我 reply · 实质性补充（不是 "thoughts?"）
          例: "the part i kept thinking about: [反差 + 数字]"

T+15 min  去 3-5 个 Tier A 战场打 reply（吸虹流量）
          见 [peer-collab-playbook.md] · 同一大 V 一天 ≤ 2 条

T+30 min  检查 imp:
          imp < 500   → 死了，move on
          imp 1K-5K   → 中等，等长尾
          imp > 5K    → 起飞，加倍维护

T+60 min  最终评估 + 决定下一动作
```

---

## 三、全天 7 推时段

| 北京 | 美东 | 内容 |
|---|---|---|
| 07:15 | Sun-Thu 19:15 | **Main**（按当周日 series）|
| 09:30 | 21:30 | Humor 1 |
| **11:30** | 23:30 | **Expansion E1-E5**（工作日）|
| 12:30 | 00:30 | Humor 2 |
| 14:30 | 02:30 | Humor 3 |
| 17:30 | 05:30 | Humor 4 |
| 19:30 | 07:30 | Humor 5（周五是 Reading List）|
| 22:30 | 10:30 | 最后 humor |

---

## 四、当天是周几？

| 周 | Main 类型 | 额外 |
|---|---|---|
| **Mon** 07:15 | 🟢 Empire Map（long-form 单推 4000 字符）| First 60-min SOP 必跑 |
| **Tue** | 普通 | — |
| **Wed** 11:30 | 🟢 AI Race Card（数据图 + 1 推）| 用 [template-comparison-table.html](./visual/template-comparison-table.html) |
| **Thu** | 普通 | — |
| **Fri** 19:30 | 🟢 Reading List（long-form + Quote-tweet）| 21:00 Friday Spaces 30 min |
| **Sat** 11:30 | 🎬 Vertical Video（9:16, 60s）| 跑 §24，跨平台分发 |
| **Sun** 21:00 | 🟢 Long Read（X Article 1500-3000 字）| 21:30 Newsletter + 22:00 retro + atom distill |

**月末**：替换日常排期为 **Last-Day Monthly Map** + Monthly retro（10 项 review）+ GEO audit。

**季度末**：加 Reader Survey + Long-term Flywheel review（1 hr）。

---

## 五、Reply Day 碎片时段（08-14am、18-22pm）

```
□ 每段 30 min
□ 用 [x-reply-scripts.md] 找模板
□ Tier A 大 V 优先（@elonmusk / @sama / @SawyerMerritt 等）
□ 同一大 V 一天 ≤ 2 条
□ 每条必有 1 数字 + 1 观察 + 招牌句式
□ 至少 1 条投给本周 Friday Reading List 候选作者
```

---

## 六、睡前 5 分钟（22:00-22:30）

```
□ Idea capture · 当天最后 1-3 个想法进 Notion Inbox
□ 数据登记 · 今天 7 推 imp/like/RT/reply/bookmark 填表
□ 标 1 个 "tomorrow's prompt 用得到" 的 atom
□ 关 X 通知（睡眠保护）
```

---

## 七、贴墙版 · 1 行核对（**默念这 7 个字**）

```
长 · 数 · 立 · 结 · 引 · 链 · 检
   ↓     ↓    ↓    ↓    ↓    ↓    ↓
 long  数字  立场 结构  Quote 链放  招牌
 form        反差       不截图 reply 句式
```

7 字全过 = 发。任 1 不过 = 改 1-2 句再发。

---

## 八、突发触发器（任 1 命中 → 跳模式）

| 触发 | 跳到 |
|---|---|
| P0/P1 突发新闻（IPO / 财报 / Musk 大推 / AI 模型发布）| [§25 Newsjacking](./_prompts-pack.md) · 60 min 反应 |
| 主推 ratio > 5:1 / 大 V 公开 challenge | [reputation-crisis-playbook.md §三](./reputation-crisis-playbook.md) · 6 类应对 |
| 收到 cease-and-desist / SEC inquiry | [legal-compliance.md §五](./legal-compliance.md) · lawyer 60 min |
| 怀疑账号被 hack / 异常通知 | [account-security-playbook.md §三](./account-security-playbook.md) · 24h recovery SOP |
| 算法异常 / 限流 / suspended | [_self-operation-handbook.md §八 Crisis](./_self-operation-handbook.md) Type A-G |

---

## 九、月度 / 季度 / 年度（不每天做但别忘）

| 频率 | 加做 |
|---|---|
| 每月最后一天 | Monthly retro（11 项）+ §29 GEO audit + atom pool clean + Personal CRM review + Revenue review + Bookkeeping + Security review + Legal compliance + 5 个 1:1 interviews |
| 每季度末 | + Reader Survey + Sustainability check + Long-term Flywheel review |
| 每年末 | + Annual Audience Map + Annual Outlook PDF |

---

## 十、本卡 vs 28 个深度文档

```
本卡 = 早上 30 min 主流程 + 全天 reply day + 触发器跳转
深度 doc = 出 trigger 时翻一页

不用每天翻 28 文档。本卡告诉你"什么时候翻哪一个"。
```

---

**版本**：v6.0 · 2026-05-30
**配套**：[_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md) · [README.md](./README.md)
