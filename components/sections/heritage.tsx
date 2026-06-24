"use client";

import { motion } from "framer-motion";
import { SectionSpotlight } from "@/components/effects/section-spotlight";

const STATS = [
  { figure: "33",   label: "Years on the Thames" },
  { figure: "3",    label: "Signature Vessels" },
  { figure: "620",  label: "Guests at Capacity" },
  { figure: "432",  label: "Fine-dining Covers" },
  { figure: "No.1", label: "Choice for private Thames charters" },
];

export function Heritage() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24">
      <SectionSpotlight />

      <div className="relative z-10 mx-auto max-w-6xl space-y-16">

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col"
            >
              <span className="font-display text-4xl text-brass">{s.figure}</span>
              <span className="mt-1 text-xs uppercase tracking-widest text-fog font-mono">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Copy */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
              A London tradition
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <h2 className="font-display text-xl leading-relaxed text-ivory md:text-2xl text-balance">
              Book your event on a luxury charter boat on the Thames
            </h2>
            <p className="max-w-2xl text-base text-fog leading-relaxed">
              Thames Luxury Charters own and operate a varied fleet of exquisite private charter
              vessels in London, presenting a selection of unique venues for hire that are perfect
              for both personal and corporate events.
            </p>
            <p className="max-w-2xl text-base text-fog leading-relaxed">
              Step aboard our fleet of beautifully appointed boats and instantly discover a quiet
              sanctuary in central London, away from the hustle and bustle of city life. Enjoy a
              blend of delicate flavours from FoodbyDish, with carefully matched fine wines that
              are sure to impress your guests while sailing along the River Thames. Admire
              London&rsquo;s breathtaking skyline and world famous landmarks, while at night the
              illuminations project enchanting reflections across the river&rsquo;s smooth surface.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#enquire"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brass px-7 py-3 text-sm font-semibold text-ink"
              >
                <span aria-hidden className="absolute inset-0 translate-x-[-105%] bg-brass-soft transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                <span className="relative z-10">Enquire Now</span>
              </a>
              <a
                href="#fleet"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brass/40 px-7 py-3 text-sm font-medium"
              >
                <span aria-hidden className="absolute inset-0 translate-x-[-105%] bg-brass/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                <span className="relative z-10 text-ivory transition-colors group-hover:text-brass-soft">Choose your vessel</span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
