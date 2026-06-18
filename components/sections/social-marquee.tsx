"use client";

import { motion } from "framer-motion";

const SHOTS = [
  "/images/-003.jpg",
  "/images/-005.jpg",
  "/images/-006.png",
  "/images/-007.jpg",
  "/images/-008.jpg",
  "/images/-009.jpg",
];

export function SocialMarquee() {
  // duplicated so the -50% translate loops seamlessly
  const strip = [...SHOTS, ...SHOTS];

  return (
    <section className="overflow-hidden bg-ink py-24">
      <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
        >
          &mdash; Follow us &mdash;
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-ivory"
        >
          We&rsquo;re on Instagram
        </motion.h2>
      </div>

      <div
        className="group relative flex w-full overflow-hidden"
        aria-label="Recent photos from the fleet"
      >
        <div className="flex shrink-0 gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]">
          {strip.map((hint, i) => (
            <a
              key={i}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-64 shrink-0 overflow-hidden rounded-xl border border-brass/15"
            >
              <img
                src={hint}
                alt="Thames Luxury Charters on Instagram"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
