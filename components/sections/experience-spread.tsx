"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PHOTOS = [
  { hint: "/images/-008.jpg", side: "left" },
  { hint: "/images/-009.jpg", side: "center" },
  { hint: "/images/-010.jpg", side: "right" },
];

export function ExperienceSpread() {
  const root = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=1800",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(intro.current, { opacity: 0, y: -40, duration: 0.6 }, 0)
        .fromTo(
          left.current,
          { xPercent: 0 },
          { xPercent: -62, ease: "power1.out", duration: 1.4 },
          0,
        )
        .fromTo(
          right.current,
          { xPercent: 0 },
          { xPercent: 62, ease: "power1.out", duration: 1.4 },
          0,
        )
        .fromTo(
          caption.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9,
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <div
        ref={intro}
        className="absolute z-20 px-6 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
          &mdash; the experience &mdash;
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-ivory">
          A luxury charter experience
        </h2>
      </div>

      <div className="relative flex w-full max-w-2xl items-center justify-center px-6">
        <Photo ref={left} hint={PHOTOS[0].hint} z={10} />
        <Photo hint={PHOTOS[1].hint} z={20} center />
        <Photo ref={right} hint={PHOTOS[2].hint} z={10} />
      </div>

      <p
        ref={caption}
        className="absolute bottom-16 z-20 max-w-md px-6 text-center text-sm leading-relaxed text-fog"
      >
        From the first arrival drink to the last dance under the lights, every
        detail is handled by a team that has hosted the Thames since 1993.
      </p>
    </section>
  );
}

const Photo = ({
  ref,
  hint,
  z,
  center,
}: {
  ref?: React.Ref<HTMLDivElement>;
  hint: string;
  z: number;
  center?: boolean;
}) => (
  <div
    ref={ref}
    style={{ zIndex: z }}
    className={`${
      center ? "relative" : "absolute"
    } aspect-[3/4] w-56 overflow-hidden rounded-2xl border border-brass/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:w-72`}
  >
    <img
      src={hint}
      alt="On board experience"
      className="h-full w-full object-cover"
    />
  </div>
);
