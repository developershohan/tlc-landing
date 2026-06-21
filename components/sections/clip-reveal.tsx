"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const SECTION_HEIGHT = 1400;

/* A framed window of the river that expands to full-bleed as you scroll,
   while smaller stills drift past in parallax. Replace each labelled block
   with an <img>/<video> at the path shown. */
export function ClipReveal() {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full bg-ink"
    >
      <CenterFrame />
      <ParallaxStills />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-ink/0 to-ink" />
    </div>
  );
}

function CenterFrame() {
  const { scrollY } = useScroll();

  const clipStart = useTransform(scrollY, [0, SECTION_HEIGHT], [22, 0]);
  const clipEnd = useTransform(scrollY, [0, SECTION_HEIGHT], [78, 100]);
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const size = useTransform(scrollY, [0, SECTION_HEIGHT + 400], ["165%", "100%"]);
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 400],
    [1, 0],
  );

  return (
    <motion.div
      suppressHydrationWarning
      style={{ clipPath, opacity }}
      className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <motion.img
        suppressHydrationWarning
        src="/images/-001.jpg"
        alt="The Thames at dusk seen from on deck"
        style={{ height: size, width: size, objectFit: "cover" }}
      />
    </motion.div>
  );
}

const STILLS = [
  { hint: "/images/-002.jpg", start: -200, end: 200, className: "w-1/3" },
  { hint: "/images/-003.jpg", start: 200, end: -250, className: "mx-auto w-2/3" },
  { hint: "/images/-005.jpg", start: -200, end: 200, className: "ml-auto w-1/3" },
  { hint: "/images/-006.png", start: 0, end: -500, className: "ml-24 w-5/12" },
];

function ParallaxStills() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {STILLS.map((s, i) => (
        <ParallaxStill key={i} {...s} />
      ))}
    </div>
  );
}

function ParallaxStill({
  hint,
  start,
  end,
  className,
}: {
  hint: string;
  start: number;
  end: number;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      ref={ref}
      style={{ transform, opacity }}
      className={`${className} mb-6 aspect-[4/3] overflow-hidden rounded-xl border border-brass/15`}
    >
      <img
        src={hint}
        alt="Thames Luxury Charters"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}
