import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const modules = [
  {
    tag: "INFRASTRUCTURE",
    title: "Lead Organization",
    desc: "Consolidate existing leads from emails, spreadsheets, and current systems into a structured CRM. Up to 5 user seats included.",
  },
  {
    tag: "SYSTEMS",
    title: "Follow-Up Architecture",
    desc: "Design a structured follow-up system with calendar-based assignments, team routing, and email templates for consistent outreach.",
  },
  {
    tag: "DISCOVERY",
    title: "ICP Hypothesis Mapping",
    desc: "Begin documenting potential customer profiles across Building Departments, AEC, and adjacent verticals. Identify an initial 80/20 list of highest-potential partnerships.",
  },
  {
    tag: "ENABLEMENT",
    title: "CRM Enablement",
    desc: "Foundational CRM training guide covering best practices for the primary user. Three post-setup revisions included.",
  },
  {
    tag: "OPTIONAL",
    title: "Landing Page Capability",
    desc: "Gosai-hosted landing page, independent of your existing web systems. Available if useful during this phase.",
  },
];

const reportCols = [
  { label: "Market Signals", desc: "What we're observing across verticals" },
  { label: "Channel Analysis", desc: "Outbound channel efficiency findings" },
  { label: "System Recommendations", desc: "Suggested tools and approaches for Phase 2" },
  { label: "Cost Estimates", desc: "Build-out pricing for recommended automations" },
];

const Month1Section = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PHASE 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[28px] sm:text-[36px] md:text-[40px] font-bold mb-4 text-text-primary">
        Foundation & Discovery
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-lg font-light text-text-secondary mb-12">
        Building the infrastructure and surfacing initial market signals.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
        {modules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-category mb-3">{m.tag}</span>
            <h3 className="text-[17px] font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card-highlight">
        <span className="tag-accent mb-3">PHASE 1 DELIVERABLE</span>
        <h3 className="text-xl font-semibold mt-2 mb-4 text-text-primary">Market Intelligence Report</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          A synthesis of what we've observed across your target verticals — channel efficiency findings, system recommendations for Phase 2, and cost estimates for recommended automations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {reportCols.map((r) => (
            <div key={r.label}>
              <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted-custom mb-1">{r.label}</p>
              <p className="text-[13px] text-text-secondary">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[13px] italic text-text-muted-custom">
          This report is yours regardless of whether the engagement continues.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
