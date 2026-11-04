import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * 재사용 카드 컴포넌트 — 문제·사용 방법·기대효과 섹션에서 같이 써요.
 * (미션 요구사항: 반복되는 UI는 재사용 컴포넌트로)
 */
export default function FeatureCard({
  icon,
  label,
  title,
  children,
  className,
}: {
  icon?: ReactNode;
  /** 제목 위 작은 글씨 (예: 01, 보호자) */
  label?: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn("h-full rounded-xl border border-border/70 bg-white p-6", className)}>
      {icon && (
        <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary-dark [&_svg]:size-5">
          {icon}
        </div>
      )}
      {label && <p className="mb-2 text-xs font-bold text-primary">{label}</p>}
      <h3 className="text-[17px] font-bold leading-snug text-ink">{title}</h3>
      {children && <div className="mt-2 text-sm leading-relaxed text-ink-sub">{children}</div>}
    </article>
  );
}
