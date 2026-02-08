import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const month2 = [
  "Guided outbound execution",
  "1–2 sequences across up to 5 target accounts",
  "Limited number of touches appropriate for this stage",
  "Weekly pipeline visibility",
  "Automation and tooling recommendations",
];

const month3 = [
  "Pipeline refinement and hygiene",
  "30 / 60 / 90 advisory framework",
  "Pre-product partnership framework (CRM-integrated)",
  "Dashboard alignment guidance",
  "Hiring readiness considerations",
];

const ThreeMonthSection = () => (
  <AnimatedSection id="three-month">
    <div className="w-full max-w-[620px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">3-MONTH PACKAGE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        3-Month Advisory Package
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[14px] text-text-secondary mb-8 leading-relaxed">
        From execution to reusable frameworks.
      </motion.p>

      {/* Month 2 */}
      <motion.div variants={fadeUp} className="tap-card mb-3">
        <span className="tag-accent mb-3">MONTH 2 — ACTIVATION</span>
        <ul className="space-y-2 mt-2">
          {month2.map((item) => (
            <li key={item} className="text-[13px] text-text-secondary leading-relaxed">• {item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Month 2 Time Box */}
      <motion.div variants={fadeUp} className="time-box mb-5">
        <p className="text-[13px] text-text-primary leading-relaxed">
          Month 2 includes <span className="font-semibold">up to 8 hours</span> of structured meetings and working sessions.
        </p>
      </motion.div>

      {/* Month 3 */}
      <motion.div variants={fadeUp} className="tap-card mb-5">
        <span className="tag-accent mb-3">MONTH 3 — REFINEMENT</span>
        <ul className="space-y-2 mt-2">
          {month3.map((item) => (
            <li key={item} className="text-[13px] text-text-secondary leading-relaxed">• {item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">3-Month Package</p>
            <p className="text-[11px] text-text-muted-custom">Initial Estimate</p>
          </div>
          <div className="text-right">
            <span className="text-[24px] sm:text-[28px] font-bold text-text-primary">$15,000</span>
            <span className="text-[12px] text-text-muted-custom ml-1">total</span>
          </div>
        </div>
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          Final scope and pricing confirmed after the Initial Phase.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ThreeMonthSection;
