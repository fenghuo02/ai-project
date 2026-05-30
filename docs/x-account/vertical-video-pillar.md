# Vertical Video Pillar · 周六视频支柱

> 状态：v1.0 · 2026-05-30
> 触发：v3.0 完全空白的 video 维度。2026 年算法对 native vertical 9:16 video 给 2-3× 曝光加权。Saturday 槽位之前空着，正好用。
> 配套：[algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [signature-series.md](./signature-series.md) · [visual-identity.md](./visual-identity.md)

---

## 一、为什么必须开 video pillar

### 2026 数据现实

| 指标 | 文字推 | Vertical Video 9:16 |
|---|---|---|
| 算法曝光加权 | 1× | **2-3×** |
| Heavy Ranker 评分（dwell time）| 中 | **高**（视频天然增加 dwell）|
| Bookmark 率 | 中 | **较低**（视频不易 bookmark）|
| Reply 率 | 中 | 中 |
| 关注转化率 | 中 | **高**（人脸 + 声音 = parasocial 信任）|
| 跨平台复用 | 文字只在 X | **可同步 YT Shorts / TikTok / IG Reels / 小红书** |

[来源：blog.wenhaofree.com 2026 core rules · postmypost vertical video safe zones · hillarymarek 2026 vertical ecosystem]

### 跨平台杠杆

video 是 **唯一可以一次拍跨 5 个平台**的内容类型：

```
拍 1 条 60s vertical video
   ↓
   X (主)        · Premium+ 自带视频 player
   YouTube Shorts · 算法独立曝光 + revenue share
   Instagram Reels · 跨圈 + 朋友看到
   TikTok        · 美西最大触达
   小红书 / Bilibili · 中文圈备份
```

**每周 1 条视频 ≈ 5 个平台同步触达 = 周流量 +30-80%**。

详细跨平台分发见 [cross-platform-funnel.md §三视频分发](./cross-platform-funnel.md)。

---

## 二、4 个简单 video 格式（不需要 After Effects）

### V1 · Terminal Screen Recording（最低门槛）

**做什么**：录制屏幕展示一个数据 / 一段代码 / 一个对比。配 voiceover。

**5 个 V1 选题候选**：

```
1. "the 1 line in spacexai s-1 nobody quoted" · 屏幕高亮那一行 + 60s 解读
2. "anthropic vs openai in numbers" · 两栏对比表 60s 滚动
3. "AI lab GPU count over 6 months" · 折线图 timelapse
4. "what fsd v14.3.3 actually shipped" · changelog 滚动 + voiceover
5. "the musk tweet decoder dictionary in 60 seconds" · 15 phrases 翻页
```

**工具**：Mac QuickTime / Win OBS（屏幕录制）→ CapCut 手机版剪辑（免费）

**时间成本**：30-45 分钟 / 条

### V2 · Phone Stand-up（需要面对镜头）

**做什么**：手机自拍 60s，讲一个 take。背景：白墙 / 干净书架 / 都行。

**5 个 V2 选题**：

```
1. "i read all 412 pages of spacex's s-1 so you don't have to. here's the 1 thing nobody quoted:"
2. "anthropic at $965B is the floor not peak. 60 seconds why."
3. "fsd subs hit 1.28M. that's the bear case killer. but here's what the bulls miss."
4. "wwdc is in 4 days. here are 3 things i'm watching that aren't in the headlines:"
5. "i tracked 7 musk timeline predictions over 6 months. 4 missed by 6+ months. the pattern matters."
```

**工具**：手机 + 自然光 + AirPods（mic）+ CapCut

**时间成本**：60-90 分钟 / 条（包括 N 次重拍）

### V3 · Data Visualization Video（最强 bookmark 触发）

**做什么**：一张数据图 + 30s 解读 + 30s 含义展开。视觉引导观众读数据。

**5 个 V3 选题**：

```
1. "AI race in one chart · 5 labs / 5 metrics / who's actually winning"
2. "spacexai ipo timeline visualized · jun 12 isn't the date you think"
3. "tesla q1-q4 2026 forecast · 4 scenarios"
4. "anthropic revenue trajectory · the 6.7× yoy nobody is graphing"
5. "frontier model releases 2026 · who shipped what when"
```

**工具**：Excel / Google Sheets / Numbers 做图 → 屏幕录制 → CapCut 加 voiceover

**时间成本**：90-120 分钟 / 条

### V4 · "I read X so you don't have to"（curation / collab 杠杆）

**做什么**：手举一份打印的 filings / 长文 / 论文，讲 60s 关键 takeaway。

**5 个 V4 选题**：

```
1. "i read spacex's 412-page s-1. here's the 1 page that matters."
2. "i read anthropic's blog post on $30B annualized. here are the 3 footnotes nobody quoted."
3. "i read all 14 pages of fsd v14.3.3 release notes. here's what's actually new."
4. "i read [stratechery's wwdc preview]. here's where i agree and where i disagree."
5. "i read tesla's q1 10-Q. note 23 is where the bull case lives."
```

**特点**：

- 自带 collab 杠杆（提到 stratechery / 引用别人的 long-form）
- 知识密度高 → bookmark 率高
- 视觉 prop（实物文档）= stop scroll

**工具**：手机 + 打印的 1-2 页 PDF + 自然光 + CapCut

**时间成本**：60-90 分钟 / 条

---

## 三、Video Production SOP（每周六 09:00-12:00 北京）

### 9.0 启动条件（不需要先有粉丝）

video 立刻可以开始，不像 Spaces 需要门槛。**第 1 周就可以发 V1（Terminal Screen Recording，0 镜头门槛）**。

### 9.1 周六 09:00-09:30 · 选题 + 脚本

打开 [_prompts-pack.md §24 Vertical Video Script Generator](./_prompts-pack.md)（v4 新增），输入当周热点 + 选格式 V1-V4。

输出：

- 60-second hook（前 3 秒 stop-scroll）
- 5-6 段 talking points
- 1 句 takeaway
- alt-text + caption

### 9.2 09:30-11:00 · 拍 + 剪

按选定格式：

- V1：屏幕录制 → CapCut 加 voiceover
- V2：自拍 5-8 take → CapCut 选最佳剪辑
- V3：做图 → 屏幕录制 → CapCut 加 voiceover + 字幕
- V4：自拍举着 prop → CapCut

### 9.3 11:00-11:30 · CapCut 标准化

每个视频固定加：

| 元素 | 规范 |
|---|---|
| 开头第 1 秒 | 视觉 hook（数字 / 强对比 / 反常识断言）|
| 视频长度 | 45-60 秒（不要 < 30 / 不要 > 75）|
| 字幕 | 全程开（CapCut 自动生成 + 校对）|
| 字幕字体 | sans 800 大字号 + 黑色描边白色填充 |
| 字幕位置 | 顶部 1/3（safe zone，避免被 X UI 挡）|
| BGM | 不加 / 极轻（< 5% 音量），或全无 |
| 转场 | 不加（或仅硬切）|
| 滤镜 | 不加 |
| 收尾 | 1 句 take + "@Skub0k" handle 浮现 |

### 9.4 11:30-11:45 · 9:16 输出 + 安全区检查

- 比例 9:16（1080×1920）
- 顶部 200px / 底部 250px = X UI 遮挡区，**不要放关键信息**
- 中部 1480px 是核心可视区
- 文件大小 < 50MB（X 上传限制）
- 帧率 30fps（不需要 60fps）

### 9.5 11:45-12:00 · 多平台同步分发

**X（主，11:30 BJ 周六）**：

```
主推（无链接）：
  [视频上传]
  [一句话 take，钩子]
  bookmark this if you keep forgetting [核心数字]

reply 1（30s 内）：
  text version (algo-friendly):
  - [bullet 1 + 数字]
  - [bullet 2 + 数字]
  - [bullet 3 + 数字]

  full piece on this topic: [link to last sunday article]

reply 2（5 min 内）：
  follow for tech / markets / AI race weekly.
  next saturday video drops same time.
```

**YouTube Shorts（同步）**：上传同一个 9:16 mp4，title 用 X 的 hook。

**Instagram Reels / TikTok / 小红书 / Bilibili**：根据精力，**第 1-3 个月只发 X + YT Shorts**，第 4 个月起加 Reels / TikTok。

详见 [cross-platform-funnel.md](./cross-platform-funnel.md)。

---

## 四、Stop-Scroll Hook（前 3 秒决定一切）

### 4.1 算法机制

X video 算法：用户滑过视频 → 如果 < 1 秒就划走 = 即 not_dwelled。3 秒以内决定大局。

### 4.2 5 种验证过的视频 hook

```
1. 反常识数字：
   "anthropic just raised at $965 billion.
    that's not the bubble peak. it's the floor."
   → 反常识 + 具体数字 + 立场 = 必停

2. 物品 prop：
   [手举打印的 412 页 s-1，翻动]
   "i read all of this. here's the 1 page that matters."
   → 视觉 prop + 实物感 = 必停

3. 屏幕高亮：
   [屏幕显示一段长文，红色高亮 1 句]
   "this 1 line in spacex's s-1 is the whole story."
   → 视觉聚焦 + 神秘感 = 必停

4. 对比图开场：
   [一张 5 列对比表瞬间出现]
   "5 AI labs in 1 chart. who's actually winning?"
   → 数据感 + 问号 = 必停

5. 第一人称 confession：
   "i was wrong about [X] for 3 months.
    here's what i missed."
   → 诚实 + parasocial 信任 = 必停
```

### 4.3 NOT to do

```
❌ "in this video i will explain..."
❌ "today's topic is..."
❌ "before we get into it, let me introduce..."
❌ generic intro music
❌ "hi everyone! welcome back!"
❌ "follow + like for more!"（结尾才说，不是开头）
```

---

## 五、视频内 voice DNA

[signature-voice.md](./signature-voice.md) 的 voice DNA 同样适用于视频，**但**音频 / 视频形式有 3 个特殊调整：

### 5.1 听觉版的 voice 守则

```
✅ 自然停顿（"so... ok let me think"）= 真实
❌ 无停顿连说 = AI tone（机械感）

✅ 偶尔 "uh" / "um" = 人味
❌ 完美无 filler = AI tone

✅ 1-2 次自我修正（"actually wait, that number was for q1, not q2"）= 真实
❌ 无修正 = 提前打稿读出 = AI tone

✅ 偶尔笑（短 "ha"）= 真实
❌ 标准化笑声 = 假

✅ 节奏变化（重点句话慢 + 数字句快）
❌ 全程一个语速 = AI tone
```

### 5.2 招牌开头（视频版）

```
"3 things i noticed this week..."           · 通用
"i read [X]. here's what nobody quoted..."  · V4 专用
"the part i keep thinking about..."          · 反差句
"calling it. revisiting in 30 days..."       · 预测视频
"unpopular but..."                           · 反共识 take
```

### 5.3 招牌结尾

```
"3 takes. all could be wrong."
"observation, not advice."
"more next saturday."
"bookmark this if useful."
"see you next week."
```

---

## 六、周节奏整合（v4 周历）

### 6.1 加入 video 后的 v4 周历

```
                7am    9am    11-12     2pm    5pm    7pm    9pm   10pm
─────────────────────────────────────────────────────────────────────────
Mon            🟢 EMPIRE MAP             E1-5            humor4 humor5
                (long-form, no thread)

Tue            main   humor1 humor2/E    humor3   humor4 humor5

Wed            main   humor1 🟢 AI RACE                  humor4 humor5

Thu            main   humor1 humor2/E    humor3   humor4 humor5

Fri            main   humor1 humor2/E    humor3   humor4 🟢 READING LIST
                                                          + 🎙️ SPACES 21:00

Sat 🆕         humor1 humor2 🎬 VIDEO    humor3          humor4
                            (11:30 BJ)

Sun (light)    humor1        humor2     🟢 LONG READ + newsletter + retro
─────────────────────────────────────────────────────────────────────────

Last day (any) 〈日常排期〉                         🟢 MONTHLY MAP
                                                   + cheat sheet vNext
                                                   + newsletter +.5
```

**周六视频时段 11:30 BJ（= 周五 23:30 美东）**：

- 美东周五晚下班时间（高 dwell 状态）
- 美西周五下午（咖啡时间）
- 周末第一波 video 流量窗口

### 6.2 Saturday 之前的"轻量周末"调整

v3 把周六定为"light"。v4 改：周六 = video 主战场。其他时段仍轻：

| 周六时段 | 内容 |
|---|---|
| 09:00 BJ | humor 1（不变）|
| 11:30 BJ | **🎬 Video（主推）+ reply 1 + reply 2** |
| 12:30-14:00 BJ | video 后 90 分钟主动 reply 在主推下面（喂算法）|
| 14:30 BJ | humor 2 |
| 19:30 BJ | humor 3 |
| 22:30 BJ | humor 4（晚上小时段）|

周日仍保持 light（除了 21:00 Long Read）。

---

## 七、Video 与其他 series 的桥梁

```
Monday Empire Map   →  当周关键数据 → Saturday V1/V3 视频化展示
Wednesday AI Race   →  对比表 → Saturday V3 数据可视化视频
Friday Reading List →  本周读物 → Saturday V4 "i read X" 视频
Sunday Long Read    →  深度文章 → Saturday V4 摘要视频（可选）
```

每条 Saturday video 末尾都嵌入 1 个其他 series 的 reference：

```
"if you want the deeper take, sunday long read drops tomorrow."
"this is from monday's empire map. full thread in profile."
```

---

## 八、第一波部署（PR merge 后）

### 8.1 Week 1 · Day 1-7

- [ ] 选 1 个 V1 / V4 选题（最低门槛）
- [ ] 安装 CapCut 手机版（免费）
- [ ] 安装 OBS（如选 V1）/ 准备 AirPods（如选 V2/V4）
- [ ] 周六 09:00-12:00 拍第 1 条
- [ ] 11:30 BJ 同步发 X + YouTube Shorts
- [ ] 12:30-14:00 BJ 主推下面 reply 推动数据

### 8.2 Week 2-4

- [ ] 每周 1 条视频，4 周内尝试 V1 / V2 / V3 / V4 各 1 次
- [ ] 第 4 周末复盘：哪个格式 ROI 最高？
- [ ] 决定主格式（70% 用最高 ROI 格式 + 30% 实验）

### 8.3 Month 2+

- [ ] 加 Instagram Reels（同 mp4 重发）
- [ ] 加 TikTok（同 mp4 重发，title 调整为 TikTok 风格）
- [ ] Month 3：考虑加小红书 / Bilibili（中文圈备份）

---

## 九、Video 失败 / 退场标准

每月最后一天 review 上月 4-5 条 video：

| 指标 | 失败阈值（连续 2 个月）| 动作 |
|---|---|---|
| 平均 X impressions | < 同期文字主推 50% | 改格式（V1→V3 / V2→V4 等）|
| 60s 完播率 | < 15% | 缩短到 30-45s |
| 转化关注 / 视频 | < 0.5% | 改钩子 / 改 CTA |
| 跨平台总观看 | < 5K | 暂停跨平台分发，专注 X |

**永远不停 Saturday Video**。可以换格式 / 缩时长 / 改时段，但**槽位不死**。

---

## 十、不要做的 5 件事

1. ❌ 把别人视频转发后加自己 voiceover（违反 anti-aggregator 规则，参考 [algorithm-2026-playbook.md §五](./algorithm-2026-playbook.md)）
2. ❌ 用 AI 生成的 deepfake / synthesized voice（X 5/2026 起标记 AI generated content）
3. ❌ 视频里夹链接（同 v4 链接规则：链接进 reply）
4. ❌ 视频里说 / 字幕里写"follow for more!"（X 算法看到这句会减权）
5. ❌ 视频末尾的"if you liked this, please like and subscribe!"（YouTube 那套话术 X 用户反感）

---

## 十一、本文档维护

| 频率 | 动作 |
|---|---|
| 每月最后一天 | review 4-5 条 video 表现 + 决定下月主格式 |
| 每季度 | 评估是否加新格式 V5（如：interview format / panel format）|
| 每半年 | 大 review · video pillar ROI 是否值得加倍（例：从 1 条 / 周 升 2 条 / 周）|

---

**版本**：v1.0 · 2026-05-30
**配套**：[algorithm-2026-playbook.md](./algorithm-2026-playbook.md) · [signature-series.md](./signature-series.md) · [cross-platform-funnel.md](./cross-platform-funnel.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md) (§24)
