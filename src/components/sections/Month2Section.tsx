import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const cards = [
  {
    title: "Focused Outbound (Limited)",
    desc: "Targeted outreach to priority accounts identified in Month 1. Scope is constrained and informed by real findings.",
  },
  {
    title: "Guided Outbound Execution",
    desc: "Hands-on sequencing support — not mass outreach. 1–2 sequences, up to 5 target accounts.",
  },
  {
    title: "Relationship & Partner Development",
    desc: "Strategic partner and early customer relationship nurturing based on signal quality.",
  },
  {
    title: "Weekly GTM Visibility",
    desc: "Pipeline reviews, channel efficiency insights, and system recommendations for next steps.",
  },
];

const Month2Section = () => (
  <AnimatedSection id="month-2">
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">MONTH 2</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Targeted Activation
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[14px] text-text-secondary mb-8 leading-relaxed">
        Learning, not scale. Outbound is constrained and informed by Month 1 findings.
      </motion.p>

      <div className="space-y-3">
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="tap-card">
            <h3 className="text-[14px] font-semibold text-text-primary mb-1.5">{card.title}</h3>
            <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p variants={fadeUp} className="text-[12px] text-text-muted-custom mt-6 leading-relaxed">
        This is not a full SDR program. Outbound is advisory-guided and founder-executed.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default Month2Section;
