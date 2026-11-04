"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Cat, Dog, Hamster } from "@/components/illustrations/Pets";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup } from "@/lib/content";

type Status = "idle" | "error" | "success";

// 간단한 이메일 형식 검사: 글자@글자.글자
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * 사전 신청(CTA) 섹션 — 인터랙션 ③: 폼 입력 처리 + 제출 피드백
 * ⚠️ 지금은 서버가 없어서 이메일이 실제로 저장되지는 않고, 화면에 완료 메시지만 보여줘요.
 *    나중에 구글 시트·DB 연동을 붙이면 handleSubmit 안에서 저장하면 돼요.
 */
export default function Signup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 막기
    const value = email.trim();

    if (!value) {
      setStatus("error");
      setError(signup.errorEmpty);
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setStatus("error");
      setError(signup.errorInvalid);
      return;
    }
    setStatus("success");
  };

  const reset = () => {
    setEmail("");
    setError("");
    setStatus("idle");
  };

  return (
    <section id="signup" className="px-4 py-20 md:px-6 md:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-primary-dark px-6 py-12 text-center text-white md:px-16 md:py-16">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-white/5" />

        <div className="relative">
          <div className="flex justify-center -space-x-3">
            {[Dog, Cat, Hamster].map((Icon, i) => (
              <span key={i} className="flex size-16 items-center justify-center rounded-full border-4 border-primary-dark bg-white p-1.5">
                <Icon className="size-full" />
              </span>
            ))}
          </div>
          <h2 className="mt-4 font-display text-[24px] font-bold leading-snug md:text-[32px]">{signup.title}</h2>
          <p className="mt-3 text-[15px] text-white/85">{signup.description}</p>

          <div className="mx-auto mt-8 max-w-lg" aria-live="polite">
            {status === "success" ? (
              <div className="rounded-xl bg-white px-6 py-6 text-ink">
                <CheckCircle2 className="mx-auto size-9 text-success" aria-hidden />
                <p className="mt-2 text-lg font-bold">{signup.successTitle}</p>
                <p className="mt-1 text-sm text-ink-sub">
                  <b className="text-primary-dark">{email.trim()}</b> 으로 {signup.successBody}
                </p>
                <Button variant="ghost" size="sm" className="mt-3" onClick={reset}>
                  {signup.reset}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 sm:flex-row">
                <label htmlFor="signup-email" className="sr-only">
                  {signup.placeholder}
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={signup.placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle"); // 다시 입력하면 오류 표시 지우기
                  }}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "signup-error" : undefined}
                  className="border-transparent sm:flex-1"
                />
                <Button type="submit" variant="accent" size="lg" className="h-12 bg-white text-primary-dark hover:bg-background">
                  {signup.button}
                </Button>
              </form>
            )}

            {status === "error" && (
              <p id="signup-error" className="mt-3 text-sm font-bold text-[#FFD7D7]">
                {error}
              </p>
            )}
          </div>

          <p className="mt-5 text-xs text-white/70">{signup.note}</p>
        </div>
      </div>
    </section>
  );
}
