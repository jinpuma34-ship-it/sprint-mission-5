import { Layers, MessageCircleQuestion, Pill, ScrollText, Turtle } from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { problem } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [<ScrollText key="a" />, <Layers key="b" />, <MessageCircleQuestion key="c" />, <Turtle key="d" />];

/** 문제 섹션: 실제 대화 예시 + 4가지 불편 */
export default function Problem() {
  const { chat } = problem;

  return (
    <section id="problem" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={problem.eyebrow} title={problem.title} description={problem.description} />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
          {/* 메신저 대화 예시 */}
          <Reveal>
            <figure className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 border-b border-border bg-white px-5 py-3.5">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary-dark">
                  민지
                </span>
                <span className="text-sm font-bold text-ink">{chat.title}</span>
              </div>

              <ol className="flex flex-col gap-3 px-4 py-5">
                {chat.messages.map((m, i) => {
                  const mine = m.from === "owner";
                  // 같은 사람이 연속으로 보낸 짧은 확인 메시지는 강조
                  const nag = mine && m.text.endsWith("?");
                  const photo = m.text.startsWith("📷");
                  return (
                    <li key={i} className={cn("flex items-end gap-1.5", mine ? "flex-row-reverse" : "flex-row")}>
                      {photo ? (
                        <span className="flex h-20 w-32 flex-col items-center justify-center gap-1 rounded-2xl rounded-br-md bg-primary/20 text-[11px] font-bold text-primary-dark">
                          <Pill className="size-5" aria-hidden />
                          {m.text.replace("📷 ", "")}
                        </span>
                      ) : (
                      <p
                        className={cn(
                          "max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                          mine ? "rounded-br-md bg-primary text-white" : "rounded-bl-md bg-white text-ink shadow-sm",
                          nag && "font-bold"
                        )}
                      >
                        {m.text}
                      </p>
                      )}
                      <span className="shrink-0 pb-0.5 text-[10px] text-caption">{m.time}</span>
                    </li>
                  );
                })}
              </ol>
              <figcaption className="border-t border-border bg-white px-5 py-3 text-center text-xs text-caption">
                {chat.caption}
              </figcaption>
            </figure>
          </Reveal>

          {/* 불편 4가지 */}
          <div className="grid gap-4 sm:grid-cols-2">
            {problem.pains.map((pain, i) => (
              <Reveal key={pain.title} delay={i * 80}>
                <FeatureCard icon={icons[i]} label={`불편 0${i + 1}`} title={pain.title}>
                  <p>{pain.body}</p>
                  <p className="mt-4 border-l-2 border-primary/40 pl-3 text-[13px] font-bold text-ink">“{pain.quote}”</p>
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
