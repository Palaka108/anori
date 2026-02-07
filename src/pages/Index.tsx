import HeroSection from "@/components/sections/HeroSection";
import EngagementOverviewSection from "@/components/sections/EngagementOverviewSection";
import AlignmentSprintSection from "@/components/sections/AlignmentSprintSection";
import Month1Section from "@/components/sections/Month1Section";
import Month2Section from "@/components/sections/Month2Section";
import IncludedSection from "@/components/sections/IncludedSection";
import NotIncludedSection from "@/components/sections/NotIncludedSection";
import PricingSection from "@/components/sections/PricingSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => (
  <div className="bg-background min-h-screen">
    <HeroSection />
    <EngagementOverviewSection />
    <AlignmentSprintSection />
    <Month1Section />
    <Month2Section />
    <IncludedSection />
    <NotIncludedSection />
    <PricingSection />
    <FooterSection />
  </div>
);

export default Index;
