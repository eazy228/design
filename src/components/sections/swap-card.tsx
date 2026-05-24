"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpDown, Clock3, ShieldCheck, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { ASSETS, NETWORKS_BY_ASSET, type Asset } from "@/data/assets";
import { formatAmount } from "@/lib/utils";

const SERVICE_FEE_PCT = 0.005;
const NETWORK_FEE_USD = 1.0;

function AssetSelector({
  value,
  onChange,
  exclude,
}: {
  value: Asset;
  onChange: (a: Asset) => void;
  exclude?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 min-w-[120px] items-center justify-between gap-2 rounded-[12px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-3 text-sm font-medium transition-colors hover:border-[var(--color-border-strong)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-[11px] font-semibold tabular-nums">
          {value.symbol.slice(0, 2)}
        </span>
        <span className="flex-1 text-left">{value.symbol}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="opacity-60"
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto rounded-[12px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] py-1 shadow-2xl shadow-black/40"
          >
            {ASSETS.filter((a) => a.symbol !== exclude).map((a) => (
              <button
                key={a.symbol}
                type="button"
                onClick={() => {
                  onChange(a);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[var(--color-bg)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-[11px] font-semibold tabular-nums">
                  {a.symbol.slice(0, 2)}
                </span>
                <span className="flex-1 truncate">
                  <span className="font-medium">{a.symbol}</span>
                  <span className="ml-2 text-[var(--color-text-muted)]">
                    {a.name}
                  </span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SwapCard() {
  const [send, setSend] = useState<Asset>(ASSETS[0]);
  const [receive, setReceive] = useState<Asset>(ASSETS[2]);
  const [amount, setAmount] = useState<string>("0.5");
  const [sendNetwork, setSendNetwork] = useState<string>(send.network);
  const [receiveNetwork, setReceiveNetwork] = useState<string>(
    NETWORKS_BY_ASSET[receive.symbol]?.[0] ?? receive.network
  );

  const numericAmount = parseFloat(amount.replace(",", ".")) || 0;
  const rate = useMemo(
    () => (send.price && receive.price ? send.price / receive.price : 0),
    [send, receive]
  );

  const grossReceive = numericAmount * rate;
  const serviceFeeReceive = grossReceive * SERVICE_FEE_PCT;
  const networkFeeReceive = NETWORK_FEE_USD / (receive.price || 1);
  const finalReceive = Math.max(
    0,
    grossReceive - serviceFeeReceive - networkFeeReceive
  );

  const decimalsFor = (a: Asset) =>
    a.symbol === "BTC" || a.symbol === "ETH" ? 8 : 2;

  const flip = () => {
    setSend(receive);
    setReceive(send);
    setSendNetwork(NETWORKS_BY_ASSET[receive.symbol]?.[0] ?? receive.network);
    setReceiveNetwork(NETWORKS_BY_ASSET[send.symbol]?.[0] ?? send.network);
  };

  return (
    <div className="relative w-full max-w-[480px]">
      <div className="rounded-[20px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/95 p-5 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
        <div className="mb-2 flex items-center justify-between text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
          <span>Обмен криптовалют</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
            Курс обновлён 12 c назад
          </span>
        </div>

        {/* SEND */}
        <div className="mt-4 rounded-[14px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/60 p-4">
          <div className="mb-3 flex items-center justify-between text-[12px] text-[var(--color-text-secondary)]">
            <label htmlFor="send-amount">Вы отправляете</label>
            <span className="text-[var(--color-text-muted)]">
              Доступно к обмену: {formatAmount(send.reserve, 4)} {send.symbol}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              id="send-amount"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d.,]/g, ""))}
              placeholder="0.00"
              className="min-w-0 flex-1 bg-transparent text-[28px] font-medium tabular-nums text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
            />
            <AssetSelector value={send} onChange={setSend} exclude={receive.symbol} />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {(NETWORKS_BY_ASSET[send.symbol] ?? [send.network]).map((n) => (
              <Chip key={n} active={sendNetwork === n} onClick={() => setSendNetwork(n)}>
                {n}
              </Chip>
            ))}
          </div>
        </div>

        {/* FLIP */}
        <div className="relative my-1 flex justify-center">
          <button
            type="button"
            onClick={flip}
            aria-label="Поменять местами"
            className="absolute -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ArrowUpDown size={14} strokeWidth={1.5} />
          </button>
        </div>

        {/* RECEIVE */}
        <div className="mt-4 rounded-[14px] border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/60 p-4">
          <div className="mb-3 flex items-center justify-between text-[12px] text-[var(--color-text-secondary)]">
            <span>Вы получаете</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1 truncate text-[28px] font-medium tabular-nums text-[var(--color-text-primary)]">
              {formatAmount(finalReceive, decimalsFor(receive))}
            </div>
            <AssetSelector value={receive} onChange={setReceive} exclude={send.symbol} />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {(NETWORKS_BY_ASSET[receive.symbol] ?? [receive.network]).map((n) => (
              <Chip
                key={n}
                active={receiveNetwork === n}
                onClick={() => setReceiveNetwork(n)}
              >
                {n}
              </Chip>
            ))}
          </div>
        </div>

        {/* Rate / fees */}
        <dl className="mt-4 space-y-2 border-t border-[var(--color-border-subtle)] pt-4 text-[13px]">
          <div className="flex items-center justify-between">
            <dt className="text-[var(--color-text-secondary)]">Курс</dt>
            <dd className="tabular-nums">
              1 {send.symbol} ≈ {formatAmount(rate, decimalsFor(receive))} {receive.symbol}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-[var(--color-text-secondary)]">Комиссия сети</dt>
            <dd className="tabular-nums text-[var(--color-text-secondary)]">
              ≈ {formatAmount(networkFeeReceive, decimalsFor(receive))} {receive.symbol}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-[var(--color-text-secondary)]">
              Комиссия сервиса <span className="text-[var(--color-text-muted)]">0.5%</span>
            </dt>
            <dd className="tabular-nums text-[var(--color-text-secondary)]">
              ≈ {formatAmount(serviceFeeReceive, decimalsFor(receive))} {receive.symbol}
            </dd>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between rounded-[12px] bg-[var(--color-accent-soft)] px-4 py-3">
          <span className="text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-secondary)]">
            К получению
          </span>
          <span className="tabular-nums text-[20px] font-semibold text-[var(--color-accent)]">
            {formatAmount(finalReceive, decimalsFor(receive))} {receive.symbol}
          </span>
        </div>

        <Button
          size="xl"
          className="mt-4 w-full"
          disabled={finalReceive <= 0}
        >
          Обменять
        </Button>

        <ul className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-[var(--color-text-secondary)]">
          <li className="flex items-center gap-1.5">
            <ShieldCheck size={14} strokeWidth={1.5} className="text-[var(--color-success)]" />
            AML-проверка
          </li>
          <li className="flex items-center gap-1.5">
            <Clock3 size={14} strokeWidth={1.5} />~7 минут
          </li>
          <li className="flex items-center gap-1.5">
            <ScrollText size={14} strokeWidth={1.5} />
            Лицензия
          </li>
        </ul>
      </div>
    </div>
  );
}
