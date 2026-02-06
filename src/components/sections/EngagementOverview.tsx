import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "../AnimatedSection";
import PhaseCircle from "../PhaseCircle";

const phases = [
  {
    num: "01",
    title: "Foundation & Discovery",
    sub: "Phase 1",
    desc: "Organize existing infrastructure and leads. Begin documenting market hypotheses across Building Departments, AEC, and adjacent verticals.",
  },
  {
    num: "02",
    title: "Activation & Guided Outbound",
    sub: "Phase 2",
    desc: "Test initial outbound approaches against prioritized accounts. Surface channel efficiency data and system recommendations.",
  },
  {
    num: "03",
    title: "Refinement & Frameworks",
    sub: "Phase 3",
    desc: "Refine pipeline from real engagement data. Deliver advisory frameworks to support independent decision-making.",
  },
];

const EngagementOverview = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1120px] mx-auto px-5">
      <motion.p variants={fadeUp} className="section-label mb-4">ENGAGEMENT OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
        A Phased Advisory Approach
      </motion.h2>
      <motion.p variants={fadeUp} className="text-lg text-text-secondary max-w-[640px] mb-14 leading-relaxed">
        Structured to surface clarity before committing to execution. Each phase builds on real signals — not assumptions.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mb-14">
        {phases.map((p, i) => (
          <motion.div
            key={p.num}
            variants={fadeUp}
            className="module-card text-center pt-12 relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <PhaseCircle num={p.num} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{p.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeUp}
        className="text-[15px] text-text-muted-custom italic text-center max-w-[600px] mx-auto"
      >
        This engagement is designed for a pre-product stage. The phased structure develops clarity through structured discovery — adapting as we learn together.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default EngagementOverview;
