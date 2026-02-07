import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const painPoints = [
  "We have real interest, but no actual pipeline.",
  "Leads are scattered across inboxes, spreadsheets, and old campaigns.",
  "I can't tell a clean traction story to investors.",
  "We've tried outreach, but nothing is repeatable.",
  "I know we need a CRM — I just don't know where to start.",
  "We're building a great product. The sales side hasn't caught up.",
];

const FounderRealitySection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[900px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">THE REALITY</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Sound Familiar?
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-10 max-w-xl leading-relaxed">
        Most early-stage founders in building-tech and AEC have the same challenge: a strong product with no revenue system behind it.
      </motion.p>

      <div className="space-y-3 mb-8">
        {painPoints.map((point) => (
          <motion.div
            key={point}
            variants={fadeUp}
            className="module-card flex items-start gap-3 !py-4"
          >
            <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
            <p className="text-sm sm:text-[15px] text-text-primary italic leading-relaxed">"{point}"</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="text-sm text-text-muted-custom text-center max-w-lg mx-auto"
      >
        The product potential is real. What's missing is the system that turns interest into pipeline and pipeline into traction.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default FounderRealitySection;
