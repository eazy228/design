import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]",
        className
      )}
      {...props}
    />
  );
}
