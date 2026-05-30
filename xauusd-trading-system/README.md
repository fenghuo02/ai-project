# XAUUSD 交易分析系统

> 专注于 **黄金（XAU/USD）** 的日内交易与趋势交易系统，包含 AI 分析提示词、量化策略文档与 TradingView Pine Script 指标。

---

## 目录结构

```
xauusd-trading-system/
├── README.md                       # 本文件：项目总览与使用方法
├── prompts/                        # AI 分析师提示词（可贴入 Claude / GPT / Kiro）
│   ├── 01_master_analyst.md        # 主分析师提示词（每日复盘 / 行情结构）
│   ├── 02_intraday_signal.md       # 日内信号生成提示词
│   └── 03_trend_signal.md          # 趋势信号生成提示词
├── strategy/                       # 策略文档（人类可读的交易规则）
│   ├── intraday_strategy.md        # 日内交易策略（M5 / M15）
│   ├── trend_strategy.md           # 趋势交易策略（H4 / D1）
│   └── risk_management.md          # 资金管理与风控
└── pinescript/                     # TradingView Pine Script v5 指标
    ├── xauusd_intraday_signal.pine # 日内信号指标
    ├── xauusd_trend_signal.pine    # 趋势信号指标
    └── xauusd_mtf_dashboard.pine   # 多周期共振仪表盘
```

---

## 使用流程（推荐）

### 1. 让 AI 分析行情
- 打开 `prompts/01_master_analyst.md`，整段复制到 Claude / GPT / Kiro
- 把当天的 XAUUSD 关键数据（DXY、美债收益率、亚欧美三段高低、PDH/PDL）粘贴进去
- AI 会输出：**多周期偏向 + 关键水平 + 当日剧本（A/B/C 计划）**

### 2. 在 TradingView 上加载指标
- 打开 TradingView → 选择 `XAUUSD` 或 `OANDA:XAUUSD`
- 点击「Pine 编辑器」→ 把 `pinescript/` 中的脚本粘贴进去 → 添加到图表
- 三个脚本同时挂载，形成「**多周期共振 + 日内入场 + 趋势过滤**」

### 3. 按策略执行
- **日内交易**：参考 `strategy/intraday_strategy.md`，只在欧盘 + 美盘前半段操作
- **趋势交易**：参考 `strategy/trend_strategy.md`，H4/D1 结构突破后顺势持有
- 任何交易前先看 `strategy/risk_management.md` 的仓位公式

---

## 设计哲学

1. **多周期共振**：D1 定方向，H4 定结构，H1 定区域，M15/M5 找入场。
2. **价格行为优先**：均线和震荡指标只是辅助，**关键水平（PDH/PDL/亚欧美段高低、整数关口）才是黄金的核心**。
3. **时段意识**：黄金在欧盘开盘（15:00 北京时间）、美盘开盘（21:30）、非农 / CPI / FOMC 公布时段波动放大，必须区别对待。
4. **风控不可越线**：单笔风险 ≤ 1% 账户净值，单日最大亏损 ≤ 3%，连续 2 单亏损强制暂停 30 分钟。

---

## 提示词驱动的工作流

```
[每日开盘前]
  └─ 用 prompts/01_master_analyst.md 让 AI 输出当日剧本
       │
       ▼
[盘中执行]
  ├─ TradingView 指标给出信号（pinescript/*.pine）
  └─ 用 prompts/02_intraday_signal.md 让 AI 二次确认入场
       │
       ▼
[收盘后]
  └─ 用 prompts/01_master_analyst.md 复盘当日行情，更新次日剧本
```

---

## 适用范围

- ✅ XAUUSD（现货黄金 vs 美元）
- ✅ XAUUSD 微合约 / 差价合约 / 期货（GC）
- ⚠️ 不适用于：黄金股、黄金 ETF（流动性与时段差异大）

---

## 免责声明

本系统为**研究与教育用途**，所有信号、策略、提示词均不构成投资建议。
交易黄金存在杠杆与流动性风险，请用模拟盘充分验证后再投入实盘资金。
