import { Droplets, Footprints, Pill, UtensilsCrossed } from "lucide-react";

import type { demo } from "@/lib/content";

type Kind = (typeof demo.tasks)[number]["kind"];

/** 할 일 종류별 아이콘 (사료·약·산책·물) */
export default function TaskIcon({ kind, className }: { kind: Kind; className?: string }) {
  const props = { className, "aria-hidden": true } as const;
  if (kind === "meal") return <UtensilsCrossed {...props} />;
  if (kind === "pill") return <Pill {...props} />;
  if (kind === "walk") return <Footprints {...props} />;
  return <Droplets {...props} />;
}
