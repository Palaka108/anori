import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const coreModules = [
  {
    title: "Pipeline Refinement",
    desc: "Cleaned pipeline, updated partnership strategy, and a progress report with forward-looking recommendations.",
  },
  {
    title: "30/60/90 Recommendations",
    desc: "What's working, what to adjust, and where to focus next — structured so you can act independently.",
  },
];

const frameworkModules = [
  {
    title: "Partnership Framework in CRM",
    desc: "A custom framework integrated in CRM for how future team members approach partnership conversations.",
  },
  {
    title: "Dashboard Guidance",
    desc: "Recommendations on standard vs. customized reporting views, tailored to different user roles.",
  },
  {
    title: "Hiring-Readiness Notes",
    desc: "Profile, timing, compensation benchmarks, and readiness criteria for your next BD hire.",
  },
  {
    title: "Partnership Analysis",
    desc: "Industry-level matrix of partnership opportunities, prioritized based on your current resources.",
  },
];

const Month3Section = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">STEP 4</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Month 3 — Refinement & Frameworks
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-4 max-w-xl leading-relaxed">
        The goal is to leave behind systems, not dependency. Everything we build is yours to keep.
      </motion.p>
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom mb-12 max-w-xl">
        Available in multi-month engagements. Built from real engagement data — not templates.
      </motion.p>

      {/* Core */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-8">
        {coreModules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-accent mb-3">CORE</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Frameworks */}
      <motion.div variants={fadeUp} className="mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-1">Frameworks You Keep</h3>
        <p className="text-sm text-text-secondary">Built from real data over the engagement.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {frameworkModules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-gold mb-3">FRAMEWORK</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Month3Section;
