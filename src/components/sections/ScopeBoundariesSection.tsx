import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const included = [
  "Advisory guidance across defined phases",
  "CRM and infrastructure decisions",
  "Defined outbound support",
  "Weekly reporting and dashboards",
  "Market intelligence and system recommendations",
];

const notIncluded = [
  "Fundraising ownership or investor relations",
  "Investor deck creation",
  "Product roadmap ownership",
  "SDR / BDR management",
  "Heavy automation or custom engineering",
  "Ongoing CRM data entry",
  "Ongoing campaign management beyond defined sequences",
];

const ScopeBoundariesSection = () => (
  <AnimatedSection id="scope" alt>
    <div className="w-full max-w-[620px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-8 text-text-primary">
        Scope Boundaries
      </motion.h2>

      {/* Included */}
      <motion.div variants={fadeUp} className="mb-6">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-success mb-3">What's Included</p>
        <div className="space-y-2.5">
          {included.map((item) => (
            <div key={item} className="tap-card flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-success-surface flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-success" />
              </div>
              <p className="text-[14px] text-text-primary font-medium">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Not Included */}
      <motion.div variants={fadeUp}>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-text-muted-custom mb-3">Not Included</p>
        <div className="space-y-2.5">
          {notIncluded.map((item) => (
            <div key={item} className="tap-card flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-text-muted-custom" />
              </div>
              <p className="text-[14px] text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ScopeBoundariesSection;
