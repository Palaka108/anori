import { motion } from "framer-motion";
import { Check, X, ArrowUpRight } from "lucide-react";
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

const optionalUpgrades = [
  { text: "Expanded outbound campaign management", note: "Beyond initial 1–2 sequences" },
  { text: "Additional CRM automation buildout", note: "Custom workflows & integrations" },
  { text: "Extended team onboarding sessions", note: "Beyond primary enablement guide" },
];

const ScopeBoundariesSection = () => (
  <AnimatedSection id="scope">
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Scope Boundaries
      </motion.h2>
      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed">
          Clear scope definition protects both parties. Items below are categorized as base engagement, explicit exclusions, or available upgrades.
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Included */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-success shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-success">Included in Base Engagement</p>
          </div>
          <div className="space-y-2">
            {included.map((item) => (
              <div key={item} className="boundary-tile">
                <div className="w-6 h-6 rounded-md bg-success-surface flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-success" strokeWidth={2} />
                </div>
                <span className="text-text-primary font-medium text-[13px]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Not Included */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-text-muted-custom shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted-custom">Not Included</p>
          </div>
          <div className="space-y-2">
            {notIncluded.map((item) => (
              <div key={item} className="boundary-tile opacity-60">
                <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0">
                  <X className="w-3.5 h-3.5 text-text-muted-custom" strokeWidth={2} />
                </div>
                <span className="text-text-secondary text-[13px]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optional Upgrades */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-violet shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-violet">Optional Upgrade</p>
          </div>
          <div className="space-y-2">
            {optionalUpgrades.map((item) => (
              <div key={item.text} className="boundary-tile border-violet-surface">
                <div className="w-6 h-6 rounded-md bg-violet-surface flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 text-violet" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <span className="text-text-primary font-medium text-[13px] block">{item.text}</span>
                  <span className="text-text-muted-custom text-[11px]">{item.note}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default ScopeBoundariesSection;
