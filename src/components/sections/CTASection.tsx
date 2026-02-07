import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "../AnimatedSection";

const CTASection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[700px] mx-auto px-5 md:px-10 text-center">
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Ready to Get Organized?
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed">
        The Alignment Sprint is the starting point. Three sessions. A clear picture of where you are. A tailored plan for what comes next.
      </motion.p>
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom mb-4">
        No pressure. No long-term commitment required. You keep the deliverables either way.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted-custom inline-block border border-border rounded px-4 py-1.5">
          GOSAI · gosai.io
        </span>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default CTASection;
