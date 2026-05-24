import Link from "next/link";

const COL_SERVICE = [
  { label: "Обмен", href: "#exchange" },
  { label: "Курсы", href: "#rates" },
  { label: "Резервы", href: "#reserves" },
  { label: "Статус", href: "#" },
];

const COL_SUPPORT = [
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#" },
  { label: "Чат", href: "#" },
  { label: "Telegram-канал", href: "#" },
];

const COL_LEGAL = [
  { label: "Условия использования", href: "#" },
  { label: "Политика конфиденциальности", href: "#" },
  { label: "AML-политика", href: "#" },
  { label: "KYC-политика", href: "#" },
  { label: "Cookies", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[16px] font-semibold tracking-tight"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[10px] font-bold">
                SC
              </span>
              SolidChange
            </Link>
            <p className="mt-4 max-w-[320px] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              Обменник криптовалют с открытыми резервами, прозрачными
              комиссиями и AML-проверкой каждой сделки.
            </p>

            <form className="mt-6 flex max-w-[320px] gap-2">
              <input
                type="email"
                placeholder="email@example.com"
                className="h-10 min-w-0 flex-1 rounded-[10px] border border-[var(--color-border-subtle)] bg-transparent px-3 text-[13px] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-border-strong)] focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-[10px] bg-[var(--color-accent)] px-4 text-[13px] font-medium text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Подписаться
              </button>
            </form>
            <p className="mt-2 text-[11px] text-[var(--color-text-muted)]">
              Только обновления сервиса. Без спама.
            </p>
          </div>

          <FooterCol title="Сервис" items={COL_SERVICE} />
          <FooterCol title="Поддержка" items={COL_SUPPORT} />
          <FooterCol title="Документы" items={COL_LEGAL} className="lg:col-span-3" />
        </div>

        <div className="mt-12 border-t border-[var(--color-border-subtle)] pt-6">
          <p className="text-[11px] leading-relaxed text-[var(--color-text-muted)]">
            <strong className="text-[var(--color-text-secondary)]">
              Дисклеймер.
            </strong>{" "}
            Криптовалюты — высокорисковый актив. Курс может меняться значительно
            и быстро. Используя сервис, вы подтверждаете, что осознаёте риски и
            соглашаетесь с условиями использования и AML-политикой.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[var(--color-text-muted)]">
          <div>
            © {new Date().getFullYear()} SolidChange. Все права защищены.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>Юрисдикция: ЕС</span>
            <span>Лицензия: SC-2025-0142</span>
            <Link href="#" className="hover:text-[var(--color-text-primary)]">
              EN
            </Link>
            <Link href="#" className="hover:text-[var(--color-text-primary)]">
              RU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  className,
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={`lg:col-span-2 ${className ?? ""}`}>
      <h5 className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
        {title}
      </h5>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="text-[13px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
