"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Ship, Sparkles, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Fleet", href: "#fleet", icon: Ship },
  { name: "Occasions", href: "#occasions", icon: Sparkles },
  { name: "Winter Sale", href: "#winter-sale", icon: Anchor },
  { name: "Enquire", href: "#enquire", icon: PhoneCall },
];

export function FloatingNav() {
  const [active, setActive] = useState(NAV_ITEMS[0].href);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href),
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500",
        scrolled ? "pt-3" : "pt-6",
      )}
    >
      <div className="flex w-full max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border border-brass/20 bg-ink/70 px-4 py-2 backdrop-blur-lg"
        >
          <img
            src="/images/logo.png"
            alt="Thames Luxury Charters"
            className="h-8 w-auto"
          />
          <span className="hidden sm:inline font-display text-sm tracking-[0.18em] text-ivory">
            THAMES LUXURY CHARTERS
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-brass/15 bg-ink/60 p-1 backdrop-blur-lg md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium text-ivory/70 transition-colors hover:text-brass-soft",
                  isActive && "text-ink",
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-lamp"
                    className="absolute inset-0 -z-0 rounded-full bg-brass"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  >
                    <span className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-brass-soft blur-[1px]" />
                  </motion.span>
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="tel:02073577751"
          className="hidden items-center gap-2 rounded-full border border-brass/40 bg-ink/70 px-4 py-2 text-sm font-medium text-brass-soft backdrop-blur-lg sm:flex"
        >
          020 7357 7751
        </a>
      </div>
    </header>
  );
}
