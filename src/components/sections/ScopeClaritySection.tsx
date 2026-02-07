import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const included = [
  "Advisory guidance across all engagement phases",
  "CRM setup decisions and configuration",
  "Defined outbound tests (accounts, sequences, channels)",
  "Weekly reporting and dashboards",
  "Stage-appropriate recommendations",
];

const notIncluded = [
  "Fundraising or investor deck ownership",
  "Product roadmap ownership",
  "Managing SDRs or sales reps",
  "Heavy automation or engineering",
  "Ongoing CRM data entry or operations",
];

const futureProjects = [
  "Advanced automation development",
  "CRM expansions and customization",
  "LinkedIn outbound campaigns",
  "Landing pages and A/B testing",
  "Pipeline campaign optimization",
  "Ongoing technical support",
];

const ScopeClaritySection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1000px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Clear Boundaries, On Purpose
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12 max-w-xl leading-relaxed">
        We keep scope tight so every hour delivers value. Here's exactly what's in and out of this engagement.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10">
        {/* Included */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[15px] font-semibold mb-4 text-text-primary">Included</h3>
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
          <h3 className="text-[15px] font-semibold mb-4 text-text-primary">Not Included</h3>
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

      {/* Available as future projects */}
      <motion.div variants={fadeUp} className="module-card">
        <h3 className="text-[15px] font-semibold mb-4 text-text-primary">Available as Future Projects</h3>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {futureProjects.map((t) => (
            <div key={t} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted-custom shrink-0" />
              {t}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] italic text-text-muted-custom">
          Happy to outline what any of these would look like — just ask.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ScopeClaritySection;
