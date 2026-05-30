# Account Security Playbook · 账号安全防御 + 24h 黑客恢复

> 状态：v1.0 · 2026-05-30
> 触发：v3 Crisis Playbook 仅覆盖软件层（限流 / ratio / suspension），**完全没有 SIM swap / 2FA / passkey / hacked recovery**。X 账号是核心资产，5K+ 粉就成攻击靶子。
> 配套：[_self-operation-handbook.md](./_self-operation-handbook.md) §八 Crisis Playbook · [creator-business-foundation.md](./creator-business-foundation.md)

---

## 一、为什么必须现在做（不是 5K+ 才做）

### 行业证据（2026-05 联网验证）

- [Forbes 2026-05-21](https://www.forbes.com/sites/daveywinder/2026/05/21/microsoft-is-scrapping-sms-2fa-codes-what-you-need-to-do/)：Microsoft 已开始全面淘汰 SMS 2FA，**SMS 已不安全**
- [Efani 2026 X 安全 review](https://www.efani.com/blog/how-secure-is-x-twitter)：X 2024-2026 已支持 passkey，是 2026 推荐方式
- [hacked.com SIM swap](https://hacked.com/terms/sim-swapping)：SIM swap 是 creator 账号最大风险，攻击者通过运营商把你电话号转给他们
- [hacked.com X 恢复指南](https://hacked.com/how-to-recover-a-hacked-twitter-account/)：X 账号被黑后 24h 内行动决定能否恢复
- [Guard.io X recovery](https://guard.io/blog/x-account-hacked)：失败的恢复尝试会触发 X 锁定，进一步延长恢复时间

> 内容已转述合规化。

### 你目前的真实风险

```
@Skub0k 当前估计 ~50-300 粉
但...
  · 已被 @elonmusk 点赞过（公开记录在 X）
  · launch thread 是 Pin（曝光度高）
  · Newsletter 已收第 1 批 emails（数据资产）
  · 5/30 起 v3+v4 部署 → 1-3 月内突破 1K 粉

5K+ 后风险跃升：
  · SIM swap 攻击（运营商被骗）
  · phishing email（仿 X 通知）
  · Discord scammer（mention 你 + impersonate X support）
  · OAuth token leak（第三方应用被 hack）
  · 朋友圈泄密（password sharing）

5/30 之前不做 → 等出事时 24h 内恢复成本: 极高（newsletter 数据全失 / Pin 推丢失 / 受众认知 reset）
```

---

## 二、立刻做（M1 Day 1，60 分钟搞定）

### 2.1 X 账号安全（25 分钟）

#### Step 1 · 启用 Passkey（X 2026 推荐）

```
1. X Settings → Security and account access → Security
2. Two-factor authentication → 启用
3. 选 Passkey（不是 SMS / Authenticator app · passkey 最安全）
4. 用 iCloud Keychain（iPhone / Mac）或 Google Password Manager（Android / Chrome）保存
5. 备用：再加 1 个 Authenticator app（Authy / 1Password）做 backup
```

#### Step 2 · 检查 / 禁用 SMS 2FA

```
1. 同上 Security 页面
2. 如果只有 SMS 2FA → 立刻 disable
   · SMS 是 2026 最不安全的 2FA（SIM swap 攻击点）
3. 替换为 Passkey + Authenticator app
```

#### Step 3 · Email 安全（同样关键）

```
X 账号 recovery email 是攻击者下一个目标

Email 也必须：
  · Passkey（Gmail / Outlook 都支持）
  · 备用 Authenticator app
  · 关闭所有 SMS 2FA
  · 检查 mail forwarding rules（攻击者会偷偷加 forwarding）
  · 检查 send mail as 设置
  · 检查 recovery phone（如还是旧号码立刻改）
```

#### Step 4 · 复查 connected apps

```
X Settings → Security and account access → Apps and sessions

Apps and sessions:
  · 看每个授权 app · 不认识的全部 revoke
  · 看每个 active session · 不认识的设备 sign out
  · 保留：你确定知道的（如 TweetHunter / Hypefury / 自己的浏览器）
```

#### Step 5 · 禁用密码 reset SMS（关键）

```
即使 SMS 不再用作 2FA，**X 的 password reset 默认仍可走 SMS**

操作：
  · X Settings → Security → Password reset protect
  · 启用：必须 confirm via Authenticator app（不是 SMS）
```

### 2.2 跨平台 password 管理（15 分钟）

#### 工具选 1：1Password（推荐 M2+，$36/年）

```
1. 注册 1Password 账户
2. 创建 vault: "X Account Operations"
3. 把所有相关账号迁入：
   · X / X Premium+
   · Beehiiv
   · Tally
   · Mercury / Wise / Stripe
   · Substack / Bluesky / LinkedIn
   · YouTube / IG / TikTok
   · 小红书 / Bilibili
   · email（recovery + main）

每个账号：
  · 唯一密码（1Password 自动生成 20+ 字符）
  · 2FA backup codes 也存进去
  · passkey 关联（如平台支持）
  · TOTP secret（Authenticator app 备份）
```

#### 工具选 2：Bitwarden（免费版即可，M1 起步）

```
开源 + 免费版功能足够 creator 使用
同 1Password 流程
```

#### 不要做的

```
❌ Chrome / Safari 自带 password manager（一个被 hack 全完）
❌ Google Sheets 存密码（明文 + 同步）
❌ 微信 / 备忘录 存密码（明文 + 云端）
❌ 1 个密码用所有账号（dictionary attack 1 次破全部）
❌ 用 publicly available info 做密码（生日 / 姓名）
```

### 2.3 SIM swap 防御（10 分钟）

#### 步骤

```
1. 联系运营商（中国移动 / 联通 / 电信）开通：
   · 业务办理密码（任何 SIM 替换需要密码 + 身份验证）
   · 业务变更通知（任何变更立刻短信通知）
   · 二次实名验证（部分运营商支持）

2. 把 X account recovery phone 设为：
   · 电子邮箱（替代 SMS）
   · 不要用主手机号

3. 若有备用手机号 / eSIM：
   · 用次要号码做 recovery
   · 主号码不挂任何 critical account
```

#### 行业建议

[hacked.com](https://hacked.com/terms/sim-swapping)：SIM swap 防御的核心是"让运营商不会被骗"。每个运营商都支持账户密码，**默认是关闭的**，必须主动开通。

### 2.4 物理安全（10 分钟）

```
1. 设备
   · iPhone / Mac biometric unlock 必开
   · 自动锁 30 秒（不是 5 分钟）
   · iCloud Keychain / Google Password Manager 双重 sync

2. Recovery codes
   · X / Email / 1Password 都给 backup codes
   · 打印 + 物理保存（保险箱 / 抽屉锁住的地方）
   · 不要存数字版（屏幕截图 = 风险）

3. 受信备份联系人（M2+）
   · 选 1 个家人 / 朋友
   · 给他们 1Password emergency kit
   · 你 incapacity / death 时他能恢复

4. WiFi / 网络
   · 公共 WiFi 用 VPN
   · home router admin password 不是默认值
   · 关 WiFi 路由器 WPS 功能（被攻击点）
```

---

## 三、24h Hacked Recovery SOP

### 3.1 Level 0 · 怀疑被 hack（不确定）

**症状**：

- 收到 X 通知"your password was changed"，但你没改
- 朋友截图你发的奇怪推（你没发）
- DM 里有你不记得发的消息
- 收到陌生 OAuth approval 通知

**第 0-15 分钟**：

```
1. 截图所有可疑通知（X 邮件 + push）
2. 在另一个设备 / 浏览器**不要登录 X** 直接打开 [x.com/login]
3. 尝试登录：
   · 如果失败 → 进 §3.2 Level 1
   · 如果成功 → 进 §3.3 Level 0.5（警觉模式）
```

### 3.2 Level 0.5 · 登入仍可（攻击未完成）

**第 0-30 分钟**：

```
1. 立刻在 trusted device 上（不是被怀疑的）：
   □ 改 X 密码（用 1Password 生成新密码）
   □ 改 email 密码（同样）
   □ Force log out all sessions：Settings → Security → Sessions → Log out all
   □ Revoke all OAuth apps（除了你确定的）
   □ 改 recovery email（如不是常用的）
   □ 改 recovery phone（如不是 SMS 2FA 的）
   □ 强化 2FA：Passkey + Authenticator app（不是 SMS）

2. 通知关键人：
   □ Beehiiv / Stripe / Mercury support：账户被怀疑被攻击，请暂停 outgoing payments 24h
   □ 你的核心受众（DM 给 top 10 fans）："possibly hacked, ignore any odd posts"

3. 调查：
   □ Login history 看有无陌生 IP
   □ Audit log 看有无未授权操作
   □ Email inbox 看有无奇怪 forwarding rule
   □ 检查你最近授权过的所有 OAuth（Hootsuite / TweetHunter / etc）

4. 24h 监控
   · 任何新通知立刻 react
```

### 3.3 Level 1 · 被锁出（密码已改，无法登入）

**第 0-15 分钟**（最关键）：

```
1. 立刻去 [x.com/forgot]
   · 输入你的 username（不是 phone）
   · 选 email reset（不是 SMS）
   · 检查 email inbox（如能进入）
   · 如 reset email 收到 → §A 路径
   · 如 reset email 没收到 → §B 路径

§A 路径（reset email 可用）：
  · 点击 reset link
  · 改新密码（强壮的，1Password 生成）
  · 立刻进 X，做完 §3.2 Level 0.5 全部 6 项
  · 1-2 hr 内可以恢复

§B 路径（attacker 已改 email）：
  · 进 [https://help.x.com/en/forms/account-access/regain-access]
  · 选 "I think my account was hacked"
  · 填表：
    - username
    - 你的真实姓名
    - 之前的 email
    - 最后已知的 IP / 国家
    - 你认为的 hacked 时间
  · X support 1-7 天回复（**Premium+ 用户优先级更高，X 1-3 天回复**）
  · 期间不要尝试多次（每次失败 = 风险评分上升）
```

**第 15-60 分钟**：

```
1. 如果你账号被 attacker 持续操作（发 spam / 钓鱼）：
   · 通过 X support 加急
   · 联系 friends in your audience：让他们 report 那个账号
   · X 会暂时 suspend（你的账号被锁但 attacker 也不能用）
   · 这是好事，给你时间恢复

2. 限制 damage：
   · Beehiiv / Stripe / Mercury 立刻 freeze（防止 attacker 把钱转走）
   · 1Password 如未被 hack，立刻改所有相关 password

3. 发声明（非 X 渠道）：
   · 在 LinkedIn / Substack / Bluesky 发"my X account was hacked, recovery in progress"
   · 让你的受众知道现在 X 上的 @Skub0k 不是你
```

### 3.4 Level 2 · 7+ 天未恢复

**仍未取回控制权**：

```
1. 持续跟进 X support（每 48h 一次 polite ping）
2. 在 LinkedIn / Substack / Bluesky 发新内容
3. 启动 backup 账号策略：
   · 注册 @SkubObserver（备用 handle）
   · 用同样 voice / brand
   · bio: "main: @Skub0k temporarily compromised. moving here while recovering."
   · 把 newsletter / cheat sheet / pinned thread 都搬来
4. 7-30 天后通常可恢复
5. 恢复后立刻迁移回原账号（备用账号留着 archive）
```

### 3.5 Level 3 · 永久失去（罕见）

**X 拒绝恢复 / 30+ 天无解决**：

```
1. 接受现实，焦点转移到其他平台
2. Newsletter（Beehiiv）受众数据安全 → 完全不影响
3. 在新账号 + 跨平台重建：
   · @Skub0k_v2 或 @SkubObserver
   · 1 个月内通过 newsletter / LinkedIn / Substack 把核心 fans 转移
   · 90 天内恢复 70-80% 关注体量

4. 这是为什么 [cross-platform-funnel.md](./cross-platform-funnel.md) 必须做：
   · X-only = 单点失败
   · 多平台 = 永远不会 0
```

---

## 四、月度 security review

每月最后一天加进 monthly retro：

```
□ X password 是否 ≥ 90 天没改？(超过则改)
□ Email password 是否 ≥ 90 天没改？
□ 1Password / Bitwarden vault 完整性检查
□ X Apps and sessions 列表 review
□ Email mail forwarding rules 检查
□ X / Beehiiv / Mercury support history（看有无未授权 access 尝试）
□ 备用联系人信息更新（如有变）
□ 物理设备 audit（biometric / auto-lock 仍开）
□ Backup codes 物理留存仍可获取
```

10 分钟 / 月。比 Level 1+ 恢复几天 / 几周值得。

---

## 五、Common Phishing 模式（识别 + 防御）

### 5.1 Top 6 phishing scenarios

```
1. "Your account will be suspended in 24 hours. Click here:"
   · 真实 X 通知：Settings → Notifications 看
   · 假的：邮件链接到非 x.com 域名

2. "@Skub0k_help is X support. DM us your password."
   · X 永远不会要你 password
   · X support official handle: @Support / @Safety

3. "[platform] is offering you partner status. Sign here:"
   · 真：Beehiiv / X / Substack 内置 dashboard
   · 假：emailed contracts，让你填 bank info

4. OAuth phishing:
   "Hi @Skub0k, want to feature you in our compilation? Approve [malicious app]"
   · 不要批准任何陌生 OAuth
   · 永远从 X Settings → Apps 里看授权

5. Friend acct compromised → DM you with malicious link
   · 即使是朋友 DM，链接也要小心
   · Reply asking 1 verifying question（"the cafe we went to last month?"）

6. SIM swap social engineering:
   攻击者打你电话："Hi I'm from China Mobile, we detected unusual..."
   · 挂断
   · 自己拨打运营商 customer service
   · 不要相信 incoming caller ID
```

### 5.2 Phishing 后立刻

```
1. 不要 click any link
2. 截图保留
3. 在 X / Email 用 forward / report 标记
4. 检查 §3.1 Level 0 信号 24h
```

---

## 六、Bot / Spam 防御

### 6.1 主推 / DM 区 spam 涌入

```
现象：
  · 突然 100+ 新 reply 推荐 OnlyFans / 投资课
  · DM 区 50+ 自动消息 / 钓鱼链接
  · @ 你的截图账号 / 假冒账号

应对：
  · X Settings → Privacy → Filter blocked content
  · 启用：
    □ Filter low-quality replies
    □ Hide replies from accounts you don't follow（强烈推荐）
    □ Receive DMs only from verified / followed
  · 每月最后一天清理 DM 区一次

不要做：
  ❌ block 100+ accounts 一次（X 算法会标记）
  ❌ report 100+ accounts 一次（同上）
  ❌ 公开抱怨 spam（attacker 看到会加倍）
```

### 6.2 高仿账号防御

```
现象：
  · @Skub0k1 / @Skub0K（O→0）/ @SkubObserver_official
  · 同样 bio + 头像
  · DM 你的受众"hi I'm the real Skub, follow my new account"

应对：
  · 在 [help.x.com → Report → Impersonation] 报告
  · 截图证据（高仿账号头像 + bio）
  · X 7-30 天内会下架（如证据充分）
  · 在 main 账号发 1 条："i don't have a backup account. only @Skub0k."
  · 把这条 pin 1-2 天

预防：
  · M2+ 注册 @Skub0k_official（防 squatter）
  · M3+ 注册 SkubObserver.com（防域名 squatter）
```

---

## 七、长期 mindset

### 7.1 你的真正资产排序

```
1. Newsletter list（邮箱地址）           = 永久属于你 · 任何平台 down 都能联系
2. 1Password vault                      = 所有平台 access · 物理 + 数字双保险
3. Personal CRM                         = 关系资本（[personal-crm.md](./personal-crm.md)）
4. 视觉 IP（visual/ + voice DNA）        = 跨平台一致性
5. 内容 archive（GitHub repo + Beehiiv）= 历史 corpus
6. X 账号                               = 流量入口（重要但**可被替换**）
7. X follower 数                        = 跟随效应（最容易丢）
```

**关键洞察**：X follower 数是排序最低的资产。看似最大，实际最脆弱。**newsletter list + 1Password vault 才是不可替代的**。

### 7.2 Black swan 防御

```
触发	                         应对
────────────────────────────────────────
账号被 hack 30+ 天               · @Skub0k_v2 + 跨平台迁移 + newsletter list
X 被某国家屏蔽                   · 跨平台 funnel · Beehiiv / Substack 主战场
X 公司被收购 / 关闭              · newsletter list 是 lifeboat
生病 / 旅行 1 个月                · backlog system + VA + 受信备份联系人
死亡 / 永久 incapacity            · 1Password emergency kit · 受信亲属
天灾（北京断网 / 断电）           · backlog + mobile data + cross-platform schedules
账号 stolen + newsletter 被偷     · 极少 · 但 password vault + 2FA Authenticator 提前保护
```

### 7.3 季度 paranoid review

```
每 3 个月（每年 4 次）：
  · 假设：明天 X 永久 ban 我的账号
    我能恢复多少 audience reach？多快？
    如果 < 50% / > 30 天 → 加倍跨平台投入
  · 假设：1Password 被 hack
    我能多快锁住所有平台？
    如果不能 < 1 hr → 优化 backup
  · 假设：网络断 1 周
    backlog 能撑多久？
    如果 < 3 天 → 加大 backlog 库存
```

---

## 八、整合到 [_self-operation-handbook.md](./_self-operation-handbook.md)

### 8.1 §八 Crisis Playbook 新增 H 类

```
类型 H · 账号被 hack / 怀疑被 hack
  · 详见 [account-security-playbook.md §三 Recovery SOP](./account-security-playbook.md)
```

### 8.2 §九 工具栈加入

```
| Password manager | 1Password / Bitwarden | M1 启动 |
| 2FA app | Authy / 1Password / Yubikey | M1 启动 |
| Recovery codes | 物理保存 + 数字 vault | M1 启动 |
```

### 8.3 月度 retro 加 §四 security review checklist

---

## 九、本文档维护

| 频率 | 动作 |
|---|---|
| M1 Day 1 | §二全套（60 min） |
| 每月最后一天 | §四 monthly review（10 min） |
| 每季度 | §7.3 paranoid review |
| 每半年 | 重读 §三 recovery SOP（确认仍记得）|
| 每年 | 全文 rewrite · 行业新攻击模式更新 |

---

**版本**：v1.0 · 2026-05-30
**配套**：[_self-operation-handbook.md](./_self-operation-handbook.md) · [creator-business-foundation.md](./creator-business-foundation.md) · [cross-platform-funnel.md](./cross-platform-funnel.md) · [personal-crm.md](./personal-crm.md)
