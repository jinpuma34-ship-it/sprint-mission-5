"use client";

import { useEffect, useState } from "react";

import PhoneFrame from "@/components/common/PhoneFrame";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import CaregiverScreen from "@/components/demo/CaregiverScreen";
import LinkScreen from "@/components/demo/LinkScreen";
import OwnerScreen from "@/components/demo/OwnerScreen";
import { demo } from "@/lib/content";
import { cn } from "@/lib/utils";

export type StepId = 1 | 2 | 3;
/** 할 일 id → 완료한 시각("08:03"), 아직 안 했으면 없음 */
export type DoneMap = Record<string, string>;

/**
 * 체험 섹션 (인터랙션 ②: 핵심 기능 체험)
 * 보호자 링크 생성 → 돌봄자 완료 체크 → 보호자 진행 현황 확인
 * 세 화면이 같은 상태(linkCreated, done)를 공유해서, 체크하면 보호자 화면에 바로 반영돼요.
 */
export default function Demo() {
  const [step, setStep] = useState<StepId>(1);
  const [linkCreated, setLinkCreated] = useState(false);
  const [done, setDone] = useState<DoneMap>({});
  const [toast, setToast] = useState<string | null>(null);

  // 토스트는 2초 뒤 자동으로 사라져요
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  /** 돌봄자가 할 일을 눌렀을 때: 완료 ↔ 취소 */
  const toggleTask = (id: string) => {
    const next = { ...done };
    if (next[id]) {
      delete next[id];
      setToast("체크를 취소했어요");
    } else {
      const now = new Date();
      // 지금 시각을 "08:03" 형식으로 기록
      next[id] = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      setToast("보호자에게 완료가 전달됐어요");
    }
    setDone(next);
  };

  const reset = () => {
    setLinkCreated(false);
    setDone({});
    setStep(1);
  };

  return (
    <section id="demo" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={demo.eyebrow} title={demo.title} description={demo.description} />

        <Reveal className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,440px)_340px] lg:justify-center lg:gap-16">
          {/* 단계 선택: 모바일은 가로 3칸, 데스크톱은 세로 목록 */}
          <ol className="grid grid-cols-3 gap-2 lg:mt-10 lg:grid-cols-1 lg:gap-3" aria-label="체험 단계">
            {demo.steps.map((s) => {
              const active = step === s.id;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setStep(s.id)}
                    aria-current={active ? "step" : undefined}
                    className={cn(
                      "flex h-full w-full flex-col items-center gap-1 rounded-xl border p-3 text-center transition-colors lg:flex-row lg:items-start lg:gap-4 lg:p-5 lg:text-left",
                      active
                        ? "border-primary bg-primary/8 lg:shadow-sm"
                        : "border-border bg-white hover:border-primary/40"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        active ? "bg-primary text-white" : "bg-surface text-ink-sub"
                      )}
                    >
                      {s.id}
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold text-primary">{s.who}</span>
                      <span className="block text-[13px] font-bold text-ink lg:hidden">{s.short}</span>
                      <span className="hidden text-base font-bold text-ink lg:block">{s.title}</span>
                      <span className="mt-1 hidden text-sm leading-relaxed text-ink-sub lg:block">{s.body}</span>
                    </span>
                  </button>
                </li>
              );
            })}
            <li className="col-span-3 hidden pt-2 text-sm text-caption lg:col-span-1 lg:block">
              💡 2단계에서 할 일을 눌러 체크한 뒤, 3단계 화면이 어떻게 바뀌는지 확인해 보세요.
            </li>
          </ol>

          {/* 휴대폰 화면 */}
          <div className="relative w-full lg:w-[340px]">
            <PhoneFrame>
              <div className="flex min-h-0 flex-1 flex-col" aria-live="polite">
                {step === 1 && (
                  <LinkScreen
                    linkCreated={linkCreated}
                    onCreate={() => setLinkCreated(true)}
                    onNext={() => setStep(2)}
                    onCopied={() => setToast("링크를 복사했어요")}
                  />
                )}
                {step === 2 && (
                  <CaregiverScreen
                    linkCreated={linkCreated}
                    done={done}
                    onToggle={toggleTask}
                    onGoStep={setStep}
                  />
                )}
                {step === 3 && <OwnerScreen done={done} onGoStep={setStep} onReset={reset} />}
              </div>

              {/* 토스트 알림 */}
              {toast && (
                <div
                  role="status"
                  className="animate-toast absolute bottom-24 left-1/2 w-max max-w-[85%] -translate-x-1/2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-bold text-white shadow-lg"
                >
                  {toast}
                </div>
              )}
            </PhoneFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
