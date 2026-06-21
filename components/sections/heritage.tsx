"use client";

import { motion } from "framer-motion";
import { SectionSpotlight } from "@/components/effects/section-spotlight";

export function Heritage() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24">
      <SectionSpotlight />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <span className="font-display text-6xl text-brass">32+</span>
          <span className="mt-1 font-mono text-xs uppercase tracking-widest text-fog">
            years on the Thames
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-balance font-display text-xl leading-relaxed text-ivory md:text-2xl"
        >
          Thames Luxury Charters has owned and operated a fleet of private
          charter vessels in London since 1993, presenting unique venues for
          hire that suit personal and corporate events alike &mdash; each
          one a quiet sanctuary away from the city, with London&rsquo;s
          skyline drifting past the window.
        </motion.p>
      </div>
    </section>
  );
}
