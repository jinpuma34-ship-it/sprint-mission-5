import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * 휴대폰 모양 틀 — 봄펫은 모바일에서 쓰는 서비스라 화면을 폰 안에 보여줘요.
 * children 자리에 실제 앱 화면이 들어가요.
 */
export default function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  /** 스크린리더용 설명 (예: "봄펫 진행 현황 화면 예시") */
  label?: string;
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(
        "relative mx-auto w-full max-w-[320px] rounded-[44px] bg-ink p-2.5 shadow-[0_30px_60px_-20px_rgba(22,43,58,0.45)]",
        className
      )}
    >
      <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[36px] bg-background">
        {/* 상태 표시줄 */}
        <div className="flex h-9 shrink-0 items-center justify-between px-6 text-[11px] font-bold text-ink">
          <span>9:41</span>
          <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
          <span className="h-2.5 w-5 rounded-sm border border-ink/60" aria-hidden />
        </div>
        {children}
      </div>
    </div>
  );
}
