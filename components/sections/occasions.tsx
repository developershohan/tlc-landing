"use client";

import { motion } from "framer-motion";
import { SectionSpotlight } from "@/components/effects/section-spotlight";

const OCCASIONS = [
  { title: "Thames Parties",        desc: "Birthdays, anniversaries and private celebrations on the water." },
  { title: "Party Nights",          desc: "Lively evening charters with DJs, dancing and a riverside skyline." },
  { title: "Finishing Touches",     desc: "Florals, lighting and entertainment to make the evening yours." },
  { title: "Bring It To Life",      desc: "Live music, singers and photo booths to set the mood." },
  { title: "Corporate Celebration", desc: "Launches, away-days and client events with a backdrop nobody forgets." },
];

export function Occasions() {
  return (
    <section id="occasions" className="relative overflow-hidden bg-navy px-6 py-28">
      <SectionSpotlight />
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">Occasions</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium text-ivory text-balance">
          Elevate your corporate event, or simply celebrate &mdash; the Thames makes the perfect backdrop
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brass/15 bg-brass/10 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              className="group relative flex h-full flex-col justify-between overflow-hidden bg-navy p-7"
            >
              {/* Large index number — barely visible, brightens on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-3 select-none font-display text-[4.5rem] leading-none text-brass/5 transition-colors duration-300 group-hover:text-brass/14"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <h3 className="font-display text-lg text-ivory">
                  {o.title}
                </h3>
                {/* Underline that draws in left → right on hover */}
                <div className="mt-1.5 h-px w-0 bg-brass/50 transition-[width] duration-400 ease-out group-hover:w-full" />
                <p className="mt-3 text-sm leading-relaxed text-fog">{o.desc}</p>
              </div>

              <a
                href="#enquire"
                className="relative z-10 mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brass-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Find out more &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
