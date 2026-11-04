# 봄펫 랜딩페이지 — AI 작업 맥락 (CLAUDE.md)

이 파일은 Claude Code 같은 에이전틱 코딩 도구가 프로젝트를 이해하고 일관되게 작업하도록 돕는 컨텍스트 파일입니다.

## 프로젝트 개요
- **서비스**: 봄펫 — 반려동물을 맡길 때 돌봄 일정·주의사항을 링크 하나로 전달하고, 돌봄자의 완료 체크로 보호자가 진행 상황을 확인하는 웹 서비스
- **목적**: 출시 전 수요 검증용 랜딩페이지 (코드잇 스프린트 미션 5)
- **타깃**: 최근 1년 내 여행·출장·외박으로 반려동물을 가족·친구·지인·펫시터에게 맡긴 경험이 있고, 맡긴 뒤에도 수행 여부를 다시 확인하는 보호자
- **핵심 CTA**: `사전 신청하기` → 이메일 입력 → `출시 알림 받기`
- **핵심 흐름**: 일정 작성 → 링크 공유 → 돌봄자 완료 체크 → 보호자 확인
- **하지 않는 것(PRD 기준)**: AI 상담·진단, GPS 위치 추적, 펫시터 매칭, 결제, 커뮤니티. 랜딩 문구에 AI 기능을 넣지 않는다.

## 기술 스택
- Next.js (App Router), TypeScript
- Tailwind CSS v4 (설정 파일 없이 `app/globals.css`의 `@theme`에서 토큰 정의)
- shadcn/ui (`components/ui/` — Button, Input, Badge)
- lucide-react 아이콘

## 폴더 구조
```
app/
  layout.tsx        메타데이터(title, description, Open Graph), html lang="ko"
  page.tsx          섹션 조립만 한다 (로직 넣지 않기)
  globals.css       디자인 토큰, 폰트, 스크롤 애니메이션
  icon.png          파비콘
components/
  sections/         페이지 섹션 1개 = 파일 1개
  demo/             체험 섹션 안의 휴대폰 화면들 (LinkScreen, CaregiverScreen, OwnerScreen)
  common/           Logo, PhoneFrame, SectionHeading, Reveal
  ui/               shadcn/ui 컴포넌트
  FeatureCard.tsx   반복 카드
lib/
  content.ts        모든 문구. 텍스트 수정은 여기서만 한다
  utils.ts          cn()
public/images/      로고 이미지
```

## 디자인 규칙 (봄펫 스타일 가이드)
- **색상**: Primary `#4C94C8`(주요 버튼·CTA) / Primary Dark `#2F6F9E`(hover·링크) / Accent `#367FAF` / Text `#162B3A` / Text Sub `#354D5E` / Caption `#6B8191` / Surface `#E7EEF3` / Background `#F2F8FC`
- Tailwind 클래스명: `bg-primary`, `bg-primary-dark`, `text-ink`, `text-ink-sub`, `text-caption`, `bg-surface`, `bg-background`, 상태색 `text-success`, `text-warning`
- 새 색을 hex로 직접 쓰지 말고 토큰을 쓴다 (예외: 카카오톡 말풍선 노랑)
- **폰트**: 제목 `font-display`(티머니 라운드바람) / 본문 기본(나눔스퀘어라운드)
- **타이포**: Display 28/700, H1 22/700, H2 17/600, Body 15/400, Small 13/400, Caption·Label 11
- **모서리**: 태그 4px(`rounded-sm`) / 입력 8px(`rounded-md`) / 버튼 12px(`rounded-lg`) / 카드 16px(`rounded-xl`) / 큰 컨테이너 24px(`rounded-2xl`) / pill(`rounded-full`)
- **간격**: 4·8·12·16·24·32·48 스케일 사용
- 텍스트 대비 4.5:1 이상 유지

## 작업 규칙
- 섹션은 `components/sections/`에 파일 하나씩, 반복 UI는 재사용 컴포넌트로 분리한다
- 상태(useState)·이벤트를 쓰는 파일만 맨 위에 `"use client"`를 붙인다
- 모바일 우선: 기본 스타일은 모바일, 큰 화면은 `sm:` `md:` `lg:`로 확장한다. 가로 스크롤이 생기면 안 된다
- 모든 이미지에 `alt`, 아이콘만 있는 버튼에 `aria-label`을 넣는다
- 링크(`<a>`)는 페이지 이동/앵커, 동작은 `<button>`을 쓴다
- 수정 후 `npm run build`가 에러 없이 끝나는지 확인한다

## Git 규칙
- 작업 브랜치: `sprint5` (기준 브랜치 `sprint5-base`, `main`에는 직접 커밋하지 않는다)
- 커밋 메시지: `feat:` 기능, `fix:` 버그, `style:` 디자인, `docs:` 문서, `chore:` 설정
- 커밋·푸시 전에 `git status`, `git diff`로 변경 범위를 사람에게 먼저 보여주고 확인받는다
- `node_modules`, `.next`, `.env*`는 커밋하지 않는다
