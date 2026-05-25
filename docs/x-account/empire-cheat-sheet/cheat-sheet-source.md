# Musk Empire 2026 Cheat Sheet · v0.2 · Content Source

> Lead magnet 主文档 v0.2。所有数据通过 web search 在 2026-05-25 重新核对。
> 配对的可印 HTML：[cheat-sheet.html](./cheat-sheet.html)
> 状态：v0.2 · ready to publish

---

## v0.1 → v0.2 主要修正

| 项 | v0.1（错误的）| v0.2（核对后真实数据）|
|---|---|---|
| 帝国结构 | 6 公司平行 | 4 个法人实体（SpaceX 已于 2026-02 吞下 xAI，合并为 SpaceXAI）|
| Tesla Q1 2026 deliveries | 401k | 358,023（差 7,600 没达标）|
| Tesla FSD take rate | 30% | 14% (1.28M FSD subs / 总车队) |
| FSD 版本 | v13 | v14.3.3 |
| Cybertruck Q1 | 量产爬坡中 | 美国 3,519 辆，同比 -45% 崩盘 |
| SpaceX 估值 | 独立 | 跟 xAI 合并后 $1.25T，6 月 IPO 目标 $1.75-2T |
| Starlink 用户 | 6.8k 卫星 | 10M 订阅 + ~10,370 卫星 |
| xAI 估值 | $200B 独立 | 合并前 $250B，已并入 SpaceXAI |
| Colossus | 200k H100 | 555,000 GPU + 2GW 目标 |
| 当前 Grok 模型 | Grok 4 即将发 | **Grok V9-Medium**（1.5T 参数，2026-05-25 完成训练）|
| Neuralink 患者 | 1-3 | **21** 人入组 |
| Neuralink 估值 | $9B | $9.7B（2026-05-06 Series E-II）|
| Boring 估值 | 上升 | $5.7-7B，从 2023 峰值 $8.6B 下降 |
| X 估值 | 未提 | 回到 $44B（收购价）|
| AI race | 3-horse | **5-horse**（加 Google Gemini 3 + Meta Llama 4）|

**新增内容**（v0.1 没有的）：
- 第 2 页 · Valuation Snapshot 完整估值表（含父子结构）
- 第 2 页 · Bull / Bear case 一句话对比表
- 第 2 页 · Musk Tweet Decoder Dictionary（15 条 Musk 推文短语解码）

---

## 怎么生成 PDF

最简单 3 步：

1. 用浏览器打开 [cheat-sheet.html](./cheat-sheet.html)（双击文件即可）
2. `Ctrl/Cmd + P` 打开打印
3. 目标改成"另存为 PDF"，纸张 letter，边距 minimum，背景图形 ✅勾上 → 保存

输出一份**双页 PDF**（每页一面）。文件大小 ~250KB，邮件附件友好。

> ⚠️ 第一次预览打印时检查：
> - 第 1 页：6 个 brand 卡 + Boring Co 卡片完整显示，不溢出到第 2 页
> - 第 2 页：Valuation / Bull-Bear / Decoder / AI Race / Watch List 完整显示
>
> 如果有任何溢出，调小 `font-size` 或缩小 `padding`。

---

## 完整内容（HTML 版的 source of truth）

### Cover

- **Title**: Musk Empire 2026 Cheat Sheet
- **Subtitle**: 6 brands · 4 corporate entities · decoded weekly
- **Edition**: Week 22 · 2026-05-25
- **Version**: v0.2

### Empire Structure（重要，因为 v0.1 没说清）

> SpaceX 在 2026-02 收购了 xAI，合并实体 = **SpaceXAI**
> 包含：SpaceX（火箭）+ Starlink（卫星）+ xAI（Grok / Colossus）+ X（平台）
> 目标 2026-06 IPO 估值 $1.75-2T
> Tesla / Neuralink / Boring 仍独立

实体映射：

```
SpaceXAI (parent, $1.25T → $1.75-2T IPO June 2026)
├── SpaceX (rockets, Starship V3)
├── Starlink (10M subs, 10,370 sats)
├── xAI (Grok V9-Medium, Colossus)
└── X (platform, $44B)

Tesla ($1.4T public)
Neuralink ($9.7B private)
Boring Co ($5.7B private)
```

### 6 Brand Cards（页 1）

#### 1. Tesla

- **Parent**: Public · $TSLA
- **One-liner**: EV-maker pivoting to robotics + autonomy company.
- **Key metric**: Q1 2026 358k deliveries (missed by 7.6k). FSD subs 1.28M (+51% YoY).
- **Recent (90d)**: FSD v14.3.3 shipped. Cybercab pilot fleet at 29 cars in Texas. Stock under $400.
- **Next (90d)**: FSD v14.4. Cybercab volume scale (70+ at Giga Texas). Optimus consumer launch end-2027.
- **Watch**: Q2 deliveries (June). FSD take rate over 18% triggers re-rating.

