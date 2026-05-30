# Creator Business Foundation · 业务基础（税务 / 实体 / 支付）

> 状态：v1.0 · 2026-05-30
> 触发：账号 M2 起将有真实美元收入。**第 1 笔收入到账前**必须搞定 W-8BEN（海外 creator 必备） + 决定是否注册 LLC + 设置跨平台支付基础设施。否则面临税务追缴 + 无法接收某些平台付款。
> 配套：[sustainability-and-delegation.md](./sustainability-and-delegation.md) · [revenue-stack-2026.md](./revenue-stack-2026.md) · [legal-compliance.md](./legal-compliance.md)

---

## 一、为什么必须现在搞定

### 触发时间线

```
M1 (现在)
  · 0 收入
  · 但所有平台账号都需要在产生第 1 笔收入前提交税务表
  · X Premium+ ad share 阈值（500 粉 + 5M imp / 3 月）一旦达到，X 就会要求 W-8BEN

M2 (2-3 月内)
  · 第 1 笔收入：可能 X ad share / Beehiiv paid / 1:1 Briefing / Articles Contest
  · 不交 W-8BEN = X 默认按美国居民对外国人 30% 预扣税

M3 (3-6 月)
  · 月收入 $500-3K
  · 触发 LLC 决策（成本 $50-300/年 vs 法律保护）
  · 触发跨平台支付基础设施（Wise / Stripe / Lemon Squeezy）
```

### 行业证据（2026-05 联网验证）

