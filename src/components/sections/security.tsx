import { ShieldCheck, FileCheck, KeyRound, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "AML-проверка",
    text: "Каждая транзакция проходит проверку через Chainalysis и Elliptic — мы не работаем с засвеченными адресами.",
  },
  {
    icon: FileCheck,
    title: "KYC при необходимости",
    text: "Прозрачные пороги: до $1 000 / сутки без идентификации, выше — стандартная процедура за 5 минут.",
  },
  {
    icon: KeyRound,
    title: "Холодное хранение",
    text: "98% средств хранится в холодных кошельках с мульти-подписью. Доказательства резерва — on-chain.",
  },
  {
    icon: Eye,
    title: "Двухфакторная аутентификация",
    text: "Обязательна для аккаунтов с объёмом от $5 000/мес. Поддержка TOTP-приложений и аппаратных ключей.",
  },
];

const PARTNERS = ["Chainalysis", "Elliptic", "Sumsub", "Crystal"];

export function SecurityAML() {
  return (
    <section
      id="security"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
              04 / Безопасность и AML / KYC
            </span>
            <h2 className="mt-2 text-[32px] font-semibold leading-tight tracking-tight lg:text-[40px]">
              Безопасность как у банка,
              <br />
              скорость как у крипты
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Мы делаем доверие проверяемым, а не декларируемым: партнёры по
              AML-мониторингу, холодное хранение и понятные пороги KYC.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {ITEMS.map((it) => (
              <Card key={it.title} className="flex flex-col gap-3 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--color-border-subtle)] text-[var(--color-accent)]">
                  <it.icon size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium">{it.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                    {it.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[var(--color-border-subtle)] pt-8">
          <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Партнёры по AML / KYC
          </span>
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="text-[14px] font-medium tracking-tight text-[var(--color-text-secondary)] opacity-70 transition-opacity hover:opacity-100"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
