"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { heroDirections } from "@/data/home";
import { useEffects, useNearby } from "./use-effects";
import type { RotatingTextRef } from "./vendor/RotatingText";
const RotatingText = dynamic(() => import("./vendor/RotatingText"));
export function HeroEffects() {
  const enabled = useEffects();
  const { ref, nearby } = useNearby();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rotating = useRef<RotatingTextRef>(null);
  const current = heroDirections[active];
  const activate = (index: number) => {
    setActive(index);
    rotating.current?.jumpTo(index);
  };
  return (
    <div className="builder-system" ref={ref}>
      <div className="system-heading">
        <span className="mono">ONE BUILDER / CONNECTED DISCIPLINES</span>
        <span className="system-corner" aria-hidden="true">
          ↗
        </span>
      </div>
      <div
        className="system-disciplines"
        role="group"
        aria-label="Explore career directions"
      >
        {heroDirections.map((direction, i) => (
          <button
            key={direction.title}
            aria-pressed={active === i}
            onClick={() => activate(i)}
            className="discipline-choice"
          >
            <span className="mono">0{i + 1}</span>
            <span>{direction.label}</span>
            <ArrowDownRight size={20} />
          </button>
        ))}
      </div>
      <div className="system-output">
        <div className="system-output-header">
          <span className="mono">CAREER DIRECTION</span>
          {enabled && (
            <button
              className="icon-button"
              aria-label={
                paused ? "Play career rotation" : "Pause career rotation"
              }
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
          )}
        </div>
        <div className="rotating-role" aria-hidden="true">
          {enabled ? (
            <RotatingText
              initialTextIndex={active}
              ref={rotating}
              texts={heroDirections.map((d) => d.title)}
              rotationInterval={6500}
              splitBy="lines"
              effect="slide"
              transition={{
                type: "tween",
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              auto={nearby && !paused}
              pauseOnHover
              onNext={setActive}
              mainClassName="bits-role"
            />
          ) : (
            current.title
          )}
        </div>
        <p className="sr-only">
          Career directions: {heroDirections.map((d) => d.title).join("; ")}
        </p>
        <p className="system-artifact">{current.artifact}</p>
        <p className="system-summary">{current.summary}</p>
        <div className="system-proof">
          <span className="mono">PRACTICE IN</span>
          <span>{current.project}</span>
        </div>
      </div>
      <div className="system-footer">
        <span>Product thinking. Engineering habits.</span>
        <Link href="/engineering" aria-label="Explore engineering evidence">
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
