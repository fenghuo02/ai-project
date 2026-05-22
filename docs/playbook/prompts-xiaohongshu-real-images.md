# 真人感小红书 9 宫格图像 · AI 提示词 v1.0

> **版本**：v1.0
> **创建**：2026-05-20
> **配套**：`prompts-xiaohongshu-real-voice.md`（文字提示词 v1.0）
> **触发原因**：原 `04-wechat-image-prompts.md` 公众号配图风格（新中式静物画 / 矿物颜料 / 极致留白）经实测，**首图就被朱雀 AIGC 检测识别为 AI 生成 → 限流**。
>
> 真人感图像不是"做得漂亮"，是"主动注入瑕疵"。
>
> **本文档专门服务于小红书自媒体内容**。公众号长文配图仍可用 `04-wechat-image-prompts.md`。

---

## 适配的 AI 工具

| 工具 | 推荐度 | 中文 prompt | 英文 prompt | 备注 |
|---|---|---|---|---|
| **GPT-Image-2 / DALL-E 3** | ⭐⭐⭐⭐⭐ | 一般 | **强** | 主推。本文 prompt 全部英文版 |
| **即梦** | ⭐⭐⭐⭐ | 强 | 一般 | 国内可用，中文友好。把英文 prompt 翻译后用 |
| **通义万相** | ⭐⭐⭐ | 强 | 中 | 备选 |
| **Nano Banana Pro / Midjourney** | ⭐⭐⭐⭐ | 弱 | 强 | 与 GPT-Image-2 同级，需要英文 |

> **首选 GPT-Image-2**（OpenAI gpt-image-2 模型），实测真人感强于即梦。
> 主理人已在图 1 实测 8 分以上 → 验证英文 prompt 路线。

---

## 一、5 条铁律（每张人物 / 物件图必塞前 4 条）

```
1. amateur smartphone selfie / amateur smartphone photography
   （业余手机摄影 · 不是专业摄影棚）

2. mixed color temperature lighting, slightly unflattering
   （混合色温 · 不讨好）

3. realistic skin texture, no beauty filter, visible pores
   （真实皮肤 · 无美颜 · 可见毛孔）

4. slight motion blur / slightly imperfect framing
   （轻微运动模糊 · 构图略歪）

5. visible smudges / fingerprints / casual mess
   （污渍 · 指纹 · 自然杂乱）— 镜面 / 屏幕图必塞
```

**为什么这 5 条**：GPT-Image-2 默认生成"杂志硬照感"（光线完美 / 构图工整 / 肤色顺滑），这恰恰是朱雀 AIGC 检测判定 AI 图的核心特征。这 5 条是**唯一能突破"AI 美学惯性"的杠杆**。

---

## 二、9 宫格整体骨架

| 位 | 角色 | 类型 | 真人感关键 |
|---|---|---|---|
| **1 主封面** ⭐ | 试衣间镜子前自拍（手机挡脸 · 穿"被吐槽的灰绿色"）| AI 生图 | 试衣间灯光偏黄 / 手机闪光灯反射 / 镜面有小污渍 |
| 2 | 衣柜俯拍（满柜子灰绿色 · "全是妈妈色"）| AI 生图 | 衣架挂歪 / 颜色泛着同色系 |
| 3 | 微信对话截图（老公那句话）| **醒图自制** | 真实手机壳 + 真实 iOS 界面截图模板 |
| 4 | 小红书搜索框（搜"30 岁穿什么色显白"）| **醒图自制** | 同上 |
| 5 | 翻到 19 色色谱（手机拍屏幕 · 角度倾斜）| AI 生图 | 屏幕反光 / 角度歪 / 桌面木纹 |
| 6 | 嫩绿亚麻衫平铺 + ¥189 收据 | AI 生图 | 收据折痕 / 自然光 |
| 7 | 换装后试衣间自拍（同镜子 · 不同衣服）| AI 生图 | 与图 1 同场景 |
| 8 | 引流卡（"5 月生评论区集合"）| **醒图自制** | 朱砂方印 + 极简 |
| 9 | 落款 + 一句话 | **醒图自制** | 文字版 |

