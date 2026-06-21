"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion, AnimatePresence,
  useMotionValue, useSpring, useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmberParticles } from "@/components/effects/ember-particles";

const OCCASIONS = [
  "weddings",
  "corporate parties",
  "birthdays",
  "Christmas parties",
  "product launches",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const words    = useMemo(() => OCCASIONS, []);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mouse parallax — text drifts opposite cursor
  const mouseX  = useMotionValue(0.5);
  const mouseY  = useMotionValue(0.5);
  const mxS     = useSpring(mouseX, { stiffness: 100, damping: 28 });
  const myS     = useSpring(mouseY, { stiffness: 100, damping: 28 });
  const prlx    = useTransform(mxS, [0, 1], [22, -22]);
  const prly    = useTransform(myS, [0, 1], [14, -14]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left)  / r.width);
    mouseY.set((e.clientY - r.top)   / r.height);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
      onMouseMove={onMouseMove}
    >
      {/* Video reveal */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ overflow: "hidden" }}
        initial={{ clipPath: "inset(6% round 20px)" }}
        animate={{ clipPath: "inset(0% round 0px)" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <video
            ref={videoRef}
            autoPlay muted loop playsInline preload="auto"
            poster="/images/-001.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/video/hero-loop.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>

      {/* Tints */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--color-ink)_0%,_rgba(10,20,34,0.65)_45%,_rgba(10,20,34,0.25)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,_var(--color-ink)_0%,_transparent_40%)]" />

      {/* Ember particles rising from bottom */}
      <EmberParticles count={5} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24">

        {/* Parallax wrapper — text only, not buttons */}
        <motion.div style={{ x: prlx, y: prly }}>
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          >
            Private charter vessels &middot; River Thames &middot; Est. 1993
          </motion.p>

          <motion.h1
            className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-ivory text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
          >
            Luxury boats
            <br />
            for unforgettable{" "}
            <span className="relative inline-block h-[1.1em] min-w-[9ch] align-bottom text-brass">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "60%", opacity: 0 }}
                  animate={{ y: "0%",  opacity: 1 }}
                  exit={{ y: "-60%",   opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          >
            Step aboard a fleet of beautifully appointed vessels and discover a
            quiet sanctuary on the river &mdash; fine dining, matched wines, and
            London&rsquo;s skyline drifting past your window.
          </motion.p>
        </motion.div>

        {/* Buttons stay fixed — not parallaxed */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.08 }}
        >
          <Button asChild size="lg" variant="brass">
            <a href="#enquire">Start planning your event</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#fleet">View the fleet</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-brass/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
