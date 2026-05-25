import type { SVGProps } from "react";

/**
 * SolidChange brand marks.
 *
 * 12 tree-shakable SVG mark variants — pure SVG, no external assets, all
 * theme-aware via CSS vars. Default is `seal` (interlocked SC monogram in a
 * rounded-square frame). Switch the navbar/footer to any other variant by
 * changing the `variant` prop on `<LogoLockup />`.
 *
 *   <LogoMark variant="seal" />        — Default. Rounded square + SC monogram.
 *   <LogoMark variant="exchange" />    — Two opposing chevrons (motion / swap).
 *   <LogoMark variant="initial" />     — Bold S reversed-out of a champagne square.
 *   <LogoMark variant="ingot" />       — Stylized vault bar.
 *   <LogoMark variant="vault" />       — Concentric vault door.
 *   <LogoMark variant="mobius" />      — Möbius / infinity loop.
 *   <LogoMark variant="diamond" />     — Rotated square (luxury / asset).
 *   <LogoMark variant="hex" />         — Hexagonal seal with S inside.
 *   <LogoMark variant="arch" />        — Roman arch (bank entrance).
 *   <LogoMark variant="bracket" />     — [ S ] — minimalist, exclusive.
 *   <LogoMark variant="compass" />     — Four-point compass star.
 *   <LogoMark variant="flip" />        — Bisected coin (change / flip).
 *
 * Family crest (S + D — first/last letters of «Solid»):
 *   <LogoMark variant="crest-shield" />    — Heater shield with SD monogram + chief.
 *   <LogoMark variant="crest-banner" />    — Shield with ribbon banner below.
 *   <LogoMark variant="crest-seal" />      — Round wax seal with serrated edge.
 *   <LogoMark variant="crest-per-pale" />  — Vertically split shield, S | D.
 *   <LogoMark variant="crest-fess" />      — Shield with horizontal SD band.
 *
 *   <LogoWordmark />                   — Type-only "SolidChange".
 *   <LogoLockup variant="..." />       — Mark + wordmark in a single line.
 */

export type MarkVariant =
  | "seal"
  | "exchange"
  | "initial"
  | "ingot"
  | "vault"
  | "mobius"
  | "diamond"
  | "hex"
  | "arch"
  | "bracket"
  | "compass"
  | "flip"
  | "crest-shield"
  | "crest-banner"
  | "crest-seal"
  | "crest-per-pale"
  | "crest-fess";

export const CREST_VARIANTS: MarkVariant[] = [
  "crest-shield",
  "crest-banner",
  "crest-seal",
  "crest-per-pale",
  "crest-fess",
];

export const ABSTRACT_VARIANTS: MarkVariant[] = [
  "seal",
  "exchange",
  "initial",
  "ingot",
  "vault",
  "mobius",
  "diamond",
  "hex",
  "arch",
  "bracket",
  "compass",
  "flip",
];

export const ALL_VARIANTS: MarkVariant[] = [
  ...CREST_VARIANTS,
  ...ABSTRACT_VARIANTS,
];

type MarkProps = SVGProps<SVGSVGElement> & {
  variant?: MarkVariant;
  /** Stroke / fill color for the mark glyphs. Defaults to --color-accent. */
  fg?: string;
  /** Background fill behind the glyphs. Defaults transparent. */
  bg?: string;
  /** Title used for a11y. */
  title?: string;
};

