import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "../AnimatedSection";

const coreModules = [
  {
    title: "Pipeline Refinement",
    desc: "Ongoing pipeline hygiene, partnership strategy adjustments based on Phase 1-2 engagement data, and a progress report with forward-looking recommendations.",
  },
  {
    title: "30/60/90 Advisory",
    desc: "Strategic recommendations structured around what's working, what to adjust, and where to focus next — delivered as a clear, usable framework.",
  },
];

const exclusiveModules = [
  {
    title: "MEDDIC Analysis",
    desc: "Deal-level analysis of opportunities surfaced during the engagement. A framework for how future team members could approach these conversations.",
  },
  {
    title: "Dashboard Alignment",
    desc: "Recommendations on standard vs. customized reporting views, tailored to different user roles within your organization.",
  },
  {
    title: "Hiring Readiness",
    desc: "Considerations for your next BD hire — profile, timing, compensation benchmarks, and readiness criteria gathered from engagement observations.",
  },
  {
    title: "Partnership Scoreboard",
    desc: "An industry-level matrix of partnership opportunities, approach recommendations, and prioritization based on your current team and resources. Lightweight version available in month-to-month engagements.",
  },
];

const Month3Section = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1120px] mx-auto px-5">
      <motion.p variants={fadeUp} className="section-label mb-4">PHASE 3</motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
        Refinement & Frameworks
      </motion.h2>
      <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-12">
        Consolidating learnings into actionable advisory deliverables.
      </motion.p>

      {/* Core modules */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {coreModules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-blue mb-3">CORE</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Exclusive heading */}
      <motion.div variants={fadeUp} className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2">Extended Advisory Modules</h3>
        <div className="rounded-lg bg-gold-surface px-5 py-3">
          <p className="text-sm text-text-secondary">
            The following modules are available exclusively in the 3-month engagement. Each is built from real engagement data collected during the advisory period.
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {exclusiveModules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-gold mb-3">3-MONTH</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Month3Section;
