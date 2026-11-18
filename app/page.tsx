import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { getEvidence } from "@/data/evidence";
import {
  DownLink,
  EvidenceCard,
  Eyebrow,
  ProjectRow,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { Contact } from "@/components/footer";
import { HeroEffects } from "@/components/react-bits/HeroEffects";
import { RevealText } from "@/components/react-bits/TextEffects";
import { ProjectCard } from "@/components/react-bits/ProjectCard";
import { BuildLoop } from "@/components/home/build-loop";
import { WorkModes } from "@/components/home/work-modes";
import { siteOrigin } from "@/lib/metadata";

export default function Home() {
  const origin = siteOrigin();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            description: profile.title,
            ...(origin ? { url: origin } : {}),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero-v2 shell">
        <div className="hero-narrative">
          <Eyebrow>
            <span className="status-dot" /> AI PRODUCT BUILDER
          </Eyebrow>
          <h1>
            I turn complex problems into{" "}
            <RevealText
              text="working AI products."
              className="hero-keyphrase"
            />
          </h1>
          <p className="hero-description">{profile.description}</p>
          <p className="hero-zh">
            从业务问题出发，设计 AI
            产品，构建全栈系统，并把复杂问题转化为可执行的工作流。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">
              Explore work
              <ArrowUpRight size={18} />
            </Link>
            {profile.resumeUrl && (
              <a className="button secondary" href={profile.resumeUrl}>
                View Resume
              </a>
            )}
            {profile.githubUrl && (
              <a className="text-link" href={profile.githubUrl}>
                GitHub
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <HeroEffects />
        <div className="hero-v2-bottom">
          <DownLink />
          <span className="mono muted">
            PRODUCT THINKING. ENGINEERING HABITS.
          </span>
        </div>
      </section>
      <section
        className="work-section work-v2 shell section-space"
        id="selected-work"
      >
        <SectionHeading
          label="SELECTED WORK / 01—03"
          title="Three products. Three different problems."
        >
          <p>
            From a problem to a system.
            <br />
            The decisions and evidence behind each.
          </p>
        </SectionHeading>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectRow project={project} />
          </ProjectCard>
        ))}
        <div className="section-end">
          <TextLink href="/projects">Explore all work & filters</TextLink>
        </div>
      </section>
      <section className="shell section-space build-section-v2">
        <SectionHeading label="THE BUILDER’S LOOP" title="How I Build.">
          <p>
            Six stages. One continuous loop.
            <br />
            每一步，都有需要回答的问题。
          </p>
        </SectionHeading>
        <BuildLoop />
      </section>
      <section className="work-modes-section section-space">
        <div className="shell">
          <SectionHeading
            label="ONE BUILDER / THREE PERSPECTIVES"
            title="Three Ways I Work."
          >
            <TextLink href="/engineering">Inside the engineering</TextLink>
          </SectionHeading>
          <WorkModes />
        </div>
      </section>
      <section className="shell section-space evidence-section">
        <SectionHeading
          label="ENGINEERING EVIDENCE"
          title="Built on more than claims."
        >
          <p>
            Agent. Knowledge. Full-stack. AI coding.
            <br />
            Each claim has a scope and a limit.
          </p>
        </SectionHeading>
        <div className="evidence-grid evidence-bento">
          {getEvidence([
            "hot-synthetic",
            "bsc-knowledge",
            "station-tests",
            "hot-browser",
          ]).map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
        <div className="section-end">
          <TextLink href="/engineering">Read the engineering evidence</TextLink>
        </div>
      </section>
      <section className="fde-home-v2 shell">
        <div className="fde-home-intro">
          <Eyebrow>FDE PRACTICE</Eyebrow>
          <h2>
            Closer to the problem.
            <br />
            Closer to the solution.
          </h2>
          <p>
            从业务诊断到原型、集成与验证。在个人项目中练习把模糊需求转为明确的系统边界。
          </p>
          <TextLink href="/fde">From ambiguity to deployment</TextLink>
        </div>
        <div className="home-fde-cases">
          {projects.map((project) => (
            <Link key={project.id} href={`/fde#${project.slug}`}>
              <span className="mono">
                0{projects.indexOf(project) + 1} / PERSONAL PROJECT
              </span>
              <strong>{project.title}</strong>
              <span>{project.positioning}</span>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>
      <section className="about-preview shell section-space">
        <Eyebrow>BEHIND THE WORK</Eyebrow>
        <div>
          <h2>Building is how I learn.</h2>
          <p>{profile.about}</p>
          <TextLink href="/about">Meet {profile.name}</TextLink>
        </div>
      </section>
      <Contact />
    </>
  );
}
