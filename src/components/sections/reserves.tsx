import { ArrowUpRight, Activity, Zap } from "lucide-react";
import { ASSETS, KPI, TOTAL_RESERVE_USD } from "@/data/assets";
import { Card } from "@/components/ui/card";
import { formatAmount } from "@/lib/utils";

export function Reserves() {
  return (
    <section
      id="reserves"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
              07 / Резервы и доверие
            </span>
            <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
              Резервы 1:1, проверяйте сами
            </h2>
          </div>
          <div className="text-right">
            <div className="text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
              Общий резерв
            </div>
            <div className="mt-1 text-[24px] font-semibold tabular-nums text-[var(--color-accent)]">
              ${formatAmount(TOTAL_RESERVE_USD / 1000, 1)}K
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)]">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)] text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                <th className="px-4 py-3 text-left font-medium">Актив</th>
                <th className="px-4 py-3 text-left font-medium">Сеть</th>
                <th className="px-4 py-3 text-right font-medium">Резерв</th>
                <th className="px-4 py-3 text-right font-medium">USD</th>
                <th className="px-4 py-3 text-right font-medium">On-chain</th>
              </tr>
            </thead>
            <tbody>
              {ASSETS.map((a) => (
                <tr
                  key={a.symbol}
                  className="border-b border-[var(--color-border-subtle)] last:border-0 hover:bg-[var(--color-bg-elevated)]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-[10px] font-semibold">
                        {a.symbol.slice(0, 2)}
                      </span>
                      <span className="font-medium">{a.symbol}</span>
                      <span className="text-[var(--color-text-muted)]">
                        {a.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[var(--color-text-secondary)]">
                    {a.network}
                  </td>
                  <td className="px-4 py-4 text-right tabular-nums">
                    {formatAmount(a.reserve, a.reserve < 100 ? 4 : 0)}{" "}
                    <span className="text-[var(--color-text-muted)]">
                      {a.symbol}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right tabular-nums text-[var(--color-text-secondary)]">
                    ${formatAmount(a.reserveUsd, 0)}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <a
                      href={a.onchainUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] text-[var(--color-accent)] hover:underline"
                    >
                      Посмотреть
                      <ArrowUpRight size={12} strokeWidth={1.5} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Card className="p-5">
            <div className="text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
              Объём за 30 дней
            </div>
            <div className="mt-2 text-[28px] font-semibold tabular-nums text-[var(--color-accent)]">
              ${formatAmount(KPI.volume30dUsd / 1_000_000, 2)}M
            </div>
          </Card>
          <Card className="p-5">
            <div className="text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
              Завершено обменов
            </div>
            <div className="mt-2 flex items-center gap-2 text-[28px] font-semibold tabular-nums">
              <Activity
                size={18}
                strokeWidth={1.5}
                className="text-[var(--color-text-muted)]"
              />
              {KPI.exchangesCompleted.toLocaleString("ru-RU")}
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div className="text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
                Uptime
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[12px] text-[var(--color-accent)] hover:underline"
              >
                Статус-страница
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </a>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[28px] font-semibold tabular-nums">
              <Zap
                size={18}
                strokeWidth={1.5}
                className="text-[var(--color-success)]"
              />
              {KPI.uptime}%
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
