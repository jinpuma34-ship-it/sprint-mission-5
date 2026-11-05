import { Check, HeartHandshake, ListOrdered, Repeat, ShieldCheck } from "lucide-react";

import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { benefits } from "@/lib/content";

const icons = [<ShieldCheck key="a" />, <HeartHandshake key="b" />, <ListOrdered key="c" />, <Repeat key="d" />];

/** 기대효과 섹션 */
export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} description={benefits.description} />
        <Reveal className="mx-auto mt-6 max-w-2xl text-center">
          <p className="inline-block rounded-full bg-primary/10 px-5 py-2.5 text-[15px] font-bold text-primary-dark">
            “{benefits.promise}”
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {benefits.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100}>
              <FeatureCard icon={icons[i]} title={item.title} className="p-7">
                <p>{item.body}</p>
                {item.tag && (
                  <Badge variant="neutral" className="mt-3">
                    {item.tag}
                  </Badge>
                )}
                {item.sample && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.sample.map((line) => (
                      <li
                        key={line}
                        className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1.5 text-xs font-bold text-success"
                      >
                        <Check className="size-3.5" strokeWidth={3} aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
