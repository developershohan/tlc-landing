"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/**
 * Drop inside any `relative overflow-hidden` section.
 * Listens to the parent element's mousemove — no onMouseMove needed on the parent.
 */
export function SectionSpotlight({
  color   = "200,162,74",
  size    = 560,
  opacity = 0.08,
}: {
  color?:   string;
  size?:    number;
  opacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx  = useMotionValue(-9999);
  const my  = useMotionValue(-9999);
  const bg  = useMotionTemplate`radial-gradient(${size}px circle at ${mx}px ${my}px, rgba(${color},${opacity}), transparent 65%)`;

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const move = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    };
    parent.addEventListener("mousemove", move);
    return () => parent.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ background: bg }}
    />
  );
}
