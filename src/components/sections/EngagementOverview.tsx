import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import PhaseCircle from "../PhaseCircle";

const phases = [
  {
    num: "01",
    title: "Alignment Sprint",
    desc: "Focused discovery to understand product state, partnership dynamics, and GTM readiness before committing resources.",
  },
  {
    num: "02",
    title: "Foundation & Activation",
    desc: "Build infrastructure and begin outbound activity informed by Discovery findings — not assumptions.",
  },
  {
    num: "03",
    title: "Refinement & Frameworks",
    desc: "Refine pipeline from real engagement data. Deliver advisory frameworks to support independent decision-making.",
  },
];

const principles = [
  "Understand first, then act",
  "Scale once tested",
  "Flexibility by design",
  "Scope-aware",
];

const EngagementOverview = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">ENGAGEMENT OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Product Development & Go-to-Market Partnership Strategy
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary max-w-[600px] mb-8 leading-relaxed">
        A phased approach to developing product scope, go-to-market positioning, and partnership strategy across Building Departments, AEC, and adjacent verticals.
      </motion.p>

      {/* Purpose bar */}
      <motion.div variants={fadeUp} className="rounded-lg bg-card border border-border px-5 py-4 text-center mb-6">
        <p className="text-sm text-text-secondary leading-relaxed">
          Structured to surface clarity before committing to execution. The engagement begins with a paid Discovery Sprint — ensuring every advisory hour is directed by reality, not assumptions.
        </p>
      </motion.div>

      {/* Guiding principle chips */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5 mb-14">
        {principles.map((p) => (
          <span
            key={p}
            className="text-[11px] font-medium text-text-muted-custom bg-surface border border-border rounded-full px-4 py-1.5 select-none"
          >
            {p}
          </span>
        ))}
      </motion.div>

      {/* Phase cards */}
      <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14">
        {phases.map((p) => (
          <motion.div
            key={p.num}
            variants={fadeUp}
            className="module-card text-center pt-12 relative"
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <PhaseCircle num={p.num} />
            </div>
            <h3 className="text-base font-semibold text-text-primary mb-2">{p.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="text-[15px] text-text-muted-custom italic text-center max-w-[620px] mx-auto"
      >
        This engagement is designed for a pre-product stage. The phased structure develops clarity through structured discovery — adapting as we learn together. Items outside current scope can be explored as a future conversation.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default EngagementOverview;
