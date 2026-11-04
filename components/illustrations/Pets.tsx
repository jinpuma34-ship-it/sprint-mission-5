/**
 * 봄펫 반려동물 일러스트 (직접 그린 SVG — 저작권 걱정 없이 사용 가능)
 * 로고처럼 둥글고 단순한 모양 + 브랜드 블루 계열 색만 사용해요.
 * 장식용이라 기본으로 aria-hidden 처리돼요.
 */

const C = {
  main: "#4C94C8", // Primary
  dark: "#2F6F9E", // Primary Dark
  light: "#A9CDE6",
  pale: "#DCEBF6",
  ink: "#162B3A",
  blush: "#F4B6A6",
  white: "#FFFFFF",
};

type Props = { className?: string };

export function Dog({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* 귀 */}
      <ellipse cx="28" cy="58" rx="16" ry="28" fill={C.dark} transform="rotate(18 28 58)" />
      <ellipse cx="92" cy="58" rx="16" ry="28" fill={C.dark} transform="rotate(-18 92 58)" />
      {/* 얼굴 */}
      <circle cx="60" cy="64" r="38" fill={C.main} />
      <ellipse cx="60" cy="80" rx="22" ry="17" fill={C.white} />
      {/* 눈·코·입 */}
      <circle cx="46" cy="58" r="4.5" fill={C.ink} />
      <circle cx="74" cy="58" r="4.5" fill={C.ink} />
      <circle cx="47.5" cy="56.5" r="1.4" fill={C.white} />
      <circle cx="75.5" cy="56.5" r="1.4" fill={C.white} />
      <ellipse cx="60" cy="73" rx="6.5" ry="4.5" fill={C.ink} />
      <path d="M60 77 v5 M53 84 q7 5 14 0" stroke={C.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="72" r="5" fill={C.blush} opacity=".8" />
      <circle cx="82" cy="72" r="5" fill={C.blush} opacity=".8" />
    </svg>
  );
}

export function Cat({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* 귀 */}
      <path d="M24 52 L30 14 L54 36 Z" fill={C.light} />
      <path d="M96 52 L90 14 L66 36 Z" fill={C.light} />
      <path d="M31 40 L33 24 L44 34 Z" fill={C.blush} />
      <path d="M89 40 L87 24 L76 34 Z" fill={C.blush} />
      {/* 얼굴 */}
      <ellipse cx="60" cy="66" rx="40" ry="36" fill={C.light} />
      {/* 눈 */}
      <path d="M40 60 q6 -7 12 0" stroke={C.ink} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d="M68 60 q6 -7 12 0" stroke={C.ink} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      {/* 코·입 */}
      <path d="M56 72 h8 l-4 4 z" fill={C.dark} />
      <path d="M60 76 q-4 6 -9 3 M60 76 q4 6 9 3" stroke={C.ink} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* 수염 */}
      <path d="M22 70 h16 M24 78 l14 -3 M98 70 h-16 M96 78 l-14 -3" stroke={C.dark} strokeWidth="2" strokeLinecap="round" />
      <circle cx="38" cy="74" r="5" fill={C.blush} opacity=".7" />
      <circle cx="82" cy="74" r="5" fill={C.blush} opacity=".7" />
    </svg>
  );
}

export function Bird({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* 꼬리 */}
      <path d="M22 72 L6 62 L10 84 Z" fill={C.dark} />
      {/* 몸 */}
      <ellipse cx="58" cy="68" rx="40" ry="34" fill={C.main} />
      <ellipse cx="66" cy="80" rx="24" ry="18" fill={C.pale} />
      {/* 날개 */}
      <path d="M34 62 q14 -6 22 10 q-14 10 -26 0 z" fill={C.dark} />
      {/* 머리 깃 */}
      <path d="M62 34 q4 -14 14 -10 q-6 4 -4 12 z" fill={C.dark} />
      {/* 눈·부리 */}
      <circle cx="76" cy="56" r="4.5" fill={C.ink} />
      <circle cx="77.5" cy="54.5" r="1.4" fill={C.white} />
      <path d="M94 60 L110 64 L94 70 Z" fill="#F2B544" />
      <circle cx="84" cy="68" r="4" fill={C.blush} opacity=".8" />
    </svg>
  );
}

