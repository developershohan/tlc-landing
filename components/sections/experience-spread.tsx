"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Mobile: pure CSS 1-column grid, no JS ─────────────────────────── */
function MobileLayout() {
  return (
    <div className="bg-ink px-5 py-20 sm:hidden">
      <div className="mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
          &mdash; the experience &mdash;
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.8rem,6vw,2.6rem)] tracking-tight text-ivory">
          A luxury charter experience
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { src: "/images/-008.jpg", alt: "On board dining" },
          { src: "/images/-009.jpg", alt: "Thames charter experience" },
          { src: "/images/-010.jpg", alt: "Evening on the river" },
        ].map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-xl border border-brass/15"
            style={{ height: "56vw" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-base leading-relaxed text-fog">
        From the first arrival drink to the last dance under the lights —
        every detail handled by a crew that has hosted the Thames since 1993.
      </p>
    </div>
  );
}

/* ─── Desktop: scroll-animated spread ───────────────────────────────── */
function DesktopLayout() {
  const ref = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(400);

  useEffect(() => {
    const update = () => setSpread(Math.min(400, window.innerWidth * 0.28));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const leftX   = useTransform(scrollYProgress, [0.08, 0.52, 1], [0, -spread, -spread]);
  const rightX  = useTransform(scrollYProgress, [0.08, 0.52, 1], [0,  spread,  spread]);
  const sidesY  = useTransform(scrollYProgress, [0.08, 0.52, 1], [0, -52, -52]);
  const sidesOp = useTransform(scrollYProgress, [0.06, 0.22, 1], [0, 1, 1]);
  const topOp   = useTransform(scrollYProgress, [0.5,  0.68, 1], [0, 1, 1]);
  const topY    = useTransform(scrollYProgress, [0.5,  0.68, 1], [-30, 0, 0]);
  const botOp   = useTransform(scrollYProgress, [0.58, 0.76, 1], [0, 1, 1]);
  const botY    = useTransform(scrollYProgress, [0.58, 0.76, 1], [28, 0, 0]);

  return (
    <div
      ref={ref}
      style={{ height: "calc(1800px + 100vh)" }}
      className="relative hidden bg-ink sm:block"
    >
      <div className="sticky top-10 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Headline */}
        <motion.div
          style={{ opacity: topOp, y: topY }}
          className="absolute top-[5%] z-30 w-full px-4 text-center pointer-events-none"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
            &mdash; the experience &mdash;
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,3.5rem)] tracking-tight text-ivory">
            A luxury charter experience
          </h2>
        </motion.div>

        {/* Image trio */}
        <div className="relative flex items-center justify-center" style={{ height: "65vh", width: "100%" }}>
          <motion.div
            style={{ x: leftX, y: sidesY, opacity: sidesOp }}
            className="absolute w-[24vw] max-w-80 h-[48vh] overflow-hidden rounded-xl border border-brass/15 shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75)]"
          >
            <img src="/images/-008.jpg" alt="On board dining" className="h-full w-full object-cover" draggable={false} />
          </motion.div>

          <motion.div
            style={{ x: rightX, y: sidesY, opacity: sidesOp }}
            className="absolute w-[24vw] max-w-80 h-[48vh] overflow-hidden rounded-xl border border-brass/15 shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75)]"
          >
            <img src="/images/-010.jpg" alt="Evening on the river" className="h-full w-full object-cover" draggable={false} />
          </motion.div>

          <div className="relative z-10 w-[30vw] max-w-100 h-[56vh] overflow-hidden rounded-2xl border border-brass/25 shadow-[0_44px_110px_-20px_rgba(0,0,0,0.9)]">
            <img src="/images/-009.jpg" alt="Thames charter experience" className="h-full w-full object-cover" draggable={false} />
          </div>
        </div>

        {/* Caption */}
        <motion.p
          style={{ opacity: botOp, y: botY }}
          className="absolute bottom-[9%] z-30 max-w-sm px-6 text-center text-base leading-relaxed text-fog"
        >
          From the first arrival drink to the last dance under the lights —
          every detail handled by a crew that has hosted the Thames since 1993.
        </motion.p>
      </div>
    </div>
  );
}

export function ExperienceSpread() {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
}
