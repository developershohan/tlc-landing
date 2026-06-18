"use client";

import { motion } from "framer-motion";

const OCCASIONS = [
  {
    title: "Thames Parties",
    desc: "Birthdays, anniversaries and private celebrations on the water.",
  },
  {
    title: "Party Nights",
    desc: "Lively evening charters with DJs, dancing and a riverside skyline.",
  },
  {
    title: "Finishing Touches",
    desc: "Florals, lighting and entertainment to make the evening yours.",
  },
  {
    title: "Bring It To Life",
    desc: "Live music, singers and photo booths to set the mood.",
  },
  {
    title: "Corporate Celebration",
    desc: "Launches, away-days and client events with a backdrop nobody forgets.",
  },
];

export function Occasions() {
  return (
    <section id="occasions" className="bg-navy px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
          Occasions
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium text-ivory text-balance">
          Elevate your corporate event, or simply celebrate &mdash; the
          Thames makes the perfect backdrop
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brass/15 bg-brass/10 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col justify-between bg-navy p-7"
            >
              <div>
                <h3 className="font-display text-lg text-ivory transition-colors group-hover:text-brass-soft">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  {o.desc}
                </p>
              </div>
              <a
                href="#enquire"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brass-soft opacity-0 transition-opacity group-hover:opacity-100"
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
