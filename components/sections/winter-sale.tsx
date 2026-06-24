"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

import { EmberParticles } from "@/components/effects/ember-particles";

const CHRISTMAS = [
  {
    badge:  "Most popular",
    title:  "Exclusive Festive Charters",
    body:   "Take an entire vessel for your company or family — a private floating venue dressed for the season and tailored entirely to you.",
    perks:  ["Whole-boat exclusive hire", "Bespoke menus & bar packages", "Themed styling & entertainment"],
    cta:    "Enquire for your party",
  },
  {
    badge:  "",
    title:  "Shared Christmas Parties",
    body:   "Join fellow revellers for a joinable festive night — ideal for smaller teams and groups who want the full party atmosphere without booking a whole boat.",
    perks:  ["Festive three-course dinner", "DJ & dancing till late", "Welcome mulled wine"],
    cta:    "Check festive dates",
  },
];

const DEALS = [
  { figure: "40%",  label: "Off midweek rates",   detail: "Book Monday–Thursday and enjoy up to 40% off the hire of selected boats." },
  { figure: "Free", label: "Upgrade",              detail: "Complimentary entertainment package on qualifying weekend charters." },
  { figure: "25%",  label: "Deposit only",         detail: "Secure your date now with just a 25% deposit. Balance due closer to your event." },
];

const PROMO = "TLC-BF-25";

export function WinterSale() {
  const [copied, setCopied] = useState(false);

  const copyPromo = () => {
    navigator.clipboard.writeText(PROMO).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="winter-sale" className="relative overflow-hidden bg-ink px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--color-navy-light)_0%,_transparent_60%)] opacity-60" />
      <EmberParticles count={4} />

      <div className="relative mx-auto max-w-6xl space-y-20">

        {/* ── Christmas section ── */}
        <div className="relative">
          {/* ponytail: ai-content marker — remove before launch */}
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 z-50">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black">
              ⚠ AI Content — Christmas section needs real copy
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
          >
            December on the Thames
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium text-ivory"
          >
            Christmas Parties Afloat
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mt-4 max-w-2xl text-fog"
          >
            Celebrate the season in spectacular style. Cruise beneath London&rsquo;s
            glittering winter skyline with mulled wine, festive feasting and dancing till late.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CHRISTMAS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 0 1px rgba(200,162,74,0.28), 0 28px 60px -20px rgba(200,162,74,0.12)",
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
                className="rounded-2xl border border-brass/20 bg-navy p-8"
              >
                {c.badge && (
                  <span className="mb-4 inline-block rounded-full border border-brass/30 bg-brass/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brass-soft">
                    {c.badge}
                  </span>
                )}
                <h3 className="font-display text-xl text-ivory">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-fog">{c.body}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-base text-ivory/80">
                      <span className="h-1 w-1 rounded-full bg-brass shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquire"
                  className="group relative mt-6 inline-flex overflow-hidden rounded-full border border-brass/40 px-5 py-2.5 text-sm font-medium"
                >
                  <span aria-hidden className="absolute inset-0 translate-x-[-105%] bg-brass/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                  <span className="relative z-10 text-ivory transition-colors group-hover:text-brass-soft">{c.cta}</span>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-sm text-fog"
          >
            Prime December dates book months ahead — secure yours with just a 25% deposit.
          </motion.p>
        </div>

        {/* ── Winter Sale Deals ── */}
        <div>
          <div className="flex flex-col items-center text-center">
            {/* Ember pulse badge */}
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
              Limited time &middot; Winter Sale
            </motion.span>

            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium text-ivory">
              Winter Sale Deals
            </h2>
            <p className="mt-3 max-w-xl text-fog">
              On every eligible booking, choose one of the following premium inclusions —
              plus a complimentary arrival drink for your guests.
            </p>
          </div>

          {/* Deal cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {DEALS.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 0 1px rgba(200,162,74,0.28), 0 28px 60px -20px rgba(200,162,74,0.12)",
                  transition: { type: "spring", stiffness: 280, damping: 20 },
                }}
                className="rounded-2xl border border-brass/20 bg-navy p-7 text-center"
              >
                <p className="font-display text-5xl text-brass">{d.figure}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brass-soft">{d.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog">{d.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Promo code */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-fog">Use promo code</p>
            <button
              onClick={copyPromo}
              aria-label="Copy promo code"
              className="group inline-flex cursor-pointer items-center gap-2 font-display text-2xl italic text-brass-soft transition-colors hover:text-brass"
            >
              {PROMO}
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
                  className="font-mono text-[10px] uppercase tracking-widest text-brass"
                >
                  Copied to clipboard
                </motion.p>
              )}
            </AnimatePresence>
            <a
              href="#enquire"
              className="group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-full bg-brass px-8 py-3 text-sm font-semibold text-ink"
            >
              <span aria-hidden className="absolute inset-0 translate-x-[-105%] bg-brass-soft transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative z-10">Claim this offer</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
