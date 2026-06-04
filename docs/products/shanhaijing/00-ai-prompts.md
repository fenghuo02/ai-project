# 山海经神兽 · 国风潮玩文创 AI 提示词手册

> 对应《商业计划书 v1.6》§十七文创产品线。本套面向**毛绒小挂件 / 桌面摆件 / 盲盒潮玩**，对标当下爆款潮玩（Q 版盲盒、毛绒钥匙扣挂件、设计师玩具），融合《山海经》神兽与国风传统纹样。
>
> 合规（与项目铁律一致）：
> - **AIGC 标识**：本系列所有图样均为 **AI 辅助生成**，详情页与成品须标注「含 AI 生成」。
> - **无功效宣称**：神兽设定仅作**文化/美学/趣味**表达，**不得**宣称招财、辟邪、改运、护身、保平安等功效（广告法 + 封建迷信红线）。
> - **客户面表达**：围绕「山海经文化 IP / 国风潮玩 / 收藏」，不作占卜算命话术。
> - **知识产权**：《山海经》为公有领域古籍，但**具体造型设计**为本项目原创，须做版权/外观留痕；不得抄袭在售潮玩的具体角色形象。

---

## 一、爆款对标 & 风格拆解

| 爆款要素 | 借鉴点 | 我们的国风化 |
|---|---|---|
| Q 版盲盒（大头小身 1:1.3） | 萌系比例、圆润无攻击性 | 神兽萌化但保留神性特征 |
| 毛绒挂件/钥匙扣 | 软萌触感、可挂可抱 | 绒毛 + 流苏 / 中国结挂绳 |
| 设计师潮玩搪胶摆件 | 哑光质感、精致涂装 | 加入青铜纹 / 祥云 / 回纹 / 缠枝 |
| 系列化收藏 | 统一世界观、套系配色 | 「山海有灵」六神兽套系 |
| 柔光产品摄影 | 干净背景、电商主图感 | 国风色卡 + 浅景深棚拍 |

**国风色卡（统一调性）**：朱红 #C8313B · 黛蓝 #2E4A6B · 鎏金 #C9A24B · 月白 #F2EFE6 · 黛绿 #3A5A40 · 暮粉 #E9B7B0

---

## 二、共用风格提示词（Style Tokens，所有神兽通用）

**通用正向（中英对照）**

> 中文：Q 版萌系神兽潮玩，大头小身，圆润可爱，国风配色（朱红/黛蓝/鎏金/月白），柔和棚拍布光，干净背景，浅景深，高细节，盲盒收藏品质感，电商主图构图，居中，正面 3/4 视角。

> English: chibi cute Chinese mythical-beast designer toy, big head small body, rounded adorable proportions, traditional Chinese color palette (vermilion, indigo blue, gilt gold, moon white), soft studio lighting, clean seamless background, shallow depth of field, highly detailed, blind-box collectible quality, e-commerce hero shot, centered, front 3/4 view.

**两种品类追加词**

- 毛绒挂件版（plush pendant）：`soft plush toy texture, fuzzy felt fabric, embroidered details, with a tassel / Chinese knot lanyard, keychain ring, squishy, huggable, product photo on light gradient background`
- 桌面摆件版（desktop figurine）：`matte vinyl/resin designer figurine, smooth painted finish, standing on a small base with carved cloud (祥云) pattern, collectible statue, soft top light, subtle reflections`

**通用负面词（Negative）**

> low quality, blurry, extra limbs, deformed, scary, horror, gore, realistic human face, text watermark, logo, copyrighted character, brand mark, oversaturated, messy background, nsfw

---

## 三、六神兽逐个提示词（「山海有灵」套系）

> 每个神兽给出：定位 → 关键造型 → 配色 → 毛绒/摆件提示词。所有「神性」只作造型趣味，不写功效。

