import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const coreModules = [
  {
    title: "Pipeline Refinement",
    desc: "Ongoing pipeline hygiene, partnership strategy adjustments based on Month 1–2 data, and a progress report with forward-looking recommendations.",
  },
  {
    title: "30/60/90 Advisory",
    desc: "Strategic recommendations structured around what's working, what to adjust, and where to focus next.",
  },
];

const exclusiveModules = [
  {
    title: "Custom Pre-Product Partnership Framework",
    desc: "A custom partnership framework integrated in CRM, adapted for pre-product partnership needs. A framework for how future team members could approach these conversations.",
  },
  {
    title: "Dashboard Alignment",
    desc: "Recommendations on standard vs. customized reporting views, tailored to different user roles within your organization.",
  },
  {
    title: "Hiring Readiness",
    desc: "Considerations for your next BD hire — profile, timing, compensation benchmarks, and readiness criteria.",
  },
  {
    title: "Partnership Analysis",
    desc: "An industry-level matrix of partnership opportunities, approach recommendations, and prioritization based on current team and resources.",
  },
];

const Month3Section = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">MONTH 3</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Refinement & Frameworks
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12">
        Consolidating learnings into actionable advisory deliverables.
      </motion.p>

      {/* Core modules */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-10">
        {coreModules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-accent mb-3">CORE</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Exclusive heading */}
      <motion.div variants={fadeUp} className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2">Extended Advisory Modules</h3>
        <p className="text-sm text-text-secondary">
          Available in multi-month engagements. Built from real engagement data.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-10">
        {exclusiveModules.map((m) => (
          <motion.div key={m.title} variants={fadeUp} className="module-card">
            <span className="tag-gold mb-3">CONTINUITY</span>
            <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">{m.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing note */}
      <motion.p
        variants={fadeUp}
        className="text-sm text-text-muted-custom italic text-center max-w-[580px] mx-auto"
      >
        Understand first, adjust quickly, scale once tested. We deliver results based on real engagement data before expanding scope — and that's why flexibility before the technical deep dive is a feature, not a limitation.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default Month3Section;
