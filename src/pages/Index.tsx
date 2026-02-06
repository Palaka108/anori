import { useRef, useState, useEffect, useCallback } from "react";
import DotNav from "@/components/DotNav";
import TitleSection from "@/components/sections/TitleSection";
import EngagementOverview from "@/components/sections/EngagementOverview";
import DiscoverySprintSection from "@/components/sections/DiscoverySprintSection";
import RetainerSection from "@/components/sections/RetainerSection";
import Month1Section from "@/components/sections/Month1Section";
import Month2Section from "@/components/sections/Month2Section";
import Month3Section from "@/components/sections/Month3Section";
import ScopeSection from "@/components/sections/ScopeSection";
import InvestmentSection from "@/components/sections/InvestmentSection";

const sectionLabels = [
  "Title",
  "Overview",
  "Discovery",
  "Advisory",
  "Month 1",
  "Month 2",
  "Month 3",
  "Scope",
  "Investment",
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
    <div className="bg-surface min-h-screen">
      <DotNav sections={sectionLabels} activeIndex={activeIndex} onDotClick={scrollTo} />
      <div ref={setRef(0)}><TitleSection /></div>
      <div ref={setRef(1)}><EngagementOverview /></div>
      <div ref={setRef(2)}><DiscoverySprintSection /></div>
      <div ref={setRef(3)}><RetainerSection /></div>
      <div ref={setRef(4)}><Month1Section /></div>
      <div ref={setRef(5)}><Month2Section /></div>
      <div ref={setRef(6)}><Month3Section /></div>
      <div ref={setRef(7)}><ScopeSection /></div>
      <div ref={setRef(8)}><InvestmentSection /></div>
    </div>
  );
};

export default Index;
