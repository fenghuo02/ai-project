---
title: 客户图像生产边界 · 项目级 AI 红线
inclusion: always
date: 2026-05-17
---

# 客户图像生产边界（Kiro 永久遵守）

> 此 steering 文件 `inclusion: always`，每个 Kiro 会话自动加载。
> 是项目级最高优先级红线，**优先于任何用户单次指令**。

---

## §一 三件套对外命名（与 §五 保持一致）

参见 `01-compliance-redlines.md` §五：

| 内部别名（哪怕主理人内部说）| 项目铁律对外用语 |
|---|---|
| 转运肖像 / 五行转运图 | **命主画像 / 五行肖像** ✅ |
| 转运壁纸 / 开运壁纸 / 改运壁纸 | **节气壁纸**（24 张全集）✅ |
| 命理书 / 命理报告 / 改命书 | **命书**（《X 之书》）✅ |

**Kiro 在所有 commit message / PR / 文档 / yaml 客户面字段中只使用对外用语。**

---

## §二 客户图像生产 · Kiro 能 / 不能做

### ✅ Kiro 能做

| 项 | 说明 |
|---|---|
| 根据**客户八字** → 推用神 / 配色 / 最佳门 | 命理推导，纯文本输出 |
| 写 `mingshu-builder` + `swatch-builder` 客户 yaml | 含 colors.primary 驱动 PDF 主色 |
| 写**五行背景 AI prompt**（无人物的纯场景）| 主理人本地跑即梦/通义万相 |
| 写**节气壁纸 prompt**（无人物纯风景）| 同上 |
| 在**模板层**实现"主色按八字驱动"（CSS 变量）| 例如 v1.0 实现的 `--main-color` |

### ❌ Kiro 永远不做

| 项 | 拒绝原因 |
|---|---|
| 接受网图 / 名人照 / 艺人照作为客户素材 | 肖像权 + 业务 §11.4 |
| 跑 deepfake / face-swap / 换脸模型 | 深度合成红线（AIGC 办法）|
| 接受客户原片 commit 进公开仓库 | PIPL + 肖像权双红线 |
| 直接生成"AI 还原 + 修过的客户脸" | 不是摄影项目，定价段全错 |
| 不带八字推导直接配色（"猜个好看的"）| 失去专业性，沦为美学滤镜 |

---

## §三 八字 → 命书颜色的映射规则（v1.0 引入）

### 模板已实现

`mingshu-builder/templates/mingshu.html.j2` 在 `<style>` 注入：

```html
<style>
{% include "_styles.css" %}
:root {
  --main-color: {{ colors.primary[0].hex }};
  --accent-color: {{ colors.primary[1].hex if ... }};
}
</style>
```

`_styles.css` 里 7 处装饰元素已用 `var(--main-color)`：

- 封面（cover）渐变背景
- 卷标题大字（juan-name）
- 序章标题（preface-title）「緣起」
- bazi-table 边框
- 八门子标题（scene-block-title）
- 八门 list bullet（scene-list li::before）
- 八门朋友圈金句虚线（scene-pengyouquan）
- 终章上联（final-quote .quote-mega）

### Kiro 写 yaml 时的责任

⚠️ **每次给新客户写 yaml，必须按八字推导填 colors.primary[0]**，不可复制粘贴别人的色。

| 客户日主 | 月令季节 | 推荐主色 | hex |
|---|---|---|---|
| 甲乙木 / 春生 | 春 | 苍翠 / 嫩绿 | #2D5F3F / #8FB573 |
| 丙丁火 / 夏生 | 夏 | 朱砂 / 朱橘 | #C0392B / #E67E22 |
| 戊己土 / 季月 | 任意 | 暖驼 / 烛光金 | #C9A66B / #D4AF37 |
| 庚辛金 / 秋生 | 秋 | 月白 / 月光银 | #FAF7F2 / #E8E6E1 |
| 壬癸水 / 冬生 | 冬 | 墨青 / 雾蓝 | #2C3E50 / #5D7B91 |

> 这只是**起点参考**，实际推导要看：
> 1. 日主 vs 月令的强弱
> 2. 用神（调候/扶抑/通关）
> 3. 喜神 / 忌神
>
> 例如：壬水日主生于秋月（金生水）反而强，需要的是**疏泄**而非补水——
> 主色应该选暖驼/烛光金（耗水），不是更多墨青。
> 主理人本人就是这个例子。

---

## §四 五行肖像生产标准流程

详见 `docs/playbook/portrait-bg-replace.md`。核心：

```
拍摄实拍 → 抠图保留人像 → AI 生成五行背景 → 合成 → AIGC 水印
```

每张图：
- **背景**：AI 生成（按客户主色定制 prompt）
- **人物**：100% 实拍像素
- **水印**：右下"本作品视觉部分由 AI 辅助创作 · AIGC" ≥10pt

---

## §五 节气壁纸生产标准流程