export function LogoMark({
  variant = "exchange",
  fg = "var(--color-accent)",
  bg = "transparent",
  title = "SolidChange",
  ...rest
}: MarkProps) {
  const common = { fg, bg, title, ...rest };
  switch (variant) {
    case "exchange":
      return <ExchangeMark {...common} />;
    case "initial":
      return <InitialMark {...common} />;
    case "ingot":
      return <IngotMark {...common} />;
    case "vault":
      return <VaultMark {...common} />;
    case "mobius":
      return <MobiusMark {...common} />;
    case "diamond":
      return <DiamondMark {...common} />;
    case "hex":
      return <HexMark {...common} />;
    case "arch":
      return <ArchMark {...common} />;
    case "bracket":
      return <BracketMark {...common} />;
    case "compass":
      return <CompassMark {...common} />;
    case "flip":
      return <FlipMark {...common} />;
    case "crest-shield":
      return <CrestShieldMark {...common} />;
    case "crest-banner":
      return <CrestBannerMark {...common} />;
    case "crest-seal":
      return <CrestSealMark {...common} />;
    case "crest-per-pale":
      return <CrestPerPaleMark {...common} />;
    case "crest-fess":
      return <CrestFessMark {...common} />;
    default:
      return <SealMark {...common} />;
  }
}

type GlyphProps = { fg: string; bg: string; title: string } & SVGProps<SVGSVGElement>;

function Svg({
  children,
  title,
  ...rest
}: { children: React.ReactNode; title: string } & SVGProps<SVGSVGElement>) {
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
      {children}
    </svg>
  );
}

/* ───────── 01 · Seal (default) ─────────
 * Rounded-square frame with an interlocked SC monogram inside.
 * Reads cleanly at 16 px (favicon) and 256 px+ (hero).
 */
function SealMark({ fg, bg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
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
      <path
        d="M22.5 9.5C19.5 7.5 12 7.5 9.5 12.5C7 17.5 9 22.5 14 24C18 25.2 21.5 23.5 23.5 21"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M19 13.5C17 12.8 13.5 13.2 13.5 15.2C13.5 17 17 17 18.5 17.5C20 18 20 20 18 20.6C16 21.2 13 20.8 12.5 20"
        stroke={fg}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ───────── 02 · Exchange ─────────
 * Two opposing chevrons forming an "S" of motion. Pure mark — no frame.
 */
function ExchangeMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
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
    </Svg>
  );
}

/* ───────── 03 · Initial ─────────
 * Bold S reversed-out of a champagne-filled square.
 */
function InitialMark({ fg, bg, title, ...rest }: GlyphProps) {
  const square = fg;
  const letter = bg === "transparent" ? "var(--color-bg)" : bg;
  return (
    <Svg title={title} {...rest}>
      <rect x="0" y="0" width="32" height="32" rx="7.5" fill={square} />
      <path
        d="M20.8 11.5C19.4 10.4 17.6 9.8 15.5 9.8C12.6 9.8 10.4 11.2 10.4 13.4C10.4 15.4 12 16.3 15 17C18.2 17.7 21 18.6 21 21.3C21 23.8 18.5 25.5 15.3 25.5C13 25.5 10.9 24.7 9.5 23.4"
        stroke={letter}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ───────── 04 · Ingot ─────────
 * A stylized vault bar — flat trapezoid (no 3D, no faux gradient) with two
 * subtle horizontal stripes hinting at the bar's bevel.
 */
function IngotMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <path
        d="M8 11L24 11L26.5 21L5.5 21Z"
        stroke={fg}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 14L23 14" stroke={fg} strokeWidth="1" strokeOpacity="0.4" />
      <path d="M7.5 18L24.5 18" stroke={fg} strokeWidth="1" strokeOpacity="0.4" />
      {/* faint SC initials center */}
      <text
        x="16"
        y="17.6"
        textAnchor="middle"
        fontSize="6"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={fg}
        opacity="0.85"
      >
        SC
      </text>
    </Svg>
  );
}

/* ───────── 05 · Vault ─────────
 * Concentric vault-door rings. The inner ring is slightly offset to read as
 * a turned dial. A small notch at top suggests the dial position.
 */
function VaultMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <circle cx="16" cy="16" r="11.5" stroke={fg} strokeOpacity="0.55" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="7.5" stroke={fg} strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2" fill={fg} />
      {/* dial notch — top */}
      <path d="M16 4L16 7" stroke={fg} strokeWidth="1.6" strokeLinecap="round" />
      {/* tick marks at 3/6/9 o'clock */}
      <path d="M28 16L26 16" stroke={fg} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M6 16L4 16" stroke={fg} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M16 26L16 28" stroke={fg} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
    </Svg>
  );
}

