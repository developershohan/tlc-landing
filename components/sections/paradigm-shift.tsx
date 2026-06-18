"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ParadigmShift() {
  const root = useRef<HTMLDivElement>(null);
  const bigText = useRef<HTMLDivElement>(null);
  const smallText = useRef<HTMLDivElement>(null);
  const ship = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.set(bigText.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      });
      gsap.set(smallText.current, { opacity: 0, y: 40 });
      gsap.set(ship.current, { xPercent: 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=2200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(bigText.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out",
        duration: 1,
      })
        .to(ship.current, { xPercent: -120, ease: "none", duration: 2 }, 0.2)
        .to(
          smallText.current,
          { opacity: 1, y: 0, ease: "power2.out", duration: 1 },
          1.1,
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex h-screen flex-col justify-center overflow-hidden bg-navy"
    >
      <div
        ref={ship}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 z-0 w-[60vw] -translate-y-1/2 text-brass/15"
      >
        <svg viewBox="0 0 600 150" fill="currentColor" className="w-full">
          <path d="M20 110 L580 110 L520 140 L80 140 Z" />
          <rect x="160" y="70" width="280" height="42" rx="6" />
          <rect x="250" y="44" width="120" height="30" rx="4" />
          <path d="M300 44 L300 8 L360 30 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div ref={bigText} className="will-change-[clip-path]">
          <p className="font-display text-[clamp(1.1rem,2.4vw,1.8rem)] font-normal text-ivory/70">
            Shifting your celebration from
          </p>
          <h2 className="mt-2 font-display text-[clamp(2.2rem,6.5vw,5.5rem)] font-bold leading-[0.98] tracking-tight text-ivory">
            the same four walls
          </h2>
        </div>

        <div ref={smallText} className="mt-10 max-w-3xl">
          <p className="font-display text-[clamp(1.6rem,3.6vw,3rem)] font-normal leading-tight text-ivory">
            to a private vessel gliding down{" "}
            <span className="font-bold text-brass">the open Thames</span>{" "}
            &mdash; for an evening your guests will talk about for years.
          </p>
        </div>
      </div>
    </section>
  );
}
