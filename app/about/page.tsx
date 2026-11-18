import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { positioning } from "@/data/capabilities";
import { Contact } from "@/components/footer";
import { Eyebrow, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About 曾子健",
  "AI Product Builder。以产品思维理解问题，以工程实现验证判断，围绕三个个人项目持续练习。",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <div className="shell">
        <section className="page-hero">
          <Eyebrow>ABOUT / THE PERSON BEHIND THE WORK</Eyebrow>
          <h1>
            Building is how
            <br />I learn<span className="accent">.</span>
          </h1>
        </section>
        <section className="about-story">
          <div className="about-identity">
            <div className="identity-monogram" aria-hidden="true">
              Z<span>.</span>
            </div>
            <h2>{profile.name}</h2>
            <p>{profile.title}</p>
            <span className="mono">PRODUCT → SYSTEM → EVIDENCE</span>
          </div>
          <div className="about-narrative">
            <p className="lead">
              先把问题理解清楚，
              <br />
              再把解决方案写成系统。
            </p>
            <p>{profile.about}</p>
            <p>
              我希望在 AI 产品经理、AI 全栈开发与 FDE
              三个方向之间建立连贯的工作能力：不仅定义需求，也理解实现成本；不仅让流程运行，也能解释验证的边界。
            </p>
            <p>
              HotScript 让我关注内容、版本与人工审批；BSC
              让我思考知识、规划与成果治理；智慧驿站让我回到业务状态、事务和数据一致性。三者的限制，也决定了下一轮应该验证什么。
            </p>
            <TextLink href="/projects">See the work behind the words</TextLink>
          </div>
        </section>
        <section className="about-perspectives section-space">
          <Eyebrow>CAREER DIRECTION → PROJECTS → ENGINEERING</Eyebrow>
          {positioning.map((item, i) => (
            <article key={item.title}>
              <span className="mono">{item.number}</span>
              <div>
                <h2>{profile.roles[i]}</h2>
                <p>{item.body}</p>
              </div>
              <TextLink href={`/projects/${projects[i].slug}`}>
                {projects[i].title}
              </TextLink>
            </article>
          ))}
        </section>
        <section className="background-section section-space">
          <div>
            <Eyebrow>BACKGROUND / RESUME-SOURCED</Eyebrow>
            <h2>A little context.</h2>
          </div>
          <div>
            <article>
              <span className="mono muted">EDUCATION</span>
              <h3>{profile.education}</h3>
            </article>
            <article>
              <span className="mono muted">EXPERIENCE</span>
              <h3>{profile.experience}</h3>
            </article>
            <p className="scope-note">{profile.source}</p>
            {profile.resumeUrl && (
              <a className="button secondary" href={profile.resumeUrl}>
                View Resume ↗
              </a>
            )}
          </div>
        </section>
      </div>
      <section className="shell section-space about-next">
        <Eyebrow>WHAT I AM BUILDING NEXT</Eyebrow>
        <h2>The next useful question.</h2>
        <p>
          下一步围绕现有项目补充真实验证：HotScript 的人工 Gold 与模型质量、BSC
          的任务价值和归档回读、智慧驿站在 PostgreSQL
          目标环境中的一致性与恢复。它们是接下来的工作方向，而非已经实现的成果。
        </p>
        <TextLink href="/engineering">
          Explore the engineering boundaries
        </TextLink>
      </section>
      <Contact />
    </>
  );
}
