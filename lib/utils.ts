import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** 여러 className을 합치고, 겹치는 Tailwind 클래스는 뒤의 것으로 정리해요 (shadcn/ui 기본 유틸) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
