"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { SectionSpotlight } from "@/components/effects/section-spotlight";

const WORDS = "Begin your journey on the Thames".split(" ");

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24">
      <SectionSpotlight />
      <div className="mx-auto max-w-3xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
        >
          Let&rsquo;s start planning
        </motion.p>

        {/* Word-by-word stagger */}
        <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-ivory text-balance">
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.28em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Decorative rule draws from centre */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: "center" }}
          className="mx-auto mt-7 h-px max-w-45 bg-linear-to-r from-transparent via-brass/40 to-transparent"
        />

        <p className="mt-6 text-base text-fog">
          Tell us about your occasion and our charter team will craft a tailored
          proposal — usually within one working day. No obligation, just possibilities.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary — sweep fill */}
          <a
            href="#enquire"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brass px-8 py-4 text-sm font-semibold text-ink"
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-x-[-105%] bg-brass-soft transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
            />
            <span className="relative z-10">Enquire now</span>
          </a>

          {/* Secondary — sweep + wobble icon */}
          <a
            href="tel:02073577751"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brass/40 px-8 py-4 text-sm font-medium"
          >
            <span aria-hidden className="absolute inset-0 translate-x-[-105%] bg-brass/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
            <motion.span
              whileHover={{ rotate: [0, -14, 10, 0] }}
              transition={{ duration: 0.4 }}
              className="relative z-10 inline-block text-ivory"
            >
              <PhoneCall size={16} />
            </motion.span>
            <span className="relative z-10 text-ivory transition-colors group-hover:text-brass-soft">020 7357 7751</span>
          </a>
        </div>
      </div>
    </section>
  );
}
