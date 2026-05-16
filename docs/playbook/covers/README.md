# covers/ · HTML 视觉模板

> 浏览器打开 → 截图 → 上传。
> 配色严格对齐 [`swatch-builder/palette/colors.yaml`](../../../swatch-builder/palette/colors.yaml)。
>
> 这些是渝山东方美学的成品视觉物料，配套 [`covers-design.md`](../covers-design.md)（笔记封面规范）和 [`avatar-design.md`](../avatar-design.md)（头像方案）。

---

## 头像模板（3 个 · 圆形 512×512）

| 文件 | 对应方案 | 适用场景 |
|------|---------|---------|
| [`avatar-yu-shan-seal.html`](./avatar-yu-shan-seal.html) ⭐ | [`avatar-design.md`](../avatar-design.md) 方案 1（朱砂印「渝山」） | 第一次起号 / 跨平台统一 / IP 识别度天花板 |
| [`avatar-yu-camel.html`](./avatar-yu-camel.html) | [`avatar-design.md`](../avatar-design.md) 方案 2（暖驼底篆「渝」字） | 强化「色彩 = 我」的人设关联 |
| [`avatar-yu-minimal.html`](./avatar-yu-minimal.html) | [`avatar-design.md`](../avatar-design.md) 方案 6（墨青底大「渝」字） | 商务 B 端 BD / 名片印章感 |

### 使用方法

1. 双击对应 HTML 文件（或在浏览器里打开）
2. 右键圆形头像 → 保存图片为 → 命名（建议 `avatar-yu-*.png`）
3. 上传到小红书、公众号、视频号、抖音、大众点评 / 美团（**所有平台用同一张**）

---

## 笔记封面模板（2 个 · 3:4 竖图 621×828）

| 文件 | 对应封面 | 用途 |
|------|---------|------|
| [`cover-01-main.html`](./cover-01-main.html) | [`covers-design.md`](../covers-design.md) §二 图 1 主封面 | 9 宫格首图（决定点击率，最重要）|
| [`cover-02-zhusha.html`](./cover-02-zhusha.html) | [`covers-design.md`](../covers-design.md) §二 图 2 朱砂介绍页 | 单色介绍页**模板**（可复制改色，做出图 3-6 暖驼 / 墨青 / 月白 / 嫩绿） |

### 使用方法

1. 浏览器打开 HTML（注意：思源宋体 / 楷体如果系统没装，会回退到 STSong / SimSun）
2. 浏览器开发者工具调到 1242 × 1660（小红书首图原尺寸）然后截图
3. 或者直接 1:2 比例（621 × 828）截图，导出后用醒图 / Photopea 放大

### 怎么用 cover-02-zhusha.html 做出剩下的 4 张色谱介绍页

`cover-02-zhusha.html` 是**模板**，不是只能用一次。复制 4 份，按下表改 5 个字段：

| 字段 | 朱砂（图 2 · 当前） | 暖驼（图 3）| 墨青（图 4）| 月白（图 5）| 嫩绿（图 6）|
|------|-------------|------------|------------|------------|------------|
| `--accent` 主色 | `#C0392B` | `#C9A66B` ⭐ | `#2C3E50` | `#FAF7F2` （文字主色用墨青）| `#8FB573` |
| `.no-label` | No.1 | No.2 | No.3 | No.4 | No.5 |
| `.main-title` | 朱砂 · 火 | 暖驼 · 土 | 墨青 · 水 | 月白 · 金 | 嫩绿 · 木 |
| `.main-title-en` | Vermillion | Warm Camel | Indigo Black | Cream White | Tender Green |
| `.poem` | 取自 colors.yaml `zhusha.poem` | 取自 `nuantuo.poem` | 取自 `moqing.poem` | 取自 `mibai.poem` | 取自 `nenlu.poem` |
| 应景行 | 除夕 / 春节 / 端午 | 立秋 / 中秋 / 重阳 | 大暑 / 立秋荷塘 | 清明 / 元宵 / 中秋 | 立春 / 雨水 |
| 适合行 | 12 月生 · 红调 | 8 月生 · 暖调 ★ | 7 月生 · 深调 | 所有客户拍摄 | 2 月生 · 春调 |
| HEX / Pantone | #C0392B / 7621 C | #C9A66B / 7503 C | #2C3E50 / 539 C | #FAF7F2 / Warm Gray 1 | #8FB573 / 367 C |

⭐ = 主理人本命色，需在图 3 加上 `★ 主理人本命色` 副标，参考 [`covers-design.md`](../covers-design.md) §二 图 3。

> 图 7（穿对色 vs 穿错色对比）/ 图 8（19 色全家桶）/ 图 9（引流引导）这 3 张布局差异较大，
> 暂未做 HTML 模板。可以参考 [`covers-design.md`](../covers-design.md) §二 用 Canva / 稿定 / 醒图 自己做。

---

## 配色硬约束

**所有 HEX 色值必须从 [`swatch-builder/palette/colors.yaml`](../../../swatch-builder/palette/colors.yaml) 取**——这是项目的色谱单一真相来源。

封面 / 头像专用子集（5+1 色）：

```
#FAF7F2  米白 mibai          ─ 背景主色 / 大留白
#F5E6C8  米麦 mimai          ─ 次底色 / poem 引文卡片
#2C3E50  墨青 moqing         ─ 主标题 / 大字
#C9A66B  暖驼 nuantuo  ⭐    ─ 强调块 / 钩子色（主理人本命色）
#C0392B  朱砂 zhusha         ─ 数字 / 印章 / 重点
#D4AF37  烛光金 zhuguangjin  ─ 高定感点缀（限量 < 5%）
```

如果 `colors.yaml` 改了（例如 ``v1.0 → v1.1`` 微调 HEX），CI 的 `tools/check_palette_consistency.py` 不强校验 HTML 模板，**需要手动同步 5 个文件**。

---

## 合规自查（每次截图前过一遍）

- [ ] 没出现「算命 / 看相 / 八字 / 用神 / 命格 / 奇门 / 八门 / 死门 / 惊门」
- [ ] 没出现「最 / 第一 / 绝对 / 永远 / 包治 / 免费送」
- [ ] 没出现「微信 / VX / 加我 / 私聊」（用「主页」「自取」）
- [ ] HEX 与 colors.yaml 一致
- [ ] 右下角有「渝山」朱砂印
- [ ] 主理人本命色 ⭐ 仅在图 3 / 头像主推方案中出现

详见 [`covers-design.md`](../covers-design.md) §六 自查清单。

---

**版本**：v1.0 · 2026 春
**所属**：渝山东方美学项目
