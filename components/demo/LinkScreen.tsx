"use client";

import { useState } from "react";
import { Check, Copy, Link2 } from "lucide-react";

import ScreenLayout from "@/components/demo/ScreenLayout";
import { Button } from "@/components/ui/button";
import { demo } from "@/lib/content";

/**
 * 1단계 · 보호자 화면
 * 와이어프레임 B-07(일정 확인) → B-08(공유 링크 생성 완료)
 */
export default function LinkScreen({
  linkCreated,
  onCreate,
  onNext,
  onCopied,
}: {
  linkCreated: boolean;
  onCreate: () => void;
  onNext: () => void;
  onCopied: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const { pet } = demo;

  const copyLink = () => {
    // 클립보드 복사는 기다리지 않아요. 권한이 없거나 늦어져도 체험은 바로 다음으로 진행돼요.
    navigator.clipboard?.writeText(`https://${demo.link}`).catch(() => {});
    setCopied(true);
    onCopied();
  };

  // B-08: 링크 생성 완료
  if (linkCreated) {
    return (
      <ScreenLayout
        title="링크 생성 완료"
        sub="보호자 화면"
        footer={
          <Button className="w-full" onClick={onNext}>
            돌봄자 화면으로 이동 →
          </Button>
        }
      >
        <div className="flex flex-col items-center pt-6 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-white">
            <Check className="size-8" strokeWidth={3} aria-hidden />
          </span>
          <p className="mt-4 text-[17px] font-bold text-ink">돌봄 링크가 생성됐어요!</p>
          <p className="mt-1 text-[13px] text-caption">카톡이나 문자로 돌봄자에게 보내주세요.</p>

          <div className="mt-6 flex w-full items-center gap-2 rounded-md border border-border bg-white px-3 py-2.5 text-left">
            <Link2 className="size-4 shrink-0 text-primary" aria-hidden />
            <span className="flex-1 truncate text-[13px] text-ink-sub">{demo.link}</span>
          </div>

          <Button variant="secondary" size="sm" className="mt-3 w-full" onClick={copyLink}>
            {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
            {copied ? "복사됐어요" : "링크 복사"}
          </Button>
          <p className="mt-3 text-[11px] text-caption">돌봄자는 회원가입 없이 바로 확인할 수 있어요.</p>
        </div>
      </ScreenLayout>
    );
  }

  // B-07: 돌봄 일정 최종 확인
  const rows = [
    { label: "반려동물", value: `${pet.name} (${pet.breed} · ${pet.age})` },
    { label: "기간", value: pet.period },
    { label: "주의사항", value: "입력 완료" },
    { label: "비상 연락처", value: "입력 완료" },
  ];

  return (
    <ScreenLayout
      title="돌봄 일정 확인"
      sub="보호자 화면 · 마지막 단계"
      footer={
        <Button className="w-full" onClick={onCreate}>
          저장하고 링크 생성
        </Button>
      }
    >
      <div className="flex flex-col gap-3">
        <dl className="divide-y divide-surface rounded-xl bg-white px-4 shadow-sm">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2.5 text-[13px]">
              <dt className="text-caption">{row.label}</dt>
              <dd className="font-bold text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-[11px] font-bold text-primary">하루 할 일 {demo.tasks.length}개</p>
          <ul className="mt-2 space-y-1.5">
            {demo.tasks.map((task) => (
              <li key={task.id} className="flex justify-between text-[13px] text-ink">
                <span>{task.label}</span>
                <span className="text-caption">{task.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-[11px] text-caption">저장하면 공유 링크가 만들어져요.</p>
      </div>
    </ScreenLayout>
  );
}
