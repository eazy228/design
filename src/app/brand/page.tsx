import Link from "next/link";
import { LogoLockup, LogoMark, LogoWordmark } from "@/components/brand/logo";

export const metadata = {
  title: "SolidChange — фирменный стиль",
};

const VARIANTS = [
  {
    key: "seal" as const,
    title: "01 — Seal",
    sub: "Монограмма SC в рамке. Институциональный, банк-стайл.",
    notes: ["Рекомендуется как основной"],
  },
  {
    key: "exchange" as const,
    title: "02 — Exchange",
    sub: "Два шеврона ⟨ ⟩ как символ обмена. Без буквенной нагрузки.",
    notes: ["Альтернатива для UI, watermark"],
  },
  {
    key: "initial" as const,
    title: "03 — Initial",
    sub: "Чёрный S в champagne-квадрате. Максимальный контраст на фавиконке.",
    notes: ["Для favicon и социалок"],
  },
];

const SIZES = [16, 24, 32, 48, 64, 96];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <header className="border-b border-[var(--color-border-subtle)] px-6 py-5 lg:px-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <Link href="/" className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">
            ← На главную
          </Link>
          <div className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-text-muted)]">
            Brand / Logo
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-12">
          <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Логотип
          </p>
          <h1 className="text-[42px] font-semibold leading-[1.1] tracking-tight lg:text-[56px]">
            Три варианта{" "}
            <span className="text-[var(--color-accent)]">— один тон</span>
          </h1>
          <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            Бордо-фон + одна акцентная нота шампанского. Без неона, 3D и
            мультяшности. Цель — чтобы знак работал и на favicon 16×16, и на
            биллборде, и в чёрно-белой печати.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {VARIANTS.map((v) => (
            <div
              key={v.key}
              className="flex flex-col gap-6 rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-6"
            >
              <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                <span>{v.title}</span>
                <span>{v.key}</span>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-[12px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-12">
                <LogoMark
                  variant={v.key}
                  style={{ width: 96, height: 96 }}
                />
              </div>
              <div>
                <p className="text-[14px] text-[var(--color-text-primary)]">
                  {v.sub}
                </p>
                {v.notes.map((n) => (
                  <p
                    key={n}
                    className="mt-1 text-[12px] text-[var(--color-text-muted)]"
                  >
                    {n}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lockup row */}
        <div className="mt-16">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Lockup — знак + вордмарк
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {VARIANTS.map((v) => (
              <div
                key={v.key}
                className="flex items-center justify-center rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-12"
              >
                <LogoLockup variant={v.key} size={40} />
              </div>
            ))}
          </div>
        </div>

        {/* Wordmark only */}
        <div className="mt-16">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Wordmark — только текст
          </p>
          <div className="flex items-center justify-center rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] py-16">
            <LogoWordmark style={{ fontSize: 56 }} />
          </div>
        </div>

        {/* Size scale */}
        <div className="mt-16">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Масштаб — от favicon до hero
          </p>
          <div className="rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-10">
            <div className="flex flex-wrap items-end gap-10">
              {SIZES.map((s) => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <LogoMark variant="seal" style={{ width: s, height: s }} />
                  <span className="text-[11px] text-[var(--color-text-muted)] tabular-nums">
                    {s}px
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color use */}
        <div className="mt-16">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Контекст — фоны
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            <SwatchTile bg="#0b0608" label="Surface base #0b0608">
              <LogoLockup variant="seal" size={36} />
            </SwatchTile>
            <SwatchTile
              bg="linear-gradient(135deg, #1a0f14 0%, #3a1f2b 100%)"
              label="Hero gradient"
            >
              <LogoLockup variant="seal" size={36} />
            </SwatchTile>
            <SwatchTile bg="#e8c9a0" label="Champagne #e8c9a0" inverted>
              <LogoLockup
                variant="seal"
                size={36}
                /* On champagne, invert mark colors */
              />
            </SwatchTile>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border-subtle)] px-6 py-8 lg:px-10">
        <p className="mx-auto max-w-[1200px] text-[12px] text-[var(--color-text-muted)]">
          Все компоненты — чистые SVG в{" "}
          <code className="rounded bg-[var(--color-bg-elevated)] px-1.5 py-0.5 text-[11px]">
            src/components/brand/logo.tsx
          </code>
          . Favicon и OG-картинка генерируются Next.js на основе того же
          markup.
        </p>
      </footer>
    </main>
  );
}

function SwatchTile({
  bg,
  label,
  inverted,
  children,
}: {
  bg: string;
  label: string;
  inverted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-[var(--color-border-subtle)] overflow-hidden">
      <div
        style={{ background: bg }}
        className="flex h-44 items-center justify-center"
      >
        {children}
      </div>
      <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] px-4 py-3">
        <span className="text-[12px] text-[var(--color-text-secondary)] tabular-nums">
          {label}
        </span>
        {inverted && (
          <span className="ml-2 text-[11px] text-[var(--color-text-muted)]">
            (нужен dark вариант)
          </span>
        )}
      </div>
    </div>
  );
}
