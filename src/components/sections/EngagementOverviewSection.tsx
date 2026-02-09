import { motion } from "framer-motion";
import { Layers, Database } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const cards = [
  {
    label: "DESIGN PHASE",
    Icon: Layers,
    title: "Alignment & Foundation Setup",
    desc: "Establish a factual baseline, set up CRM for primary user, and define execution-ready priorities.",
  },
  {
    label: "MONTH 1",
    Icon: Database,
    title: "Per-Month Engagement (Estimate)",
    desc: "Expand CRM to full team, build systems, and surface early market signals.",
  },
];

const EngagementOverviewSection = () => (
  <AnimatedSection id="overview">
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-6 text-text-primary">
        Engagement Overview
      </motion.h2>

      <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="glow-card">
            <card.Icon className="w-5 h-5 text-accent mb-3" strokeWidth={1.5} />
            <span className="tag-accent mb-3">{card.label}</span>
            <h3 className="text-[15px] font-semibold text-text-primary mb-1 mt-2">{card.title}</h3>
            <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="module-card mt-4 text-center">
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          Future months available upon request. Inquire about bulk pricing for multi-month engagements.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default EngagementOverviewSection;
