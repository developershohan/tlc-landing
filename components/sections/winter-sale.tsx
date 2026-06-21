"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

import { EmberParticles } from "@/components/effects/ember-particles";

const OFFERS = [
  {
    title: "The Dixie Queen Wildcard",
    eyebrow: "For large-scale celebrations",
    body: "Get exclusive access to the Dixie Queen, including a Tower Bridge lift, with a bespoke quote built around your date, numbers and budget.",
  },
  {
    title: "Unbelievable Midweek Rate",
    eyebrow: "Mon–Wed · Jan–Mar 2026",
    body: "A fixed £2,000 (incl. VAT) rate for a 4-hour Elizabethan charter, any time of day. Limited availability — book early.",
  },
  {
    title: "Small Group, Big Upgrade",
    eyebrow: "75 guests or fewer",
    body: "Get the Elizabethan at the Edwardian rate — a complimentary upgrade to our most luxurious vessel, any day of the week.",
  },
];

const PERKS = [
  { label: "Complimentary arrival drink", detail: "A glass of bubbly or beer for every guest, up to 300." },
  { label: "40% off boat hire",           detail: "On a 4-hour Elizabethan charter, any day of the week." },
  { label: "Free entertainment upgrade",  detail: "Choose a DJ, live singer or photo booth, subject to availability." },
];

const PROMO = "TLC-BF-25";

export function WinterSale() {
  const [copied, setCopied] = useState(false);

  const copyPromo = () => {
    navigator.clipboard.writeText(PROMO).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="winter-sale" className="relative overflow-hidden bg-ink px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--color-navy-light)_0%,_transparent_60%)] opacity-60" />
      <EmberParticles count={4} />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">

          {/* Badge with ember pulse ring */}
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(140,59,46,0)",
                "0 0 0 7px rgba(140,59,46,0.14)",
                "0 0 0 0px rgba(140,59,46,0)",
              ],
            }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
            className="rounded-full border border-ember/50 bg-ember/15 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-ember"
          >
            Winter Sale &middot; Ends 31 December
          </motion.span>

          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium text-ivory">
            Winter Sale deals
          </h2>

          {/* Promo code — click to copy */}
          <button
            onClick={copyPromo}
            aria-label="Copy promo code"
            className="group mt-3 inline-flex cursor-pointer items-center gap-2 font-display text-lg italic text-brass-soft transition-colors hover:text-brass"
          >
            Use promo code {PROMO}
            <span className="transition-transform group-hover:scale-110">
              {copied
                ? <Check size={15} className="text-brass" />
                : <Copy size={14} className="opacity-40 group-hover:opacity-90" />}
            </span>
          </button>

          <AnimatePresence>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brass"
              >
                Copied to clipboard
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Offer cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 0 1px rgba(200,162,74,0.28), 0 28px 60px -20px rgba(200,162,74,0.12)",
                transition: { type: "spring", stiffness: 280, damping: 20 },
              }}
              className="rounded-2xl border border-brass/20 bg-navy p-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">{offer.eyebrow}</p>
              <h3 className="mt-3 font-display text-xl text-ivory">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{offer.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Perks row */}
        <div className="mt-10 rounded-2xl border border-brass/20 bg-navy-light/40 p-8">
          <p className="font-display text-lg text-ivory">With every eligible booking, choose one premium incentive:</p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              >
                <p className="font-medium text-brass-soft">{p.label}</p>
                <p className="mt-1 text-sm text-fog">{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deposit + CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-2xl text-ivory">25% deposit, not the usual 50%</p>
          <p className="max-w-xl text-sm text-fog">
            Secure your Winter Sale offer with just a 25% deposit on any booking made between
            13 November and 31 December 2025 under promo code{" "}
            <span className="text-brass-soft">{PROMO}</span>.
          </p>
          <motion.a
            href="#enquire"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="mt-4 inline-flex rounded-full bg-brass px-8 py-3 text-sm font-semibold text-ink"
          >
            Claim the Winter Sale
          </motion.a>
        </div>
      </div>
    </section>
  );
}
