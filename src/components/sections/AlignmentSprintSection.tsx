import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const scope = [
  "Product and roadmap alignment review",
  "Synthesis of POC and early feedback",
  "Partner or customer-facing conversation (if available)",
  "Lead and CRM reality assessment",
  "GTM signal validation",
  "Definition of execution-ready priorities",
];

const deliverables = [
  "Current Stage Assessment",
  "Month 1 execution definition",
  "Preliminary 3-month advisory trajectory",
];

const AlignmentSprintSection = () => (
  <AnimatedSection id="alignment-phase">
    <div className="w-full max-w-[900px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PHASE 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-3 text-text-primary">
        Alignment & Scoping Phase
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[15px] text-text-secondary mb-10 max-w-xl leading-relaxed">
        Execution-focused advisory work to establish a defensible baseline. This phase formalizes understanding of product state, partnership dynamics, and GTM readiness. It defines what should be executed now, what should wait, and what should not proceed.
      </motion.p>

      {/* Scope pills */}
      <motion.div variants={fadeUp} className="module-card mb-6">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted-custom mb-4">Scope</h3>
        <div className="flex flex-wrap gap-2">
          {scope.map((s) => (
            <span key={s} className="tag-pill">{s}</span>
          ))}
        </div>
      </motion.div>

      {/* Deliverables */}
      <motion.div variants={fadeUp} className="module-card mb-6">
        <h3 className="text-[13px] font-semibold uppercase tracking-wider text-text-muted-custom mb-4">Deliverables</h3>
        <ul className="space-y-2.5">
          {deliverables.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-text-primary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Investment box */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-accent mb-1">Alignment & Scoping Phase</p>
            <p className="text-xs text-text-muted-custom">Credited toward Month 1 if engagement proceeds</p>
          </div>
          <div className="text-right">
            <span className="text-[28px] font-bold text-text-primary">$1,800</span>
            <span className="text-sm text-text-muted-custom ml-1">fixed</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default AlignmentSprintSection;
