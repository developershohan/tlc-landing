"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export function EnquireCta() {
  return (
    <section id="enquire" className="relative bg-ink px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
        >
          Let&rsquo;s start planning
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-ivory text-balance"
        >
          Your perfect event, on the river
        </motion.h2>
        <p className="mt-5 text-fog">
          Tell us your date, your numbers, and your vision &mdash; we&rsquo;ll
          take care of the rest.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:enquiries@thamesluxurycharters.co.uk"
            className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-brass-soft"
          >
            Enquire now
          </a>
          <a
            href="tel:02073577751"
            className="inline-flex items-center gap-2 rounded-full border border-brass/40 px-8 py-4 text-sm font-medium text-ivory transition-colors hover:border-brass hover:text-brass-soft"
          >
            <PhoneCall size={16} />
            020 7357 7751
          </a>
        </div>
      </div>
    </section>
  );
}
