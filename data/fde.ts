// Method prompts derived from the audited cases, not a claim of client delivery.
export const fdePractice = [
  {
    title: "Discover",
    description: "Understand the business context.",
    problem: "谁在什么场景中遇到了问题？",
    approach: "先识别角色、业务对象和当前流程，再判断 AI 是否适合介入。",
    implementation:
      "HotScript 以来源、创作者、内容候选和人工审批组织内容流程。",
    validation:
      "检查案例中的对象与工作流能否解释需求；具体工程验证见项目证据。",
    limitation: "个人项目语境，尚无经过核实的客户访谈或业务收益记录。",
  },
  {
    title: "Diagnose",
    description: "Locate the friction and constraints.",
    problem: "症状背后是流程、信息还是状态问题？",
    approach: "把依赖与失败点画出来，区分缺少上下文、执行失败和未完成验证。",
    implementation:
      "BSC 分开陈述历史 PRD→SOP 分析链与当前 Dify／Obsidian 演进。",
    validation:
      "将源码模块、实验记录与架构阶段对应，避免把 fallback 当作真实模型成功。",
    limitation: "历史实验采用合成项目；当前任务价值与发布条件尚未完整验收。",
  },
  {
    title: "Design",
    description: "Define responsibilities and decisions.",
    problem: "自动化与人的责任如何划分？",
    approach: "明确状态、权限、成果边界与人工决策点。",
    implementation: "HotScript 将草稿、修订、Approval 与制作交接作为不同职责。",
    validation: "用版本与成果范围核对设计，而非只凭页面外观判断。",
    limitation:
      "本批离线验证的 Provider calls 为 0、Synthetic 为 32、Human Gold 为 0。",
  },
  {
    title: "Prototype",
    description: "Make one workflow inspectable.",
    problem: "最小原型需要回答什么问题？",
    approach: "选择一个可解释的路径，将输入、处理、输出与失败反馈连接起来。",
    implementation:
      "BSC 历史 Parser、Knowledge、Planner、Agent、Composer 组成结构化分析路径。",
    validation: "结合对应版本的源码和有范围的实验；不把可演示等同于已交付。",
    limitation: "历史路径不代表当前工作台已经形成单一生产流水线。",
  },
  {
    title: "Integrate",
    description: "Connect the system to its context.",
    problem: "界面、业务状态和持久化如何协同？",
    approach: "围绕同一业务对象定义接口、事务和数据一致性边界。",
    implementation:
      "智慧驿站的 Node／Express／EJS／SQLite／Socket.IO 支撑入库、存储和取件。",
    validation: "区分已观察的 SQLite 实现与独立 PostgreSQL 重构记录。",
    limitation: "PostgreSQL 集成、并发、性能与恢复仍受迁移阻塞项约束。",
  },
  {
    title: "Validate",
    description: "Test a bounded claim.",
    problem: "哪些结论已有证据，哪些仍是推测？",
    approach: "记录版本、环境、场景、数据来源和失败情况。",
    implementation: "将历史工程测试、模拟数据和当前未验证项分开呈现。",
    validation:
      "智慧驿站有历史临时 SQLite 核心测试记录；HotScript 有限定版本的离线与浏览器记录。",
    limitation:
      "本作品集没有重新运行三个业务系统的完整测试；旧结果不覆盖后续源码变化。",
  },
  {
    title: "Iterate",
    description: "Choose the next validation boundary.",
    problem: "下一轮应减少哪一个不确定性？",
    approach: "依据失败与缺口决定下一步，而非以功能数量定义完成度。",
    implementation:
      "优先关注 HotScript 人工 Gold、BSC 归档回读及驿站 PostgreSQL 目标环境验证。",
    validation: "以新增的可复查记录关闭对应缺口，保持原有证据范围。",
    limitation: "以上属于后续验证方向，尚不能作为已完成成果。",
  },
];
