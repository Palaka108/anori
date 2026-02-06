import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const modules = [
  {
    tag: "EXECUTION",
    title: "Targeted Outbound",
    desc: "Email sequences, outbound calls, and LinkedIn engagement directed at the top 5 target accounts identified in Phase 1.",
  },
  {
    tag: "SYSTEMS",
    title: "Automation Advisory",
    desc: "Comprehensive scan of outbound channels with efficiency analysis. Recommendations delivered with cost estimates — so investment decisions are informed, not assumed.",
  },
  {
    tag: "VISIBILITY",
    title: "Pipeline Reporting",
    desc: "Weekly dashboard covering lead movement, active targets, upcoming priorities, and persona-level analysis within target organizations.",
  },
  {
    tag: "ENABLEMENT",
    title: "Systems Walkthrough",
    desc: "Dedicated time to walk through recommended tools and automation approaches. Focused on clarity and readiness — not implementation of everything at once.",
  },
];

const Month2Section = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PHASE 2</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Activation & Guided Outbound
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12">
        Translating Phase 1 signals into focused outbound activity and system clarity.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-10">
        {modules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-category mb-3">{m.tag}</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="text-[15px] italic text-text-muted-custom text-center max-w-[620px] mx-auto"
      >
        Phase 2 adapts to what we actually learned in Phase 1. Recommendations are based on real engagement data, not pre-set assumptions. Phase 2 can be engaged as a standalone month based on Phase 1 findings, or as part of a 3-month commitment.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default Month2Section;
