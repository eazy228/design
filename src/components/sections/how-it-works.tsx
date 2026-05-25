import { Clock } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Выбираете пару и сумму",
    text: "Вводите сумму отправки — курс, комиссии и итоговая сумма рассчитываются в реальном времени.",
  },
  {
    n: "02",
    title: "Указываете адрес получения",
    text: "Адрес проверяется на формат сети и контрольную сумму — мы предупреждаем, если сеть не совпадает.",
  },
  {
    n: "03",
    title: "Отправляете криптовалюту",
    text: "Реквизиты с QR и точной суммой. Курс зафиксирован на 15 минут с момента подтверждения.",
  },
  {
    n: "04",
    title: "Получаете обмен",
    text: "После N подтверждений сети средства уходят на ваш кошелёк. В среднем — 7 минут.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="mb-12">
          <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
            05 / Как работает сервис
          </span>
          <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
            Четыре шага. Без скрытых этапов.
          </h2>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative flex flex-col gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[12px] font-semibold text-[var(--color-accent)] tabular-nums">
                {s.n}
              </span>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-9 top-4 hidden h-px w-[calc(100%-2.25rem)] lg:block"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, var(--color-border-subtle) 0 6px, transparent 6px 12px)",
                  }}
                />
              )}
              <h3 className="text-[16px] font-medium leading-snug">{s.title}</h3>
              <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 inline-flex items-center gap-2 rounded-[999px] border border-[var(--color-border-subtle)] px-4 py-2 text-[13px] text-[var(--color-text-secondary)]">
          <Clock size={14} strokeWidth={1.5} />
          Среднее время операции:{" "}
          <span className="tabular-nums text-[var(--color-text-primary)]">
            ~7 минут
          </span>
        </div>
      </div>
    </section>
  );
}
