"use client";

import { motion } from "framer-motion";

const OFFERS = [
  {
    title: "The Dixie Queen Wildcard",
    eyebrow: "For large-scale celebrations",
    body: "Get exclusive access to the Dixie Queen, including a Tower Bridge lift, with a bespoke quote built around your date, numbers and budget.",
  },
  {
    title: "Unbelievable Midweek Rate",
    eyebrow: "Mon\u2013Wed \u00b7 Jan\u2013Mar 2026",
    body: "A fixed \u00a32,000 (incl. VAT) rate for a 4-hour Elizabethan charter, any time of day. Limited availability \u2014 book early.",
  },
  {
    title: "Small Group, Big Upgrade",
    eyebrow: "75 guests or fewer",
    body: "Get the Elizabethan at the Edwardian rate \u2014 a complimentary upgrade to our most luxurious vessel, any day of the week.",
  },
];

const PERKS = [
  {
    label: "Complimentary arrival drink",
    detail: "A glass of bubbly or beer for every guest, up to 300.",
  },
  {
    label: "40% off boat hire",
    detail: "On a 4-hour Elizabethan charter, any day of the week.",
  },
  {
    label: "Free entertainment upgrade",
    detail: "Choose a DJ, live singer or photo booth, subject to availability.",
  },
];

export function WinterSale() {
  return (
    <section
      id="winter-sale"
      className="relative overflow-hidden bg-ink px-6 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--color-navy-light)_0%,_transparent_60%)] opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-ember/50 bg-ember/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
            Winter Sale &middot; Ends 31 December
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium text-ivory">
            Winter Sale deals
          </h2>
          <p className="mt-3 font-display text-lg italic text-brass-soft">
            Use promo code TLC-BF-25
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-brass/20 bg-navy p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">
                {offer.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-xl text-ivory">
                {offer.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                {offer.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-brass/20 bg-navy-light/40 p-8">
          <p className="font-display text-lg text-ivory">
            With every eligible booking, choose one premium incentive:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PERKS.map((p) => (
              <div key={p.label}>
                <p className="font-medium text-brass-soft">{p.label}</p>
                <p className="mt-1 text-sm text-fog">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-2xl text-ivory">
            25% deposit, not the usual 50%
          </p>
          <p className="max-w-xl text-sm text-fog">
            Secure your Winter Sale offer with just a 25% deposit on any
            booking made between 13 November and 31 December 2025 under
            promo code <span className="text-brass-soft">TLC-BF-25</span>.
          </p>
          <a
            href="#enquire"
            className="mt-4 inline-flex rounded-full bg-brass px-8 py-3 text-sm font-semibold text-ink"
          >
            Claim the Winter Sale
          </a>
        </div>
      </div>
    </section>
  );
}
