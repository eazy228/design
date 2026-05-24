import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "flex h-12 w-full rounded-[12px] border border-[var(--color-border-subtle)] bg-transparent px-3 text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors focus:border-[var(--color-border-strong)] focus:outline-none tabular-nums",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
