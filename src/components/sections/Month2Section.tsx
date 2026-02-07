import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const modules = [
  {
    tag: "OUTBOUND",
    title: "Targeted Outbound",
    desc: "Up to 5 target accounts identified in Month 1. Email sequences, calls, and LinkedIn engagement — focused testing, not scale.",
  },
  {
    tag: "SYSTEMS",
    title: "Automation Advisory",
    desc: "Efficiency analysis of outbound channels. Recommendations delivered with cost estimates — so decisions are informed.",
  },
  {
    tag: "REPORTING",
    title: "Pipeline Reporting",
    desc: "Weekly dashboard: lead movement, active targets, upcoming priorities, and persona-level analysis.",
  },
  {
    tag: "ENABLEMENT",
    title: "Systems Walkthrough",
    desc: "Dedicated time to walk through recommended tools and automation approaches. Clarity first, implementation after.",
  },
];

const Month2Section = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">STEP 3</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Month 2 — Activation & Guided Outbound
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-4 max-w-xl leading-relaxed">
        The goal is learning, not scale. We test outbound approaches and capture what actually works.
      </motion.p>
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom mb-12 max-w-xl">
        This is explicitly not a full SDR program. It's focused testing to inform your first real sales hire.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-10">
        {modules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-category mb-3">{m.tag}</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="text-[13px] italic text-text-muted-custom text-center max-w-lg mx-auto"
      >
        Month 2 adapts to what we actually learned in Month 1. Scope is refined during the engagement — not locked in advance.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default Month2Section;
