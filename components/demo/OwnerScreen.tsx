import { Check, PartyPopper, RotateCcw } from "lucide-react";

import ScreenLayout from "@/components/demo/ScreenLayout";
import TaskIcon from "@/components/demo/TaskIcon";
import type { DoneMap, StepId } from "@/components/sections/Demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demo } from "@/lib/content";

/**
 * 3단계 · 보호자 진행 현황 화면
 * 와이어프레임 B-09(진행 현황) / 모두 완료되면 B-11(모두 완료)
 */
export default function OwnerScreen({
  done,
  onGoStep,
  onReset,
}: {
  done: DoneMap;
  onGoStep: (step: StepId) => void;
  onReset: () => void;
}) {
  const total = demo.tasks.length;
  const doneCount = demo.tasks.filter((t) => done[t.id]).length;
  const allDone = doneCount === total;
  const percent = Math.round((doneCount / total) * 100);

  // 완료한 일은 완료 시각 순서대로 위에, 남은 일은 예정 시각 순서대로 아래에
  const doneTasks = demo.tasks.filter((t) => done[t.id]).sort((a, b) => done[a.id].localeCompare(done[b.id]));
  const pendingTasks = demo.tasks.filter((t) => !done[t.id]);

  return (
    <ScreenLayout
      title="진행 현황"
      sub="보호자 화면"
      footer={
        allDone ? (
          <Button variant="secondary" className="w-full" onClick={onReset}>
            <RotateCcw aria-hidden />
            처음부터 다시 체험하기
          </Button>
        ) : (
          <Button variant="secondary" className="w-full" onClick={() => onGoStep(2)}>
            ← 돌봄자 화면으로 돌아가기
          </Button>
        )
      }
    >
      <div className="flex flex-col gap-3">
        {/* 요약 카드 */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-bold text-ink">{demo.pet.name} 돌봄</p>
              <p className="mt-0.5 text-[11px] text-caption">오늘 {demo.pet.date} · 돌봄자 김민지</p>
            </div>
            <Badge variant={allDone ? "done" : "progress"}>{allDone ? "모두 완료" : "진행 중"}</Badge>
          </div>
          <div
            className="mt-4 h-2 overflow-hidden rounded-full bg-surface"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={doneCount}
            aria-label="오늘 돌봄 진행률"
          >
            <div className="h-full rounded-full bg-primary transition-[width] duration-500" style={{ width: `${percent}%` }} />
          </div>
          <p className="mt-2 text-[11px] font-bold text-ink-sub">
            오늘 {total}개 중 {doneCount}개 완료
          </p>
        </div>

        {allDone ? (
          // B-11 모두 완료
          <div className="rounded-xl bg-primary p-5 text-center text-white">
            <PartyPopper className="mx-auto size-8" aria-hidden />
            <p className="mt-2 font-bold">오늘 돌봄이 모두 완료됐어요!</p>
            <p className="mt-1 text-[12px] text-white/85">다시 연락하지 않아도 안심할 수 있어요.</p>
          </div>
        ) : (
          doneCount === 0 && (
            <p className="rounded-md bg-surface px-3 py-2.5 text-center text-[12px] text-ink-sub">
              아직 완료된 돌봄이 없어요. 2단계에서 체크해 보세요!
            </p>
          )
        )}

        {/* 타임라인 */}
        <ul className="flex flex-col gap-2">
          {doneTasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-sm">
              <span className="flex size-6 items-center justify-center rounded-full bg-success text-white">
                <Check className="size-3.5" strokeWidth={3} aria-hidden />
              </span>
              <span className="flex-1 text-[13px] text-ink">
                <b className="mr-1.5 text-success">{done[task.id]}</b>
                {task.label} 완료
              </span>
            </li>
          ))}
          {pendingTasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-white/60 px-3.5 py-3">
              <TaskIcon kind={task.kind} className="size-4 text-caption" />
              <span className="flex-1 text-[13px] text-ink-sub">
                {task.time} {task.label}
              </span>
              <Badge variant="pending">미완료</Badge>
            </li>
          ))}
        </ul>
      </div>
    </ScreenLayout>
  );
}
