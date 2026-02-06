import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    title: "Phase 1: Foundation & Discovery",
    sub: "Month 1",
    desc: "Establish CRM infrastructure. Organize existing leads. Begin documenting ICP hypotheses across Building Departments, AEC, and adjacent verticals. Deliver a Market Intelligence Report that informs — but does not finalize — strategic direction.",
  },
  {
    num: "02",
    title: "Phase 2: Activation & Guided Outbound",
    sub: "Month 2",
    desc: "Test outbound hypotheses against top target accounts. Deploy AI-assisted channel analysis. Deliver system and automation recommendations with cost estimates. Begin weekly pipeline reporting.",
  },
  {
    num: "03",
    title: "Phase 3: Refinement & Advisory Frameworks",
    sub: "Month 3",
    desc: "Refine pipeline based on real engagement data. Deliver advisory frameworks — MEDDIC analysis, partnership scoreboard, hiring readiness criteria — to support Anori's next phase of independent decision-making.",
  },
];

const EngagementOverview = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">ENGAGEMENT OVERVIEW</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">A Phased Advisory Approach</h2>
      <p className="text-text-dim max-w-3xl mb-12 leading-relaxed">
        Iterate fast, adjust quickly, scale once tested. We advise based on real market signals — not assumptions. This engagement is structured to surface clarity before committing to execution.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {phases.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="card-glass p-6 relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 font-mono text-5xl font-bold text-blueprint/10">{p.num}</span>
            <p className="tag-blue mb-3">{p.sub}</p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">{p.title}</h3>
            <p className="text-sm text-text-dim leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="accent-border-left card-glass-static p-6">
        <p className="text-sm text-text-dim leading-relaxed">
          <span className="text-accent font-semibold">Philosophy: </span>
          This is a pre-product advisory engagement. Anori does not yet have a finalized product, a defined ICP, or a GTM motion. This phased structure is designed to develop clarity on all three — through structured discovery, not premature execution. Flexibility before a technical deep dive is a feature, not a limitation.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default EngagementOverview;