> ⚠️ **5 张 AI 生图 + 4 张醒图自制**——醒图自制的部分千万别让 AI 做（截图、引流卡、落款这种 AI 一做就露馅，醒图 5 分钟搞定还更真）。

---

## 三、5 张 AI 图完整 Prompt（直接复制到 GPT-Image-2）

### 图 1 · 主封面 ⭐ 试衣间镜子前自拍（手机挡脸）

**实测主理人验证 8 分以上 → baseline 通过。**

```
A casual amateur smartphone mirror selfie taken in a small Chinese mall fitting room, vertical 4:5 portrait orientation.

Subject: an Asian woman in her early 30s, mid-length wavy hair, standing with her back partially toward the camera, facing the mirror. She holds a black smartphone in front of her face to take the selfie, so her face is mostly hidden behind the phone. Only her chin, jawline and ears are slightly visible. She wears a loose, slightly oversized grey-green linen blouse (Pantone roughly #8FA084, dusty muted green-grey, the kind of color that reads "matronly" or "auntie aesthetic"), paired with cream wide-leg trousers.

Setting: a typical Chinese shopping mall fitting room. Beige walls. A full-length mirror with a thin black metal frame. Mirror surface has a few faint smudges and a single fingerprint near the bottom corner. Behind her, on a hook on the wall, hang two more garments in similar dusty green-grey tones (subtle hint that "her whole wardrobe is this color"). On the floor, a pair of casually kicked-off white sneakers, one tilted slightly.

Lighting: harsh, mixed temperature. Overhead warm yellow LED (around 3000K) creates a slight glow on top of her head and shoulders. A second cooler white light from the side creates uneven shadows. The phone's flash is ON, creating a small blown-out highlight on her chest area and the mirror. Color temperature is inconsistent and slightly unflattering — this is intentional, not a beauty shot.

Photographic style: casual unstaged amateur iPhone selfie, NOT professional fashion photography, NOT magazine cover. Slight motion blur on her arm. Slightly imperfect framing — her body is not perfectly centered, leaning a little to the right. Realistic skin texture with visible pores, slight blemishes. No heavy beauty filter, no skin smoothing, no idealized proportions.

Mood: she looks slightly self-conscious, mid-action, like she just glanced down at her outfit and isn't sure about it. There's a quiet "something feels off" energy.

Critical specifications:
- vertical 4:5 aspect ratio (1080×1350 pixels)
- the woman's face MUST be hidden behind the phone (only chin and ears visible)
- realistic, casual, unposed
- color of her shirt MUST be dusty grey-green, the unflattering "auntie color"
- visible mirror smudges, slight reflection of overhead light
- Chinese mall fitting room aesthetic (NOT a luxury boutique, NOT a home walk-in closet)

Avoid: glamour photography, studio lighting, perfect symmetry, polished skin, model poses, over-styled hair, fashion magazine framing, dramatic shadows, beauty retouching.
```

**关键参数（要改时改这里）**：
| 参数 | 默认 | 可调 |
|---|---|---|
| 年龄 | early 30s | 28 / 35 / mid-30s |
| 发型 | mid-length wavy hair | short bob / long straight / ponytail |
| 衣服色 HEX | `#8FA084` | `#7C8B7A`（更脏）/ `#85907E` |
| 场景 | mall fitting room | home full-length mirror / friend's apartment |
| 闪光灯 | ON | OFF（更日常）|

**失败应急**：
- 脸露出来了 → 加 `the phone MUST completely cover her nose and eyes, only mouth and chin barely visible`
- 衣服太鲜艳 → HEX 换成 `#7C8B7A`
- 像专业棚拍 → 把 `Chinese mall fitting room` 改成 `cramped narrow Chinese fitting room with poor lighting`

---

### 图 2 · 衣柜俯拍（"全是妈妈色"反差证据）

