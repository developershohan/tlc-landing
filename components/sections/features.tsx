"use client";

import { motion } from "framer-motion";
import {
  Users, UtensilsCrossed, Music4, Anchor, MapPin, Wine, ArrowUpRight,
} from "lucide-react";
import { SectionSpotlight } from "@/components/effects/section-spotlight";

const FEATURES = [
  { icon: Users,           title: "Up to 300 guests",       body: "From intimate dinners to full-scale celebrations across the fleet." },
  { icon: UtensilsCrossed, title: "Catering by FoodbyDish", body: "Delicate, seasonal menus prepared and served on board." },
  { icon: Wine,            title: "Matched fine wines",      body: "A cellar selected to complement every course." },
  { icon: Music4,          title: "Entertainment upgrades",  body: "Add a DJ, live singer or photo booth to set the mood." },
  { icon: Anchor,          title: "Tower Bridge lift",       body: "A showstopping arrival aboard the Dixie Queen, on request." },
  { icon: MapPin,          title: "Central London piers",    body: "Board moments from the City &mdash; no special venue required." },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-28">
      <SectionSpotlight />
      <div className="absolute right-[-10%] top-1/2 hidden w-[55%] -translate-y-1/2 text-ink/40 lg:block" aria-hidden>
        <svg viewBox="0 0 600 200" fill="currentColor" className="w-full">
          <path d="M20 140 L580 140 L510 175 L90 175 Z" />
          <rect x="170" y="92" width="260" height="50" rx="6" />
          <rect x="260" y="60" width="110" height="34" rx="4" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">On board</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-ivory text-balance">
            Everything your event needs, already aboard
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brass/15 bg-brass/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative flex flex-col bg-navy p-8"
              >
                {/* Icon: spring bounce on hover, not just color swap */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 350, damping: 14 }}
                  className="inline-block w-fit"
                >
                  <Icon className="text-brass" size={32} strokeWidth={1.5} aria-hidden />
                </motion.div>

                <h3 className="mt-6 font-display text-lg font-medium text-ivory">{f.title}</h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-fog"
                  dangerouslySetInnerHTML={{ __html: f.body }}
                />

                {/* Brass line draws left → right on card hover */}
                <div className="mt-auto pt-8">
                  <div className="h-px w-0 bg-linear-to-r from-brass/50 to-brass/10 transition-[width] duration-500 ease-out group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}

          {/* CTA tile */}
          <a
            href="#fleet"
            className="group flex items-center justify-between gap-4 bg-ink p-8 transition-colors hover:bg-navy-light"
          >
            <span className="font-display text-lg font-medium text-ivory">Explore the fleet</span>
            <motion.div
              whileHover={{ x: 5, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <ArrowUpRight className="text-brass" aria-hidden />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