export function Fish({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* 꼬리 */}
      <path d="M86 60 L112 40 Q104 60 112 80 Z" fill={C.dark} />
      {/* 몸 */}
      <ellipse cx="54" cy="60" rx="40" ry="28" fill={C.main} />
      {/* 무늬 */}
      <path d="M58 34 q10 26 0 52" stroke={C.light} strokeWidth="6" fill="none" />
      <path d="M72 38 q8 22 0 44" stroke={C.light} strokeWidth="5" fill="none" />
      {/* 지느러미 */}
      <path d="M48 32 q10 -12 24 -2 l-6 6 z" fill={C.dark} />
      {/* 눈·입 */}
      <circle cx="32" cy="54" r="6" fill={C.white} />
      <circle cx="31" cy="54" r="3.4" fill={C.ink} />
      <path d="M16 64 q5 4 9 0" stroke={C.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* 물방울 */}
      <circle cx="12" cy="36" r="4" fill="none" stroke={C.light} strokeWidth="2" />
      <circle cx="20" cy="24" r="2.6" fill="none" stroke={C.light} strokeWidth="2" />
    </svg>
  );
}

export function Hamster({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* 귀 */}
      <circle cx="32" cy="34" r="13" fill="#E9B98A" />
      <circle cx="88" cy="34" r="13" fill="#E9B98A" />
      <circle cx="32" cy="34" r="7" fill={C.blush} />
      <circle cx="88" cy="34" r="7" fill={C.blush} />
      {/* 몸 */}
      <ellipse cx="60" cy="68" rx="44" ry="38" fill="#F2CFA6" />
      <ellipse cx="60" cy="84" rx="26" ry="20" fill={C.white} />
      {/* 눈·코 */}
      <circle cx="44" cy="62" r="4.5" fill={C.ink} />
      <circle cx="76" cy="62" r="4.5" fill={C.ink} />
      <circle cx="45.5" cy="60.5" r="1.4" fill={C.white} />
      <circle cx="77.5" cy="60.5" r="1.4" fill={C.white} />
      <ellipse cx="60" cy="72" rx="4" ry="3" fill={C.dark} />
      <path d="M60 75 q-4 5 -8 2 M60 75 q4 5 8 2" stroke={C.ink} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="74" r="7" fill={C.blush} opacity=".7" />
      <circle cx="86" cy="74" r="7" fill={C.blush} opacity=".7" />
    </svg>
  );
}

export function Turtle({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {/* 다리 */}
      <ellipse cx="34" cy="86" rx="10" ry="8" fill="#7FBF9A" />
      <ellipse cx="80" cy="86" rx="10" ry="8" fill="#7FBF9A" />
      {/* 머리 */}
      <circle cx="100" cy="66" r="14" fill="#7FBF9A" />
      <circle cx="104" cy="62" r="3.4" fill={C.ink} />
      <path d="M100 72 q5 3 9 -1" stroke={C.ink} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 등껍질 */}
      <path d="M14 82 Q16 34 58 32 Q98 34 98 82 Z" fill={C.main} />
      <path d="M14 82 h84" stroke={C.dark} strokeWidth="6" strokeLinecap="round" />
      <path d="M44 46 l14 -6 l14 6 l0 14 l-14 6 l-14 -6 z" fill={C.light} />
      <path d="M26 66 l12 -4 l8 10 M90 66 l-12 -4 l-8 10" stroke={C.light} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export const pets = [
  { name: "강아지", Icon: Dog },
  { name: "고양이", Icon: Cat },
  { name: "새", Icon: Bird },
  { name: "물고기", Icon: Fish },
  { name: "햄스터", Icon: Hamster },
  { name: "거북이", Icon: Turtle },
];
