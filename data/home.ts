export const homeBuildSteps = [
  {
    title: "Discover",
    short: "Find the actual problem.",
    detail: "识别谁在什么情境下遇到问题，梳理业务对象、来源和状态。",
    artifact: "Problem / context / constraints",
    project: "HotScript · 内容生产的碎片化流程",
  },
  {
    title: "Define",
    short: "Draw the boundary.",
    detail: "把目标转成明确范围与可检查的验收条件，区分当前实现和后续方向。",
    artifact: "Scope / acceptance / trade-offs",
    project: "BSC · 历史分析链与当前工作台分开",
  },
  {
    title: "Design",
    short: "Make the workflow explicit.",
    detail: "先设计状态、人工决策与成果交接，再决定界面和技术如何配合。",
    artifact: "Workflow / state / approval",
    project: "HotScript · 版本、修订与人工批准",
  },
  {
    title: "Build",
    short: "Connect the system.",
    detail: "将产品交互、API、知识、执行与数据连接起来，让职责有边界。",
    artifact: "Interface / API / persistence",
    project: "智慧驿站 · 入库、货位与取件状态",
  },
  {
    title: "Deploy",
    short: "Meet the target environment.",
    detail:
      "在目标环境验证集成、恢复与可复建性。此处是方法目标，不代表三个项目已完成生产交付。",
    artifact: "Environment / integration / recovery",
    project: "智慧驿站 · PostgreSQL 验证仍受阻",
  },
  {
    title: "Iterate",
    short: "Keep the evidence close.",
    detail:
      "检查真实反馈和失败，保留版本与范围，带着尚未解决的问题进入下一轮。",
    artifact: "Validation / feedback / next question",
    project: "HotScript · 离线记录与当前漂移分开",
  },
];
export const workModes = [
  {
    title: "AI Product",
    verb: "Understand the problem.",
    description: "从业务流程、用户路径和验收边界定义产品。",
    topics: "Product strategy / PRD / AI workflow / Agent UX / Validation",
    projects: [
      { title: "HotScript", slug: "hotscript", proof: "内容、版本与人工审批" },
      {
        title: "BSC Studio",
        slug: "bsc-studio",
        proof: "需求到结构化业务分析",
      },
    ],
  },
  {
    title: "AI Engineering",
    verb: "Build the system.",
    description: "把界面、知识、执行和数据连成可检查的系统。",
    topics: "Full-stack / Agent / RAG paths / APIs / Database / Automation",
    projects: [
      {
        title: "BSC Studio",
        slug: "bsc-studio",
        proof: "Parser、Planner 与知识层",
      },
      {
        title: "智慧驿站",
        slug: "smart-station",
        proof: "业务状态与持久化实现",
      },
    ],
  },
  {
    title: "FDE Practice",
    verb: "Make it work in reality.",
    description: "以个人项目练习诊断、集成、验证和迭代。",
    topics: "Discovery / Integration / Deployment / Debugging / Iteration",
    projects: [
      {
        title: "HotScript",
        slug: "hotscript",
        proof: "把内容流程组织成工作台",
      },
      {
        title: "BSC Studio",
        slug: "bsc-studio",
        proof: "把需求组织成业务工作流",
      },
      {
        title: "智慧驿站",
        slug: "smart-station",
        proof: "把物流状态组织成业务系统",
      },
    ],
  },
];
export const heroDirections = [
  {
    title: "AI Product Manager",
    label: "Product",
    note: "Understand the problem.",
    artifact: "Problem → Workflow → Decision",
    project: "HotScript / BSC Studio",
    summary: "从业务意图到产品边界。",
  },
  {
    title: "AI Full-Stack Developer",
    label: "Engineering",
    note: "Build the system.",
    artifact: "Interface → Agent → State",
    project: "HotScript / BSC / 智慧驿站",
    summary: "从产品交互到系统实现。",
  },
  {
    title: "Forward Deployed Engineer",
    label: "FDE Practice",
    note: "Validate in context.",
    artifact: "Discover → Integrate → Iterate",
    project: "Personal project practice",
    summary: "从模糊场景到验证与迭代。",
  },
];
