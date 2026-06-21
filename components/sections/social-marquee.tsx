"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const SHOTS = [
  { src: "/images/-003.jpg" },
  { src: "/images/-005.jpg" },
  { src: "/images/-006.png" },
  { src: "/images/-007.jpg" },
  { src: "/images/-008.jpg" },
  { src: "/images/-009.jpg" },
  { src: "/images/-010.jpg" },
  { src: "/images/-011.jpg" },
];

// All cards at same angle — uniform diagonal band look
const CARD_W        = 380;
const CARD_H        = 460;
const GAP           = 28;
const SCROLL_SPEED  = 42; // px per second

export function SocialMarquee() {
  const [maxDrag, setMaxDrag] = useState(0);
  const x           = useMotionValue(0);
  const isDragging  = useRef(false);
  const resumeTimer = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const total = SHOTS.length * (CARD_W + GAP) + 160;
      setMaxDrag(Math.max(0, total - window.innerWidth));
    };
    // defer initial setState to next frame — avoids synchronous setState inside effect
    const rafId = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Auto-scroll; pauses while dragging, resets to 0 when end is reached
  useAnimationFrame((_, delta) => {
    if (isDragging.current || maxDrag === 0) return;
    const next = x.get() - (delta / 1000) * SCROLL_SPEED;
    x.set(next < -maxDrag ? 0 : next);
  });

  return (
    <section className="relative overflow-hidden bg-ink py-24">

      {/* Top gradient edge — premium section-entry fade */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-36 z-20 bg-linear-to-b from-ink via-ink/70 to-transparent" />
      {/* Side fades so dragging feels boundless */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20 bg-linear-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20 bg-linear-to-l from-ink to-transparent" />

      {/* Header stays horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-30 mx-auto mb-12 max-w-6xl px-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
          &mdash; Follow us &mdash;
        </p>
        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] text-ivory">
          We&rsquo;re on Instagram
        </h2>
      </motion.div>

      {/* Card strip — only this wrapper is at 30° */}
      <div className="relative" style={{ height: CARD_H + 120 }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragMomentum={false}
          dragElastic={0.04}
          style={{
            x,
            cursor: "grab",
            gap: GAP,
            paddingTop: 60,
            paddingBottom: 60,
            paddingLeft: "8vw",
            paddingRight: "12vw",
          }}
          whileDrag={{ cursor: "grabbing" }}
          onDragStart={() => {
            isDragging.current = true;
            if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
          }}
          onDragEnd={() => {
            resumeTimer.current = window.setTimeout(() => {
              isDragging.current = false;
            }, 1500);
          }}
          className="flex w-max select-none items-center -rotate-10 -mt-40 pb-2"
        >
          {SHOTS.map((shot, i) => (
            <motion.div
              key={i}
              style={{
                width: CARD_W,
                height: CARD_H,
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative shrink-0 overflow-hidden rounded-2xl border border-brass/20 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.7)]"
            >
              <img
                src={shot.src}
                alt="Thames Luxury Charters"
                className="h-full w-full object-cover pointer-events-none"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Below-strip row: drag hint left, watermark text right — fully visible, no image overlap */}
      <div className="relative z-10 mt-30 w[full] px-8 flex items-end justify-end gap-4">

        <p
          aria-hidden
          className="pointer-events-none select-none font-display font-bold uppercase text-ivory/15 text-[clamp(2.2rem,6.5vw,8rem)] text-right leading-[0.85]"
        >
          IT&apos;S MORE<br />THAN A<br />CHARTER.
        </p>
      </div>
    </section>
  );
}
