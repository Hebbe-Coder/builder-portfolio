"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { workModes } from "@/data/home";
import { InteractiveList } from "@/components/react-bits/InteractiveList";
const items = workModes.map((mode) => ({
  title: mode.title,
  description: mode.verb,
}));
export function WorkModes() {
  const [active, setActive] = useState(0);
  const mode = workModes[active];
  return (
    <div className="work-modes">
      <InteractiveList
        items={items}
        label="Explore three ways I work"
        initial={active}
        onChange={setActive}
      />
      <div className="work-mode-detail">
        <p className="eyebrow">CAPABILITY → PROJECT → EVIDENCE</p>
        <h3>{mode.description}</h3>
        <p className="mode-topics">{mode.topics}</p>
        <div className="mode-projects">
          {mode.projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <span>
                <strong>{project.title}</strong>
                <span>{project.proof}</span>
              </span>
              <ArrowUpRight size={19} />
            </Link>
          ))}
        </div>
        <p className="scope-note">个人项目实践；具体实现和验证范围见案例。</p>
      </div>
    </div>
  );
}
