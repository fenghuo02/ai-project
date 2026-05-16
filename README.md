# 渝山东方美学 · 项目仓库

[![CI](https://github.com/fenghuo02/ai-project/actions/workflows/ci.yml/badge.svg)](https://github.com/fenghuo02/ai-project/actions/workflows/ci.yml)

> 重庆首家**东方美学命主肖像工作室**——用《四柱八字》的色彩美学 + AI 视觉技术，为本地客户做一本属于自己的《X 之书》。
>
> **版本**：v1.3 · 2026 春
> **预算上限**：¥30,000 · 6 个月跑通
> **核心 SKU**：9.9 钩子 / 299-499 拳头 / 1999-3999 高定订阅 / 6,800+ B 端

---

## 📦 仓库总览（4 大资产）

```
ai-project/
├── docs/                          ① 战略 + 内容运营
│   ├── business-plan-…v1.3.md      ⭐ 项目计划书（含 §5.2 19 色卡产品体系）
│   └── playbook/                   小红书 + 公众号双平台运营
│
├── mingshu-builder/               ② PDF 命书生成器（v2.1.2）
│   └── 输入 data.yaml → 输出 39 页《X 之书》PDF
│
├── swatch-builder/                ③ 4 档色卡 PDF 生成器（v1.0）
│   └── 输入 data.yaml → 输出 A/B/C/D 档色卡（48 页 demo）
│
└── samples/                       ④ 样品文件
    └── yixue-photo-pdf/             24 页样书 + 8 页预览图
```

> **生产工具共用 19 色色谱**：`swatch-builder/palette/colors.yaml` 是单一真相来源，
> mingshu-builder 的「附录·二·项目色谱全集」页（v2.1.2 起）也引用这份 YAML，
> 修改任意颜色只需改一个文件，所有产品同步更新。

---

## ① 战略文档 · `docs/`

| 文件 | 用途 |
|------|------|
| [`business-plan-chongqing-yixue-photo.md`](./docs/business-plan-chongqing-yixue-photo.md) ⭐ | **项目计划书 v1.3**（C 端 + B 端双轮战略 / 6 个月分阶段 / ¥30k 预算明细 / §5.1 服装形象 / §5.2 4 档色卡产品体系） |
| [`playbook/`](./docs/playbook/) | **小红书 + 公众号双平台运营手册**（playbook + 7 套核心 Prompt + 30 天内容日历 + 9 宫格封面规范） |
| [`playbook/prompts-yixue-photo.md`](./docs/playbook/prompts-yixue-photo.md) | **易学摄影专属提示词工具包 v2.1.1**（八字推导 / 五行肖像 / 八门壁纸 / 节气节庆图 / 朋友圈话术） |
| [`playbook/prompts-elderly-care.md`](./docs/playbook/prompts-elderly-care.md) | 银发关怀赛道提示词（B 端 BD 备用方向） |

---

## ② PDF 命书生成器 · `mingshu-builder/`

> 输入客户 `data.yaml` + AI 跑的图，生成 **39 页中式审美 PDF 命书**——
> 当前已生产化的 SKU：**3999/年 高定订阅档**

```bash
cd mingshu-builder
pip install jinja2 pyyaml weasyprint   # 系统依赖见 README
python3 build.py 主理人-19880808       # 生成 output.pdf + 39 张 preview/*.jpg
```

**输出包含**：封面 → 序章 → 命主画像（4 页） → 本命色谱（3 页） → 人生八境（8 页） →
七节日（7 页） → 24 节气（4 页） → 终章 → **附录·一 全年色卡日历** →
**附录·二 项目色谱全集**（19 色，本命色 ★ / 避忌色 忌 自动标注） → 版权页

详见：[`mingshu-builder/README.md`](./mingshu-builder/README.md)

---

## ③ 色卡 PDF 生成器 · `swatch-builder/`

> 配套业务计划书 §5.2「本命色卡产品体系」——
> 一键生成 4 档色卡（A 钩子 / B 八门 / C 高定 / D B端）的 PDF + HTML 预览。

```bash
cd swatch-builder
python3 build.py 主理人-19880808       # 生成 28 页（启用 ABC 档）/ 48 页（启用 ABCD 全档）
```

| 档 | 用途 | 售价 | 物料 |
|----|------|------|------|
| **A** | ¥9.9 钩子 | 棉感艺术纸 + 烫金 | 单张本命色卡 |
| **B** | ¥299 拳头 | 棉麻特种纸 + 朱砂蜡封 | 八门 16 张 |
| **C** ⭐ | ¥2,999 高定 | 真丝绢本 + 矿物颜料 + 楠木匣 | 19 色全色 |
| **D** ⭐⭐ | ¥6,800+ B 端 | C + 缂丝外锦囊 + 同色丝巾 | 19 色 + 配件 |

**核心资产**：[`swatch-builder/palette/colors.yaml`](./swatch-builder/palette/colors.yaml) ——
项目 19 色单一真相来源，含 HEX / Pantone / 五行 / 出处诗 / 矿物配方。

详见：[`swatch-builder/README.md`](./swatch-builder/README.md)

---

## ④ 样品 · `samples/`

| 文件 | 内容 |
|------|------|
| [`samples/yixue-photo-pdf/mingshu-sample.pdf`](./samples/yixue-photo-pdf/) | **24 页样书** ·《暖驼之書》主理人 1988-08-08 Demo |
| [`samples/yixue-photo-pdf/preview/`](./samples/yixue-photo-pdf/preview/) | 前 8 页的 100 DPI 预览图（朋友圈/公众号直接用） |

---

## 🚀 快速开始（按角色）

### 我是**主理人 / 项目负责人**

1. 先读 [`docs/business-plan-chongqing-yixue-photo.md`](./docs/business-plan-chongqing-yixue-photo.md) §1-4（30 分钟）
2. 按 §5.1 在 M1 第 1-3 周完成形象采购（淘宝 + 朝天门 + 解放碑）
3. 按 §5.2 联系印刷厂打 A 档样卡（用 swatch-builder 出的 PDF 当排版稿）
4. 按 [`docs/playbook/playbook.md`](./docs/playbook/playbook.md) 跑小红书 + 公众号

### 我是**新接手的运营 / 实习生**

1. 读 [`docs/playbook/README.md`](./docs/playbook/README.md)（5 分钟）
2. 跟着 [`docs/playbook/first-post.md`](./docs/playbook/first-post.md) → `post-02` → `post-03` 发完前 3 篇
3. 用 [`docs/playbook/prompts.md`](./docs/playbook/prompts.md) 的 7 套 Prompt 持续产出

### 我是**视觉 / 内容生产**

1. 读 [`docs/playbook/prompts-yixue-photo.md`](./docs/playbook/prompts-yixue-photo.md) 的 Prompt 1-13（八字推导 → 出图 → 文案）
2. 看 [`samples/yixue-photo-pdf/`](./samples/yixue-photo-pdf/) 了解最终交付形态
3. 给客户出 39 张图后，运行 `python3 mingshu-builder/build.py 客户ID`

### 我是**新客户 / 想看效果**

→ 直接看 [`samples/yixue-photo-pdf/mingshu-sample.pdf`](./samples/yixue-photo-pdf/)

---

## 🔗 工具链关系图

```
                    swatch-builder/palette/colors.yaml
                              （19 色 · 单一真相来源）
                                       │
                ┌──────────────────────┼──────────────────────┐
                ▼                      ▼                      ▼
     swatch-builder              mingshu-builder       业务计划书 §5.2.1
     ──────────────              ───────────────       ──────────────
     4 档色卡 PDF                39 页命书 PDF          人工对照表
     物料对接印刷厂              交付客户/B 端           谈判/采购参考
                                       │
                                       └─→ 附录·二 项目色谱全集
                                            （本命色 ★ + 避忌色 忌 自动标注）
```

**修改 19 色中任意一色** → 只改 `colors.yaml` →
`swatch-builder` 与 `mingshu-builder` 重跑 → 全产品自动同步。

---

## 📅 版本与里程碑

| 版本 | 日期 | 关键变更 |
|------|------|---------|
| v1.0 | 2026-初春 | 计划书初稿 + 提示词工具包 v2.0 |
| v1.1 | 2026-早春 | 计划书 §4 新增 B 端渠道（银行 + 医美）|
| v1.2 | 2026-春 | §5.1 服装形象方案（¥4,500） |
| v1.2.1-2 | 2026-春 | §5.1.4-5.1.7 实操采购清单（淘宝店铺 + 朝天门走法） |
| v1.3 | 2026-春 | §5.2 本命色卡 4 档产品体系（19 色全集） |
| **v2.1.2** | **2026-04** | **mingshu-builder 引入 §5.2.1 共享色谱（PR #9）** |

---

## 📋 内容合规底线（重要）

文档对外**绝不出现**：算命 / 看相 / 八字 / 用神 / 调候 / 命格 / 奇门 / 八门 / 死门 / 惊门

**一律包装成**：东方美学 / 命主画像 / 本命色 / 应景 / 八种生活场景

`data.yaml` 内部**可以**用专业术语（工作文档，不会被客户看到）。
最终客户交付物里所有文字**必须**已包装。所有模板已严格遵守。

---

## 📝 License

Private · 渝山东方美学 © 2026
