"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, Moon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoLockup } from "@/components/brand/logo";

const NAV = [
  { href: "#exchange", label: "Обмен" },
  { href: "#rates", label: "Курсы" },
  { href: "#reserves", label: "Резервы" },
  { href: "#how", label: "Как работает" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="SolidChange" className="flex items-center">
          <LogoLockup variant="seal" size={28} />
        </Link>

        <nav className="hidden gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-3 py-2 text-[13px] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#tracking"
            className="rounded-[8px] px-3 py-2 text-[13px] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]"
          >
            Отследить
          </Link>
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <button
            aria-label="Сменить тему"
            className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]"
          >
            <Moon size={16} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Язык"
            className="flex h-9 items-center gap-1.5 rounded-[8px] px-2.5 text-[12px] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]"
          >
            <Globe size={14} strokeWidth={1.5} />
            RU
          </button>
          <Button variant="secondary" size="sm">
            Войти
          </Button>
        </div>

        <button
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[var(--color-text-secondary)] lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-5 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-3 py-2 text-[14px] text-[var(--color-text-secondary)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#tracking"
              onClick={() => setOpen(false)}
              className="rounded-[8px] px-3 py-2 text-[14px] text-[var(--color-text-secondary)]"
            >
              Отследить
            </Link>
            <Button variant="secondary" size="md" className="mt-2 w-full">
              Войти
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
