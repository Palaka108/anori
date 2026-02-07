import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const EngagementOverviewSection = () => (
  <AnimatedSection id="overview" alt>
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-6 text-text-primary">
        Engagement Overview
      </motion.h2>

      <motion.div variants={fadeUp} className="space-y-4 text-[14px] sm:text-[15px] text-text-secondary leading-relaxed">
        <p>
          This is a structured, execution-aware advisory engagement — designed to ground reality, surface signal, and guide clear next steps.
        </p>
        <p>
          Advisory effort is guided by what's real — not assumptions. Execution options unlock only after initial alignment establishes a factual baseline.
        </p>
        <p className="text-text-muted-custom text-[13px]">
          This is not a generic consulting engagement.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default EngagementOverviewSection;
