import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { POPULAR } from "@/data/assets";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn, formatAmount, formatPercent } from "@/lib/utils";

export function PopularCryptos() {
  return (
    <section
      id="popular"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="mb-8">
          <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
            03 / Популярные криптовалюты
          </span>
          <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
            Чаще всего обменивают
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {POPULAR.map((a) => (
            <Card
              key={a.symbol}
              className="group flex flex-col gap-4 p-5 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-[12px] font-semibold">
                  {a.symbol.slice(0, 2)}
                </span>
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-[12px] tabular-nums",
                    a.change24h >= 0
                      ? "text-[var(--color-success)]"
                      : "text-[var(--color-danger)]"
                  )}
                >
                  {a.change24h >= 0 ? (
                    <ArrowUpRight size={12} strokeWidth={1.5} />
                  ) : (
                    <ArrowDownRight size={12} strokeWidth={1.5} />
                  )}
                  {formatPercent(a.change24h)}
                </span>
              </div>
              <div>
                <div className="text-[15px] font-medium">{a.symbol}</div>
                <div className="text-[12px] text-[var(--color-text-muted)]">
                  {a.name}
                </div>
              </div>
              <div className="text-[18px] font-semibold tabular-nums">
                ${formatAmount(a.price, a.price < 10 ? 4 : 2)}
              </div>
              <Button variant="secondary" size="sm" className="w-full text-[12px]">
                Обменять {a.symbol}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