```
A casual amateur smartphone overhead shot of an open Chinese apartment closet, vertical 4:5 portrait orientation.

Subject: a small to medium-sized open wardrobe seen from above and slightly to the side, hanging rod visible. Approximately 12-15 garments hanging on plain white plastic hangers, ALL in similar dusty grey-green and muted earth tones (variations of #8FA084, #9CA39A, #A8AB9D, #B0AB94 — the "auntie wardrobe" palette). Mix of linen blouses, cardigans, and a long sleeve tee, all loose-fit silhouettes. NO bright colors, NO black, NO white — purely a monochromatic dusty green-grey-beige spectrum, intentionally monotonous to convey "her whole closet is one color".

Details that signal real life:
- One hanger slightly askew, garment hanging crooked
- One blouse has a small visible wrinkle on the shoulder
- A folded scarf in the same dusty tone tucked on top of the rod
- A pair of beige flats kicked on the closet floor
- Dust particles faintly visible in the air (caught by sunlight)
- A wooden hanger mixed in among plastic ones (just one)

Setting: typical small Chinese apartment bedroom closet, white melamine board interior, simple matte finish, slight scuff marks near the bottom of the back panel.

Lighting: natural afternoon sunlight from a window outside the frame, casting soft directional light from upper right. Slight overexposure on the right edge of one garment. The rest is in soft shadow. Color temperature warm (around 4000K).

Photographic style: casual amateur iPhone shot taken by someone standing in front of their closet, looking down at a slight angle. NOT styled. NOT a magazine wardrobe spread. NOT a Pinterest aesthetic shot.

Critical specifications:
- vertical 4:5 aspect ratio (1080×1350 pixels)
- ALL garments must be in dusty muted green-grey-beige range, no exceptions
- realistic apartment closet, NOT a walk-in luxury closet
- subtle imperfections (one askew hanger, one wrinkled garment)
- slightly grainy / not perfectly sharp

Avoid: styled wardrobe shots, Pinterest aesthetic, fashion editorial, perfect color coordination, luxury closet, walk-in dressing room, model styled wardrobe.
```

**关键**：颜色统一感 + 1 件挂歪 = 一眼传达"整柜都是这种色"的视觉证据。

**失败应急**：
- 颜色太多样 → 加 `MUST be visually monotonous, like a single color study`
- 像精品店 → 改成 `cluttered IKEA-style apartment closet`

---

### 图 5 · 手机拍电脑屏幕（"她真的在搜资料"）

```
A casual amateur smartphone photo of a laptop screen, taken at a slight angle from above, vertical 4:5 portrait orientation.

Subject: a 13-inch laptop sitting on a wooden desk. The screen shows what appears to be a color palette reference page — multiple horizontal bands of color swatches in muted tones (dusty greens, candle gold, dusty rose, soft beiges) with hex codes faintly visible but not perfectly legible. Layout looks like an aesthetic mood board or a color reference document, NOT a screenshot of an app interface.

Real-life details:
- Screen has a subtle reflection of the room overhead light, creating a slight glare on the upper portion
- A faint smudge / fingerprint visible near the bottom right of the screen
- The angle is slightly tilted (the photo is not perfectly square to the screen)
- Edge of a coffee mug visible in the lower left corner of the frame (warm beige ceramic, half-full of black coffee)
- A pen and a folded piece of paper visible in the lower right
- A few crumbs near the keyboard

Setting: a home office desk, walnut wood surface, natural light from a window outside the frame.

Lighting: warm afternoon natural light from upper left, creating soft shadows. The laptop screen itself is the brightest element. Slight overexposure on the screen reflection.

Photographic style: amateur smartphone shot, the kind someone takes when they want to share what they're looking at. NOT a product photo. NOT a stylized desk flatlay.

Critical specifications:
- vertical 4:5 aspect ratio (1080×1350 pixels)
- the laptop screen content should be a color palette / mood board (not specific app UI)
- visible screen glare and fingerprint smudges
- slight angle distortion (not square-on)
- coffee mug and small desk clutter visible

Avoid: clean desk flatlay, perfectly composed product shot, professional studio lighting, sharp app UI screenshots, Pinterest desk aesthetic.
```

**关键**：屏幕反光 + 咖啡杯入框 = "她正在认真研究"的真实感。

---

### 图 6 · 嫩绿亚麻衫 + ¥189 收据（故事的物证）

