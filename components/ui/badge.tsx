import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** 태그 & 배지 — 11px / 500, pill 모양 (진행 중·완료·미완료 등 상태 표시) */
const badgeVariants = cva(
  "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold leading-none",
  {
    variants: {
      variant: {
        progress: "bg-primary/10 text-primary-dark",
        done: "bg-success/10 text-success",
        pending: "bg-warning/10 text-warning",
        neutral: "bg-surface text-ink-sub",
      },
    },
    defaultVariants: { variant: "neutral" },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };
