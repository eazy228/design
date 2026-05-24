import { Activity, ShieldCheck, Headphones } from "lucide-react";
import { SwapCard } from "./swap-card";

const BULLETS = [
  { icon: Activity, label: "Резервы on-chain" },
  { icon: ShieldCheck, label: "AML-проверка Chainalysis" },
  { icon: Headphones, label: "Поддержка 24/7" },
];

export function Hero() {
  return (
    <section
      id="exchange"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)]"
    >
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-5 py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-[999px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/40 px-3 py-1 text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
            Среднее время обмена ~7 минут
          </span>
          <h1 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-[52px] lg:text-[56px]">
            Обмен криптовалют
            <br />
            <span className="text-[var(--color-accent)]">без скрытых комиссий</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-[var(--color-text-secondary)] lg:text-[16px]">
            Прозрачные курсы, открытые резервы и понятные условия. Видите итог
            до того, как нажмёте «Обменять» — без сюрпризов.
          </p>
          <ul className="mt-7 flex flex-col items-center gap-3 lg:items-start">
            {BULLETS.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2.5 text-[14px] text-[var(--color-text-secondary)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/40 text-[var(--color-accent)]">
                  <b.icon size={14} strokeWidth={1.5} />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[480px] flex-shrink-0 lg:w-[480px]">
          <SwapCard />
        </div>
      </div>
    </section>
  );
}
