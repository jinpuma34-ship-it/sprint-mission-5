import { CalendarClock, LayoutDashboard, Link2, ListChecks, PawPrint } from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import { pets } from "@/components/illustrations/Pets";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { howItWorks } from "@/lib/content";

const stepIcons = [<CalendarClock key="a" />, <Link2 key="b" />, <ListChecks key="c" />];
const extraIcons = [<PawPrint key="a" />, <LayoutDashboard key="b" />];

/** 해결 섹션: 3단계 사용 흐름 */
export default function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} description={howItWorks.description} />

        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <li key={step.number}>
              <Reveal delay={i * 100} className="h-full">
                <FeatureCard icon={stepIcons[i]} label={`STEP ${step.number} · ${step.who}`} title={step.title}>
                  {step.body}
                </FeatureCard>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {howItWorks.extras.map((extra, i) => (
            <Reveal key={extra.title} delay={i * 100}>
              <div className="flex h-full items-start gap-4 rounded-xl bg-primary/8 p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-dark [&_svg]:size-5">
                  {extraIcons[i]}
                </span>
                <div>
                  <h3 className="font-bold text-ink">{extra.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-sub">{extra.body}</p>
                  {/* 첫 번째 카드에만 반려동물 일러스트 줄 */}
                  {i === 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {pets.map(({ name, Icon }) => (
                        <li key={name} className="flex flex-col items-center gap-1">
                          <span className="flex size-12 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
                            <Icon className="size-full" />
                          </span>
                          <span className="text-[11px] font-bold text-ink-sub">{name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* 두 번째 카드에는 PC 대시보드 미리보기 */}
                  {i === 1 && (
                    <ul className="mt-4 divide-y divide-surface overflow-hidden rounded-lg bg-white text-[12px] shadow-sm">
                      {howItWorks.history.map((h) => (
                        <li key={h.period} className="flex items-center gap-3 px-3 py-2.5">
                          <span className="w-8 font-bold text-ink">{h.pet}</span>
                          <span className="flex-1 text-ink-sub">
                            {h.period} · {h.sitter}
                          </span>
                          <Badge variant={h.done ? "done" : "progress"}>{h.status}</Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
