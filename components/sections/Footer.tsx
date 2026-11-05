import Logo from "@/components/common/Logo";
import { navItems } from "@/lib/content";

/** 하단 푸터 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Logo size={26} />
          <p className="mt-2 text-xs text-caption">반려동물을 맡기는 순간, 전달부터 확인까지 한 번에.</p>
        </div>
        <nav aria-label="푸터 메뉴" className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-bold text-ink-sub hover:text-primary-dark">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="border-t border-border/60 py-4 text-center text-[11px] text-caption">
        © 2026 봄펫 · 코드잇 스프린트 미션 5 랜딩페이지
      </p>
    </footer>
  );
}
