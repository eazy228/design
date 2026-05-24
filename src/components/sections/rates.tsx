import { ArrowDownRight, ArrowUpRight, RefreshCw } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { Sparkline } from "@/components/ui/sparkline";
import { Button } from "@/components/ui/button";
import { cn, formatAmount, formatPercent } from "@/lib/utils";

const TICKER_ITEMS = [...ASSETS, ...ASSETS]; // doubled for seamless loop

export function RatesSection() {
  return (
    <section
      id="rates"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
              02 / Онлайн курсы
            </span>
            <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
              Курсы в реальном времени
            </h2>
          </div>
          <span className="hidden items-center gap-1.5 text-[12px] text-[var(--color-text-secondary)] sm:flex">
            <RefreshCw size={12} strokeWidth={1.5} />
            Обновлено 12 c назад
          </span>
        </div>

        {/* Ticker */}
        <div className="ticker-pause mb-10 overflow-hidden border-y border-[var(--color-border-subtle)] py-3">
          <div className="ticker-track flex w-max gap-8">
            {TICKER_ITEMS.map((a, i) => (
              <span
                key={`${a.symbol}-${i}`}
                className="flex shrink-0 items-center gap-2 text-[13px] tabular-nums"
              >
                <span className="font-medium text-[var(--color-text-primary)]">
                  {a.symbol}/USD
                </span>
                <span className="text-[var(--color-text-secondary)]">
                  {formatAmount(a.price, a.price < 10 ? 4 : 2)}
                </span>
                <span
                  className={cn(
                    "flex items-center gap-0.5",
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
              </span>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)]">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)] text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                <th className="px-4 py-3 text-left font-medium">Пара</th>
                <th className="px-4 py-3 text-right font-medium">Цена, USD</th>
                <th className="px-4 py-3 text-right font-medium">24ч</th>
                <th className="hidden px-4 py-3 text-center font-medium md:table-cell">
                  График
                </th>
                <th className="px-4 py-3 text-right font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {ASSETS.map((a) => (
                <tr
                  key={a.symbol}
                  className="border-b border-[var(--color-border-subtle)] last:border-0 transition-colors hover:bg-[var(--color-bg-elevated)]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-[11px] font-semibold">
                        {a.symbol.slice(0, 2)}
                      </span>
                      <span>
                        <span className="font-medium">{a.symbol}</span>
                        <span className="ml-1.5 text-[var(--color-text-muted)]">
                          {a.name}
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right tabular-nums">
                    {formatAmount(a.price, a.price < 10 ? 4 : 2)}
                  </td>
                  <td
                    className={cn(
                      "px-4 py-4 text-right tabular-nums",
                      a.change24h >= 0
                        ? "text-[var(--color-success)]"
                        : "text-[var(--color-danger)]"
                    )}
                  >
                    {formatPercent(a.change24h)}
                  </td>
                  <td className="hidden px-4 py-4 md:table-cell">
                    <div className="flex justify-center">
                      <Sparkline
                        data={a.spark}
                        color={
                          a.change24h >= 0
                            ? "var(--color-success)"
                            : "var(--color-danger)"
                        }
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <Button variant="secondary" size="sm" className="text-[12px]">
                      Обменять
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