- [Beancount 创作者税务指南 2026](https://beancount.io/blog/2026/04/23/content-creator-taxes-complete-guide)：从有 profit motive 开始即被 IRS 视为 self-employed business
- [Tipalti 1099 / W-8BEN 指南](https://tipalti.com/blog/1099-for-foreign-contractors/)：non-US contractor 必须在第一笔付款前提交 W-8BEN，否则平台默认 30% 预扣
- [Uncle Kam 2026 creator tax changes](https://unclekam.com/tax-strategy-blog/2026-creator-tax-changes-what-content-creators-need-to-know-llc-vs-s-corp-deductions-and-new-irs-rules/)：2026 IRS 新规对 1099 income + LLC vs S-Corp 决策有专属规则
- [InfluencerMarketingHub 全球 creator 税务](https://influencermarketinghub.com/taxes-invoicing-guide-for-creators/)：跨国 creator 税务复杂度远高于本地 creator
- [TurboTax 创作者税务](https://blog.turbotax.intuit.com/self-employed/do-creators-pay-taxes-on-money-earned-51416/)：所有 creator income 都报 Schedule C

> 内容已合规化转述（每来源不超过 30 连续词）。

---

## 二、Step 1 · W-8BEN（M1 立刻做）

### 2.1 是什么

W-8BEN = 美国 IRS 表格，**非美国居民**用来声明"我是 X 国税务居民，享受 tax treaty 优惠"。海外 creator 在 X / Beehiiv / Mailchimp / Gumroad / YouTube / Substack 等所有美国平台都需要提交。

### 2.2 不交的后果

- X 默认按 **30% 预扣税**（即 $1000 收入 = 实收 $700，剩 $300 直接扣给 IRS）
- 中美 tax treaty 下，如果 W-8BEN 申报 = **0% 或 10% 预扣**（依据收入类型 + 协议条款）
- **节省 20-30% 税前收入**，对 creator 是关键

### 2.3 什么时候交

**所有平台在你产生第 1 笔收入前** require W-8BEN：

| 平台 | 提交位置 | 触发 |
|---|---|---|
| X / X Articles | Settings → Monetization → Tax Info | 启用 ad share 时 |
| Beehiiv | Dashboard → Earnings → Tax | 启用 Boosts income 时 |
| Mailchimp / EmailOctopus | 不需要（非 US 平台或无美国 source 收入）| - |
| YouTube（YT Shorts revenue）| Studio → Settings → Payments | 加入 YouTube Partner Program 时 |
| Substack | Stripe 关联时自动询问 | 启用 paid sub 时 |
| Gumroad | Settings → Payouts | 第 1 次提现时 |
| Lemon Squeezy | Settings → Tax Info | 注册时 |

### 2.4 填表实操（5 分钟）

```
W-8BEN 关键字段：

Part I:
  Name: 你的护照/身份证名（拼音）
  Country of citizenship: China
  Permanent residence: 你的中国地址（拼音）
  Mailing address: same as above
  US TIN: leave blank（你没有）
  Foreign TIN: 你的中国身份证号 / 纳税号
  Date of birth: MM-DD-YYYY

Part II（Tax treaty benefits）:
  Country: China
  Article: 11（royalties / ad revenue 通常引用 Article 11）
  Withholding rate: 10%（中美协议）
  Type of income: Royalties / Ad revenue / Service fees

Part III:
  签名 + 日期
```

### 2.5 W-8BEN 有效期

- 签署当年 + 之后 3 个 calendar year
- **每 4 年重新提交一次**
- 如果信息变更（地址 / TIN / 身份）立刻重提交

### 2.6 中美 tax treaty 关键条款

[来源：US-China Tax Treaty 1984，仍有效]

| 收入类型 | 预扣率（W-8BEN 申报后）|
|---|---|
| Ad revenue / Royalties | 10% |
| Service fees / 1:1 consulting | 0%（如属于 personal services 且在中国履行）|
| Business profit / 数字产品销售 | 0%（如 LLC 在中国经营）|
| Capital gains | 0%（一般情况）|

> 实际申报由你的会计师 / W-8BEN Article 引用决定。**如果不确定，付 $100-300 找跨国 creator 会计师 1 次咨询，避免每年错申报损失 $1000+**。

---

## 三、Step 2 · 决定是否注册 LLC

### 3.1 LLC vs Sole Proprietor 决策表

| 维度 | Sole Proprietor（你现在）| LLC（推荐 M3+）|
|---|---|---|
| 设立成本 | $0 | $50-300/州 + $50-100/年 maintenance |
| 责任 | personal liability（你被告 = 你自己资产被追） | limited liability（公司被告 ≠ 你自己资产被追） |
| 税务 | 个人收入（personal income tax）| pass-through（仍是个人收入）+ 可选 S-Corp 待遇 |
| 银行账户 | 你的个人账户（混 personal + business） | 必须开 business account（分清 personal）|
| 接平台付款 | 用你个人 SSN / W-8BEN | 用 LLC EIN（更专业 + 更高 limit）|
| 触发时机 | M1 / M2 | M3+（月收入 ≥ $500）|

### 3.2 LLC 推荐州（海外 creator）

```
Wyoming LLC（最推荐）
  · $100 setup
  · $60/年 annual fee
  · 不需要美国地址（用 registered agent）
  · 隐私保护强（不公开 owner）
  · No state income tax

Delaware LLC（备选）
  · $90 setup
  · $300/年 franchise tax
  · 法律体系最成熟
  · 投资人友好（如果你后续融资）

不推荐：
  · California LLC ($800/年 minimum tax，太贵)
  · 你居住国本地 LLC（VC funding / 美国平台支付不便）
```

### 3.3 LLC 设立步骤（10-30 天）

```
Step 1（30 min）· 选名字
  必须含 "LLC" / "L.L.C." / "Limited Liability Company"
  例：Skub Observer LLC / Empire Decoder LLC

Step 2（5 min）· 选 registered agent
  必须有美国地址。推荐：
  · Northwest Registered Agent ($125/年)
  · Wyoming Agents ($125/年)
  · ZenBusiness ($199 / 年)

Step 3（10 min）· 提交 Articles of Organization
  · Wyoming 在 wyobiz.wyo.gov 在线提交
  · $100 fee
  · 1-3 business days 通过

Step 4（30 min）· 申请 EIN
  · IRS 网站免费
  · 海外 creator 用 SS-4 form 邮件申请（45 天）或 fax 申请（4 hr）
  · EIN 是你 LLC 的"公司税号"

Step 5（30 min）· 开 business 银行账户
  · Mercury（最佳，海外 creator 友好，30 min 开）
  · Relay（备选）
  · Wise Business（多币种）

Step 6（每月 1 次）· bookkeeping
  · 把所有 business 收入 / 支出记到 spreadsheet 或 Wave / QuickBooks
  · 月度 1 hr
```

### 3.4 LLC 后所有平台重新提交

LLC 拿到 EIN 后，回到所有平台更新 tax info：

- X Settings → Monetization → 改 Recipient 为 LLC，Tax form 改 W-8BEN-E（实体版）
- Beehiiv / Stripe → 同上
- 所有合同 / DM 协商时用 LLC name

### 3.5 S-Corp 升级（M5 才考虑）

当**净收入 > $40K/年**时，从 LLC 默认 pass-through 升到 S-Corp 待遇。

S-Corp 优势：节省 self-employment tax（15.3%）

S-Corp 复杂度：必须给自己发 W-2 工资（reasonable salary）+ 月度 payroll + 年度 1120-S form

> M3-M4 不动，**M5 月收入稳定 $5K+ 时**找会计师评估。

---

## 四、Step 3 · 跨平台支付基础设施

### 4.1 收款 stack（M2 起搭建）

```
┌────────────────────────────────────────────────┐
│  X / Beehiiv / Substack / Gumroad / YouTube    │
│  → 直接打入 Mercury / Stripe / Wise            │
└────────────────────────────────────────────────┘
              ↓
┌────────────────────────────────────────────────┐
│  Mercury（USD business 主账户）                │
│  · 0 月费 · 国际 wire 免费                      │
│  · 海外 LLC 友好                                │
└────────────────────────────────────────────────┘
              ↓
┌────────────────────────────────────────────────┐
│  Wise（多币种 + 跨境提款）                      │
│  · USD → CNY 提到中国卡，汇率 mid-market        │
│  · 月度 batch 提款                              │
└────────────────────────────────────────────────┘
              ↓
┌────────────────────────────────────────────────┐
│  CNY 账户（中国银行卡）                         │
└────────────────────────────────────────────────┘
```

### 4.2 主要平台付款方式

| 平台 | 付款方式 | 付款周期 | 注意 |
|---|---|---|---|
| X ad share | Stripe → 任意国际银行 | 月度 | 满 $50 触发 |
| X Articles Contest | Stripe → 同上 | 月度 | 比 ad share 单独 |
| Beehiiv subs / Boosts | Stripe → Wise / Mercury | 月度 | 满 $25 触发 |
| Substack subs | Stripe → 同上 | 月度 | 满 $25 触发 |
| Gumroad / Lemon Squeezy | PayPal / Stripe → 同上 | weekly / monthly | 数字产品 |
| YouTube Shorts revenue | AdSense → 银行 | 月度 | 满 $100 触发 |
| 1:1 Briefing（直接收）| Stripe Checkout | 即时 | 受 LLC 银行 |

### 4.3 支付工具开户清单（M2 触发）

```
M2 Week 1: 注册 Mercury（30 min）
  · 需要 LLC EIN（如已注册）or 个人 SSN
  · 需要美国地址（用 registered agent 即可）
  · 1-2 business days 批准

M2 Week 1: 注册 Wise（30 min）
  · 需要护照 + 中国地址
  · 提供 USD / EUR / GBP 收款账号
  · 用于 cross-border 提款到中国

M2 Week 2: 各平台关联 Mercury
  · X Monetization → Mercury account
  · Beehiiv → Mercury / Wise
  · Stripe → Mercury

M3 Week 1: 设置 Stripe（如需直接收 1:1 / digital products）
  · 通过 Stripe Atlas（$500，包含 LLC 设立 + EIN + Stripe 账户）
  · 或单独 Stripe 账户（无 LLC）
```

---

## 五、Step 4 · 月度 Bookkeeping

### 5.1 模板（Notion / Google Sheets）

```
Monthly Bookkeeping · [Month] [Year]

────────────────────────────────────────
INCOME
────────────────────────────────────────
X ad share              $___
X Articles Contest      $___
Beehiiv paid subs       $___
Beehiiv Boost income    $___
Substack subs           $___
1:1 Briefing            $___
Gumroad / Lemon Squeezy $___
YouTube Shorts revenue  $___
Affiliate / referral    $___
Sponsorship             $___
Other                   $___
                        ─────
TOTAL INCOME            $___

────────────────────────────────────────
EXPENSES（business deductions）
────────────────────────────────────────
X Premium+              $16/月
Beehiiv subscription    $___
TweetHunter / Buffer    $___
Notion / Otter / Canva  $___
VA salary               $___
Contractor (video / design) $___
Software (CapCut / etc) $___
Equipment (mic / camera)$___
Internet / phone        $___（business 比例 50%）
Home office             $___（business 比例）
Travel (event / meeting)$___
Education (course / book) $___
Professional services   $___（accountant / lawyer）
Banking fees            $___
Other                   $___
                        ─────
TOTAL EXPENSES          $___

────────────────────────────────────────
NET INCOME (taxable)    $___ = INCOME - EXPENSES
ESTIMATED TAX (set aside 25-30%) $___
────────────────────────────────────────

NOTES:
  · receipts saved in Notion / Drive folder
  · business bank statement attached
  · personal vs business expenses 严格分开（LLC 后必须）
```

### 5.2 月度 1 hr 流程

```
每月最后一天（与 monthly retro 同时）：

1 (15 min) · 收入归集
  · 各平台 dashboard 截图 / 数字记下来
  · 复制到 spreadsheet

2 (15 min) · 支出归集
  · 银行账户 export CSV
  · 业务相关支出标记
  · 收据照片留 cloud（IRS audit 7 年保留）

3 (10 min) · 计算 net income
  · = income - expenses
  · = taxable income

4 (10 min) · 预留税款
  · set aside 25-30% net income to "tax savings" sub-account
  · M3+ 应该开 separate sub-account 不混

5 (10 min) · 月度 review
  · 收入趋势？
  · 支出 ROI？
  · 升级 / 降级触发？
```

---

## 六、年度税务申报（每年 4 月 / 10 月）

### 6.1 海外 creator 申报路径

```
你（中国税务居民）
  ↓
LLC（Wyoming）
  ↓
EIN 收到的所有 payments （from X / Beehiiv / etc）
  ↓
W-8BEN-E 申报，平台预扣 10% 或 0%
  ↓
LLC pass-through
  ↓
你 personally 在中国申报境外收入（CRS 国际税务信息交换）

不需要在美国报税（无 US-source 个人收入 + 无 US 居民身份）
```

### 6.2 中国境外收入申报

```
中国税务居民有义务申报 worldwide income（包括 X / Beehiiv 收入）
按"综合所得"或"经营所得"申报

经营所得（推荐 M3+）：
  · 5%-35% 累进税率
  · 可扣除合理 business 支出
  · 可申报 LLC 在美国预扣的 10% 作为 foreign tax credit
  · 1 月-3 月年度申报

如有 LLC：
  · 中国税务居民 + 美国 LLC = controlled foreign corporation 风险
  · M3 起咨询本地税务师 1 次（$100-300）
```

### 6.3 税务师咨询触发线

| 触发 | 找谁 |
|---|---|
| W-8BEN 不确定填法 | 跨国 creator 会计师（$100/hr 1 次咨询）|
| LLC 设立 | Wyoming Agents / ZenBusiness（套餐 $200-500）|
| 中国境外收入申报 | 本地涉外税务师（$200-500/年）|
| S-Corp 升级（M5+）| 美国 enrolled agent（$500/年）|

**M2 第 1 笔收入到账前必须找 1 次**。$100-300 一次性投入避免每年 $1000-5000 错申报损失。

---

## 七、合规红线

### 7.1 永远不做

```
❌ 不交 W-8BEN，受 30% 预扣（损失 $1000+/年）
❌ 收入 > $600 不记账（IRS audit 风险 + 罚款 25%）
❌ 业务支出和个人支出混（LLC 失去 limited liability 保护）
❌ 不预留税款（4 月被 surprise 没钱交）
❌ 不保留收据 7 年
❌ 不跨平台 reconcile（某平台少 $200 没发现）
```

### 7.2 永远要做

```
✅ M1 注册前先想：所有平台都用同一 entity（personal 或 LLC）
✅ M2 第 1 笔收入前提交所有 W-8BEN
✅ M3 评估 LLC（月收入 ≥ $500）
✅ M3 后每月 1 hr bookkeeping（不能跳）
✅ M3 起预留 30% 税款到 sub-account
✅ 找 1 次跨国 creator 会计师（一次性 $100-300）
```

---

## 八、与其他文档的整合

### 8.1 [revenue-stack-2026.md](./revenue-stack-2026.md) 收入路径必须

每一条 revenue stream 必须先确认：

```
□ 平台 W-8BEN 已交
□ 收入到账渠道（Mercury / Wise / Stripe）
□ 月度 bookkeeping 模板有此项目
□ 税务分类（royalty / service / sales）
□ FTC / SEC 合规（如 sponsorship / 投资讨论）见 [legal-compliance.md](./legal-compliance.md)
```

### 8.2 [_self-operation-handbook.md](./_self-operation-handbook.md) §三 weekly 加入

每月最后一天的 monthly retro 加 1 hr bookkeeping（§五.2）。

### 8.3 触发时机表

| 阶段 | 业务基础动作 |
|---|---|
| M1（now）| W-8BEN to all platforms · Mercury 账户 |
| M2 | Wise + Stripe 关联 · 1 次会计师咨询 |
| M3 | LLC（Wyoming）· EIN · 月度 bookkeeping |
| M4 | Quarterly 税款预付（如美国 LLC 有要求）|
| M5 | S-Corp 升级评估（净收入 > $40K/年）|
| M6+ | 全栈合规：合同 / 法务 review · 见 [legal-compliance.md](./legal-compliance.md) |

---

## 九、本文档维护

| 频率 | 动作 |
|---|---|
| 每月最后一天 | §五月度 bookkeeping（与 monthly retro 同时）|
| 每季度 | review 工具 / 平台 / 税务 status |
| 每年 1-3 月 | 年度税务申报（中国 + 美国）|
| 每年 4-5 月 | 美国 LLC annual report submit |
| 每年末 | review 是否升级 S-Corp / 加 contractor 合同 |

---

## 十、紧急联系（不可替代的 4 个外部人）

```
1. 跨国 creator 会计师
   · 搜：international creator accountant chinese
   · 价格：$100-500/小时
   · 用途：W-8BEN article 引用 / LLC 设立 / 年度申报

2. Wyoming registered agent
   · 例：Northwest Registered Agent / ZenBusiness
   · 价格：$60-200/年
   · 用途：LLC 法律地址 + 合规 mail forwarding

3. 中国本地涉外税务师
   · 大城市律师事务所或会计事务所
   · 价格：$200-500/年
   · 用途：境外收入申报 + foreign tax credit

4. 美国 creator-friendly lawyer（M4+ 才需要）
   · 用途：合同 review / sponsorship 合规
   · 价格：$300-500/小时 ad hoc
```

---

**版本**：v1.0 · 2026-05-30
**配套**：[sustainability-and-delegation.md](./sustainability-and-delegation.md) · [revenue-stack-2026.md](./revenue-stack-2026.md) · [legal-compliance.md](./legal-compliance.md) · [_self-operation-handbook.md](./_self-operation-handbook.md)
