import { cn } from "@/lib/utils";

/** 섹션 공통 제목 (작은 영문 라벨 + 큰 제목 + 설명) */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-2xl", className)}>
      <p className="text-sm font-bold text-primary md:text-[15px]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[26px] font-bold leading-snug text-ink md:text-[34px]">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-ink-sub md:text-base">{description}</p>}
    </div>
  );
}
