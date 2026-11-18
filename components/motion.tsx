"use client";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
export function PageEntry({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <LazyMotion features={domAnimation}><m.div initial={{ opacity: 1, y: reduced ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.35 }} className="page-entry">{children}</m.div></LazyMotion>;
}
export function AnimatedArrow() {
  const reduced = useReducedMotion();
  return <m.span aria-hidden="true" whileHover={reduced ? {} : { x: 3, y: -3 }} className="animated-arrow">↗</m.span>;
}
