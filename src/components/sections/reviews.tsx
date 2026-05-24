import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const REVIEWS = [
  {
    initials: "АК",
    name: "Артём К.",
    role: "Меняет дважды в неделю",
    date: "14.05.2026",
    text: "Курс на странице и в реквизитах совпал до копейки. Поддержка ответила за 3 минуты, когда я перепутал сеть USDT.",
    rating: 5,
  },
  {
    initials: "М",
    name: "Михаил",
    role: "Первый обмен",
    date: "11.05.2026",
    text: "Интерфейс не пугает терминологией. Сразу видно, что отдаю и что получу. Резервы можно проверить — это редкость.",
    rating: 5,
  },
  {
    initials: "ЕП",
    name: "Елена П.",
    role: "Малый бизнес",
    date: "06.05.2026",
    text: "Подключила выплаты в RUB через СБП. Документы для бухгалтерии присылают по запросу, всё корректно.",
    rating: 4,
  },
];

const PLATFORMS = ["Trustpilot", "BestChange", "Reviews.io"];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Оценка ${count} из 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          strokeWidth={1.5}
          className={
            i <= count
              ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
              : "text-[var(--color-text-muted)]"
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="mb-10">
          <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
            08 / Отзывы
          </span>
          <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
            Что говорят пользователи
          </h2>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <Card key={r.name} className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[12px] font-semibold tabular-nums">
                  {r.initials}
                </span>
                <div className="flex-1">
                  <div className="text-[14px] font-medium">{r.name}</div>
                  <div className="text-[12px] text-[var(--color-text-muted)]">
                    {r.role} · {r.date}
                  </div>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className="text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                {r.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-6">
          <div className="flex items-center gap-3">
            <Stars count={5} />
            <span className="text-[14px] font-medium tabular-nums">
              4.8 / 5.0
            </span>
            <span className="text-[12px] text-[var(--color-text-muted)]">
              на основе 1 247 отзывов
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {PLATFORMS.map((p) => (
              <span
                key={p}
                className="text-[13px] text-[var(--color-text-secondary)] opacity-70 transition-opacity hover:opacity-100"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
