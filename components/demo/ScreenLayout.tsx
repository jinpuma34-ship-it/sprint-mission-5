import type { ReactNode } from "react";

/**
 * 데모 휴대폰 안 화면 공통 틀
 * 위: 제목 / 가운데: 내용(넘치면 스크롤) / 아래: 버튼 영역(항상 보이게 고정)
 */
export default function ScreenLayout({
  title,
  sub,
  children,
  footer,
}: {
  title?: string;
  sub?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {title && (
        <div className="shrink-0 border-b border-surface px-5 pb-3 pt-2">
          <p className="text-[17px] font-bold text-ink">{title}</p>
          {sub && <p className="mt-0.5 text-[11px] font-bold text-caption">{sub}</p>}
        </div>
      )}
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>
      {footer && <div className="shrink-0 border-t border-surface bg-background px-5 pb-6 pt-3">{footer}</div>}
    </div>
  );
}
