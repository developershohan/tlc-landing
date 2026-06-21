"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorDot() {
  const mx      = useMotionValue(-200);
  const my      = useMotionValue(-200);
  const dotSize = useMotionValue(7);
  const dotOp   = useMotionValue(0);  // starts invisible

  const sx  = useSpring(mx,      { stiffness: 180, damping: 22 });
  const sy  = useSpring(my,      { stiffness: 180, damping: 22 });
  const ssz = useSpring(dotSize, { stiffness: 200, damping: 20 });
  const sop = useSpring(dotOp,   { stiffness: 200, damping: 20 });

  useEffect(() => {
    // Only activate on pointer-fine devices (no touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      // Reveal on first move
      if (dotOp.get() < 0.1) dotOp.set(0.45);
    };

    const onOver = (e: MouseEvent) => {
      const isHoverable = !!(e.target as Element).closest("a, button, [role='button']");
      dotSize.set(isHoverable ? 30 : 7);
      dotOp.set(isHoverable ? 0.17 : 0.45);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mx, my, dotSize, dotOp]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass mix-blend-screen"
      style={{ x: sx, y: sy, width: ssz, height: ssz, opacity: sop }}
    />
  );
}
