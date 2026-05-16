---
inclusion: always
---

# PR 工作流 · 多 PR 协作的踩坑经验

> **背景**：playbook 易学化系列做了 7 个 PR（PR A → D + 清理），过程中积累了一些踩坑经验。这份文件记录在这个项目里跟 main 协作时的标准做法。

---

## 一、基本流程（每个 PR）

```
1. git checkout main
2. git pull origin main                    ← 必做：拿最新 main
3. git checkout -b feat/xxx-yyy            ← 描述性分支名
4. ... 改文件 ...
5. 跑合规扫描（见 .kiro/steering/01-compliance-redlines.md §二）
6. git add + git commit -m "..."
7. github_push_to_remote                   ← 用 sandbox 工具，**不要** git push
8. github_create_pull_request              ← 用 sandbox 工具
9. 等 CI 全绿
10. 你过审 → 合并
11. 我同步本地 main：
    git checkout main
    git reset --hard origin/main           ← 比 git pull 更稳
```

---

## 二、踩过的坑（按重要性排序）

### 🚨 坑 1：多 PR 改同一个文件 → rebase 必做

playbook 易学化系列 5 个 PR 都改了 `docs/playbook/README.md`。当 PR D 创建后，PR C3 才合并到 main —— PR D 的分支和 main 在同一个文件上**双向修改了同一区域**，GitHub 显示"This branch has conflicts"。

**预防**：每个 PR 创建后，在合并前必须 rebase 到最新 main。如果是连续多 PR 改同一文件，**前一个合了立刻 rebase 后一个**。

**解决**：rebase + 手动解决冲突 + push 到新分支（因为 sandbox 不支持 force-push）：

```bash
git checkout feat/xxx-yyy
git rebase main                            # 解决冲突
# 编辑冲突文件，删 <<<<<<< / ======= / >>>>>>> 标记，保留正确内容
git add <冲突文件>
GIT_EDITOR=true git rebase --continue      # 用 true 跳过 commit message editor

# sandbox 不支持 force-push，所以推到新分支：
git checkout -b feat/xxx-yyy-v2
github_push_to_remote                      # 走新分支
github_create_pull_request                 # 开新 PR

# 然后到 GitHub 关掉旧 PR（不要 merge）
```

> 这是 PR D（#21 → #22）实际的处理路径。

### 🚨 坑 2：sandbox 工具的限制

| 操作 | 用 sandbox 工具 | 不要 |
|------|---------------|------|
| Push | `github_push_to_remote` | `git push`（缺 auth header）|
| Create PR | `github_create_pull_request` | GitHub UI 手动开（不会自动加 Kiro attribution）|
| Pull | `github_pull_repository` | `git pull`（缺 auth header）|
| Fetch | （无对应工具，用 pull）| `git fetch origin`（缺 auth header）|
| 同步本地 main | `git reset --hard origin/main`（local-only，不需要 auth）| 上面那 4 个 |

> Force-push（`--force` / `--force-with-lease`）**完全不支持**。需要重写历史时只能换新分支名重开 PR。

### 🚨 坑 3：本地 main 和 origin/main 不同步

合并后，远端 origin/main 已经更新，但本地 main 不会自动跟进。如果不及时同步，下次 `git checkout -b` 会基于过期的 main，又会触发坑 1。

**预防**：每次合并后立即跑：

```bash
git checkout main
# 用 mcp_sandbox_github_pull_repository 拿最新（无密码）
# 然后强制对齐本地：
git reset --hard origin/main
```

> 不能用 `git pull` —— 没有 auth header 拉不下来。但 `mcp_sandbox_github_pull_repository` 工具会更新 origin/main 的 ref，之后 `git reset --hard origin/main` 就能跟上。

---

## 三、Commit Message 规范

参考 conventional commits + 项目特色：

```
<type>(<scope>): <一句话主题，30 字内>

<空行>

<详细说明，按需多段>

<空行>

<带前缀的列表，如 'Compliance:' 'Out-of-scope:' 'Renamed:'>
```

| type | 用途 | 例 |
|------|------|---|
| `feat` | 新功能 / 大改写 | `feat(playbook): rewrite prompts.md → prompts-content.md (PR B of 4)` |
| `chore` | 清理 / 重命名 / 整理 | `chore(playbook): delete legacy prompts.md + fix top README links` |
| `fix` | 修 bug / 修死链 | `fix(palette): correct 9 月 label from 烛光金 to 桂金` |
| `docs` | 仅 README 微调 | `docs: clarify M1 procurement timeline` |
| `refactor` | 工程结构调整 | `refactor(swatch-builder): extract render logic to module` |

| scope | 范围 |
|-------|------|
| `playbook` | docs/playbook/* |
| `palette` | swatch-builder/palette/* |
| `mingshu-builder` / `swatch-builder` | 对应 builder 工具 |
| `ci` | .github/workflows |

特别约定：
- **Compliance pass**：每个改了客户面文档的 PR commit message 末尾必须有「Compliance」段，列出扫描结果（"客户面文案：zero forbidden terms"）
- **Out-of-scope**：明确划在 PR 之外的相关问题
- **Renamed**：列出文件改名（git mv 后改名 + 内容大改时 git 会显示成 delete + add，要在 message 里说清是 rename）

---

## 四、PR 切分原则

写新功能 / 大改写时，**优先切小 PR**：

### 切 PR 的常见维度

1. **按文件类型切**：md（设计规范）一个 PR，HTML（视觉模板）另一个 PR
2. **按合规敏感度切**：客户面文案（最严）单独切，因为需要严格扫描
3. **按受众切**：内部生产规范（主理人和 AI 看）一个 PR，对外文案另一个 PR

### 不要：一个 PR 改超过 1000 行客户面文案

合规扫描会爆炸。playbook 易学化系列原本想 4 个 PR 搞定，最后切成 6 个（C 拆成 C1/C2/C3 + 收尾清理）才过得去。

### 推荐 PR 大小

| 类型 | 行数 | 触感 |
|------|------|------|
| 小 PR | < 200 行 | 1 个文件局部改 |
| 中 PR | 200-800 行 | 1-3 个文件大改 |
| 大 PR | 800-1500 行 | 3-5 个文件，慎用 |
| 超大 PR | > 1500 行 | **必须拆**，除非全是机械重命名 |

---

## 五、参考实践

- 战略改写：PR #16（playbook-yixue.md）
- 内容生产：PR #17（prompts-content.md，561 行）
- 视觉规范：PR #18（covers-design + cover-ai-prompts + avatar-design，872 行）
- 客户面合规重灾区：PR #19（wechat-onboarding，381 行，跑了 2 轮合规扫描）
- HTML 模板批量改：PR #20（covers/*.html × 5 + 重命名，734 行）
- 钩子大纲：PR #22（lead-magnet-19-colors.md，714 行，rebase 案例）
- 收尾清理：PR #23（删 prompts.md + 修死链）
