"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollVessel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, { rotateX: 26, scale: 0.84, y: 60 });

      gsap.to(cardRef.current, {
        rotateX: 0,
        scale: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      });

      gsap.to(headingRef.current, {
        y: -40,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 5%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[120vh] flex-col items-center justify-center bg-ink px-6 py-24"
      style={{ perspective: "1400px" }}
    >
      <div
        ref={headingRef}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft">
          The No.1 choice on the River Thames since 1993
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium text-ivory">
          Step aboard, and the city falls away
        </h2>
      </div>

      <div
        ref={cardRef}
        className="relative mx-auto h-[60vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-brass/25 bg-navy shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)]"
      >
        {/*
          IMAGE PLACEHOLDER
          Replace with a wide shot of the fleet passing Tower Bridge at
          /public/images/fleet-bridge.jpg, e.g.
          <img src="/images/fleet-bridge.jpg" alt="A Thames Luxury Charters vessel
            passing beneath a raised Tower Bridge" className="h-full w-full object-cover" />
        */}
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,_var(--color-navy)_0%,_var(--color-navy-light)_55%,_var(--color-ink)_100%)]">
          <div className="text-center">
            <p className="font-display text-2xl text-brass-soft">
              [ Image: fleet passing Tower Bridge ]
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
              /public/images/fleet-bridge.jpg
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" />
      </div>
    </section>
  );
}
