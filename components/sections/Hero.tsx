import { CalendarDays, Check, House, ListChecks, PawPrint, UserRound } from "lucide-react";

import { Cat, Dog } from "@/components/illustrations/Pets";

import PhoneFrame from "@/components/common/PhoneFrame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

/** 히어로 미리보기용 고정 데이터 (실제 동작은 #demo 섹션에서 체험) */
const previewTasks = [
  { label: "아침 사료", time: "08:03", done: true },
  { label: "심장사상충 약", time: "08:15", done: true },
  { label: "산책 30분", time: "18:00", done: false },
  { label: "저녁 사료 + 물 교체", time: "19:00", done: false },
];

/** 첫 화면: 서비스 한 줄 소개 + CTA + 보호자 진행 현황 화면 미리보기 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 배경 장식 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        {/* 텍스트 */}
        <div>
          <Badge variant="progress" className="px-3 py-1.5 text-xs">
            <PawPrint className="size-3.5" aria-hidden />
            {hero.eyebrow}
          </Badge>

          <h1 className="mt-5 font-display text-[32px] font-bold leading-[1.3] text-ink sm:text-[40px] lg:text-[52px]">
            {hero.titleLines[0]}
            <br />
            <span className="text-primary">{hero.titleLines[1]}</span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-sub md:text-lg">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#signup">{hero.primaryCta}</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#demo">{hero.secondaryCta}</a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-ink-sub">
            {hero.points.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Check className="size-4 text-primary" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* 휴대폰 미리보기: 보호자 진행 현황 화면 + 뒤에서 빼꼼 보는 반려동물 */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <div aria-hidden className="absolute inset-x-6 top-16 bottom-10 rounded-full bg-primary/15 blur-2xl" />
          <Dog className="absolute -left-6 bottom-16 z-0 hidden w-36 -rotate-12 sm:block" />
          <Cat className="absolute -right-6 top-20 z-0 hidden w-32 rotate-12 sm:block" />
          <div className="relative z-10">
          <PhoneFrame label="봄펫 보호자 진행 현황 화면 예시: 코코 돌봄 4개 중 2개 완료">
            <div className="flex flex-col gap-3 px-5 pb-4 pt-3">
              <p className="text-[17px] font-bold text-ink">진행 현황</p>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-ink">코코 돌봄</p>
                    <p className="mt-0.5 text-[11px] text-caption">9/24 – 9/26 · 돌봄자 김민지</p>
                  </div>
                  <Badge variant="progress">진행 중</Badge>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface">
                  <div className="h-full w-1/2 rounded-full bg-primary" />
                </div>
                <p className="mt-2 text-[11px] font-bold text-ink-sub">오늘 4개 중 2개 완료</p>
              </div>

              <ul className="flex flex-col gap-2">
                {previewTasks.map((task) => (
                  <li key={task.label} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span
                      className={
                        task.done
                          ? "flex size-6 items-center justify-center rounded-md bg-primary text-white"
                          : "size-6 rounded-md border-2 border-surface"
                      }
                    >
                      {task.done && <Check className="size-4" strokeWidth={3} />}
                    </span>
                    <span className={task.done ? "flex-1 text-sm text-caption line-through" : "flex-1 text-sm text-ink"}>
                      {task.label}
                    </span>
                    <span className="text-[11px] font-bold text-caption">{task.time}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-primary/8 px-4 py-3">
                <p className="text-[11px] font-bold text-primary">돌봄자 메모</p>
                <p className="mt-1 text-[13px] text-ink">코코가 오늘 밥을 잘 먹었어요!</p>
              </div>
            </div>

            {/* 하단 탭바 */}
            <nav aria-hidden className="mt-auto grid shrink-0 grid-cols-4 border-t border-surface bg-white px-2 pb-5 pt-2">
              {[
                { Icon: House, label: "홈" },
                { Icon: CalendarDays, label: "일정" },
                { Icon: ListChecks, label: "현황", active: true },
                { Icon: UserRound, label: "내 정보" },
              ].map(({ Icon, label, active }) => (
                <span key={label} className={active ? "flex flex-col items-center gap-0.5 text-primary" : "flex flex-col items-center gap-0.5 text-caption"}>
                  <Icon className="size-5" />
                  <span className="text-[10px] font-bold">{label}</span>
                </span>
              ))}
            </nav>
          </PhoneFrame>

          </div>
        </div>
      </div>
    </section>
  );
}
