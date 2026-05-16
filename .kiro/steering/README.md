# `.kiro/steering/` · 项目级 steering 文件

> 这些文件会**在每次对话开始时自动加载到 AI 的上下文里**（带 `inclusion: always` front matter）。
> 用来记录项目级的硬约束、团队习惯、踩过的坑，避免新对话的 AI 重复犯同样的错。

---

## 当前 steering 文件

| 文件 | 主题 | 来源 |
|------|------|------|
| [01-compliance-redlines.md](./01-compliance-redlines.md) ⭐ | 客户面合规红线（5 级禁词清单 + 否定句式陷阱 + 两轮扫描制） | playbook 易学化 PR A→D 经验 |
| [02-color-palette-source-of-truth.md](./02-color-palette-source-of-truth.md) | 19 色色谱单一真相来源（colors.yaml 引用约定）| swatch-builder 设计 |
| [03-pr-workflow.md](./03-pr-workflow.md) | PR 工作流（多 PR 协作 / sandbox 工具限制 / commit message 规范） | playbook 易学化 7 PR 系列 |
| [04-document-yaml-fidelity.md](./04-document-yaml-fidelity.md) | 文档忠于 YAML（凭印象写会漂移，"桂金 vs 烛光金"案例） | PR D 实际踩坑 |

---

## 维护原则

1. **只增不删（除非过时）**：每个 steering 都是"我已经踩过的坑"，删了就忘了
2. **inclusion: always**：默认全部自动加载（除非某条 steering 只对特定文件类型有意义，可以改 `inclusion: conditional`）
3. **不超过 4-5 个文件**：太多了 AI 上下文会爆炸，精炼到核心硬约束
4. **更新频率**：踩到新坑、形成新共识就加 / 改一次。完成里程碑时回顾一次

---

## 添加新 steering 文件的检查清单

新文件应该是：
- [ ] 项目级硬约束（不是某个 PR 一次性的事）
- [ ] 跨多个对话都需要遵守的（不是某个具体功能的实现细节）
- [ ] 有明确的"做"和"不做"清单（不是抽象的设计哲学）
- [ ] 有真实案例支撑（最好引用具体 PR 编号 / 提交）
- [ ] 不超过 200 行（再长就拆成多个）

---

**版本**：v1.0 · 2026 春
**所属**：渝山东方美学项目