### 1. 白泽 Báizé — 知物灵兽
- 定位：博学温和的瑞兽（萌化为「什么都懂的小老师」）。
- 关键造型：白色狮羊身、卷曲鬃毛、一对金角、身上点缀几颗温柔的小眼睛纹样、表情和善。
- 配色：月白 + 鎏金 + 一抹黛蓝火焰鬃毛。
- 提示词（核心）：`chibi auspicious "Baize" beast, fluffy white lion-goat body, curly mane with soft cyan flame tips, two small golden horns, a few gentle decorative eye-patterns on shoulders, kind smiling face, white + gold + indigo accents` + 共用风格 + 品类词。

### 2. 九尾狐 Jiǔwěihú — 灵狐
- 定位：优雅灵动的九尾狐（萌系）。
- 关键造型：蓬松白/浅粉狐狸，九条蓬松大尾巴呈扇形展开，尾尖鎏金，额心小花钿。
- 配色：月白—暮粉 + 朱红鎏金点缀。
- 提示词：`chibi nine-tailed fox, fluffy white-and-peach fur, nine big fan-spread fluffy tails with gilt-gold tips, tiny red floral mark on forehead, elegant cute expression, pink-white + red-gold accents` + 共用 + 品类。

### 3. 饕餮 Tāotiè — 馋馋
- 定位：憨吃可爱的青铜神兽（反差萌）。
- 关键造型：圆滚滚身体，大嘴笑脸（不凶），身覆商周青铜饕餮纹，怀里抱一只小点心/铜鼎。
- 配色：青铜绿 + 鎏金 + 朱红舌尖。
- 提示词：`chibi chubby "Taotie" beast, round belly, big happy mouth (not scary), body covered with bronze-ware taotie patterns (Shang dynasty motif), hugging a tiny bronze food vessel, bronze-green + gold + vermilion` + 共用 + 品类。

### 4. 毕方 Bìfāng — 火羽
- 定位：独脚火焰神鸟（灵动）。
- 关键造型：红橙色仙鹤状鸟，羽毛带火焰纹，单腿独立，白面红喙，尾羽如火苗。
- 配色：朱红—橙 火焰渐变 + 月白脸。
- 提示词：`chibi one-legged fire bird "Bifang", red-orange crane-like body, flame-shaped feathers, single leg standing, white face red beak, tail like gentle flames, vermilion-orange gradient + moon white` + 共用 + 品类。

### 5. 烛龙 Zhúlóng — 昼夜龙
- 定位：掌昼夜的红龙（萌长条）。
- 关键造型：圆萌长身小龙，朱红鳞片，额顶小蜡烛/光珠，身侧半日半月纹样，云气缭绕。
- 配色：朱红 + 鎏金 + 黛蓝夜空点缀。
- 提示词：`chibi long noodle dragon "Zhulong", crimson scales, a small glowing candle/orb on forehead, half-sun half-moon motif along body, swirling auspicious clouds (祥云), crimson + gold + indigo night accents` + 共用 + 品类。

### 6. 当康 Dāngkāng — 丰岁
- 定位：报丰收的吉祥小猪（最萌带货款）。
- 关键造型：胖嘟嘟小猪，小獠牙（圆钝不凶），口衔/身绕麦穗稻穗，笑眼。
- 配色：暖棕 + 鎏金麦穗 + 月白肚皮。
- 提示词：`chibi lucky boar "Dangkang", plump round piglet, tiny rounded tusks (cute not fierce), wheat/rice ears wrapped around, smiling eyes, warm brown + gilt-gold grain + moon-white belly` + 共用 + 品类。

---

## 四、套系合影 / 系列主图提示词

> `six chibi Chinese mythical beasts collection lineup ("Shanhaijing spirits"), Baize, nine-tailed fox, Taotie, Bifang, Zhulong, Dangkang, consistent designer-toy style, traditional Chinese color palette, soft studio lighting, clean background, blind-box series hero shot` + 通用负面。

---

## 五、生成与落地说明

1. 本手册配套已生成示意图，见同目录 `images/`，文件名 `shanhaijing-<拼音>.png`。
2. 量产前：选定终稿 → 交手办/毛绒打样厂出 3D/打样 → 校色与安全测试（毛绒须符合玩具安全，见产品线文档）。
3. 所有上架素材标注「含 AI 生成」；文案不得出现功效宣称。
