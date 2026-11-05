import { AlertTriangle, Check, Lock } from "lucide-react";

import ScreenLayout from "@/components/demo/ScreenLayout";
import TaskIcon from "@/components/demo/TaskIcon";
import type { DoneMap, StepId } from "@/components/sections/Demo";
import { Button } from "@/components/ui/button";
import { demo } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * 2단계 · 돌봄자 화면 (링크로 접속, 가입 없음)
 * 노션 기획의 "보리의 오늘 돌봄" 카드 + 와이어프레임 B-10 체크 목록
 */
export default function CaregiverScreen({
  linkCreated,
  done,
  onToggle,
  onGoStep,
}: {
  linkCreated: boolean;
  done: DoneMap;
  onToggle: (id: string) => void;
  onGoStep: (step: StepId) => void;
}) {
  // 링크가 아직 없으면: 유저플로우의 "링크가 유효한가?" 예외 처리
  if (!linkCreated) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-surface text-caption">
          <Lock className="size-6" aria-hidden />
        </span>
        <p className="font-bold text-ink">아직 받은 돌봄 링크가 없어요</p>
        <p className="text-[13px] text-caption">1단계에서 보호자가 링크를 먼저 만들어야 해요.</p>
        <Button size="sm" className="mt-2" onClick={() => onGoStep(1)}>
          1단계로 가기
        </Button>
      </div>
    );
  }

  const doneCount = demo.tasks.filter((t) => done[t.id]).length;

  return (
    <ScreenLayout
      title={`🐶 ${demo.pet.name}의 오늘 돌봄`}
      sub={`${demo.pet.date} · 돌봄자 화면`}
      footer={
        <Button variant={doneCount > 0 ? "primary" : "secondary"} className="w-full" onClick={() => onGoStep(3)}>
          보호자 화면에서 확인하기 →
        </Button>
      }
    >
      <div className="flex flex-col gap-3">
        {/* 주의사항 (경고 카드) */}
        <div className="rounded-xl border border-warning/30 bg-warning/8 p-3">
          <p className="flex items-center gap-1.5 text-[12px] font-bold text-warning">
            <AlertTriangle className="size-3.5" aria-hidden />
            주의사항
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-sub">{demo.caution}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-ink">할 일을 마치면 눌러주세요</p>
          <p className="text-[11px] font-bold text-primary">
            {doneCount}/{demo.tasks.length} 완료
          </p>
        </div>

        {/* 체크 목록 */}
        <ul className="flex flex-col gap-2">
          {demo.tasks.map((task) => {
            const doneAt = done[task.id];
            return (
              <li key={task.id}>
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={Boolean(doneAt)}
                  onClick={() => onToggle(task.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border bg-white px-3.5 py-3 text-left transition-all active:scale-[0.98]",
                    doneAt ? "border-primary/40 bg-primary/5" : "border-transparent shadow-sm hover:border-primary/30"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                      doneAt ? "border-primary bg-primary text-white" : "border-border bg-white"
                    )}
                  >
                    {doneAt && <Check className="size-4" strokeWidth={3} aria-hidden />}
                  </span>
                  <TaskIcon kind={task.kind} className="size-4 shrink-0 text-primary-dark" />
                  <span className="flex-1">
                    <span className={cn("block text-[14px]", doneAt ? "text-caption line-through" : "font-bold text-ink")}>
                      {task.label}
                    </span>
                    <span className="block text-[11px] text-caption">
                      {doneAt ? `${doneAt} 완료` : `${task.time} 예정`}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </ScreenLayout>
  );
}