#### 2. SpaceX

- **Parent**: Part of SpaceXAI · IPO June
- **One-liner**: Only fully reusable rocket co at scale.
- **Key metric**: Starship V3 (408ft, 100t payload). 2025 EBITDA $6.6B.
- **Recent**: Starship V3 first flight (May 22). 33× Raptor 3, 18M lbs thrust. S-1 filed May 20.
- **Next**: IPO June 2026 ($75B raise target). In-orbit refuel test. Booster catch cadence.
- **Watch**: IPO pricing range. Starship reuse cadence.

#### 3. Starlink

- **Parent**: Part of SpaceXAI
- **One-liner**: Fastest-growing internet service ever.
- **Key metric**: 10M subs (Feb 2026). ~10,370 active sats of 42,000 target.
- **Recent**: 10M sub milestone Feb 2026 (4M Sep 2024 → 9M Dec 2025 → 10M).
- **Next**: v2 batch deployment. Direct-to-cell expansion. Enterprise + maritime.
- **Watch**: Amazon Kuiper rollout. Starlink ARPU trajectory.

#### 4. xAI

- **Parent**: Part of SpaceXAI · pre-merger $250B
- **One-liner**: AI lab betting on compute scale + X data.
- **Key metric**: Colossus 555k GPUs / 2GW. Grok V9-Medium 1.5T params (May 25).
- **Recent**: Grok V9-Medium training done. Grok Build (autonomous coding) shipped May.
- **Next**: V9-Medium public release in 2-3 weeks. Grok 4.2 open-source by EOY. Orbital compute by 2028.
- **Watch**: $6.4B 2025 op loss vs $3.2B revenue. Talent retention post-merger.

#### 5. X (platform)

- **Parent**: Part of SpaceXAI · ~$44B
- **One-liner**: Real-time data layer for the empire's AI.
- **Key metric**: 2025 ad rev $1.8B (+7% YoY, -59% from peak). US ad share ~1%.
- **Recent**: Valuation back to $44B (acquisition price). @grok summons fully integrated.
- **Next**: Native creator scheduling. Deeper xAI training pipeline integration.
- **Watch**: ad share trajectory. Creator subscription growth.

#### 6. Neuralink

- **Parent**: Private · ~$9.7B
- **One-liner**: Brain-computer interface via N1 implant.
- **Key metric**: 21 patients enrolled. Latest round $650M (May 6, 2026).
- **Recent**: Series E-II May 2026. 21 participants milestone announced January.
- **Next**: 2nd clinical site approval. BPS decoder doubling. Speech decoding milestone.
- **Watch**: Synchron / BlackRock progress. FDA expanded indication.

#### 7. Boring Company（占整行宽度）

- **Parent**: Private · ~$5.7B (down from $8.6B 2023 peak)
- **One-liner**: Tunneling startup with biggest "shovel in the ground" leverage of the empire.
- **Key metric**: Vegas Loop 3M+ total passengers. Nashville Music City Loop $34M deal + 40-yr license.
- **Recent**: 3 cities picked March 2026. Nevada safety/environmental violations probe.
- **Next**: Nashville BNA Loop construction start. Prufrock-4 unveil. 2nd-city contract finalization.
- **Watch**: Any new city contract. Nevada legislative outcome.

---

### Valuation Snapshot（页 2）

| Entity | Valuation | Type | Notes |
|---|---|---|---|
| **SpaceXAI** | $1.25T → $1.75-2T | private→IPO | Feb 2026 merger of SpaceX + xAI. IPO target June 2026, ~$75B raise. |
| ↳ SpaceX (rockets) | ~$1T pre-merger | private | 2025 EBITDA $6.6B. Starship V3 just flew. |
| ↳ Starlink | (within SpaceX) | private | 10M subs. Major IPO contributor. |
| ↳ xAI | $250B pre-merger | private | Series E Jan 2026 at $230B. $20B raise. |
| ↳ X (platform) | ~$44B | private | Back to acquisition price. 2025 ad rev $1.8B. |
| Tesla | ~$1.4T | public | Stock under $400 May 2026. FSD subs 1.28M. |
| Neuralink | ~$9.7B | private | Series E-II May 2026. $650M raise. 21 patients. |
| Boring Co | ~$5.7B | private | Down from $8.6B 2023 peak. Nashville $34M deal. |

---

### Bull vs Bear（页 2）

