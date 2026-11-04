import Image from "next/image";

/** 봄펫 심볼 + 글자 로고 (헤더·푸터 공통). 원본 심볼 비율은 240 x 272 */
export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <Image src="/images/bompet-symbol.png" alt="" width={size} height={Math.round((size * 272) / 240)} />
      <span className="font-display text-xl font-bold text-primary-dark">봄펫</span>
    </span>
  );
}