/* ───────── 06 · Möbius ─────────
 * A clean infinity / loop, signaling perpetual exchange flow.
 */
function MobiusMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <path
        d="M22 10C25.5 10 28 12.7 28 16C28 19.3 25.5 22 22 22C18.5 22 17 19.5 16 16C15 12.5 13.5 10 10 10C6.5 10 4 12.7 4 16C4 19.3 6.5 22 10 22C13.5 22 15 19.5 16 16"
        stroke={fg}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ───────── 07 · Diamond ─────────
 * 45° rotated square frame — luxury / asset vibe — with thin SC inside.
 */
function DiamondMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <path
        d="M16 3L29 16L16 29L3 16Z"
        stroke={fg}
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M16 8L24 16L16 24L8 16Z"
        stroke={fg}
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <text
        x="16"
        y="18.8"
        textAnchor="middle"
        fontSize="8"
        fontWeight="600"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={fg}
      >
        SC
      </text>
    </Svg>
  );
}

/* ───────── 08 · Hex ─────────
 * Hexagonal seal — a subtle blockchain nod without being crypto-bro.
 * Stylized S inside.
 */
function HexMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <path
        d="M16 3L27 9.5L27 22.5L16 29L5 22.5L5 9.5Z"
        stroke={fg}
        strokeOpacity="0.55"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M20 11C18.5 10 16.5 9.5 14.5 9.8C12 10.2 10.8 12 11.5 13.6C12.3 15.2 14.8 15.5 17 16C19.5 16.5 21.5 17.5 21 19.6C20.5 21.6 18 22.6 15.5 22.3C13.7 22 12 21 11 19.6"
        stroke={fg}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ───────── 09 · Arch ─────────
 * Roman arch — bank/courthouse architecture. Two columns + round top + S.
 */
function ArchMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <path
        d="M6 27L6 14C6 8.5 10.5 4 16 4C21.5 4 26 8.5 26 14L26 27"
        stroke={fg}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* base */}
      <path
        d="M4 28L28 28"
        stroke={fg}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* keystone */}
      <path
        d="M14 7L18 7L19 9.5L13 9.5Z"
        fill={fg}
        opacity="0.85"
      />
      {/* SC compressed */}
      <path
        d="M19 16C17.8 15 15.5 14.8 14 15.5C12.5 16.2 12.5 17.7 14 18.3C15.5 19 17.8 19.2 18.8 20.2C19.8 21.2 19 22.7 17 23C15.5 23.2 13.5 22.8 12.5 22"
        stroke={fg}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ───────── 10 · Bracket ─────────
 * [ S ] — two opposing brackets framing a slim S. Minimalist, exclusive.
 */
function BracketMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <path
        d="M11 6L7 6L7 26L11 26"
        stroke={fg}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 6L25 6L25 26L21 26"
        stroke={fg}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12C18.5 11 16 10.6 14 11.2C12.2 11.8 12 13.6 13.5 14.2C15 14.8 17.8 14.8 19 16C20.2 17.2 19 19.5 17 20.2C15 20.8 12.5 20.4 11.5 19.4"
        stroke={fg}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/* ───────── 11 · Compass ─────────
 * Four-point compass star — direction, navigation, trustworthy course.
 */
function CompassMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <circle cx="16" cy="16" r="12" stroke={fg} strokeOpacity="0.45" strokeWidth="1.2" />
      {/* North-South dark spike */}
      <path d="M16 5L18.5 16L16 27L13.5 16Z" fill={fg} opacity="0.9" />
      {/* East-West thin spike */}
      <path d="M5 16L16 13.5L27 16L16 18.5Z" fill={fg} opacity="0.45" />
      <circle cx="16" cy="16" r="1.5" fill="var(--color-bg)" />
    </Svg>
  );
}

/* ───────── 12 · Flip ─────────
 * Bisected coin — half champagne, half outline. Captures "change" as a
 * physical flip / coin toss.
 */
function FlipMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      <defs>
        <clipPath id="flip-clip">
          <circle cx="16" cy="16" r="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#flip-clip)">
        <path d="M16 4L4 16L16 28Z" fill={fg} />
      </g>
      <circle cx="16" cy="16" r="12" stroke={fg} strokeWidth="1.6" />
      <path
        d="M16 4L16 28"
        stroke={fg}
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
    </Svg>
  );
}

/* ═════════════════ FAMILY CREST · S + D ═════════════════
 * S — первая буква «Solid», D — последняя.
 * Геральдическая семантика: щит, лента, печать.
 * Все знаки используют один и тот же набор «SD»-монограмм,
 * нарисованных как path'ы (а не <text>) — чтобы выглядели
 * одинаково в любом контексте (включая OG-картинку).
 */

/** SD-монограмма как path (serif-вдохновлённая форма, ~10×10 px around centre). */
function SDMonogram({
  fg,
  cx = 16,
  cy = 16,
  scale = 1,
}: {
  fg: string;
  cx?: number;
  cy?: number;
  scale?: number;
}) {
  // Two glyphs drawn relative to a 16×16 viewBox of the inner area,
  // then transformed to the desired centre.
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale}) translate(-16 -16)`}>
      {/* S — left half */}
      <path
        d="M15.8 12.4C14.4 11.4 12.2 11.1 10.6 11.8C9.0 12.5 9.0 14.0 10.4 14.6C11.8 15.2 14.0 15.2 15.0 16.2C16.0 17.2 15.4 18.8 13.4 19.4C11.6 19.9 9.6 19.5 8.6 18.6"
        stroke={fg}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* D — right half */}
      <path
        d="M17.5 11.5L17.5 20.5L21.2 20.5C23.6 20.5 25 19 25 16C25 13 23.6 11.5 21.2 11.5Z"
        stroke={fg}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );
}

/* ───────── 13 · Crest · Shield ─────────
 * Классический heater-щит с SD-монограммой и тонкой полосой-«главой» (chief)
 * сверху, увенчанной тремя точками (heraldic stars upgrade).
 */
function CrestShieldMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      {/* shield outline */}
      <path
        d="M5 4L27 4L27 16C27 22.5 22 27 16 29C10 27 5 22.5 5 16Z"
        stroke={fg}
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      {/* chief band */}
      <path
        d="M5 4L27 4L27 8.5L5 8.5Z"
        fill={fg}
        opacity="0.18"
      />
      <path
        d="M5 8.5L27 8.5"
        stroke={fg}
        strokeOpacity="0.5"
        strokeWidth="0.6"
      />
      {/* three small stars in chief */}
      <circle cx="11" cy="6.25" r="0.7" fill={fg} />
      <circle cx="16" cy="6.25" r="0.7" fill={fg} />
      <circle cx="21" cy="6.25" r="0.7" fill={fg} />
      {/* SD monogram */}
      <SDMonogram fg={fg} cx={16} cy={18.5} scale={0.9} />
    </Svg>
  );
}

/* ───────── 14 · Crest · Banner ─────────
 * Щит поменьше + развёрнутая лента-баннер снизу (под девиз / EST 2025).
 */
function CrestBannerMark({ fg, title, ...rest }: GlyphProps) {
  return (
    <Svg title={title} {...rest}>
      {/* shield (compact) */}
      <path
        d="M7 3L25 3L25 13C25 18 21 21 16 22.5C11 21 7 18 7 13Z"
        stroke={fg}
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <SDMonogram fg={fg} cx={16} cy={12.5} scale={0.75} />
      {/* ribbon banner — two folded ends + center plaque */}
      <path
        d="M3 25L9 23L23 23L29 25L23 28L23 26.5L9 26.5L9 28Z"
        fill={fg}
        opacity="0.85"
      />
      <path
        d="M9 23L9 26.5L23 26.5L23 23"
        stroke="var(--color-bg)"
        strokeOpacity="0.35"
        strokeWidth="0.6"
        fill="none"
      />
    </Svg>
  );
}

/* ───────── 15 · Crest · Wax Seal ─────────
 * Круглая восковая печать со скруглёнными «зубцами» по краю и SD внутри.
 */
function CrestSealMark({ fg, title, ...rest }: GlyphProps) {
  // 16 zigzag teeth around the perimeter
  const teeth = 16;
  const ROut = 13.5;
  const RIn = 11.8;
  const pts: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const r = i % 2 === 0 ? ROut : RIn;
    const a = (i * Math.PI) / teeth;
    const x = 16 + r * Math.cos(a - Math.PI / 2);
    const y = 16 + r * Math.sin(a - Math.PI / 2);
    pts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return (
    <Svg title={title} {...rest}>
      <path
        d={`M${pts.join("L")}Z`}
        stroke={fg}
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="16" cy="16" r="9.5" stroke={fg} strokeWidth="1.4" fill="none" />
      <SDMonogram fg={fg} cx={16} cy={16} scale={0.85} />
    </Svg>
  );
}

/* ───────── 16 · Crest · Per Pale ─────────
 * Вертикально-разделённый щит: левая половина залита champagne,
 * правая — outline. S слева, D справа.
 */
function CrestPerPaleMark({ fg, title, ...rest }: GlyphProps) {
  const shieldPath =
    "M5 4L27 4L27 16C27 22.5 22 27 16 29C10 27 5 22.5 5 16Z";
  return (
    <Svg title={title} {...rest}>
      <defs>
        <clipPath id="crest-per-pale-clip">
          <path d={shieldPath} />
        </clipPath>
      </defs>
      <g clipPath="url(#crest-per-pale-clip)">
        <rect x="0" y="0" width="16" height="32" fill={fg} opacity="0.95" />
      </g>
      <path
        d={shieldPath}
        stroke={fg}
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      {/* center divider */}
      <path
        d="M16 4L16 27.5"
        stroke="var(--color-bg)"
        strokeOpacity="0.6"
        strokeWidth="0.8"
      />
      {/* S on left half (knocked out from champagne) */}
      <path
        d="M14.2 11.2C12.9 10.4 10.9 10.2 9.4 10.8C8.0 11.4 8.0 12.8 9.3 13.4C10.6 14.0 12.6 14.0 13.5 14.9C14.4 15.8 13.8 17.3 11.9 17.8C10.3 18.3 8.4 17.9 7.5 17.1"
        stroke="var(--color-bg)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* D on right half (champagne stroke) */}
      <path
        d="M19 11L19 19L22.4 19C24.6 19 26 17.6 26 14.9C26 12.2 24.6 11 22.4 11Z"
        stroke={fg}
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

/* ───────── 17 · Crest · Fess ─────────
 * Щит с горизонтальной полосой (fess) — на ней SD-монограмма.
 */
function CrestFessMark({ fg, title, ...rest }: GlyphProps) {
  const shieldPath =
    "M5 4L27 4L27 16C27 22.5 22 27 16 29C10 27 5 22.5 5 16Z";
  return (
    <Svg title={title} {...rest}>
      <defs>
        <clipPath id="crest-fess-clip">
          <path d={shieldPath} />
        </clipPath>
      </defs>
      <g clipPath="url(#crest-fess-clip)">
        <rect x="3" y="13" width="26" height="7" fill={fg} opacity="0.95" />
      </g>
      <path
        d={shieldPath}
        stroke={fg}
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <SDMonogram fg="var(--color-bg)" cx={16} cy={16.5} scale={0.6} />
    </Svg>
  );
}

/* ───────── Wordmark ─────────
 * Type-only "SolidChange" with optional champagne accent on the second half.
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
 * Horizontal lockup: mark + wordmark with optical spacing.
 */
type LockupProps = {
  variant?: MarkVariant;
  size?: number;
  highlight?: boolean;
  className?: string;
};

export function LogoLockup({
  variant = "exchange",
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
