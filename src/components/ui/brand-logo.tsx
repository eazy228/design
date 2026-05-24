"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_OPTIONS = [
  {
    id: "heritage",
    name: "Heritage Serif",
    font: "var(--font-logo-playfair)",
    className: "font-[700] tracking-[-0.035em]",
    mark: "SC",
    tagline: "Private exchange",
    markClassName: "font-[700] tracking-[-0.06em]",
    accentClassName: "from-[#F4DDB8] via-[#C8945A] to-[#8A5437]",
  },
  {
    id: "orbital",
    name: "Orbital Sans",
    font: "var(--font-logo-unbounded)",
    className: "text-[12px] font-[600] uppercase tracking-[0.02em]",
    mark: "S",
    tagline: "Crypto desk",
    markClassName: "font-[700] tracking-[-0.08em]",
    accentClassName: "from-[#FFE3B9] via-[#E8C9A0] to-[#865B3B]",
  },
  {
    id: "banking",
    name: "Banking Grotesk",
    font: "var(--font-logo-manrope)",
    className: "font-[800] tracking-[-0.04em]",
    mark: "SC",
    tagline: "Secure swaps",
    markClassName: "font-[800] tracking-[-0.08em]",
    accentClassName: "from-[#D9A86A] via-[#F2D8B4] to-[#7FB28A]",
  },
  {
    id: "editorial",
    name: "Editorial Luxe",
    font: "var(--font-logo-prata)",
    className: "text-[17px] font-[400] tracking-[-0.05em]",
    mark: "S",
    tagline: "On-chain reserves",
    markClassName: "font-[400] tracking-[-0.12em]",
    accentClassName: "from-[#FFF0D2] via-[#C9786A] to-[#6F3C33]",
  },
  {
    id: "mono",
    name: "Neo Monogram",
    font: "var(--font-logo-montserrat)",
    className: "text-[14px] font-[700] uppercase tracking-[0.08em]",
    mark: "S/C",
    tagline: "Fast AML",
    markClassName: "text-[10px] font-[800] tracking-[-0.09em]",
    accentClassName: "from-[#E8C9A0] via-[#D9A86A] to-[#F5EDE4]",
  },
  {
    id: "atelier",
    name: "Atelier Classic",
    font: "var(--font-logo-oranienbaum)",
    className: "text-[19px] font-[400] tracking-[-0.04em]",
    mark: "SC",
    tagline: "Since 2026",
    markClassName: "font-[400] tracking-[-0.1em]",
    accentClassName: "from-[#F5EDE4] via-[#E8C9A0] to-[#9A6C46]",
  },
];

const DEFAULT_LOGO = LOGO_OPTIONS[0];

type BrandLogoProps = {
  asLink?: boolean;
  className?: string;
  optionId?: (typeof LOGO_OPTIONS)[number]["id"];
  showTagline?: boolean;
  compact?: boolean;
};

export function BrandLogo({
  asLink = true,
  className,
  optionId = DEFAULT_LOGO.id,
  showTagline = false,
  compact = false,
}: BrandLogoProps) {
  const option =
    LOGO_OPTIONS.find((logoOption) => logoOption.id === optionId) ?? DEFAULT_LOGO;

  const content = (
    <>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[13px] border border-[var(--color-border-strong)] bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
        <span
          className={cn(
            "absolute inset-[-35%] rounded-full bg-gradient-to-br opacity-80 blur-[10px]",
            option.accentClassName
          )}
          aria-hidden
        />
        <span className="absolute inset-[1px] rounded-[12px] border border-white/10 bg-[rgba(11,6,8,0.72)]" />
        <span
          className={cn(
            "relative text-[11px] leading-none text-[var(--color-accent)] drop-shadow-[0_1px_8px_rgba(232,201,160,0.35)]",
            option.markClassName
          )}
          style={{ fontFamily: option.font }}
        >
          {option.mark}
        </span>
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "whitespace-nowrap text-[16px] leading-none text-[var(--color-text-primary)]",
            option.className
          )}
          style={{ fontFamily: option.font }}
        >
          Solid<span className="text-[var(--color-accent)]">Change</span>
        </span>
        {(showTagline || !compact) && (
          <span className="mt-1 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {option.tagline}
          </span>
        )}
      </span>
    </>
  );

  if (!asLink) {
    return (
      <span className={cn("group flex items-center gap-2.5", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 rounded-[14px] outline-none transition-opacity hover:opacity-90",
        className
      )}
    >
      {content}
    </Link>
  );
}

export function LogoShowcase() {
  const [selectedId, setSelectedId] = useState(DEFAULT_LOGO.id);
  const selectedOption =
    LOGO_OPTIONS.find((option) => option.id === selectedId) ?? DEFAULT_LOGO;

  return (
    <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Выбор фирменного знака
            </span>
            <h2 className="mt-2 text-[30px] font-semibold tracking-tight lg:text-[40px]">
              Варианты логотипа с разными шрифтами
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
            Нажимайте на карточки, чтобы сравнить характер бренда: от private banking
            до технологичного крипто-деска.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[28px] border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(232,201,160,0.14),rgba(21,12,16,0.72)_45%,rgba(127,178,138,0.08))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            <div className="flex min-h-[270px] flex-col justify-between rounded-[22px] border border-white/10 bg-[rgba(11,6,8,0.52)] p-6">
              <div className="flex items-center justify-between gap-4">
                <BrandLogo asLink={false} optionId={selectedOption.id} showTagline />
                <span className="rounded-full border border-[var(--color-border-subtle)] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                  Preview
                </span>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {selectedOption.name}
                </p>
                <div
                  className={cn(
                    "mt-3 text-[44px] leading-[0.95] text-[var(--color-text-primary)] sm:text-[56px]",
                    selectedOption.className
                  )}
                  style={{ fontFamily: selectedOption.font }}
                >
                  Solid
                  <span className="block text-[var(--color-accent)]">Change</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {LOGO_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                className={cn(
                  "rounded-[22px] border bg-[var(--color-bg-elevated)] p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/55",
                  selectedId === option.id
                    ? "border-[var(--color-accent)] shadow-[0_18px_45px_rgba(232,201,160,0.10)]"
                    : "border-[var(--color-border-subtle)]"
                )}
              >
                <BrandLogo
                  asLink={false}
                  optionId={option.id}
                  showTagline
                  className="scale-[0.94] origin-left"
                />
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-[12px] text-[var(--color-text-secondary)]">
                    {option.name}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-70" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
