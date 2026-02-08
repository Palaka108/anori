import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const infrastructure = [
  "CRM platform selection & configuration",
  "Intake of initial existing leads (volume defined during Initial Phase)",
  "Stage-appropriate pipeline structure",
];

const systems = [
  "Follow-up architecture (calendar + templates)",
  "ICP & persona mapping across target verticals",
  "CRM enablement guide (up to three revisions)",
];

const advisory = [
  "Strategic planning & prioritization",
  "CRM and pipeline operations",
  "Lead & market analysis",
  "Weekly dashboards & reporting",
  "Outreach preparation & sequencing",
  "Automation scoping (recommendations only)",
];

const reportItems = [
  "Market signals",
  "Channel efficiency insights",
  "System recommendations",
  "Cost estimates for next phase",
];

const Month1Section = () => (
  <AnimatedSection id="month-1" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">MONTH 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Foundation
      </motion.h2>
      <motion.div variants={fadeUp} className="module-card mb-5">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Establishing core infrastructure and surfacing initial market signals.
        </p>
      </motion.div>

      {/* Infrastructure card group */}
      <motion.div variants={fadeUp} className="mb-4">
        <span className="tag-accent mb-3">INFRASTRUCTURE</span>
        <div className="space-y-2 mt-3">
          {infrastructure.map((item) => (
            <div key={item} className="scope-box">{item}</div>
          ))}
        </div>
      </motion.div>

      {/* Systems card group */}
      <motion.div variants={fadeUp} className="mb-4">
        <span className="tag-accent mb-3">SYSTEMS</span>
        <div className="space-y-2 mt-3">
          {systems.map((item) => (
            <div key={item} className="scope-box">{item}</div>
          ))}
        </div>
      </motion.div>

      {/* Advisory card group */}
      <motion.div variants={fadeUp} className="mb-5">
        <span className="tag-accent mb-3">ADVISORY WORK</span>
        <div className="card-grid-2 mt-3">
          {advisory.map((item) => (
            <div key={item} className="scope-box">{item}</div>
          ))}
        </div>
      </motion.div>

      {/* Time Box */}
      <motion.div variants={fadeUp} className="time-box mb-5">
        <p className="text-[13px] text-text-primary leading-relaxed">
          Up to <span className="font-semibold">8 hours</span> of customer-, partner-, and Anori-facing meetings.
        </p>
      </motion.div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">Month 1 Deliverable</p>
        <p className="text-[14px] font-semibold text-text-primary mb-3">Market Intelligence Report</p>
        <div className="card-grid-2">
          {reportItems.map((item) => (
            <div key={item} className="scope-box text-[12px] text-center">{item}</div>
          ))}
        </div>
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
          Final scope and monthly investment confirmed after the Initial Phase.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
