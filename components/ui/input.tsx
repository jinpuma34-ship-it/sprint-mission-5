import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * shadcn/ui Input — 봄펫 입력 필드 규칙
 * 기본: 회색 테두리 / 포커스: Primary 테두리 / 오류: aria-invalid일 때 빨간 테두리
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-md border border-input bg-white px-4 text-[15px] text-ink placeholder:text-caption",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25",
        "aria-[invalid=true]:border-destructive aria-[invalid=true]:bg-red-50",
        "disabled:cursor-not-allowed disabled:bg-surface",
        className
      )}
      {...props}
    />
  );
}

export { Input };
