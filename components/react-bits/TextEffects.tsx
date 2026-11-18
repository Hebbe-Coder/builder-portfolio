"use client";
import dynamic from "next/dynamic";
import { useEffects, useNearby } from "./use-effects";
const BlurText = dynamic(() => import("./vendor/BlurText"));
export function RevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const enabled = useEffects();
  const { ref, nearby } = useNearby();
  return (
    <span className={`bits-text ${className}`} ref={ref}>
      {enabled && nearby ? (
        <BlurText
          text={text}
          delay={24}
          stepDuration={0.24}
          blur={3}
          distance={7}
          animationFrom={{ opacity: 1, filter: "blur(3px)", y: 5 }}
          animationTo={[{ opacity: 1, filter: "blur(0px)", y: 0 }]}
          trigger="load"
          className="bits-title-text"
        />
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
}