| Brand | Bull | Bear |
|---|---|---|
| Tesla | FSD subs +51% YoY at 1.28M; Cybercab production live; robotics moat. | Q1 deliveries miss; 50k inventory build; Cybertruck collapse (-45% YoY). |
| SpaceX | Starship V3 flew; only fully reusable rocket; $6.6B EBITDA; June IPO. | Pre-revenue at scale for Starship; China launch cadence rising; reuse not yet airline-grade. |
| Starlink | 10M subs (fastest ever); v2 sats coming; direct-to-cell upside. | Amazon Kuiper rollout; ARPU pressure; regulatory risk in key markets. |
| xAI | 555k GPU Colossus; Grok V9-Medium 1.5T params; X data flywheel. | $6.4B 2025 op loss; talent bleeding post-merger; Grok behind Claude/GPT on benchmarks. |
| X | Valuation recovered to $44B; @grok integration; community notes. | 1% US ad share (10x less than 2016); ad rev still 59% below peak. |
| Neuralink | 21 patients; FDA breakthrough device path; bps trajectory exponential. | Phase-1 only; Synchron less invasive; 5+ year IPO horizon. |
| Boring | Nashville $34M + 40-yr license; 3 cities picked. | Valuation declining; Nevada violations probe; small TAM vs other Musk co's. |

---

### Musk Tweet Decoder Dictionary（页 2 · 这是 v0.2 最差异化的内容）

| Phrase | Surface | Real meaning | Reliability |
|---|---|---|---|
| `!!` / `!!!` | excited | announcement coming in 1-14 days; he's seen demo | high |
| `Wow` | impressed | genuine reaction; high-trust validation of post above | high |
| `Interesting` | curious | skeptical or dismissive; rarely commits | noise |
| `Concerning` | worried | real problem; track follow-up within 72h | high |
| `Soon` / `Coming soon` | imminent | 6-18 months out; runs 2-3x late on production | directional |
| `End of year` | by Dec | usually slips to Q2 next year | directional |
| `Yes` / `Yeah` | agreement | confirms rumor or report; effectively a quote | high |
| Single 🤣 | finds funny | doesn't always mean disagreement; just absurd | low signal |
| `Will look into it` | engaged | dismissive; rarely follows up | low |
| `Fake news` | denial | aggressive denial; expect lawsuit threat | directional |
| Quoted post + nothing | endorsement | full agreement, equivalent to "yes" | high |
| Random rocket 🚀 | enthusiasm | vibes only; no commitment to timeline | low |
| `Definitely` | certain | confidence high but production may slip | medium |
| `Hmm` | thinking | considering; may take action 24-72h | medium |
| Specific number | data | usually accurate; verify against filings | high |

---

### AI Race · State of Play · May 2026

| Lab | Latest model | Wins on | Loses on |
|---|---|---|---|
| OpenAI | GPT-5 | coding, multimodal | open weights, real-time data |
| Anthropic | Claude 4 Opus | reasoning, nuance, long context | speed, multimodal |
| xAI | Grok V9-Medium (1.5T) | real-time X data, personality, planned open-weights | benchmark scores vs frontier |
| Google | Gemini 3 | infrastructure, multimodal, integration | narrative momentum |
| Meta | Llama 4 | open source ecosystem | frontier capability |

**Bottom line**: 5-horse race for the first time ever. xAI 押的是 compute scale + 真实人类对话数据，到 EOY 看是不是赢过 benchmark-tuned 模型。

---

### Watch List · Next 90 Days

→ SpaceXAI IPO 定价（June 2026）
→ Tesla Q2 deliveries 报告（early July）
→ Grok V9-Medium 公开发布（2-3 周内）
→ FSD v14.4 推送
→ Cybercab pilot 扩到 Texas 之外
→ Starship 复用次数节奏
→ Starlink v2 卫星部署
→ Neuralink 2nd clinical site 审批
→ Boring Co Nashville 开工
→ Optimus gen 3 手部 demo
→ Nevada Boring 调查结果
→ xAI 人才流失数据

---

## 维护节奏

每周日晚联网刷新这份 source.md 的所有数字，然后重新生成 HTML→PDF。

每周需要核对的数字：
- Tesla 周交付 / FSD 订阅
- Starlink 订阅 / 卫星数
- Grok 模型版本
- 任何公司估值变动（融资、IPO 进展）
- Musk 本周新发的 cryptic 推（用于 Decoder Dictionary 校准）

---

## 数据来源

所有数字 2026-05-25 通过 web search 核对，来源包括：
- SpaceX S-1 filing (May 20, 2026)
- Tesla Q1 2026 投资者材料
- xAI 官方博客 + x.ai/news
- CNBC / Bloomberg / Reuters / Fortune / TechCrunch / Ars Technica
- Wikipedia (Starlink / Cybercab / Neuralink 实时更新条目)
- Cox Automotive Kelley Blue Book (Cybertruck 销量)

---

**版本**：v0.2 · 2026-05-25
**配套**：[cheat-sheet.html](./cheat-sheet.html) · [decoder thread #01](../decoder-threads/01-week21-empire-overview.md) · [newsletter issue 01](../newsletter/issue-01-2026-05-25.md)
