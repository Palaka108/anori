import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const cards = [
  {
    label: "INITIAL PHASE",
    title: "Alignment & Scoping",
    desc: "Establish a factual baseline and define execution-ready priorities.",
  },
  {
    label: "MONTH 1",
    title: "Foundation",
    desc: "Build core systems and surface early market signals.",
  },
  {
    label: "3-MONTH PACKAGE",
    title: "Advisory Package",
    desc: "Activate, refine, and convert learning into durable frameworks.",
  },
];

const EngagementOverviewSection = () => (
  <AnimatedSection id="overview" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Engagement Overview
      </motion.h2>

      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[14px] text-text-secondary leading-relaxed mb-2">
          This engagement is structured to ensure advisory effort is guided by reality — not assumptions.
        </p>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Execution phases are defined only after an initial alignment and scoping phase.
        </p>
      </motion.div>

      <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="module-card">
            <span className="tag-accent mb-3">{card.label}</span>
            <h3 className="text-[15px] font-semibold text-text-primary mb-1">{card.title}</h3>
            <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EngagementOverviewSection;
