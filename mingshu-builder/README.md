# 命书生成器（v2.1.1 高定版）

> 一键根据客户照片 + 八字 + 推导数据，生成 38-80 页中式审美 PDF 命书。
> 当前已生产化的 SKU：**3999/年 高定订阅档**

---

## 一句话工作流

```
客户提交 照片 + 八字  →  你（主理人）做命局推导 + 跑图  →  我把图丢进客户文件夹  →  python3 build.py 客户ID  →  PDF
```

---

## 目录结构

```
mingshu-builder/
├── build.py                # 一键生成脚本（38 页基础版，有图自动填充）
├── templates/
│   ├── mingshu.html.j2     # 主模板（80 页结构 + Jinja2 占位）
│   └── _styles.css         # 中式审美样式（思源宋体 + 朱砂印章 + 回字纹）
├── clients/
│   └── 主理人-19880808/    # 每个客户一个独立文件夹
│       ├── data.yaml       # 客户档案 + 命局推导 + 文案
│       ├── images/         # 客户的图（按 key 命名，没有就用占位符）
│       ├── output.html     # 生成的 HTML（可调试）
│       └── output.pdf      # 最终交付的 PDF
└── README.md
```

---

## 给新客户做命书的流程

### Step 1 复制模板，建客户档案

```bash
# 假设新客户：晓菁，1995-03-12 14:00
cp -r clients/主理人-19880808 clients/晓菁-19950312
```

### Step 2 改 `data.yaml`

打开 `clients/晓菁-19950312/data.yaml`，改三块：

1. **`meta`**：客户名 / 印章字 / 编号 / 书名色
2. **`bazi` + `colors` + `personality` + `lifestyle` + `wardrobe`**：根据 v2.0 调候法重新推导
3. **`ba_men` 中各场景的 `egg`、`is_best`、`pengyouquan`**：客户专属彩蛋（最关键的"懂我感"）

> ⚠️ 不要碰 `solar_terms` 和 `festivals.actions` 中的通用文案——它们是赛道 IP，全客户通用。
> 但 `festivals.color_text` 一定要换成"客户的本命色 + 节日色"的组合。

### Step 3 把图丢进 `images/`

按以下文件名规则命名（后缀 jpg/png/webp 都可以）：

| 文件名 | 内容 | 来源 |
|--------|------|------|
| `portrait` | 五行肖像（1 张大图） | Prompt 2 v2.0 跑出来 |
| `sheng` | 「生意兴隆」壁纸 | Prompt 5b · 生门 |
| `kai` | 「事业开拓」壁纸 | Prompt 5b · 开门 |
| `xiu` | 「深夜疗愈」壁纸 | Prompt 5b · 休门 |
| `shang` | 「勇敢出击」壁纸 | Prompt 5b · 伤门 |
| `du` | 「专注沉浸」壁纸 | Prompt 5b · 杜门 |
| `jing` | 「灵感表达」壁纸 | Prompt 5b · 景门 |
| `si_men` | 「断舍释怀」壁纸 | Prompt 5b · 死门 |
| `jing_men` | 「清明心安」壁纸 | Prompt 5b · 惊门 |
| `chuxi`、`chunjie`、`yuanxiao`、`duanwu`、`qixi`、`zhongqiu`、`chongyang` | 7 节日肖像 | Prompt 13 · 节庆肖像 |
| `lichun`、`yushui` …… `dahan` | 24 节气壁纸 | Prompt 13 · 节气壁纸（可选，标准档可不出） |

**任何缺失的图都不会让脚本崩溃**——会自动 fallback 到 CSS 渐变 + 大字占位符。

### Step 4 一键生成 PDF

```bash
python3 build.py 晓菁-19950312
```

- 输出：`clients/晓菁-19950312/output.pdf`
- 同时输出 `output.html`，可以直接在浏览器里打开调试样式（不是最终交付物）

---

## SKU 与页数对应

