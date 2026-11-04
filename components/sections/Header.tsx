"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { hero, navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * 상단 헤더
 * - 데스크톱: 메뉴가 가로로 펼쳐져 있어요.
 * - 모바일: 햄버거 버튼으로 메뉴를 열고 닫아요. (인터랙션 ①)
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  // ESC 키로 모바일 메뉴 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" aria-label="봄펫 홈으로" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-ink-sub transition-colors hover:text-primary-dark">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#signup">{hero.primaryCta}</a>
          </Button>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-ink hover:bg-surface md:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 패널 */}
      <nav
        id="mobile-menu"
        aria-label="모바일 메뉴"
        className={cn(
          "overflow-hidden border-t border-border/70 bg-white transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <ul className="flex flex-col px-4 py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-lg px-3 py-3 text-[15px] font-bold text-ink hover:bg-background"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="px-3 pb-3 pt-2">
            <Button asChild className="w-full">
              <a href="#signup" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {hero.primaryCta}
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
