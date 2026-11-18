"use client";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { useEffects, useNearby } from "./use-effects";
const AnimatedList = dynamic(() => import("./vendor/AnimatedList"));
export function InteractiveList({
  items,
  label,
  onChange,
  initial = 0,
}: {
  items: { title: string; description?: string }[];
  label: string;
  onChange: (index: number) => void;
  initial?: number;
}) {
  const enabled = useEffects();
  const { ref, nearby } = useNearby();
  const selected = useCallback(
    (index: number) => {
      if (index >= 0) onChange(index);
    },
    [onChange],
  );
  return (
    <div ref={ref} className="interactive-list-host">
      {enabled && nearby ? (
        <AnimatedList
          items={items}
          label={label}
          width="100%"
          maxHeight="none"
          radius={3}
          gap={0}
          frame={false}
          showGradients={false}
          displayScrollbar={false}
          animation="none"
          initialSelectedIndex={initial}
          selectOnHover
          enableArrowNavigation
          onSelectionChange={selected}
          onItemSelect={(_, index) => onChange(index)}
          className="bits-list"
          itemClassName="bits-list-item"
          accentColor="var(--accent)"
          style={
            {
              "--al-ink": "var(--fg)",
              "--al-muted": "var(--muted)",
              "--al-tile": "transparent",
              "--al-tile-shadow": "none",
              "--al-tile-edge": "transparent",
              "--al-tile-highlight": "transparent",
              "--al-ring-fill": "transparent",
              "--al-ring": "var(--border)",
              "--al-hover": "none",
              "--al-press": "none",
              "--al-active": "none",
            } as CSSProperties
          }
          renderItem={(_, i) => (
            <>
              <span className="mono bits-list-number">0{i + 1}</span>
              <span className="bits-list-copy">
                <strong>{items[i].title}</strong>
                {items[i].description && <span>{items[i].description}</span>}
              </span>
              <ArrowUpRight size={20} />
            </>
          )}
        />
      ) : (
        <div
          className="static-interactive-list"
          role="group"
          aria-label={label}
        >
          {items.map((item, i) => (
            <button
              key={item.title}
              onClick={() => onChange(i)}
              className="bits-list-item"
              aria-pressed={initial === i}
            >
              <span className="mono bits-list-number">0{i + 1}</span>
              <span className="bits-list-copy">
                <strong>{item.title}</strong>
                {item.description && <span>{item.description}</span>}
              </span>
              <ArrowUpRight size={20} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
