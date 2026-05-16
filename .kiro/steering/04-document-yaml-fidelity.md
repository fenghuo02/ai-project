---
inclusion: always
---

# 文档忠于 YAML：避免凭印象写

> **背景**：渝山东方美学项目的文档体系里，`swatch-builder/palette/colors.yaml` 是 19 色色谱的单一真相来源。但文档里凭印象写的字段会和 yaml 慢慢漂移，造成客户拿到的 PDF 里的色名和实物色卡对不上。

---

## 一、漂移案例（真实踩坑）

### 「桂金 vs 烛光金」事件（PR D 修复）

`swatch-builder/palette/colors.yaml` 的 calendar 字段：

```yaml
calendar:
  - month: "1月"
    color_id: "zhuguangjin"
    label: "烛光金 · 旧年余温"
  - month: "9月"
    color_id: "zhuguangjin"           ← 同一个 color_id
    label: "桂金 · 秋分丹桂"          ← 但 9 月叫"桂金"，不叫"烛光金"
```

**为什么这样设计**：同一个 HEX 在不同节气有不同的应景叫法。1 月叫"烛光金"（旧年余温），9 月叫"桂金"（秋分丹桂）—— 这是东方传统色彩文化的一部分，不是 yaml 的 bug。

**实际错误**：在 PR D 写 lead-magnet 大纲时，9 月那行写成了「烛光金 · 秋分丹桂」（凭印象，因为 color_id 是 zhuguangjin）。

**修复**：改成「桂金 · 秋分丹桂」+ 加注释「（即烛光金 · 秋分应景叫法）」。

> 这一处错误在 commit 前的 HEX 一致性扫描中**没**被发现（HEX 是对的），是发布前手动对照 yaml 才发现的。

---

## 二、忠于 YAML 的实操规则

### 规则 1：**poem 字段直抄，不二次创作**

```yaml
- id: zhusha
  poem: "冬至清晨，第一缕阳光投在朱漆门上的颜色。"
```

文档里写 PDF 大纲 / 笔记 / 公众号文章引用这首 poem 时：

```markdown
✅ 「冬至清晨 / 第一缕阳光 / 投在朱漆门上」
   （直接抄 colors.yaml.zhusha.poem，分行展示）

❌ 「冬至清晨，朱漆门上的第一道光」
   （凭印象改写，会漂移）
```

### 规则 2：**应景节气从 appears_in 字段取**

```yaml
- id: zhusha
  appears_in:
    - "丁火日主基础色"
    - "灵感门"
    - "除夕 / 春节 / 端午"
    - "12 月色卡"
```

写客户面文档的「应景」字段时：
- ✅ 从 `appears_in` 里筛**节气项**（"除夕 / 春节 / 端午" / "12 月色卡"）
- ❌ **不**写「丁火日主基础色」「灵感门」（这些是内部字段，含禁词）

### 规则 3：**矿物配方逐字抄 mineral_recipe**

```yaml
mineral_recipe:
  main: "辰州朱砂粉 70%"
  additive: "蛤粉 5%"
  binder: "阿拉伯胶 25%"
  note: "辰州砂是国家地理标志，¥40/g"
```

文档里写矿物配方时：

```markdown
✅ 主矿：辰州朱砂粉 70%
   辅料：蛤粉 5%
   媒介：阿拉伯胶 25%
   注：辰州砂是国家地理标志，¥40/g
```

不要把"辰州朱砂粉 70%"改写成"国家地标朱砂粉 7 成"—— 凭感觉的"优化"会破坏后续 CI 校验。

### 规则 4：**HEX / Pantone 严格逐字一致**

| yaml | 文档 |
|------|------|
| `hex: "#C0392B"` | `#C0392B`（注意大写）|
| `pantone_match: "PMS 7621 C"` | `PMS 7621 C`（注意空格）|

不要改大小写，不要改空格。CI 的 `tools/check_palette_consistency.py` 是字符串严格比对。

---

## 三、避免漂移的开发习惯

### 写客户面文档时

1. **打开两个窗口**：左边 `colors.yaml`，右边在写的 markdown
2. **每个色字段写完前**，手动对照 yaml 一次
3. **commit 前**跑 HEX 扫描：
   ```bash
   for hex in "#FAF7F2" "#C9A66B" "#2C3E50" "#C0392B" "#D4AF37"; do
     count=$(grep -c -i "$hex" <my-file>)
     echo "$hex: $count 次"
   done
   ```

### 长期方案：程序生成

最好的防漂移办法是**让文档从 yaml 生成**，不是手抄：

```
swatch-builder/palette/colors.yaml （母本）
        ↓
        ↓ jinja2 模板渲染
        ↓
docs/playbook/lead-magnet-output.pdf
docs/playbook/swatch-output.pdf
mingshu-builder/output.pdf
```

当前已实现：
- ✅ swatch-builder（4 档色卡 PDF）
- ✅ mingshu-builder v2.1.2（命书 PDF 附录·二）

未实现（计划中）：
- ⏳ lead-magnet PDF（钩子）→ 见 [`docs/playbook/lead-magnet-19-colors.md`](../../docs/playbook/lead-magnet-19-colors.md) §八，建议做成 PR E
- ⏳ covers/*.html（5 个视觉模板）→ HEX 写死在 CSS 里，每次改 yaml 都要手动同步

> 长期目标：所有 19 色相关产品都从 yaml 程序生成，手动同步项归零。

---

## 四、CI 安全网

`tools/check_palette_consistency.py` 已经做了：
- ✅ 校验 `colors.yaml` 与 `docs/business-plan-chongqing-yixue-photo.md §5.2.1` 表格一致

未做：
- ⏳ 不校验 covers/*.html 里的 HEX
- ⏳ 不校验 docs/playbook/*.md 里的 HEX

> 如果某次改了 yaml 的 HEX，CI 会拦住业务计划书的不一致，但**不会**拦住 covers / playbook 的不一致。这是已知缺口，建议改 yaml 时手动跑 §三 的 HEX 扫描脚本检查所有引用方。

---

## 五、参考资料

- 单一真相来源：[`swatch-builder/palette/colors.yaml`](../../swatch-builder/palette/colors.yaml)
- CI 校验脚本：[`tools/check_palette_consistency.py`](../../tools/check_palette_consistency.py)
- 程序生成最佳实践：[`mingshu-builder/build.py`](../../mingshu-builder/build.py) v2.1.2 引入的 `_load_palette()` 函数
