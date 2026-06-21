"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Vessel = {
  id:       string;
  name:     string;
  tag:      string;
  blurb:    string;
  details:  string[];
  span:     string;
  imageHint: string;
};

const VESSELS: Vessel[] = [
  {
    id:   "dixie-queen",
    name: "The Dixie Queen",
    tag:  "Up to 620 guests",
    blurb:
      "London's largest luxury charter boat — a magnificent paddle steamer, and the only vessel in our fleet that requires Tower Bridge to lift to let her pass.",
    details: ["Fine dining for 432", "Two bars", "Dance floor"],
    span:     "md:col-span-2 md:row-span-2",
    imageHint: "/images/-011.jpg",
  },
  {
    id:   "elizabethan",
    name: "The Elizabethan",
    tag:  "Up to 235 guests",
    blurb:
      "A beautiful stern-wheeled Mississippi paddle steamer with elegant open decks and refined interiors — ideal for weddings, dinners and refined private parties.",
    details: ["Fine dining for 140", "Two bars", "Open upper deck"],
    span:     "md:col-span-1 md:row-span-2",
    imageHint: "/images/-012.jpg",
  },
  {
    id:   "edwardian",
    name: "The Edwardian",
    tag:  "Up to 90 guests",
    blurb:
      "The epitome of British style — a star of the Queen's Diamond Jubilee River Pageant and many film and TV appearances, perfect for intimate, exclusive events.",
    details: ["Fine dining for 60", "One bar", "Open & covered decks"],
    span:     "md:col-span-1 md:row-span-1",
    imageHint: "/images/-013.jpg",
  },
];

export function FleetGallery() {
  const [selected, setSelected] = useState<Vessel | null>(null);

  return (
    <section id="fleet" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
              The Fleet
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ivory">
              Three distinguished boats, each with its own character
            </h2>
          </div>
          <p className="max-w-sm text-sm text-fog">
            From grand celebrations to intimate gatherings on the water.
            Every charter includes catering from FoodbyDish and matched fine wines.
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {VESSELS.map((v) => (
            <motion.button
              key={v.id}
              layoutId={`vessel-${v.id}`}
              onClick={() => setSelected(v)}
              variants={{
                hidden:   { opacity: 0, y: 30 },
                visible:  { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.015 }}
              className={cn(
                "group relative min-h-50 overflow-hidden rounded-2xl border border-brass/15 bg-navy text-left cursor-pointer",
                v.span,
              )}
            >
              <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                <img src={v.imageHint} alt={v.name} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">
                  {v.tag}
                </p>
                <h3 className="mt-1 font-display text-xl text-ivory">{v.name}</h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`vessel-${selected.id}`}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-brass/25 bg-navy p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-brass/30 bg-navy p-2 text-ivory cursor-pointer hover:border-brass transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={selected.imageHint}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">
                {selected.tag}
              </p>
              <h3 className="mt-2 font-display text-3xl text-ivory">{selected.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{selected.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {selected.details.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-brass/20 bg-ink/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brass-soft"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                onClick={() => setSelected(null)}
                className="mt-6 inline-block rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors"
              >
                Enquire about {selected.name}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
