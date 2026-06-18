"use client";

import { useEffect, useState } from "react";

export function TideProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-[3px] w-full bg-ivory/5"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-brass-soft to-brass transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
