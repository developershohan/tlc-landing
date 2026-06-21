import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-px w-full bg-brass/10", className)}
      role="separator"
      {...props}
    />
  ),
);
Separator.displayName = "Separator";
export { Separator };
