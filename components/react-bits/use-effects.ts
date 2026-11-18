"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
const query =
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  document.addEventListener("visibilitychange", callback);
  return () => {
    media.removeEventListener("change", callback);
    document.removeEventListener("visibilitychange", callback);
  };
}
function snapshot() {
  return (
    window.matchMedia(query).matches && document.visibilityState === "visible"
  );
}
export function useEffects() {
  return useSyncExternalStore(subscribe, snapshot, () => false);
}
export function useNearby() {
  const ref = useRef<HTMLDivElement>(null);
  const [nearby, setNearby] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearby(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, nearby };
}
