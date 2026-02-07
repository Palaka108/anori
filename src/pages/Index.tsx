import { useRef, useState, useEffect, useCallback } from "react";
import DotNav from "@/components/DotNav";
import HeroSection from "@/components/sections/HeroSection";
import FounderRealitySection from "@/components/sections/FounderRealitySection";
import HowAnoriHelpsSection from "@/components/sections/HowAnoriHelpsSection";
import AlignmentSprintSection from "@/components/sections/AlignmentSprintSection";
import Month1Section from "@/components/sections/Month1Section";
import Month2Section from "@/components/sections/Month2Section";
import Month3Section from "@/components/sections/Month3Section";
import ScopeClaritySection from "@/components/sections/ScopeClaritySection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

const sectionLabels = [
  "Home",
  "Reality",
  "How It Works",
  "Alignment Sprint",
  "Month 1",
  "Month 2",
  "Month 3",
  "Scope",
  "Investment",
  "About",
  "Next Step",
  "FAQ",
];

const Index = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let closest = 0;
    let closestDist = Infinity;

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="bg-background min-h-screen">
      <DotNav sections={sectionLabels} activeIndex={activeIndex} onDotClick={scrollTo} />
      <div ref={setRef(0)}><HeroSection /></div>
      <div ref={setRef(1)}><FounderRealitySection /></div>
      <div ref={setRef(2)}><HowAnoriHelpsSection /></div>
      <div ref={setRef(3)}><AlignmentSprintSection /></div>
      <div ref={setRef(4)}><Month1Section /></div>
      <div ref={setRef(5)}><Month2Section /></div>
      <div ref={setRef(6)}><Month3Section /></div>
      <div ref={setRef(7)}><ScopeClaritySection /></div>
      <div ref={setRef(8)}><InvestmentSection /></div>
      <div ref={setRef(9)}><AboutSection /></div>
      <div ref={setRef(10)}><CTASection /></div>
      <div ref={setRef(11)}><FAQSection /></div>
    </div>
  );
};

export default Index;
