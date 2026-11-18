import { PracticeStepper } from "@/components/fde/practice-stepper";
import { projects } from "@/data/projects";
import { getEvidence } from "@/data/evidence";
import { Badge, Eyebrow, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "FDE practice",
  "From ambiguity to deployment. 以三个个人项目呈现业务发现、诊断、原型、集成、验证与迭代的方法实践。",
  "/fde",
);
export default function FdePage() {
  return (
    <div className="shell">
      <section className="page-hero">
        <Eyebrow>FORWARD DEPLOYED ENGINEERING PRACTICE</Eyebrow>
        <h1>
          From ambiguity
          <br />
          to deployment<span className="accent">.</span>
        </h1>
        <p>
          Understand the context. Build the right system. Stay close to what
          happens next.
          <br />
          这里呈现 FDE
          方法论与个人项目实践；生产交付仍需要目标环境和用户验收证据。
        </p>
      </section>
      <section className="fde-method">
        <div className="method-heading">
          <h2>
            Get close.
            <br />
            Make it concrete.
          </h2>
          <p>
            从业务对象、操作者与状态变化开始，把问题变成可检查的流程。部署是目标环境中的责任，验证与迭代贯穿整个过程。
          </p>
        </div>
        <PracticeStepper />
      </section>
      <div className="fde-cases">
        {projects.map((project) => {
          const item = getEvidence([project.evidence[0]])[0];
          return (
            <article className="fde-case" key={project.id} id={project.slug}>
              <div className="fde-case-heading">
                <Eyebrow>CASE {project.number} / PERSONAL PROJECT</Eyebrow>
                <Badge status={item.status} />
              </div>
              <h2>{project.title}</h2>
              <p className="fde-case-positioning">{project.positioning}</p>
              <dl className="fde-case-grid">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Context</dt>
                  <dd>{project.context}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.productThinking[0]}</dd>
                </div>
                <div>
                  <dt>Implementation</dt>
                  <dd>{project.engineering[0].description}</dd>
                </div>
                <div>
                  <dt>Validation</dt>
                  <dd>
                    {item.description}
                    <span className="scope-note">
                      {item.version} · {item.date} · {item.scope}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt>Limitation</dt>
                  <dd>{project.limitations[0]}</dd>
                </div>
              </dl>
              <TextLink href={`/projects/${project.slug}`}>
                Read the full case
              </TextLink>
            </article>
          );
        })}
      </div>
      <section className="fde-reflection section-space">
        <Eyebrow>THE NEXT VALIDATION BOUNDARY</Eyebrow>
        <h2>
          A working prototype opens
          <br />
          the next question.
        </h2>
        <p>
          对我而言，FDE
          不是给原型换一个名称。真实现场需要确认问题是否成立、系统能否接入、操作者是否接受、故障如何恢复。现有个人项目提供了练习材料；真实客户交付能力仍应由实际记录证明。
        </p>
        <TextLink href="/insights/what-fde-means">
          What FDE means to me
        </TextLink>
      </section>
    </div>
  );
}
