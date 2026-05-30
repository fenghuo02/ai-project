# Legal Compliance Playbook · Markets / Sponsorship / IP / Defamation

> 状态：v1.0 · 2026-05-30
> 触发：v3+v4 关于 IPO / 公司 / 估值 / Musk timeline 的 take 在美国法下**真的可能被告**（Section 12(a)(2)）。FTC sponsorship 披露不合规会被罚款。Copyright / defamation 是 creator 第一类风险。
> 配套：[creator-business-foundation.md](./creator-business-foundation.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md) (§28 Disclaimer Generator)

---

## 一、为什么必须现在做

### 1.1 你目前的风险

```
@Skub0k 内容主题:
  · IPO observation (anthropic / spacexai / openai)
  · 公司估值 take
  · Musk timeline 解读
  · Markets / earnings commentary
  · AI race comparisons

每一类都有真实法律风险:
  · "anthropic 可能 IPO 时虚报营收" → defamation
  · "buy spacexai at IPO" → SEC unregistered investment advice
  · "tesla q1 will miss" → securities fraud (插值 stock 操纵)
  · "@elonmusk lied about robotaxi" → defamation
  · 截图别人推 → copyright infringement
```

### 1.2 行业证据（2026-05 联网验证）

- [JDSupra 第 9 巡回法院 2024](https://www.jdsupra.com/legalnews/ninth-circuit-holds-that-social-media-7494757/)：social media 发布关于证券的言论可能构成 Section 12(a)(2) "seller liability"
- [Sprintlaw creator economy legal issues](https://sprintlaw.co.uk/articles/creator-economy-legal-issues/)：copyright + defamation 是 creator 第一类法律风险
- [JDSupra Qutoutiao 案例 2026](https://www.jdsupra.com/legalnews/southern-district-of-new-york-dismisses-1850344/)：misrepresentation in IPO-related disclosures 可被诉
- [Forbes SEC 2026-05](https://www.forbes.com/sites/shivaramrajgopal/2026/05/24/make-markets-opaque-again-the-secs-ipo-fixation-could-cost-investors-trillions/)：SEC 2026 disclosure 规则更紧
- [PPMlawyers investor pitch decks](https://ppmlawyers.com/investor-pitch-decks-and-the-law-what-needs-to-be-in-writing/)：必须不 omit material fact 的法律义务

### 1.3 你的真实暴露

```
M1 (now):
  · 0-1K 粉，几乎不会被告 (低关注度)
  · 仍要建立 disclaimer 习惯 (后续不可能 retroactive 改)

M2-M3 (1K-30K):
  · 10K+ impression 主推开始上 SEC / FTC 雷达
  · 1 个 sponsorship 没披露 = $43K FTC 罚款 (per violation)

M4-M5 (30K-200K):
  · 任何 IPO take 可能被对方公司律师函 cease-and-desist
  · sponsorship 无 #ad 标记 = FTC 投诉

M6+ (200K+):
  · 真有 securities lawsuit 可能 (Section 12(a)(2))
  · 成本: $50K-500K defense
```

---

## 二、4 大法律风险 + Mitigation

### 2.1 Risk A · 证券法 / Markets Commentary

#### 风险

```
SEC + 各州 securities regulator + 个人 plaintiff 都可起诉:
  · 未注册 investment advice
  · 错误 / misleading 关于 stocks 的 statements
  · "pump and dump" pattern
  · "seller liability" Section 12(a)(2)

发生场景:
  · 你说 "tesla 会涨 30%" → SEC 可问候
  · 你说 "anthropic 估值虚报" → anthropic 可起诉 defamation
  · 你 sponsored thread 推某 stock 没 #ad → SEC + FTC 双投诉
  · 你建议 "buy spacexai" → 可能被解读为 unregistered IA
```

#### 4 个 mitigation

```
1. 永远在 markets-related main / Article 末尾加:
   "(observation, not financial advice. nothing in this post should be interpreted
    as a recommendation to buy / sell any security. consult your own advisor.)"

2. 不预测短期价格 (< 90 天):
   ❌ "tesla goes to $500 by friday"
   ✅ "tesla q1 + fsd subs trajectory points to a software co rerating in 12-24 months"

3. 不直接 buy/sell 推荐:
   ❌ "buy spacexai at IPO"
   ✅ "spacexai pricing at $1.85T puts the multiple at 30x revenue"

4. 引用 primary source:
   ❌ "anthropic 营收虚报" (defamation)
   ✅ "anthropic's 5/29 blog says $30B annualized; cnbc reports..."
```

#### 标准 disclaimer for markets content

```
每条 Markets / IPO / earnings 主推 Reply 1 加:
"(observation, not financial advice. data sources in reply.)"

每篇 X Article (markets/IPO 主题):
开头:
"This article is an independent observer's analysis based on publicly
available information. It does not constitute investment advice, an
offer to sell, or a solicitation to buy any security. The author is
not a registered investment advisor. Consult a qualified financial
advisor before making investment decisions. The author may hold
positions in securities mentioned."

末尾:
"3 takes. all could be wrong. (observation, not advice.)"

每周 newsletter:
末尾固定:
"Disclaimer: This newsletter is independent commentary on tech and
markets. It is not financial advice or a recommendation to buy or
sell any security. The author is not a registered investment advisor.
Past observations do not guarantee future results. Always do your
own research."
```

### 2.2 Risk B · Defamation / Misleading Statements

#### 风险

```
说某公司 / 某人:
  · 撒谎
  · 欺诈
  · 操纵
  · 违法

→ 即使你认为是事实，也需要可证据。Defamation 标准:
  · True statement = absolute defense
  · Public figure (Musk / Altman) = "actual malice" 必须证明
  · Private figure = "negligence" 必须证明 (low bar)

发生场景:
  · "musk is lying about robotaxi" → can prove? 否则 defamation
  · "anthropic 估值是 inflated by accounting tricks" → libel
  · "@elonmusk 个人健康问题" → false light tort
```

#### Mitigation

```
1. 用观察性语言:
   ❌ "musk is lying about robotaxi"
   ✅ "musk's robotaxi timeline pattern: 4 of 7 missed by 6+ months"
   → 引用真实数据 + 让受众 draw conclusion

2. Quote primary source:
   ❌ "anthropic's CEO is suspicious"
   ✅ "anthropic CEO's statement on 5/29 vs cnbc reporting on 5/30 differ on..."

3. 避免 attributing motive:
   ❌ "musk wants to mislead investors"
   ✅ "musk's statement on may 22 implies X. financial filings on may 29 show Y."

4. 不评论 individual private 事:
   ❌ Musk 婚姻 / 健康 / 家庭
   ❌ 任何 CEO 私生活
   (v3 红线已经禁，仍提醒)

5. 收到 cease-and-desist letter:
   · 不立刻删 (Streisand effect + 默认证据)
   · 立刻 lawyer review
   · 通常 7-14 天 respond
```

### 2.3 Risk C · Copyright Infringement

#### 风险

```
使用未授权:
  · 别人推的 screenshot (unless quote-tweet)
  · 别人 article 的 verbatim copy
  · 别人 photograph
  · 别人 video clip
  · 别人 podcast audio

→ DMCA takedown + 平台 strike + lawsuit

发生场景:
  · 截图 Bloomberg article → 可能 fair use, 但风险
  · 截图 stratechery long post → 不算 fair use
  · 用 stock photo 没 license → 高风险
  · Saturday video 用 background music → 可能 strike
```

#### Mitigation

```
1. X-platform content:
   ✅ Quote-tweet (X official attribution mechanism, see [growth-mechanics-2026.md §六](./growth-mechanics-2026.md))
   ❌ 截图

2. Outside content (newsletter / blog / news):
   ✅ Hyperlink + 1-2 sentence summary
   ✅ "Fair use" 评论 / 批评 (≤ 30 连续词 from any source, see this doc 例)
   ❌ Verbatim 大段 copy
   ❌ Screenshot

3. Photographs / Visuals:
   ✅ Public domain (Creative Commons CC0)
   ✅ Stock site with proper license (Unsplash free, Shutterstock paid)
   ✅ Self-created
   ❌ Random google image search

4. Video:
   ✅ Self-recorded
   ✅ Original CapCut output (no copyrighted music)
   ✅ Royalty-free music (Epidemic Sound, Artlist, YouTube Audio Library)
   ❌ TV / movie clips
   ❌ Pop music

5. Audio:
   ✅ Self-recorded podcast / Spaces
   ❌ Repurpose other podcasts without license
```

### 2.4 Risk D · FTC Sponsorship Disclosure

#### 风险

```
FTC 16 CFR Part 255 强制要求所有 sponsored / affiliate / paid 内容披露:
  · 必须 clear, conspicuous, in same medium
  · 不能 hide in bio / fine print

发生场景:
  · Sponsored thread 没 #ad → FTC 投诉
  · Affiliate link 在 Reading List 没披露 → FTC investigate
  · Paid review 假装独立 → 高风险
  · Free product mention without disclosure → 仍违规

罚款:
  · Per violation up to $43K
  · Cumulative across viewer (10K view × $43K = catastrophic)
  · 通常先 warning letter, but 大 creator 可能直接罚款
```

#### Mitigation

```
1. 所有 sponsored content 主推第 1 行:
   "[sponsored by @notion] · what AI tools i actually use:..."
   ✅ 明确标 "sponsored"
   ✅ #ad / #sponsored 也加 (复合 backup)

2. 所有 sponsored newsletter issue:
   首段:
   "Note: This issue is sponsored by [Brand]. Editorial independence
    maintained — they didn't review this before publishing."
   清晰位置 (不在底部 fine print)

3. 所有 affiliate links:
   Reading List 末尾固定:
   "Disclaimer: Some of the links above are affiliate. I use these tools
    daily. Your support keeps this newsletter free."

   Bio:
   "tools (some affiliate): [link]"

4. Free product disclosure (gift / sample):
   即使没付费但收到 free:
   "Note: I received [Product] complimentary from [Brand]. My take below
    reflects my independent observation."

5. 月度 review:
   · 看 sponsored content 是否漏 #ad
   · 看 affiliate link 是否所有 disclosure 在位
```

### 2.5 Risk E · Sponsorship Contract

#### 风险

```
Sponsorship 没 contract:
  · 对方拒付
  · 不知道 deliverable 范围
  · 不知道 IP 归属
  · 改稿无限次
```

#### Mitigation

```
所有 sponsorship deal 必须 contract (即使 $500):

模板:
[Sponsorship Agreement]

PARTIES:
  · @Skub0k (Skub LLC, EIN [number])
  · [Brand] (entity [number])

DELIVERABLES:
  · 1 X main tweet, 280 char, drafted by @Skub0k
  · 1 reply 1 with brand link
  · Posted within [date]
  · Brand has 24h to review pre-post (1 round revisions)
  · No re-edit after going live

PRICE:
  · $[amount] paid via [Stripe/Mercury]
  · 50% upfront, 50% after post-go-live + 7-day analytics
  · Late payment: 1.5%/month interest

IP:
  · @Skub0k retains all copyright in tweet
  · Brand has license to share / repost
  · Brand cannot run as paid ad on X without separate license

DISCLOSURES:
  · @Skub0k will include "[sponsored by @Brand]" prominently
  · @Skub0k will include any FTC-required disclosure

TERMINATION:
  · Either party can cancel before post with $0 fee + return upfront
  · After post: contract complete

OUT OF SCOPE:
  · No buy/sell language
  · No specific stock predictions
  · No engineering disrespect
  · No competitor (Beehiiv if Substack sponsor; etc)

JURISDICTION:
  · Wyoming USA
  · Disputes via arbitration first

[Sign + Date]
```

模板用 Stripe Atlas / DocuSign 一键发送。

---

## 三、Disclaimer Cheat Sheet

### 3.1 主推 / X content

```
Markets / IPO / earnings:
  Reply 1 末尾: "(observation, not financial advice. data sources in reply.)"

Musk decoder / Empire tracking:
  Main tweet 末尾 (occasional): "(decoder dictionary in pinned, full pattern over 6 months.)"

Sponsored:
  Main tweet 第 1 行: "[sponsored by @Brand] · ..."

Affiliate (in newsletter / bio):
  "Tools (some affiliate): [link]"
```

### 3.2 Newsletter

```
开头 (occasional, when markets-heavy):
"This week covers [IPO / earnings / financial topics]. Reminder:
  this is independent observation, not investment advice. Never
  invest based on a single source."

末尾 (every issue):
"Disclaimer: This newsletter is independent commentary on tech
and markets. It is not financial advice or a recommendation to
buy or sell any security. The author is not a registered investment
advisor. Past observations do not guarantee future results. Always
do your own research.

Some links are affiliate. They support this newsletter at no cost
to you. Thanks for reading."
```

### 3.3 Sunday Long Read X Article

```
Article 头部 (markets/IPO/securities 主题):
"This article is an independent observer's analysis based on publicly
available information. It does not constitute investment advice, an
offer to sell, or a solicitation to buy any security. The author is
not a registered investment advisor. Consult a qualified financial
advisor before making investment decisions. The author may hold
positions in securities mentioned."

Article 末尾:
"3 takes. all could be wrong. that's why i write them down.
(observation, not advice.)"
```

### 3.4 1:1 Briefing

```
Booking page disclosure:
"Briefings provide independent observation and analysis. They do not
constitute investment advice, professional consulting, or any
client-specific recommendation. Information shared is for educational
and observational purposes only. The author is not a registered
investment advisor or licensed professional. Consult a qualified
advisor for advice specific to your situation."
```

---

## 四、SEC / Regulatory Triggers

### 4.1 何时进入 regulator 雷达

```
Trigger 1: 主推 imp > 100K 关于 IPO / stock
  · Action: review disclaimer 完整
  · 不删 (looks suspicious)

Trigger 2: 收到 SEC 字符 / 调查通知
  · Action: 立刻找 securities lawyer (M5+ 应该已经有 retainer)
  · 不私自 respond

Trigger 3: 公司 cease-and-desist
  · Action: lawyer review 7-14 天 respond
  · 不 immediately 删 (default 证据保留)

Trigger 4: Plaintiff lawsuit threat
  · Action: 立刻 lawyer + insurance company (如有)
  · M5+ 必须有 media liability insurance
```

### 4.2 M5+ insurance 推荐

```
Media Liability Insurance (E&O):
  · Coverage: $1M-5M
  · Cost: $500-2000/年
  · 保护: defamation / IP infringement / FTC violations
  · Provider: Hiscox / Travelers / Embroker

何时启动:
  · 月收入 > $5K
  · 主推平均 > 50K imp
  · 启动 sponsorship (Tier H)
```

---

## 五、收到 Lawsuit / Cease-and-Desist 的 SOP

### 5.1 First 60 minutes

```
1. 不 panic, 不立刻 reply
2. 截图 letter / email
3. 不删任何相关 X content
4. 不公开发关于此 letter 的内容 (Streisand)
5. Forward 给 lawyer (如已 retain) 或 lawfirm 询问
6. 在 1Password 创建 "Legal Issue" entry
```

### 5.2 7 天内

```
1. Lawyer review (1-3 hr lawyer time, $300-1500)
2. 决定:
   · Settle (small content fix + apology)
   · Defend (proper response letter)
   · Ignore (some letters are bluffs)
3. Per lawyer advice: respond letter
4. 不公开评论 此 issue 直到结束
```

### 5.3 之后

```
1. Update [legal-compliance.md] 学到的 trigger
2. Add to monthly review (review 是否仍在合规)
3. 通知 1Password emergency contact (重大法律事件)
```

---

## 六、月度 Legal Compliance Review (10 min)

每月最后一天加进 monthly retro:

```
□ 上月所有 sponsored content #ad 完整?
□ 上月 affiliate disclosure 在所有 newsletter / bio?
□ 上月 markets 主推 disclaimer 完整?
□ 上月 1:1 booking page disclosure 仍有?
□ 任何收到的 cease-and-desist / DMCA / SEC?
□ 任何近期 high-imp markets take 仍可 defendable?
□ 触发 insurance 启动 (月收入 > $5K)?
□ 触发 lawyer retainer (M5+, 主推 > 50K imp 季度)?
```

---

## 七、不要做的 7 件事

```
1. ❌ 假装是 investment advisor (没 SEC license)
2. ❌ 接受没 contract 的 sponsorship
3. ❌ 截图别人 X 推 (anti-aggregator + copyright)
4. ❌ 用 random Google 图片
5. ❌ Affiliate / sponsored 没 #ad / disclosure
6. ❌ 删 cease-and-desist 相关推 (default 证据保留)
7. ❌ Public 评论 ongoing legal issue (Streisand effect)
```

---

## 八、整合到 [_self-operation-handbook.md](./_self-operation-handbook.md)

### 8.1 §八 Crisis Playbook 加 Type J

```
Type J · 法律事件 (cease-and-desist / lawsuit / SEC inquiry)
  · 详见 [legal-compliance.md §五](./legal-compliance.md)
```

### 8.2 §九 工具栈加

```
| Securities lawyer | Hiscox / Travelers / Embroker | M5+ |
| Media liability | E&O insurance | M5+ |
```

### 8.3 月度 retro 加 §六 review

---

## 九、本文档维护

| 频率 | 动作 |
|---|---|
| 每月最后一天 | §六 monthly review (10 min) |
| 每季度 | review disclaimer 文案 |
| 每半年 | 1 hr lawyer call (M3+) |
| 每年 | 全文 rewrite · 法律 / 监管更新 |

---

## 十、推荐 lawyer 资源

```
Securities / Investment law (M4+):
  · 美国 securities lawyer: $300-500/小时
  · Find via: AVVO / FindLaw / UpCounsel
  · M4+ retainer: $1000-3000/年
  · 用途: SEC inquiries / IPO commentary review

Creator-friendly (M3+):
  · UpCounsel for creators
  · Sprintlaw (UK + AU + US)
  · Cost: $300-1000/月 retainer

Media liability insurance (M5+):
  · Hiscox creator insurance
  · Travelers media liability
  · Cost: $500-2000/年

DMCA takedown management (occasional):
  · Sucuri / DMCA.com
  · Cost: $100-500 per takedown
```

---

**版本**：v1.0 · 2026-05-30
**配套**：[creator-business-foundation.md](./creator-business-foundation.md) · [revenue-stack-2026.md](./revenue-stack-2026.md) · [_self-operation-handbook.md](./_self-operation-handbook.md) · [_prompts-pack.md](./_prompts-pack.md) (§28 Disclaimer Generator)
