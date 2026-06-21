"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ContainerScrollSection() {
  return (
    <div className="flex flex-col bg-ink">
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
