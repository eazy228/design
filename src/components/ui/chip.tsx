import * as React from "react";
import { cn } from "@/lib/utils";

export const Chip = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }
>(({ className, active, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      "inline-flex h-8 items-center gap-1.5 rounded-[999px] px-3 text-[12px] font-medium uppercase tracking-[0.04em] transition-colors",
      active
        ? "border border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
        : "border border-[var(--color-border-subtle)] bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)]",
      className
    )}
    {...props}
  />
));
Chip.displayName = "Chip";
