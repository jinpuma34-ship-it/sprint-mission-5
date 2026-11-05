import Benefits from "@/components/sections/Benefits";
import Demo from "@/components/sections/Demo";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Problem from "@/components/sections/Problem";
import Signup from "@/components/sections/Signup";

/**
 * 메인 페이지 — 섹션을 순서대로 조립만 해요.
 * 흐름: 히어로 → 문제 → 해결(사용 방법) → 직접 체험 → 기대효과 → 사전 신청(CTA)
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Demo />
        <Benefits />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
