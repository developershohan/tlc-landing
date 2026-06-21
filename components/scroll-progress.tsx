"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function TideProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-80 h-0.75 w-full bg-ivory/5">
      <motion.div
        className="h-full origin-left bg-linear-to-r from-brass-soft to-brass"
        style={{ scaleX }}
      />
    </div>
  );
}
