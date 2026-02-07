import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const cards = [
  {
    title: "Product & Roadmap Baseline",
    desc: "Establish shared understanding of product state, near-term priorities, and market positioning.",
  },
  {
    title: "Existing Lead & CRM Intake",
    desc: "Set up HubSpot for one primary user and ingest existing leads from current sources.",
  },
  {
    title: "Lead Reality Assessment",
    desc: "Evaluate age, quality, and engagement level of current leads to inform execution priorities.",
  },
  {
    title: "Initial Follow-Up System",
    desc: "Calendar-driven follow-ups to prevent lead decay and establish basic outreach rhythm.",
  },
  {
    title: "Priority Signal Review",
    desc: "Identify early customer, partner, or account signals worth pursuing immediately.",
  },
];

const AlignmentSprintSection = () => (
  <AnimatedSection id="phase-0">
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">PHASE 0</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Initial Commercial Baseline
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[14px] text-text-secondary mb-8 leading-relaxed">
        Execution-focused work to establish a defensible baseline. Defines what should be executed now, what should wait, and what should not proceed.
      </motion.p>

      <div className="space-y-3">
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="tap-card">
            <h3 className="text-[14px] font-semibold text-text-primary mb-1.5">{card.title}</h3>
            <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent mt-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Initial Phase</p>
            <p className="text-[11px] text-text-muted-custom">Credited toward Month 1</p>
          </div>
          <div className="text-right">
            <span className="text-[24px] sm:text-[28px] font-bold text-text-primary">$1,800</span>
            <span className="text-[12px] text-text-muted-custom ml-1">fixed</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default AlignmentSprintSection;
