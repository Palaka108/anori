import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const included = [
  "Advisory guidance across defined phases",
  "CRM and infrastructure decisions",
  "Defined outbound support",
  "Weekly reporting & dashboards",
  "Market intelligence & system recommendations",
];

const notIncluded = [
  "Fundraising ownership",
  "Investor deck creation",
  "Product roadmap ownership",
  "SDR / BDR management",
  "Heavy automation or custom engineering",
  "Ongoing CRM data entry",
  "Ongoing campaign management beyond defined sequences",
];

const ScopeBoundariesSection = () => (
  <AnimatedSection id="scope" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-6 text-text-primary">
        Scope Boundaries
      </motion.h2>

      <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
        {/* Included */}
        <motion.div variants={fadeUp}>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-success mb-3">What's Included</p>
          <div className="space-y-2">
            {included.map((item) => (
              <div key={item} className="boundary-tile">
                <div className="w-6 h-6 rounded-md bg-success-surface flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-success" />
                </div>
                <span className="text-text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Not Included */}
        <motion.div variants={fadeUp}>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-text-muted-custom mb-3">Not Included</p>
          <div className="space-y-2">
            {notIncluded.map((item) => (
              <div key={item} className="boundary-tile">
                <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0">
                  <X className="w-3.5 h-3.5 text-text-muted-custom" />
                </div>
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default ScopeBoundariesSection;
