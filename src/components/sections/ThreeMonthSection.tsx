import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const month2 = [
  "Targeted outbound to priority accounts",
  "Guided outbound execution",
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
  <AnimatedSection>
    <div className="w-full max-w-[1000px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PHASE 3</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-3 text-text-primary">
        3-Month Advisory Package
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[15px] text-text-secondary mb-10 max-w-xl leading-relaxed">
        From execution to reusable frameworks.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Month 2 */}
        <motion.div variants={fadeUp} className="module-card">
          <span className="tag-accent mb-3">MONTH 2</span>
          <h3 className="text-base font-semibold text-text-primary mt-2 mb-4">Activation</h3>
          <ul className="space-y-2.5">
            {month2.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Month 3 */}
        <motion.div variants={fadeUp} className="module-card">
          <span className="tag-gold mb-3">MONTH 3</span>
          <h3 className="text-base font-semibold text-text-primary mt-2 mb-4">Refinement</h3>
          <ul className="space-y-2.5">
            {month3.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-gold">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-gold mb-1">3-Month Advisory Package</p>
            <p className="text-xs text-text-muted-custom">Initial estimate — confirmed after Alignment Phase</p>
          </div>
          <div className="text-right">
            <span className="text-[28px] font-bold text-text-primary">$15,000</span>
            <span className="text-sm text-text-muted-custom ml-1">total</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ThreeMonthSection;
