import HeroSection from "@/components/sections/HeroSection";
import EngagementOverviewSection from "@/components/sections/EngagementOverviewSection";
import AlignmentSprintSection from "@/components/sections/AlignmentSprintSection";
import Month1Section from "@/components/sections/Month1Section";
import ThreeMonthSection from "@/components/sections/ThreeMonthSection";
import ScopeBoundariesSection from "@/components/sections/ScopeBoundariesSection";
import EngagementFlowSection from "@/components/sections/EngagementFlowSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => (
  <div className="bg-background min-h-screen">
    <HeroSection />
    <EngagementOverviewSection />
    <AlignmentSprintSection />
    <Month1Section />
    <ThreeMonthSection />
    <ScopeBoundariesSection />
    <EngagementFlowSection />
    <FooterSection />
  </div>
);

export default Index;