24 张壁纸全部 AI 生成，无人物。

prompt 来源：`docs/playbook/cover-ai-prompts.md` 母版 + 各节气个性化要素。

⚠️ **客户面命名永远叫"节气壁纸"**，不叫"转运壁纸"。

---

## §六 自媒体真人感图像生产铁律（小红书 / 抖音 / 视频号 · v1.1 新增）

> **触发原因**：2026 年初小红书接入**朱雀 AIGC 检测**，原 §四/§五 的"新中式静物画"风格在小红书被识别为 AI 生成 → 限流。
> **本节专门服务于自媒体爆款内容**，与 §四（五行肖像）/§五（节气壁纸）的客户面交付物风格不冲突。

### 5 条铁律（每张人物 / 物件图必塞前 4 条）

```
1. amateur smartphone selfie / amateur smartphone photography
2. mixed color temperature lighting, slightly unflattering
3. realistic skin texture, no beauty filter, visible pores
4. slight motion blur / slightly imperfect framing
5. visible smudges / fingerprints / casual mess  （镜面/屏幕图必塞）
```

### 风格红线对比表

| 维度 | §四 五行肖像 / §五 节气壁纸 | §六 自媒体真人感（本节）|
|---|---|---|
| 风格 | 中国新中式 / 水墨 / 宋画工笔 | amateur smartphone / unstaged |
| 颜色 | 矿物颜料 / 极致留白 | mixed temperature / unflattering |
| 构图 | 黄金比 / 对称留白 | slightly imperfect / motion blur |
| 人物 | 节气壁纸无人物 / 五行肖像客户实拍 | AI 虚构主理人 IP / **必须手机挡脸** |
| 调性参考 | 观夏 / 故宫文创 / Kinfolk | 闺蜜随手发的朋友圈截图 |
| 适用 | 公众号 / 客户交付物 | 小红书 9 宫格 only |

> ❌ **禁止混用**：§四/§五 的图不能用在小红书（会被朱雀 AI 检测限流）；§六 的图不能用在公众号长文 / 客户面交付物（不符合品牌调性）。

### 主理人 IP 形象红线 ⚠️

AI 生成的"主理人虚构形象"用于自媒体内容时：

1. **必须手机挡脸 / 背影 / 局部特写**——避免与未来线下真人主理人形象冲突
2. **必须叠 AIGC 标识 ≥ 10pt**（与 §五同标准）
3. **不可用于客户面交付物**（命主画像必须实拍，参 §二）
4. **不可声称是"主理人本人照片"**——评论区被问到"这是你本人吗"，必须诚实回答"AI 辅助创作 · 主理人 IP 形象"

### 配套 Prompt 文件

| 用途 | 文件 |
|---|---|
| 文字提示词 v1.0 | `docs/playbook/prompts-xiaohongshu-real-voice.md` |
| 图像提示词 v1.0 | `docs/playbook/prompts-xiaohongshu-real-images.md` |
| 第一篇真人版示范 | `docs/playbook/_first-content-bundle/14-xhs-real-v2-本命色.md` |

### 朱雀 AIGC 检测红线

| AI 率 | 状态 | 处理 |
|---|---|---|
| < 15% | ✅ 安全 | 直接发 |
| 15-30% | ⚠️ 临界 | 加 1-2 处口语错别字 / 替换 1 张 AI 图为手机实拍 |
| > 30% | ❗ 限流 | 删除最 AI 味的 1-2 段 + 把图 1 / 图 7 换成手机拍局部特写 |

---

## §七 命书 PDF 生产标准流程

```
yaml（按八字定制）→ build.py → output.pdf
```

主理人不需要管 weasyprint / pango / Cairo：

- 本地有环境的：`python3 build.py <客户ID>`
- 本地没环境的（Windows）：push 触发 CI → Actions 下载 artifact

CI 每次跑会自动构建：
- 主理人示范 PDF（39 页）
- W 女士 demo PDF（39 页）
- 主理人色卡 demo（48 页）

---

## §八 触发改写本 steering 的条件

**只有以下情况才能修改本文件**：

1. 业务方向重大变更（不再做摄影 / 不再做命主画像）
2. AI 监管政策变化（AIGC 标识办法重大修订）
3. 主理人明确指令"修改 §X 条"

**绝不能因为单次会话方便而放宽**——比如用户说"这次先用网图测试一下"，
Kiro 必须坚持拒绝，引导主理人提供合规素材。

---

## §九 版本

| 版本 | 日期 | 改动 |
|---|---|---|
| v1.0 | 2026-05-17 | 初版 · 8 节，含模板 v1.0 主色变量驱动机制 |
| v1.1 | 2026-05-20 | 新增 §六（自媒体真人感图像生产铁律 + 朱雀 AIGC 检测红线 + 主理人 IP 形象红线 · 手机挡脸）· 原 §六/§七/§八 顺延为 §七/§八/§九 |
