"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Ship, Sparkles, PhoneCall, Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500",
          scrolled ? "pt-3" : "pt-6",
        )}
      >
        <div className="flex w-full max-w-6xl items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full border border-brass/20 bg-ink/70 px-4 py-2 backdrop-blur-lg"
          >
            <img src="/images/logo.png" alt="Thames Luxury Charters" className="h-8 w-auto" />
            <span className="hidden sm:inline font-display text-sm tracking-[0.18em] text-ivory">
              THAMES LUXURY CHARTERS
            </span>
          </a>

          {/* Desktop nav */}
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
                      className="absolute inset-0 z-0 rounded-full bg-brass"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    >
                      <span className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-brass-soft blur-[1px]" />
                    </motion.span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop phone */}
          <a
            href="tel:02073577751"
            className="hidden items-center gap-2 rounded-full border border-brass/40 bg-ink/70 px-4 py-2 text-sm font-medium text-brass-soft backdrop-blur-lg sm:flex md:flex"
          >
            020 7357 7751
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex items-center justify-center rounded-full border border-brass/20 bg-ink/70 p-3 text-brass-soft backdrop-blur-lg md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink md:hidden"
          >
            {/* Brass gradient top accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brass/60 to-transparent" />

            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {NAV_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => closeMenu(item.href)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    className="group flex w-full items-center gap-4 rounded-2xl border border-brass/10 px-6 py-5 transition-colors hover:border-brass/40 hover:bg-navy-light"
                  >
                    <Icon size={20} className="text-brass" strokeWidth={1.5} />
                    <span className="font-display text-2xl font-medium text-ivory group-hover:text-brass-soft">
                      {item.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="border-t border-brass/10 px-8 py-8 text-center">
              <a
                href="tel:02073577751"
                className="inline-flex items-center gap-2 text-sm font-medium text-brass-soft"
              >
                <PhoneCall size={16} />
                020 7357 7751
              </a>
              <p className="mt-2 text-xs text-fog">
                Private charter vessels &middot; River Thames &middot; Est. 1993
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
