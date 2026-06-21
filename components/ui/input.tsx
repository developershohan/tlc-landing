import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-brass/15 bg-navy/60 px-4 py-2.5 text-sm text-ivory placeholder:text-fog/40 outline-none transition-colors focus:border-brass/50 focus:ring-1 focus:ring-brass/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
export { Input };