```
A casual amateur smartphone overhead shot of a single piece of clothing laid flat on a wooden floor with a small receipt next to it, vertical 4:5 portrait orientation.

Subject: a fresh sage-green linen shirt (color around #8FB573, the kind of green that looks alive and youthful, NOT the dusty matronly green from the closet shot) laid flat with deliberate but slightly imperfect smoothing. Loose silhouette, V-neckline, mid-length sleeves. Some natural wrinkles still visible at the shoulder seams and hem.

Next to the shirt (lower right):
- A small printed paper receipt, slightly folded with one crease, showing "¥189.00" as the largest visible number, with smaller text above and below that's mostly illegible due to print quality. Receipt paper has the slight thermal-print yellowish tint.
- A pair of cream colored cotton wide-leg trousers folded loosely beside the shirt (just barely in frame on the left edge)

Setting: a Chinese apartment wooden floor (oak or similar warm walnut tone). Visible wood grain. A single dust particle or fiber visible on the floor.

Lighting: warm late afternoon natural light streaming in from a window outside the frame, casting a soft directional shadow from the upper right. The light is not perfectly even — the right side of the shirt is slightly brighter, the left in soft shadow. Color temperature around 3500K, slightly warm.

Photographic style: amateur iPhone overhead shot, the kind someone takes when they unbox a new clothing purchase and want to remember it. Slightly tilted angle (NOT perfectly square overhead). Mild handheld camera shake. NOT a fashion editorial flatlay. NOT styled product photography.

Critical specifications:
- vertical 4:5 aspect ratio (1080×1350 pixels)
- the shirt color must be vibrant fresh sage-green #8FB573, clearly different from "dusty matronly green"
- receipt MUST be visible with "¥189.00" clearly readable
- visible wood grain on floor
- naturally wrinkled, NOT pressed flat

Avoid: stylized flatlay, perfectly pressed clothing, fashion magazine aesthetic, professional studio lighting, clean white seamless background, Pinterest styling.
```

**关键**：¥189 收据是故事的物证 + 嫩绿色必须**明显不同**于图 1/图 2 的"妈妈灰绿"——这是反差视觉证据。

---

### 图 7 · 换装后自拍（与图 1 同场景对照）

```
A casual amateur smartphone mirror selfie taken in the SAME small Chinese mall fitting room as in the previous image, vertical 4:5 portrait orientation.

Subject: an Asian woman in her early 30s, mid-length wavy hair (same hairstyle and skin tone as in the previous fitting room shot), holding a black smartphone in front of her face to take a mirror selfie. Her face is mostly hidden behind the phone, only chin and ears slightly visible. She wears a fresh sage-green linen blouse (#8FB573, the same vibrant green as the laid-flat shirt), paired with cream wide-leg trousers.

Body language difference from the previous fitting room shot:
- She is standing slightly more upright, shoulders more relaxed
- Slight tilt of her head suggesting quiet satisfaction
- One hand subtly pulling at the hem of the blouse, like she just settled into it
- Subtle "this might actually be it" energy, NOT exaggerated triumph

Setting: same fitting room as before — beige walls, full-length mirror with thin black frame, the same hooks on the wall behind her. The hooks now hold the previous grey-green blouse from the earlier shot, hanging loosely as if she just took it off. Same kicked-off white sneakers on the floor.

Lighting: same harsh mixed-temperature lighting as before (overhead warm yellow + cool side white), but now the sage-green of her shirt catches the light better and looks more flattering. Phone flash still ON, creating a small highlight.

Photographic style: same casual amateur iPhone selfie style as the previous fitting room shot. Slight motion blur. Slightly imperfect framing. Realistic skin texture with visible pores. No beauty filter.

Continuity requirements (CRITICAL):
- Same woman, same hairstyle, same skin tone as the previous fitting room image
- Same fitting room, same mirror, same phone
- Phone MUST cover her face (only chin and ears visible)
- The previous grey-green blouse from the first image now hangs visibly on the wall hook behind her (story continuity)

Critical specifications:
- vertical 4:5 aspect ratio (1080×1350 pixels)
- shirt color #8FB573 fresh sage-green, clearly different from the "matronly grey-green"
- subtle "before/after" body language shift, NOT dramatic
- realistic, casual, unstaged

Avoid: dramatic transformation pose, runway model stance, big smile, glamour shot, magazine cover styling, perfect lighting, idealized proportions.
```

**关键**：和图 1 形成"沉默的对比"——同一面镜子、同一个手机、同一个人，只换了衣服。

