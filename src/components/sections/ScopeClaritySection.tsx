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
];

const ScopeClaritySection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[900px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-10 text-text-primary">
        Scope Boundaries
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Included */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-accent mb-5">Included</h3>
          <ul className="space-y-3">
            {included.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not Included */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted-custom mb-5">Not Included</h3>
          <ul className="space-y-3">
            {notIncluded.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <X className="w-4 h-4 mt-0.5 text-text-muted-custom shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default ScopeClaritySection;
