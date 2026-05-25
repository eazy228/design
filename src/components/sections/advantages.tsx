import { Card } from "@/components/ui/card";

const ITEMS = [
  {
    headline: "0.5%",
    title: "Комиссия сервиса",
    text: "Открытая ставка для всех направлений, без скрытых наценок в курсе.",
    big: true,
  },
  {
    headline: "200+",
    title: "Поддерживаемых пар",
    text: "Криптовалюты и фиат, включая СБП и банковские переводы в RUB.",
  },
  {
    headline: "On-chain",
    title: "Резервы публичные",
    text: "Адреса холодных кошельков и текущий баланс — на главной.",
    span: true,
  },
  {
    headline: "~7 мин",
    title: "Среднее время",
    text: "От подтверждения до выплаты. Медиана за последние 30 дней.",
  },
  {
    headline: "24/7",
    title: "Поддержка на 5 языках",
    text: "RU, EN, ES, PT, TR — операторы, не чат-боты, реальный SLA <5 минут.",
  },
  {
    headline: "EU",
    title: "Лицензия и юрисдикция",
    text: "Регуляторный статус и публичная политика AML/KYC.",
  },
];

export function Advantages() {
  return (
    <section
      id="advantages"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="mb-10">
          <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
            06 / Преимущества платформы
          </span>
          <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
            Цифры, а не обещания
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <Card
              key={it.title}
              className={`flex flex-col gap-4 p-6 ${
                it.big ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              } ${it.span ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div
                className={`tabular-nums font-semibold text-[var(--color-accent)] ${
                  it.big ? "text-[64px] leading-none" : "text-[40px] leading-none"
                }`}
              >
                {it.headline}
              </div>
              <div>
                <h3 className="text-[16px] font-medium">{it.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                  {it.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
