import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const infrastructure = [
  "CRM platform selection and configuration",
  "Intake of an initial set of existing leads (volume and sources defined during Initial Phase)",
  "Pipeline structure aligned to current stage",
];

const systems = [
  "Follow-up architecture (calendar-based + templates)",
  "ICP and persona mapping across target verticals",
  "CRM enablement guide (up to three revisions)",
];

const advisory = [
  "Strategic planning and prioritization",
  "CRM configuration and pipeline operations",
  "Lead and market analysis",
  "Weekly dashboards and reporting",
  "Outreach preparation and sequencing",
  "System and automation scoping (recommendations only)",
];

const reportItems = [
  "Market signals",
  "Channel efficiency insights",
  "System recommendations",
  "Cost estimates for next phase",
];

const Month1Section = () => (
  <AnimatedSection id="month-1" alt>
    <div className="w-full max-w-[620px] mx-auto px-4 sm:px-5">
      <motion.p variants={labelSlide} className="section-label mb-3 sm:mb-4">MONTH 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-2.5 sm:mb-3 text-text-primary">
        Foundation
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[14px] text-text-secondary mb-6 sm:mb-8 leading-relaxed">
        Establishing core infrastructure and surfacing initial market signals.
      </motion.p>

      {/* Infrastructure */}
      <motion.div variants={fadeUp} className="tap-card mb-3">
        <span className="tag-accent mb-2.5 sm:mb-3">INFRASTRUCTURE</span>
        <ul className="space-y-2 mt-2">
          {infrastructure.map((item) => (
            <li key={item} className="text-[13px] text-text-secondary leading-relaxed">• {item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Systems */}
      <motion.div variants={fadeUp} className="tap-card mb-3">
        <span className="tag-accent mb-2.5 sm:mb-3">SYSTEMS</span>
        <ul className="space-y-2 mt-2">
          {systems.map((item) => (
            <li key={item} className="text-[13px] text-text-secondary leading-relaxed">• {item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Advisory */}
      <motion.div variants={fadeUp} className="tap-card mb-4 sm:mb-5">
        <span className="tag-accent mb-2.5 sm:mb-3">ADVISORY WORK</span>
        <ul className="space-y-2 mt-2">
          {advisory.map((item) => (
            <li key={item} className="text-[13px] text-text-secondary leading-relaxed">• {item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Time Box */}
      <motion.div variants={fadeUp} className="time-box mb-4 sm:mb-5">
        <p className="text-[13px] text-text-primary leading-relaxed">
          Month 1 includes <span className="font-semibold">up to 8 hours</span> of customer-, partner-, and Anori-facing meetings.
        </p>
      </motion.div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-4 sm:mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">Month 1 Deliverable</p>
        <p className="text-[14px] font-semibold text-text-primary mb-2">Market Intelligence Report</p>
        <ul className="space-y-1">
          {reportItems.map((item) => (
            <li key={item} className="text-[13px] text-text-secondary">— {item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Month 1 Advisory</p>
            <p className="text-[11px] text-text-muted-custom">Initial Estimate</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">$6,000</span>
            <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">/ month</span>
          </div>
        </div>
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          Final scope and monthly investment are confirmed after the Initial Phase, once product reality, lead volume and quality, and execution needs are clear. No ongoing advisory work begins until the refined scope and fee are mutually agreed.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
