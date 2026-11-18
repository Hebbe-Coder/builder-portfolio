"use client";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import { useEffects, useNearby } from "./use-effects";
const Spotlight = dynamic(() => import("./vendor/SpotlightCard"));
export function ProjectCard({ children }: { children: ReactNode }) {
  const enabled = useEffects();
  const { ref, nearby } = useNearby();
  const content =
    enabled && nearby ? (
      <Spotlight
        spotlightColor="var(--accent)"
        intensity={0.045}
        spotlightSize={400}
        borderGlow={0.38}
        proximity={0}
        ambient={false}
        flare={false}
        grain={0}
        className="bits-project-spotlight"
        style={
          {
            "--spotlight-card-surface": "transparent",
            "--spotlight-card-border": "transparent",
            "--spotlight-card-shadow": "none",
          } as CSSProperties
        }
      >
        {children}
      </Spotlight>
    ) : (
      children
    );
  return (
    <div className="bits-project" ref={ref}>
      {content}
    </div>
  );
}
