export const positioning = [
  { number: "01", title: "AI Product", verb: "Understand the problem.", body: "从需求、业务流程和产品取舍开始。让工作流、人工决策与验收标准先于模型选择。", project: "hotscript" },
  { number: "02", title: "AI Engineering", verb: "Build the system.", body: "把前端、API、知识、Agent 与状态连接成系统，用版本与测试明确实现边界。", project: "bsc-studio" },
  { number: "03", title: "FDE Practice", verb: "Deploy into reality.", body: "在个人项目中练习业务诊断、原型、集成与迭代；交付能力由实际验证范围说话。", project: "smart-station" },
];
export const capabilities = [
  { title: "AI Systems", project: "hotscript", purpose: "连接来源、任务执行、内容成果与人工审批。", implementation: "FastAPI · Task / Gateway / Worker · Checkpoint / Artifact", evidence: "hot-tests", limitation: "离线工程验证，不是模型质量或真实业务效果验收。" },
  { title: "Full-Stack", project: "smart-station", purpose: "将包裹生命周期映射到界面、API 与持久化状态。", implementation: "Node.js · Express · EJS · SQLite · Socket.IO", evidence: "station-app", limitation: "SQLite 业务实现与后续 PostgreSQL 重构属于不同范围。" },
  { title: "Data & Knowledge", project: "bsc-studio", purpose: "在生成结构化业务方案前，组织可检索的知识与来源。", implementation: "Knowledge service · PRD-to-SOP · RAG path", evidence: "bsc-knowledge", limitation: "检索效果指标尚未核实；不把依赖和模块当作质量保证。" },
  { title: "Agent Engineering", project: "bsc-studio", purpose: "将规划、专门分析与组合输出拆成可检查职责。", implementation: "Planner · SOP / Risk / Strategy · Composer", evidence: "bsc-pipeline", limitation: "历史分析路径含 fallback，不等于当前真实模型全链通过。" },
  { title: "AI Coding", project: "hotscript", purpose: "让辅助开发围绕理解、计划、实现、回归与审阅组织。", implementation: "Codex · TypeScript / Python · scoped regression · browser records", evidence: "hot-browser", limitation: "方法建议来自个人项目材料；AI 不替代工程判断和人工验收。" },
  { title: "System Design", project: "smart-station", purpose: "用领域、事务与事件边界支持存储适配和后续演进。", implementation: "Domain · Repository · Transaction · Outbox direction", evidence: "station-pg", limitation: "重构尚未完成；目标 PostgreSQL 的恢复与并发验收仍受阻。" },
];
export const buildSteps = [
  { title: "Understand", detail: "识别用户、业务状态与真正的问题。" },
  { title: "Design", detail: "明确工作流、边界和验收条件。" },
  { title: "Build", detail: "连接产品交互、系统与数据。" },
  { title: "Validate", detail: "检查实现，区分模拟与真实结果。" },
  { title: "Iterate", detail: "保留限制，带着证据进入下一轮。" },
];
export const fdeSteps = ["Discover", "Diagnose", "Design", "Prototype", "Integrate", "Validate", "Iterate"];