| SKU | 价格 | 应交付的图 | PDF 页数（约） |
|-----|------|----------|---------------|
| 八门款 | 299-499 | 8 张八门 + 1 张肖像 = 9 张 | 仅交付图，不出书 |
| 节庆肖像订阅 | 1999/年 | 31 张肖像（八门可不出） | 30 页 |
| 全套订阅 ⭐ | 2999/年 | 8 + 7 + 24 = 39 张 + 1 张肖像 | 38 页 |
| **高定订阅 ⭐⭐⭐** | **3999/年** | **同上 + 印刷装裱版纸质书** | **38 页 PDF + 印刷件** |

> v2.1.1 高定档**唯一的物理差异**：把 PDF 印成 A4 线装书 + 实木书函（找印刷厂，约 200-400 元成本）。

---

## 中式审美元素清单（已内置实现）

- ✅ 思源宋体（Noto Serif CJK SC）+ 文鼎宋（AR PL UMing CN）
- ✅ 朱砂印章（封面 / 章节扉页 / 序章 / 终章 / 尾页 多处）
- ✅ 回字纹分隔线（暖金，章节过渡处）
- ✅ 烫金细线（标题装饰，渐变效果）
- ✅ 宣纸肌理底纹（米白 #F5E6C8 + 噪点）
- ✅ 远山墨晕（章节扉页底部）
- ✅ 古籍式页码（壹/贰/叁/肆…）
- ✅ 古籍式编号（第一卷 · 第二卷）
- ✅ 整书贯穿客户本命色（封面 + 章节装饰 + 印章 全部用客户本命色）

---

## 客户姓名印章（生产建议）

当前印章用 `data.yaml` 的 `meta.client_seal_char` 字段（一个字）+ CSS 朱砂方块模拟。

**生产升级路径**（按精细度排序）：

1. **基础版**（当前）：CSS 方块 + 客户姓氏首字
2. **进阶版**：花瓣网搜「篆刻定制」→ 5-15 元/枚刻一枚客户姓氏阴文印 → 上传到 `images/seal.png` →
   修改模板里的 `.seal` 替换为 `<img>` 即可
3. **高定版**：实物印章（30-80 元/枚），随纸质书一起交付，是 3999 档的"实物礼物"

---

## 八字推导流程（手动 / 半自动）

当前 `data.yaml` 是**手动填写**的——你拿到客户八字后：

1. 用 Prompt 1 v2.0 + 任意 AI（Claude/Kimi/ChatGPT）推导出：
   - 四柱 / 日主 / 月令 / 调候用神
   - 命局类型一句话（如"秋水待暖 · 堤岸黄昏"）
   - 本命色 HEX × 2、辅色、避忌色
   - 5 个性格关键词
2. 把这些填进 `data.yaml`
3. 再用 Prompt 5b 跑出 8 张八门壁纸 + Prompt 2 v2.0 跑 1 张肖像
4. 再用 Prompt 13 跑节庆 + 节气图
5. 全丢进 `clients/客户ID/images/`
6. `python3 build.py 客户ID`

未来可以做的：写个 `推导.py` 脚本把"八字 → 调候用神 → 本命色"自动化。

---

## 重新生成（修改后预览）

```bash
python3 build.py 主理人-19880808

# 想看具体某页的预览缩略图：
pdftoppm -r 100 -jpeg clients/主理人-19880808/output.pdf clients/主理人-19880808/preview/p -f 14 -l 14
```

---

## 依赖

```bash
pip install jinja2 pyyaml weasyprint
# 系统包：pango cairo poppler-utils（macOS 用 brew，Linux 用 apt/dnf）
# 中文字体：google-noto-serif-cjk-sc-fonts (Amazon Linux) / fonts-noto-cjk (Debian) / brew tap homebrew/cask-fonts && brew install --cask font-noto-serif-cjk-sc (macOS)
```

---

## ⚠️ 内容合规底线

文档对外不出现：算命 / 看相 / 八字 / 用神 / 调候 / 命格 / 奇门 / 八门 / 死门 / 惊门
**一律包装成**：东方美学 / 命主画像 / 本命色 / 应景 / 八种生活场景

`data.yaml` 内部**可以**出现专业术语（不会被客户看到——它是工作文档）。
最终 PDF 里展示给客户的所有文字**必须**已包装。当前模板已严格遵守这条底线。
