"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = [
  {
    q: "Как работает обмен криптовалюты?",
    a: "Вы выбираете пару, вводите сумму, указываете адрес получения. Мы фиксируем курс на 15 минут, вы переводите средства на временный адрес обмена, после N подтверждений сети мы отправляем результат на ваш кошелёк.",
  },
  {
    q: "Сколько времени занимает обмен?",
    a: "Медианное время за последние 30 дней — около 7 минут. Скорость зависит от сети отправителя: Lightning/TON — почти мгновенно, Bitcoin — до 20 минут (после 1 подтверждения).",
  },
  {
    q: "Можно ли отследить статус обмена?",
    a: "Да, на странице /tracking. Введите ID заявки или email — увидите этап (Получение → Подтверждение → Конвертация → Отправка) и хэши транзакций в обе стороны.",
  },
  {
    q: "Какие комиссии вы берёте?",
    a: "Сервисная комиссия — 0.5%, всегда видна в карточке обмена. Дополнительно — комиссия сети получателя (показываем в реальном времени до подтверждения).",
  },
  {
    q: "Нужно ли проходить KYC?",
    a: "Нет, если суммарный объём за сутки не превышает $1 000. Выше — стандартная процедура: документ + селфи, занимает ~5 минут.",
  },
  {
    q: "Что если я указал адрес в неверной сети?",
    a: "Адрес валидируется до отправки. Если контрольная сумма не совпадает с выбранной сетью — кнопка «Обменять» блокируется и появляется подсказка. После отправки изменить адрес нельзя.",
  },
  {
    q: "Как проверить ваши резервы?",
    a: "В блоке «Резервы 1:1» опубликованы адреса холодных кошельков по каждому активу. Любой может открыть их в blockchain-explorer и убедиться в наличии заявленной суммы.",
  },
  {
    q: "Поддерживаете ли вы выплаты в рублях?",
    a: "Да, через СБП и банковские переводы. Доступны как ручные, так и автоматические направления — комиссия и время выплаты указаны при выборе метода.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-[var(--color-border-subtle)] py-1">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[15px] font-medium text-[var(--color-text-primary)] lg:text-[16px]">
          {q}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]">
          {open ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[800px] px-5 lg:px-8">
        <div className="mb-8 text-center">
          <span className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
            09 / Частые вопросы
          </span>
          <h2 className="mt-2 text-[28px] font-semibold tracking-tight lg:text-[34px]">
            Ответы на главное
          </h2>
        </div>

        <div>
          {FAQ.map((item, i) => (
            <FaqItem key={item.q} index={i} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-[14px] text-[var(--color-text-secondary)]">
            Не нашли ответа?
          </p>
          <Button variant="secondary" size="md">
            Написать в поддержку
          </Button>
        </div>
      </div>
    </section>
  );
}
