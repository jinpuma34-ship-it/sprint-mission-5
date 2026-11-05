import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button — 봄펫 디자인 가이드의 버튼 5종에 맞춰 variant를 조정했어요.
 * primary: 저장·링크 생성 등 주요 CTA / secondary: 부가 액션 / ghost: 낮은 우선순위
 * accent: 소식 전하기·긴급 알림 / disabled는 disabled 속성으로 처리
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-surface disabled:text-caption [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary: "border border-primary-dark bg-white text-primary-dark hover:bg-background",
        ghost: "text-primary-dark hover:bg-background",
        accent: "bg-accent text-accent-foreground hover:bg-primary-dark",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-13 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** true면 자식 요소(<a> 등)를 버튼 스타일로 렌더링해요 */
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
