"use client";
import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { homeBuildSteps } from "@/data/home";
import { InteractiveList } from "@/components/react-bits/InteractiveList";
const items = homeBuildSteps.map((step) => ({
  title: step.title,
  description: step.short,
}));
export function BuildLoop() {
  const [active, setActive] = useState(0);
  const step = homeBuildSteps[active];
  return (
    <div className="build-loop">
      <InteractiveList
        items={items}
        label="Explore how I build"
        onChange={setActive}
        initial={active}
      />
      <div className="build-loop-detail">
        <div className="loop-detail-top">
          <span className="mono">BUILD LOOP / 0{active + 1}</span>
          <ArrowDownRight size={30} />
        </div>
        <h3>{step.short}</h3>
        <p>{step.detail}</p>
        <div className="loop-artifact">
          <span className="eyebrow">WORKING ARTIFACT</span>
          <strong>{step.artifact}</strong>
        </div>
        <div className="loop-example">
          <span className="mono">PROJECT CONTEXT</span>
          <p>{step.project}</p>
        </div>
        <div className="loop-track" aria-hidden="true">
          {homeBuildSteps.map((item, i) => (
            <span key={item.title} data-active={active === i} />
          ))}
        </div>
      </div>
    </div>
  );
}
