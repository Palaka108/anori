import { useRef, useState, useEffect, useCallback } from "react";
import BlueprintGrid from "@/components/BlueprintGrid";
import DotNav from "@/components/DotNav";
import TitleSection from "@/components/sections/TitleSection";
import EngagementOverview from "@/components/sections/EngagementOverview";
import RetainerSection from "@/components/sections/RetainerSection";
import Month1Section from "@/components/sections/Month1Section";
import Month2Section from "@/components/sections/Month2Section";
import Month3Section from "@/components/sections/Month3Section";
import ScopeSection from "@/components/sections/ScopeSection";
import InvestmentSection from "@/components/sections/InvestmentSection";

const sectionLabels = [
  "Title",
  "Overview",
  "Retainer",
  "Month 1",
  "Month 2",
  "Month 3",
  "Scope",
  "Investment",
];

const sectionIds = sectionLabels.map((_, i) => `section-${i}`);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrollTop = container.scrollTop;
    const sectionHeight = container.clientHeight;
    const idx = Math.round(scrollTop / sectionHeight);
    setActiveIndex(Math.min(idx, sectionIds.length - 1));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const target = container.children[index + 1] as HTMLElement; // +1 for BlueprintGrid
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="scroll-snap-container">
      <BlueprintGrid />
      <DotNav sections={sectionLabels} activeIndex={activeIndex} onDotClick={scrollTo} />
      <TitleSection />
      <EngagementOverview />
      <RetainerSection />
      <Month1Section />
      <Month2Section />
      <Month3Section />
      <ScopeSection />
      <InvestmentSection />
    </div>
  );
};

export default Index;
