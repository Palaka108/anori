import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const infrastructure = [
  "CRM platform selection and configuration",
  "Consolidation of existing leads (scope informed by reality)",
  "Pipeline structure aligned to current stage",
];

const systems = [
  "Follow-up architecture (calendar + templates)",
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
  { label: "Market Signals", desc: "What we're observing across verticals" },
  { label: "Channel Efficiency", desc: "Outbound channel insights" },
  { label: "System Recommendations", desc: "Suggested tools for next phase" },
  { label: "Cost Estimates", desc: "Build-out pricing for automations" },
];

const Month1Section = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1000px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PHASE 2</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-3 text-text-primary">
        Month 1: Foundation
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[15px] text-text-secondary mb-10 max-w-xl leading-relaxed">
        Establishing core infrastructure and surfacing initial market signals.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Infrastructure */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted-custom mb-4">Infrastructure</h3>
          <ul className="space-y-2.5">
            {infrastructure.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Systems */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted-custom mb-4">Systems</h3>
          <ul className="space-y-2.5">
            {systems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Advisory */}
      <motion.div variants={fadeUp} className="module-card mb-6">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted-custom mb-4">Advisory Work</h3>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {advisory.map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-6">
        <span className="tag-accent mb-3">MONTH 1 DELIVERABLE</span>
        <h3 className="text-lg font-semibold mt-2 mb-4 text-text-primary">Market Intelligence Report</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportItems.map((r) => (
            <div key={r.label}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">{r.label}</p>
              <p className="text-[13px] text-text-secondary">{r.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent mb-1">Month 1 Advisory</p>
            <p className="text-xs text-text-muted-custom">Initial estimate — confirmed after Alignment Phase</p>
          </div>
          <div className="text-right">
            <span className="text-[28px] font-bold text-text-primary">$6,000</span>
            <span className="text-sm text-text-muted-custom ml-1">/ month</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
