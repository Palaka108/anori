import { useRef, useState, useEffect, useCallback } from "react";
import DotNav from "@/components/DotNav";
import HeroSection from "@/components/sections/HeroSection";
import EngagementOverviewSection from "@/components/sections/EngagementOverviewSection";
import AlignmentSprintSection from "@/components/sections/AlignmentSprintSection";
import Month1Section from "@/components/sections/Month1Section";
import ThreeMonthSection from "@/components/sections/ThreeMonthSection";
import ScopeClaritySection from "@/components/sections/ScopeClaritySection";
import EngagementFlowSection from "@/components/sections/EngagementFlowSection";
import FooterSection from "@/components/sections/FooterSection";

const sectionLabels = [
  "Proposal",
  "Overview",
  "Phase 1",
  "Phase 2",
  "Phase 3",
  "Scope",
  "Process",
  "Footer",
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
      <div ref={setRef(1)}><EngagementOverviewSection /></div>
      <div ref={setRef(2)}><AlignmentSprintSection /></div>
      <div ref={setRef(3)}><Month1Section /></div>
      <div ref={setRef(4)}><ThreeMonthSection /></div>
      <div ref={setRef(5)}><ScopeClaritySection /></div>
      <div ref={setRef(6)}><EngagementFlowSection /></div>
      <div ref={setRef(7)}><FooterSection /></div>
    </div>
  );
};

export default Index;
