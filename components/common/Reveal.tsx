"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * 화면에 들어올 때 아래에서 부드럽게 나타나는 효과 (심화 요구사항: 스크롤 애니메이션)
 * - IntersectionObserver로 화면 진입을 감지해서 is-visible 클래스를 붙여요.
 * - 실제 애니메이션 CSS는 app/globals.css 의 .reveal 에 있어요.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect(); // 한 번 나타나면 더 감시하지 않아요
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