> ⚠️ **跨图人物一致性**：
> GPT-Image-2 跨次生成"同一个人"成功率约 60%。如果跑出来发型/肤色不一致：
> - **方法 A**：用 OpenAI 的 `image-edit` 模式，把图 1 作为 reference 图传入，效果最稳
> - **方法 B**：图 7 改为"局部特写 + 镜子里嫩绿衣服一角 + 手机+前臂入框"，故意藏掉人物全貌，故事感反而更含蓄

---

## 四、4 张醒图自制（5 分钟搞定，不用 AI）

### 图 3 · 微信对话截图（老公的吐槽）

```
工具：醒图 / 美图秀秀 → 选 "iOS 微信对话" 模板
内容：
  对方头像：男性卡通头像（醒图自带库选 "西装男")
  对方名称：老公（或他的真实昵称用首字母 + ❤）
  时间戳：上周三 19:42

  对话气泡内容：
  老公：你今天怎么穿的有点像妈妈级别
  我：啊？
  我：哪有
  老公：就那个色 灰扑扑的
  老公：不像你
  我：[3 秒后] ......

  [屏幕底部输入框留空，光标闪烁]

文字叠加：
  右上角小字 "上周三 19:42"
  顶部叠 1 行红色小字 "懵了一整晚"
```

### 图 4 · 小红书搜索框

```
工具：醒图 → 选 "小红书 App 截图" 模板
内容：
  顶部搜索框：30岁穿什么色显白
  搜索框下方推荐词列表：
  - 30岁穿搭显白
  - 显白色谱 本命色
  - 灰绿色显土吗
  - 30岁衣柜整理
  - 妈妈级别色
  - 本命色测试 5月生
  - 高级感不是贵

  [推荐词最后一个用红色加粗 "本命色测试 5月生"]
```

### 图 8 · 引流卡（"5 月生姐妹评论区集合"）

```
工具：醒图 → 米白底 (#FAF7F2)
布局（4:5 竖版）：

  上 1/4：
    手写感字体（叶根友 / 站酷酷黑）
    "5 月生的姐妹"（深绿 #2D5F3F · 32pt）
    "评论区集合"（朱砂 #C0392B · 28pt）

  中 2/4：
    3 个色谱方块横排：
    [嫩绿 #8FB573]  [烛光金 #D4AF37]  [朱砂 #C0392B]
    每色块下方小字：嫩绿 / 烛光金 / 朱砂

    下方 2 行：
    "测了告诉我"（米白底深绿字 18pt）
    "你的本命色对了吗"（同上）

  下 1/4：
    朱砂方印「渝山」（居中）
    印章下方：公众号回 "本命色" 给一份 38 页色谱 PDF
```

### 图 9 · 落款（最后一张 · 收尾）

```
工具：醒图 → 米白底
内容：

  纯文字版（极简）：
  "我们不下结论
   也不做预测

   只陪你
   穿对你自己的色"

   ——渝山
   2026 · 5 月

  字体：站酷小薇 / 思源宋体
  字号：标题 24pt · 落款 16pt
  颜色：深墨青 #2C3E50

  右下：朱砂方印「渝山」(20×20mm)
```

---

## 五、出图后的关键处理（醒图 30 秒 / 张）

```
1. 整体降低 5% 饱和度（让色变"哑"）
2. 加一点点暖色滤镜（模拟手机原相机）
3. 右下叠 "AI 辅助创作 · AIGC" 10pt 米白半透明
4. 不要加边框 / 不要叠大字标题（小红书爆款 cover 越素越真）
5. 整体加 2% 噪点（看起来更像手机拍的）
```

> ⚠️ **5 张 AI 图必须全部叠 AIGC 标识**（合规底线，参 `.kiro/steering/05-image-pipeline.md`）。
> 4 张醒图自制可不叠（不是 AI 生成）。

---

## 六、批量生产 SOP（9 张图 / 2.5 小时完成）

