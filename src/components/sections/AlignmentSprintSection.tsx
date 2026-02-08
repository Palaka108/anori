import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const scope = [
  "Product and roadmap alignment review",
  "Synthesis of POC and early feedback patterns",
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
  <AnimatedSection id="initial-phase">
    <div className="w-full max-w-[620px] mx-auto px-4 sm:px-5">
      <motion.p variants={labelSlide} className="section-label mb-3 sm:mb-4">INITIAL PHASE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-2.5 sm:mb-3 text-text-primary">
        Alignment & Scoping
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[14px] text-text-secondary mb-5 sm:mb-6 leading-relaxed">
        Execution-focused advisory work to establish a defensible baseline. This phase formalizes understanding of product state, partnership dynamics, and GTM readiness.
      </motion.p>

      {/* Scope */}
      <motion.div variants={fadeUp} className="mb-4 sm:mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted-custom mb-2.5 sm:mb-3">Scope</p>
        <div className="space-y-2">
          {scope.map((item) => (
            <div key={item} className="scope-pill">{item}</div>
          ))}
        </div>
      </motion.div>

      {/* Time Box */}
      <motion.div variants={fadeUp} className="time-box mb-4 sm:mb-5">
        <p className="text-[13px] text-text-primary leading-relaxed">
          The Initial Phase includes <span className="font-semibold">up to 6 hours</span> of working sessions and associated analysis and documentation.
        </p>
      </motion.div>

      {/* Deliverables */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-4 sm:mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">Deliverables</p>
        <ul className="space-y-1.5">
          {deliverables.map((d) => (
            <li key={d} className="text-[13px] text-text-primary">— {d}</li>
          ))}
        </ul>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Initial Phase</p>
            <p className="text-[11px] text-text-muted-custom">Credited toward Month 1 if engagement proceeds</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">$1,800</span>
            <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">fixed</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default AlignmentSprintSection;
