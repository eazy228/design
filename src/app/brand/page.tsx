import Link from "next/link";
import {
  LogoLockup,
  LogoMark,
  LogoWordmark,
  type MarkVariant,
} from "@/components/brand/logo";

export const metadata = {
  title: "SolidChange — фирменный стиль",
};

type VariantMeta = {
  key: MarkVariant;
  title: string;
  sub: string;
  note?: string;
};

const VARIANTS: VariantMeta[] = [
  {
    key: "seal",
    title: "01 — Seal",
    sub: "Монограмма SC в скруглённой рамке. Institutional, банк-стайл.",
    note: "Текущий default",
  },
  {
    key: "exchange",
    title: "02 — Exchange",
    sub: "Два встречных шеврона ⟨ ⟩ как символ обмена.",
    note: "Чистый mark, без букв",
  },
  {
    key: "initial",
    title: "03 — Initial",
    sub: "Жирная S, реверс на champagne-квадрате.",
    note: "Максимум читаемости на favicon",
  },
  {
    key: "ingot",
    title: "04 — Ingot",
    sub: "Слиток / vault bar. Прямая отсылка к хранению активов.",
    note: "Тёплый банковский тон",
  },
  {
    key: "vault",
    title: "05 — Vault",
    sub: "Концентрические круги — дверь сейфа. Точка-«дисплей» в центре.",
    note: "Сильный security-сигнал",
  },
  {
    key: "mobius",
    title: "06 — Möbius",
    sub: "Петля бесконечности. Постоянный поток обмена.",
    note: "Движение без агрессии",
  },
  {
    key: "diamond",
    title: "07 — Diamond",
    sub: "Ромб 45° с тонким двойным контуром и SC внутри.",
    note: "Лакшери / ценность",
  },
  {
    key: "hex",
    title: "08 — Hex",
    sub: "Шестиугольник с S. Сдержанная отсылка к блокчейну.",
    note: "Без crypto-bro",
  },
  {
    key: "arch",
    title: "09 — Arch",
    sub: "Римская арка с замковым камнем — архитектура банка.",
    note: "Самый «банковский» вариант",
  },
  {
    key: "bracket",
    title: "10 — Bracket",
    sub: "Две скобки [ S ] — minimal, exclusive.",
    note: "Эксклюзивный private-banking",
  },
  {
    key: "compass",
    title: "11 — Compass",
    sub: "Четыре луча компаса. Курс, направление, надёжность.",
    note: "Морская / навигационная метафора",
  },
  {
    key: "flip",
    title: "12 — Flip",
    sub: "Половина монеты в champagne, половина — outline. «Change» как переворот.",
    note: "Двойственность change",
  },
];

const SIZES = [16, 24, 32, 48, 64, 96];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <header className="border-b border-[var(--color-border-subtle)] px-6 py-5 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <Link
            href="/"
            className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          >
            ← На главную
          </Link>
          <div className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-text-muted)]">
            Brand / Logo · 12 направлений
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14 max-w-[820px]">
          <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Логотип
          </p>
          <h1 className="text-[42px] font-semibold leading-[1.1] tracking-tight lg:text-[64px]">
            12 направлений{" "}
            <span className="text-[var(--color-accent)]">— один тон</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            Бордо-фон + одна нота шампанского. Без неона, 3D и мультяшности.
            Выберите 1–2 направления — сделаю чистые финальные SVG, фавиконки,
            apple-touch-icon и OG-картинку. Каждый знак уже работает на всех
            размерах от 16 px (favicon) до 96 px+ (hero / OG).
          </p>
        </div>

        {/* Mark grid — all 12 variants */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VARIANTS.map((v) => (
            <div
              key={v.key}
              className="flex flex-col gap-5 rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-5"
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                <span>{v.title}</span>
                <span>{v.key}</span>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-[12px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-10">
                <LogoMark variant={v.key} style={{ width: 84, height: 84 }} />
              </div>
              <div>
                <p className="text-[13px] leading-relaxed text-[var(--color-text-primary)]">
                  {v.sub}
                </p>
                {v.note && (
                  <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                    {v.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lockup row */}
        <div className="mt-20">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Lockup — знак + вордмарк
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {VARIANTS.map((v) => (
              <div
                key={v.key}
                className="flex items-center gap-4 rounded-[14px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] px-6 py-7"
              >
                <LogoLockup variant={v.key} size={34} />
                <span className="ml-auto text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                  {v.key}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wordmark only */}
        <div className="mt-20">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Wordmark — только текст
          </p>
          <div className="flex items-center justify-center rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] py-16">
            <LogoWordmark style={{ fontSize: 60 }} />
          </div>
          <p className="mt-3 text-[12px] text-[var(--color-text-muted)]">
            Geist Sans 600, tracking -0.012em, «Change» в champagne. Можно
            использовать без знака — в email-подписях, в маленьких UI-местах.
          </p>
        </div>

        {/* Size scale */}
        <div className="mt-20">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Масштаб — от favicon до hero
          </p>
          <div className="rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-10">
            <div className="flex flex-wrap items-end gap-10">
              {SIZES.map((s) => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <LogoMark
                    variant="seal"
                    style={{ width: s, height: s }}
                  />
                  <span className="text-[11px] text-[var(--color-text-muted)] tabular-nums">
                    {s}px
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backgrounds */}
        <div className="mt-20">
          <p className="mb-6 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Контексты — фоны
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <SwatchTile bg="#0b0608" label="Surface base #0b0608">
              <LogoLockup variant="seal" size={36} />
            </SwatchTile>
            <SwatchTile
              bg="linear-gradient(135deg, #1a0f14 0%, #3a1f2b 100%)"
              label="Hero gradient"
            >
              <LogoLockup variant="seal" size={36} />
            </SwatchTile>
            <SwatchTile bg="#e8c9a0" label="Champagne #e8c9a0 (нужен dark-вариант)">
              <LogoLockup variant="seal" size={36} />
            </SwatchTile>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border-subtle)] px-6 py-8 lg:px-10">
        <p className="mx-auto max-w-[1280px] text-[12px] text-[var(--color-text-muted)]">
          Все 12 знаков — чистые SVG в{" "}
          <code className="rounded bg-[var(--color-bg-elevated)] px-1.5 py-0.5 text-[11px]">
            src/components/brand/logo.tsx
          </code>
          . Favicon, apple-touch-icon и OG-картинка генерируются Next.js на
          основе текущего default-варианта.
        </p>
      </footer>
    </main>
  );
}

function SwatchTile({
  bg,
  label,
  children,
}: {
  bg: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)]">
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
      </div>
    </div>
  );
}