```
[ ] Day 1 上午（90 分钟）：跑 5 张 AI 图（图 1、2、5、6、7）
    工具：GPT-Image-2 / DALL-E 3 / 即梦
    每张挑 3 个变体里最像真人的
    图 7 注意跨次人物一致性（用 image-edit 或局部特写降级）

[ ] Day 1 下午（30 分钟）：醒图后期处理 5 张 AI 图
    - 全部降低 5% 饱和度
    - 加暖色滤镜
    - 右下叠 AIGC 标识
    - 加 2% 噪点

[ ] Day 1 晚（30 分钟）：醒图自制 4 张（图 3、4、8、9）

[ ] Day 2 上午（15 分钟）：拼 9 宫格 + 校对顺序
    顺序：1 主封面 → 2 衣柜 → 3 微信 → 4 小红书搜索 →
         5 笔记本 → 6 衣服 + 收据 → 7 换装后 → 8 引流卡 → 9 落款

[ ] Day 2 14:00：发布
```

---

## 七、真人感失败应急（朱雀 AI 率仍超标怎么办）

发出去前可以先用第三方"朱雀 AIGC 检测"工具自查：

| AI 率 | 状态 | 应急 |
|---|---|---|
| < 15% | ✅ 安全 | 直接发 |
| 15-30% | ⚠️ 临界 | 再加 1-2 处口语错别字 / 替换 1 张 AI 图为手机实拍 |
| > 30% | ❗ 限流红线 | 删除最 AI 味的 1-2 段 + 把图 1 / 图 7 换成手机拍局部特写 / 第 5 句改成更碎的口语 |

**降 AI 率应急话术（可立即替换原文段落）**：
- "这件衣服是我自己挑的" → "这件 我自己挑的"
- "我以为很高级感" → "我以为 这件够高级"
- "你今天怎么有点没精神" → "你今天 怎么没什么精神"

---

## 八、与 v1.1 旧图风格的关键差异（不要混用）

| 维度 | v1.1 公众号配图（04-wechat-image-prompts.md）| v1.0 真人感（本文档）|
|---|---|---|
| 风格 | 中国新中式东方美学 / 水墨意境 / 宋画工笔感 | amateur smartphone selfie / unstaged |
| 颜色 | 矿物颜料颗粒质感 / 极致留白 | mixed temperature / unflattering / casual |
| 构图 | 严格符合黄金比 / 对称留白 | slightly imperfect framing / motion blur |
| 人物 | 无人物（节气壁纸不出人脸）| 有人物但**手机挡脸**（品牌人格 IP 保护）|
| 调性参考 | 观夏 / 闻献 / 故宫文创 / Kinfolk 杂志 | 闺蜜随手发的朋友圈截图 |
| 适用场景 | 公众号长文配图 / 节气壁纸 / 命主画像 | **小红书 9 宫格 only** |

> ❌ 不要把 v1.1 风格的图用在小红书。
> ❌ 不要把 v1.0 风格的图用在公众号长文（公众号要的是品调，小红书要的是真实）。

---

## 九、合规底线（沿用 .kiro/steering/05-image-pipeline.md）

| 维度 | 红线 |
|---|---|
| 客户照片 | 仅做背景替换（face-swap 死线，参 §三） |
| 节气壁纸 | 全 AI 生成 / 无人物（参 §五）|
| **小红书人物图（本文档新增）** | **AI 生成虚构主理人 IP / 必须手机挡脸 / 必叠 AIGC 标识 ≥ 10pt** |
| AIGC 标识 | 5 张 AI 图右下角叠 ≥ 10pt（4 张醒图自制可不叠）|

> **新增红线**：本文档定义的"主理人 IP 虚构形象"**必须手机挡脸**，避免与未来线下真人主理人形象冲突，也避免肖像权纠纷。

---

## 十、版本历史

| 版本 | 日期 | 改动 |
|---|---|---|
| v1.0 | 2026-05-20 | 初版 · 基于主理人图 1 实测 8 分以上验证 · 包含 5 张 AI prompt + 4 张醒图自制规格 + 5 条铁律 + 跨图一致性方案 |

---

## 十一、未来 v2.0 升级方向

- **v2.0**：增加"短视频真人感分镜 prompt"（视频号 / 抖音 / B 站）
- **v3.0**：增加"主理人 IP 形象一致性 LoRA 训练方案"（用 5-10 张实拍图微调，跨次生成稳定保持同一人）
- **v4.0**：增加 UGC 二创模板（读者投稿 → 主理人精选 → 二次内容生产）
