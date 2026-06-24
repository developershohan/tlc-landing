"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ContainerScrollSection() {
  return (
    <div className="relative flex flex-col bg-ink">
      {/* ponytail: ai-content marker — remove before launch */}
      <div aria-hidden className="pointer-events-none absolute right-4 top-3 z-50">
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black">
          ⚠ AI Content — replace heading &amp; subtitle
        </span>
      </div>
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass-soft mb-4">
              Step aboard
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight text-ivory text-balance">
              London&rsquo;s finest private charter fleet
            </h2>
            <p className="mt-4 text-lg text-ivory/60 max-w-xl mx-auto">
              Three beautifully appointed vessels. One river. Every occasion.
            </p>
          </>
        }
      >
        <img
          src="/images/-005.jpg"
          alt="The Dixie Queen — Thames Luxury Charters flagship vessel"
          className="mx-auto h-full w-full object-cover object-center rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
