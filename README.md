# SolidChange — Redesign

Современный редизайн криптообменника **SolidChange** (solidchange.online). Тёмная палитра в стиле private banking, прозрачная swap-карточка как ключевой элемент главной, 10-блочная структура страницы.

## Стек

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (через `@theme inline`)
- **Motion** (`motion/react`, бывший Framer Motion)
- **Lucide** иконки (моно-линейные, 1.5 px stroke)
- `clsx` + `tailwind-merge` + `class-variance-authority` для вариантов

Архитектурно вдохновлён подходом Aceternity UI / Magic UI / shadcn — компоненты живут локально в `src/components/ui` и `src/components/sections`, легко модифицируются, без внешних UI-зависимостей.

## Структура

```
src/
├─ app/
│  ├─ layout.tsx        # шрифты Geist + meta
│  ├─ page.tsx          # сборка 10 блоков
│  └─ globals.css       # дизайн-токены (цвета, шрифты, радиусы)
├─ components/
│  ├─ ui/               # Button, Card, Chip, Input, Sparkline
│  └─ sections/         # Navbar, Hero, SwapCard, Rates, Popular, Security…
├─ data/
│  └─ assets.ts         # mock-данные курсов и резервов
└─ lib/
   └─ utils.ts          # cn(), formatAmount(), formatPercent()
```

## Запуск локально

```bash
pnpm install
pnpm dev
```

Открыть `http://localhost:3000`.

## Дизайн-токены

Палитра целиком определена в `src/app/globals.css` через `@theme inline`:

| Назначение | Значение |
|---|---|
| Bg base | `#0B0608` |
| Bg elevated | `#150C10` |
| Hero gradient | `#1A0F14 → #3A1F2B` |
| Text primary | `#F5EDE4` |
| Text secondary | `#9A8E86` |
| Accent (CTA) | `#E8C9A0` (champagne) |
| Success | `#7FB28A` |
| Warning | `#D9A86A` |
| Danger | `#C9786A` |

Все цифры идут с `font-variant-numeric: tabular-nums` — суммы не «прыгают» при пересчёте.

## Деплой на Vercel

```bash
pnpm i -g vercel
vercel
```

Или импортировать репозиторий через [vercel.com/new](https://vercel.com/new) — Vercel автоматически определит Next.js и предложит дефолтную конфигурацию.

## Что внутри

10 секций главной страницы согласно брифу:

1. **Hero** — заголовок, доверие-bullets, swap-карточка.
2. **Rates** — moving ticker + таблица курсов с спарклайнами.
3. **Popular cryptos** — grid из 8 карточек.
4. **Security / AML / KYC** — 4 карточки + партнёры.
5. **How it works** — 4 шага с dashed-коннекторами.
6. **Advantages** — bento-grid с цифрами.
7. **Reserves** — публичная таблица on-chain резервов + KPI.
8. **Reviews** — сдержанные отзывы + бейджи Trustpilot/BestChange.
9. **FAQ** — accordion с одним открытым пунктом.
10. **Footer** — 4 колонки, дисклеймер, юрисдикция, лицензия.

## Дизайн-бриф

Исходный текстовый бриф для AI-генераторов и дизайнеров — в `docs/design-prompt.md`.
