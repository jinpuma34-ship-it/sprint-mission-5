import type { Metadata, Viewport } from "next";

import { site } from "@/lib/content";
import "./globals.css";

/** 페이지 제목·설명·공유 미리보기(메타데이터) — 미션 "기본 품질 점검" 항목 */
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: ["반려동물", "펫시터", "돌봄", "반려동물 맡기기", "봄펫"],
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/bompet-logo.png", width: 240, height: 370, alt: "봄펫 로고" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#4C94C8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
