import type { SVGProps } from "react";

/**
 * SolidChange brand marks.
 *
 * Three logo directions are exported. Each is a tree-shakable SVG component
 * with no external dependencies. Colors default to the palette CSS vars
 * (--color-accent, --color-bg) so the mark adapts to theme.
 *
 *   <LogoMark variant="seal" />       — Default. Rounded square with SC monogram.
 *   <LogoMark variant="exchange" />   — Abstract two-arrow exchange glyph.
 *   <LogoMark variant="initial" />    — Single-letter S in a champagne square.
 *   <LogoWordmark />                  — Type-only "SolidChange".
 *   <LogoLockup variant="..." />      — Mark + wordmark in a single line.
 */

type MarkVariant = "seal" | "exchange" | "initial";

type MarkProps = SVGProps<SVGSVGElement> & {
  variant?: MarkVariant;
  /** Stroke / fill color for the mark glyphs. Defaults to --color-accent. */
  fg?: string;
  /** Background fill behind the glyphs (for `seal` / `initial`). Defaults transparent. */
  bg?: string;
  /** Title used for a11y. */
  title?: string;
};

export function LogoMark({
  variant = "seal",
  fg = "var(--color-accent)",
  bg = "transparent",
  title = "SolidChange",
  ...rest
}: MarkProps) {
  if (variant === "exchange") return <ExchangeMark fg={fg} title={title} {...rest} />;
  if (variant === "initial") return <InitialMark fg={fg} bg={bg} title={title} {...rest} />;
  return <SealMark fg={fg} bg={bg} title={title} {...rest} />;
}

/* ───────── Variant 1 — Seal (default) ─────────
 * Rounded square seal with an interlocked SC monogram.
 * The C is a three-quarter arc opening to the right.
 * The S sits inside, drawn as two opposed quarter-arcs that
 * also read as exchange-flow when looked at as a glyph.
 * Reads at 16px (favicon) and 256px+ (hero) without losing identity.
 */
function SealMark({
  fg,
  bg,
  title,
  ...rest
}: { fg: string; bg: string; title: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...rest}
    >
      <title>{title}</title>
      <rect
        x="1.25"
        y="1.25"
        width="29.5"
        height="29.5"
        rx="7.5"
        fill={bg}
        stroke={fg}
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      {/* C — three-quarter arc, opening to the right */}
      <path
        d="M22.5 9.5C19.5 7.5 12 7.5 9.5 12.5C7 17.5 9 22.5 14 24C18 25.2 21.5 23.5 23.5 21"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* S — two opposing quarter-arcs forming an exchange S */}
      <path
        d="M19 13.5C17 12.8 13.5 13.2 13.5 15.2C13.5 17 17 17 18.5 17.5C20 18 20 20 18 20.6C16 21.2 13 20.8 12.5 20"
        stroke={fg}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ───────── Variant 2 — Exchange ─────────
 * Two opposing chevrons forming an "S" of motion.
 * Pure mark — no enclosing frame. Suits headers where the
 * wordmark sits right next to it.
 */
function ExchangeMark({
  fg,
  title,
  ...rest
}: { fg: string; title: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...rest}
    >
      <title>{title}</title>
      {/* Top chevron pointing right */}
      <path
        d="M6 11.5L13.5 11.5L18 7"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 11.5L19.5 16"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom chevron pointing left */}
      <path
        d="M26 20.5L18.5 20.5L14 25"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 20.5L12.5 16"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ───────── Variant 3 — Initial ─────────
 * A bold S letterform reversed-out of a champagne square.
 * Maximum contrast and recognition at favicon sizes.
 */
function InitialMark({
  fg,
  bg,
  title,
  ...rest
}: { fg: string; bg: string; title: string } & SVGProps<SVGSVGElement>) {
  // For `initial`, the colors invert: square is fg, letter is bg.
  const square = fg;
  const letter = bg === "transparent" ? "var(--color-bg)" : bg;
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...rest}
    >
      <title>{title}</title>
      <rect x="0" y="0" width="32" height="32" rx="7.5" fill={square} />
      <path
        d="M20.8 11.5C19.4 10.4 17.6 9.8 15.5 9.8C12.6 9.8 10.4 11.2 10.4 13.4C10.4 15.4 12 16.3 15 17C18.2 17.7 21 18.6 21 21.3C21 23.8 18.5 25.5 15.3 25.5C13 25.5 10.9 24.7 9.5 23.4"
        stroke={letter}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ───────── Wordmark ─────────
 * Type-only "SolidChange". The "Change" portion can pick up the accent
 * color to signal motion. Designed to sit at 18-32px line-height.
 */
export function LogoWordmark({
  className,
  highlight = true,
  ...rest
}: { className?: string; highlight?: boolean } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={className}
      style={{
        fontWeight: 600,
        letterSpacing: "-0.012em",
        fontFeatureSettings: '"ss01", "cv11"',
      }}
      {...rest}
    >
      <span style={{ color: "var(--color-text-primary)" }}>Solid</span>
      <span
        style={{
          color: highlight ? "var(--color-accent)" : "var(--color-text-primary)",
        }}
      >
        Change
      </span>
    </span>
  );
}

/* ───────── Lockup ─────────
 * Horizontal lockup: mark + wordmark with rule-of-optical spacing.
 */
type LockupProps = {
  variant?: MarkVariant;
  size?: number;
  highlight?: boolean;
  className?: string;
};

export function LogoLockup({
  variant = "seal",
  size = 28,
  highlight = true,
  className,
}: LockupProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: Math.max(8, Math.round(size * 0.32)),
        lineHeight: 1,
      }}
    >
      <LogoMark
        variant={variant}
        style={{ width: size, height: size, flex: "0 0 auto" }}
      />
      <LogoWordmark
        highlight={highlight}
        style={{ fontSize: Math.round(size * 0.62) }}
      />
    </span>
  );
}
