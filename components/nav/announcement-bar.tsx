"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible]   = useState(true);
  const [dismissed, setDismiss] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => setVisible(window.scrollY < 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence initial={false}>
      {visible && !dismissed && (
        <motion.div
          key="bar"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-x-0 top-0 z-60 flex items-center justify-center border-b border-brass/20 bg-navy px-8 py-3 text-center text-xs text-ivory sm:text-sm"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brass" />
          {/* Mobile: short */}
          <span className="sm:hidden">
            Up to <strong className="text-brass-soft">40% off</strong> — code{" "}
            <span className="font-mono text-brass-soft">TLC-BF-25</span>
          </span>
          {/* Desktop: full */}
          <span className="hidden sm:inline">
            Winter Sale — up to{" "}
            <strong className="font-semibold text-brass-soft">40% off</strong>
            {" "}midweek charters. Use code{" "}
            <span className="ml-1 rounded border border-brass/30 bg-brass/10 px-2 py-0.5 font-mono text-xs tracking-widest text-brass-soft">
              TLC-BF-25
            </span>
          </span>
          <button
            onClick={() => setDismiss(true)}
            aria-label="Dismiss"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-fog transition-colors hover:text-ivory"
          >
            <X size={15} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
