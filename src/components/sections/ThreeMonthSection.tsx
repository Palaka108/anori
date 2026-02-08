import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const month2 = [
  "Guided outbound execution",
  "1–2 sequences",
  "Up to 5 target accounts",
  "Limited, stage-appropriate touches",
  "Weekly pipeline visibility",
  "Tooling & automation recommendations",
];

const month3 = [
  "Pipeline refinement & hygiene",
  "30 / 60 / 90 advisory framework",
  "CRM-integrated partnership framework",
  "Dashboard alignment guidance",
  "Hiring readiness considerations",
];

const ThreeMonthSection = () => (
  <AnimatedSection id="three-month">
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">3-MONTH PACKAGE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        3-Month Advisory Package
      </motion.h2>
      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          From execution to reusable frameworks.
        </p>
      </motion.div>

      {/* Two-column on sm+ */}
      <div className="space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
        {/* Month 2 */}
        <motion.div variants={fadeUp}>
          <span className="tag-accent mb-3">MONTH 2 — ACTIVATION</span>
          <div className="space-y-2 mt-3">
            {month2.map((item) => (
              <div key={item} className="scope-box">{item}</div>
            ))}
          </div>
          <div className="time-box mt-3">
            <p className="text-[13px] text-text-primary leading-relaxed">
              Up to <span className="font-semibold">8 hours</span> of structured meetings and working sessions.
            </p>
          </div>
        </motion.div>

        {/* Month 3 */}
        <motion.div variants={fadeUp}>
          <span className="tag-accent mb-3">MONTH 3 — REFINEMENT</span>
          <div className="space-y-2 mt-3">
            {month3.map((item) => (
              <div key={item} className="scope-box">{item}</div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent mt-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">3-Month Package</p>
            <p className="text-[11px] text-text-muted-custom">Initial Estimate</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">$15,000</span>
            <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">total</span>
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
