# Visual Assets · 视觉资产源文件

> 配套文档：[../visual-identity.md](../visual-identity.md)
> 状态：v1.0 · 2026-05-30

这个目录是所有视觉资产的 **source of truth**。`.html` 文件用浏览器渲染 + 截图导出 PNG，`.svg` 文件直接用作头像或导出 PNG。

## 文件清单

| 文件 | 用途 | 输出尺寸 |
|---|---|---|
| `header.html` | X profile header | 1500×500 PNG |
| `avatar.svg` | X profile pic / 通用头像 | 400×400 PNG |
| `template-quote-overlay.html` | E5-a 媒体引用 + 观点叠加 | 1600×900 PNG |
| `template-comparison-table.html` | E5-b 横向对比表 | 1200×900 PNG |
| `template-timeline.html` | E5-c 时间线 / 日历 | 1080×1350 PNG |
| `template-decoder-frame.html` | Series 招牌封面（Monday Map / Sunday Long Read 等） | 1600×900 PNG |

## 渲染流程（30 秒搞定）

1. 用 Chrome 双击打开 `.html` 文件
2. F12 → device toolbar（Ctrl+Shift+M / Cmd+Shift+M）
3. 顶部输入指定尺寸（见上表）
4. DevTools 三点菜单 → `Capture full size screenshot`
5. PNG 自动下载到 `~/Downloads/`

## 命名规范（导出 PNG 后）

```
output/
├── header-week22.png                              ← 每周更新一次
├── avatar.png                                     ← 一次性，几乎不动
├── quote-overlay-2026-06-01-anthropic.png         ← 用 1 次扔 1 次
├── comparison-2026-06-03-AI-race.png
├── timeline-2026-06-15-30days.png
└── decoder-monday-week22.png                      ← 每周一更新
```

`output/` 进 `.gitignore`，源文件 `.html` / `.svg` 不忽略。

## 占位符替换

每个模板里都有 `[[变量]]` 形式的占位符。手动替换或用编辑器全文替换：

| 占位符 | 替换为 |
|---|---|
| `[[WEEK]]` | 当前 week 号（如 `22`）|
| `[[DATE]]` | 当前日期（如 `2026-06-01`）|
| `[[TITLE]]` | series 名（如 `monday empire map`）|
| `[[HOOK1]]` / `[[HOOK2]]` / `[[HOOK3]]` | 钩子文案 |
| `[[QUOTE]]` | 引用原文 |
| `[[SOURCE]]` | 来源（`bloomberg` / `reuters` 等）|
| `[[INSIGHT]]` | 我的解读 |

> 如果想 fancy 一点：可以加一个 `?week=22&date=...` 的 URL 参数读取，前端 JS 自动填充。**不是必须**。手动改文本 30 秒搞定。

## 一致性约束

任何修改时回头读 [visual-identity.md](../visual-identity.md) §二 Design Tokens。**不要**：

- 自由发挥添加新色（必须用 token 里的 8 个）
- 换字体（只用 Inter / SF / Helvetica + SF Mono）
- 加渐变 / 阴影 / 3D / 玻璃质感
- 用第 5 个 accent 色

视觉一致性是品牌资产。每一份"灵活就这一次"都会瓦解前面建立的识别度。

## 备份

每个 `.html` / `.svg` 都是纯文本，可以直接复制到 Notion / Google Doc 做备份。**无依赖**：不需要任何外部 CDN / 字体加载（用系统字体 fallback）/ 网络资源。

---

**版本**：v1.0 · 2026-05-30
