"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { EmberParticles } from "@/components/effects/ember-particles";

const OCCASIONS = [
  "weddings",
  "corporate events",
  "Christmas parties",
  "private dining",
  "birthdays",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % OCCASIONS.length), 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--color-ink)_0%,_rgba(10,20,34,0.75)_50%,_rgba(10,20,34,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,_var(--color-ink)_0%,_transparent_40%)]" />

      <EmberParticles count={5} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">

        <motion.p
          className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        >
          The No.1 choice for private event charters since 1993
        </motion.p>

        <motion.h1
          className="mt-5 max-w-4xl font-display text-[clamp(2rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-ivory"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
        >
          Luxury boats
          {/* Force line break on sm+; natural wrap on mobile */}
          <br className="hidden sm:block" />
          {" "}for unforgettable{" "}
          <span className="relative inline-block h-[1.1em] min-w-[6ch] align-bottom text-brass sm:min-w-[9ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={OCCASIONS[index]}
                initial={{ y: "60%", opacity: 0 }}
                animate={{ y: "0%",  opacity: 1 }}
                exit={{ y: "-60%",   opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 whitespace-nowrap"
              >
                {OCCASIONS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        >
          Step aboard our fleet of beautifully appointed boats and discover a
          quiet sanctuary in central London &mdash; gliding past Tower Bridge
          for parties, weddings and corporate events.
        </motion.p>

        {/* Buttons — brass sweep fill, same as form button */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.08 }}
        >
          {/* Primary — brass with brass-soft sweep */}
          <a
            href="#enquire"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink sm:px-8 sm:py-4"
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-x-[-105%] bg-brass-soft transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative z-10">Enquire Now</span>
          </a>

          {/* Secondary — outline with subtle fill sweep */}
          <a
            href="#fleet"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brass/50 px-7 py-3.5 text-sm font-medium text-ivory sm:px-8 sm:py-4"
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-x-[-105%] bg-brass/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative z-10 transition-colors group-hover:text-brass-soft">
              Explore the Fleet
            </span>
          </a>
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
