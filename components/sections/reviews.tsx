"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:  "The boat was beautifully refurbished recently and all our guests were amazed by it. The staff were wonderful on the day.",
    name:   "Andrew & Tara H",
    detail: "Wedding · The Elizabethan",
  },
  {
    quote:  "Everyone loved the boat and your staff were super helpful. The set up was amazing and the food looked and tasted great.",
    name:   "Eleanor & David",
    detail: "Wedding · The Dixie Queen",
  },
  {
    quote:  "We still have guests complimenting us on how relaxed and memorable it was — the accordionist, the games, and the mouthwatering food.",
    name:   "Jay B",
    detail: "Private Lunch · The Edwardian",
  },
  {
    quote:  "An absolutely magical evening. The crew was attentive, the food was exceptional, and Tower Bridge lifting just for us was unforgettable.",
    name:   "Sarah & Michael",
    detail: "Corporate Event · The Dixie Queen",
  },
  {
    quote:  "We hired the Edwardian for a birthday dinner and it was the most elegant evening. Intimate, beautifully run, and the Thames looked stunning.",
    name:   "James K",
    detail: "Birthday Dinner · The Edwardian",
  },
  {
    quote:  "From the first enquiry to the final glass of champagne, every detail was handled with real care. Our guests are still talking about it.",
    name:   "The Thompson Family",
    detail: "Anniversary Celebration · The Elizabethan",
  },
  {
    quote:  "TLC made our wedding reception truly one of a kind. Floating past the Houses of Parliament as we had our first dance — breathtaking.",
    name:   "Priya & Rahul",
    detail: "Wedding Reception · The Elizabethan",
  },
  {
    quote:  "Our product launch on the Dixie Queen generated more buzz than any venue we've used before. Clients were genuinely wowed.",
    name:   "Michael T",
    detail: "Product Launch · The Dixie Queen",
  },
  {
    quote:  "The Christmas party was everything we hoped for — mulled wine, fantastic food, and the city glittering outside. Will be booking again.",
    name:   "Claire & Tom",
    detail: "Christmas Party · The Elizabethan",
  },
];

const col1 = TESTIMONIALS.slice(0, 3);
const col2 = TESTIMONIALS.slice(3, 6);
const col3 = TESTIMONIALS.slice(6, 9);

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="fill-brass text-brass" />
      ))}
    </div>
  );
}

function Column({
  items,
  duration = 15,
  className,
}: {
  items: typeof TESTIMONIALS;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-5 pb-5"
      >
        {[0, 1].map((_, pass) => (
          <React.Fragment key={pass}>
            {items.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-brass/15 bg-navy p-6 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
              >
                <Stars />
                <blockquote className="mt-3 text-base leading-relaxed text-ivory/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 border-t border-brass/10 pt-3">
                  <p className="text-sm font-medium text-brass-soft">{t.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-fog">
                    {t.detail}
                  </p>
                </footer>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink px-6 py-24">
      {/* ponytail: ai-content marker — remove before launch */}
      <div aria-hidden className="pointer-events-none absolute right-4 top-3 z-50">
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black">
          ⚠ AI Content — all testimonials are AI-generated, replace with real reviews
        </span>
      </div>
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft"
          >
            Loved by our guests
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium text-ivory"
          >
            A reputation built since 1993
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-3 flex items-center gap-2"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-brass text-brass" />
              ))}
            </div>
            <span className="text-sm text-fog">Genuine reviews from TLC charterers</span>
          </motion.div>
        </div>

        {/* Scrolling columns — fade top & bottom */}
        <div className="mt-14 flex justify-center gap-5 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-170">
          <Column items={col1} duration={18} />
          <Column items={col2} duration={22} className="hidden md:block" />
          <Column items={col3} duration={16} className="hidden lg:block" />
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-brass/10 pt-10"
        >
          {["Fully Licensed & Insured", "Experienced In-House Crew", "Central London Piers", "Bespoke Catering Partners"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-fog">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brass" />
              {t}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
