"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CustomSelectProps {
  id?: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export function CustomSelect({
  id,
  name,
  required,
  defaultValue = "",
  options,
  placeholder = "Select…",
  className,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeOption = options.find((o) => o.value === selected);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Hidden input for native form submission */}
      <input type="hidden" id={id} name={name} value={selected} required={required} />

      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-lg border border-brass/15 bg-navy/60 px-4 text-sm outline-none transition-colors",
          "focus:border-brass/50 focus:ring-1 focus:ring-brass/20",
          open && "border-brass/50 ring-1 ring-brass/20",
          activeOption ? "text-ivory" : "text-fog/50",
        )}
      >
        <span>{activeOption ? activeOption.label : placeholder}</span>
        <ChevronDown
          size={13}
          className={cn("text-fog shrink-0 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-brass/20 bg-navy shadow-[0_16px_48px_-8px_rgba(0,0,0,0.7)]"
          >
            {options.map((opt) => (
              <li key={opt.value} role="option" aria-selected={selected === opt.value}>
                <button
                  type="button"
                  disabled={opt.disabled}
                  onClick={() => {
                    if (!opt.disabled) { setSelected(opt.value); setOpen(false); }
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors",
                    opt.disabled
                      ? "cursor-not-allowed text-fog/30"
                      : "cursor-pointer text-ivory hover:bg-brass/10 hover:text-brass-soft",
                    selected === opt.value && "text-brass-soft",
                  )}
                >
                  {opt.label}
                  {selected === opt.value && <Check size={13} className="text-brass shrink-0" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
