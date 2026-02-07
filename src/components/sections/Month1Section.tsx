import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const modules = [
  {
    tag: "CRM",
    title: "CRM Selection & Setup",
    desc: "Pick the right CRM for your stage and budget. Get it configured — not over-engineered. Scope informed by the Alignment Sprint.",
  },
  {
    tag: "LEADS",
    title: "Lead Organization",
    desc: "Consolidate contacts from existing sources into one structured pipeline. No ongoing data entry — just a clean starting point.",
  },
  {
    tag: "SYSTEMS",
    title: "Follow-Up Architecture",
    desc: "Calendar-based assignments, team routing, and email templates — calibrated to current team capacity.",
  },
  {
    tag: "DISCOVERY",
    title: "ICP Hypothesis Mapping",
    desc: "Document potential customer profiles across Building Departments, AEC, and adjacent verticals. Build an initial 80/20 partner list.",
  },
  {
    tag: "ENABLEMENT",
    title: "CRM Training",
    desc: "Foundational training guide for the primary user. Three post-setup revisions included.",
  },
];

const reportCols = [
  { label: "Market Signals", desc: "What we're observing across verticals" },
  { label: "Channel Analysis", desc: "Outbound channel efficiency findings" },
  { label: "System Recommendations", desc: "Suggested tools for Month 2" },
  { label: "Cost Estimates", desc: "Build-out pricing for recommended automations" },
];

const Month1Section = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">STEP 2</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Month 1 — Foundation
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-4 max-w-xl leading-relaxed">
        Build a simple, working CRM foundation. Organize leads. Create a follow-up rhythm.
      </motion.p>
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom mb-12 max-w-xl">
        Everything here is informed by what we learned in the Alignment Sprint — not predetermined.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
        {modules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-category mb-3">{m.tag}</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-8">
        <span className="tag-accent mb-3">MONTH 1 DELIVERABLE</span>
        <h3 className="text-xl font-semibold mt-2 mb-4 text-text-primary">Market Intelligence Report</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          A synthesis of what we've observed — channel efficiency, system recommendations, and automation cost estimates.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {reportCols.map((r) => (
            <div key={r.label}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">{r.label}</p>
              <p className="text-[13px] text-text-secondary">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[13px] italic text-text-muted-custom">
          This report is yours regardless of whether the engagement continues.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="module-card max-w-2xl mx-auto">
        <h4 className="text-sm font-semibold text-text-primary mb-2">Boundaries:</h4>
        <ul className="space-y-1.5">
          <li className="text-[13px] text-text-secondary">• No ongoing data entry — we set it up, you maintain it</li>
          <li className="text-[13px] text-text-secondary">• No major CRM re-builds after setup is complete</li>
          <li className="text-[13px] text-text-secondary">• Three post-setup revisions included in training</li>
        </ul>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
