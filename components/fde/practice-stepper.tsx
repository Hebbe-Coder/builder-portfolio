"use client";
import { useState } from "react";
import { fdePractice } from "@/data/fde";
import { InteractiveList } from "@/components/react-bits/InteractiveList";
export function PracticeStepper() {
  const [active, setActive] = useState(0);
  const step = fdePractice[active];
  return (
    <div className="fde-stepper">
      <InteractiveList
        label="Explore FDE practice stages"
        items={fdePractice}
        initial={active}
        onChange={setActive}
      />
      <div className="fde-stage-detail">
        <p className="eyebrow">
          METHOD / {String(active + 1).padStart(2, "0")} · {step.title}
        </p>
        <h3>{step.description}</h3>
        <dl>
          {(
            [
              ["Problem", step.problem],
              ["Approach", step.approach],
              ["Implementation", step.implementation],
              ["Validation", step.validation],
              ["Limitation", step.limitation],
            ] as const
          ).map(([label, body]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{body}</dd>
            </div>
          ))}
        </dl>
        <p className="scope-note">
          个人项目中的方法实践；不代表已经完成客户环境部署。
        </p>
      </div>
    </div>
  );
}
