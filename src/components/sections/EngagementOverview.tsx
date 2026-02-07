import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const phases = [
  {
    num: "01",
    title: "Pre-Execution Alignment Sprint",
    desc: "A focused due-diligence phase to understand Anori's product state, partnership dynamics, and GTM readiness before committing advisory resources.",
  },
  {
    num: "02",
    title: "Months 1–2 — Foundation & Activation",
    desc: "Execute against a tailored plan informed by Discovery. Build infrastructure, test outbound approaches, and surface channel efficiency data.",
  },
  {
    num: "03",
    title: "Month 3 — Refinement & Frameworks",
    desc: "Consolidate learnings into advisory deliverables. Deliver frameworks to support independent decision-making at scale.",
  },
];

const principles = [
  "Discovery before execution",
  "Iterate on real signals",
  "Scale once tested",
  "Scope-aware",
];

const EngagementOverview = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">ENGAGEMENT OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Structured to Earn Clarity Before Committing to Execution
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary max-w-[620px] mb-8 leading-relaxed">
        A phased advisory engagement beginning with a focused alignment sprint — ensuring every hour invested is directed by reality, not assumptions.
      </motion.p>

      {/* Purpose bar — glass panel */}
      <motion.div
        variants={fadeUp}
        className="rounded-lg px-5 py-4 text-center mb-6 border"
        style={{
          background: "hsl(220 18% 12% / 0.6)",
          backdropFilter: "blur(12px)",
          borderColor: "hsl(200 90% 50% / 0.12)",
        }}
      >
        <p className="text-sm text-text-secondary leading-relaxed">
          We conduct a paid Discovery Sprint before full engagement begins. This ensures Month 1 is tailored to where Anori is today — not where we assume you are.
        </p>
      </motion.div>

      {/* Guiding principle chips */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5 mb-14">
        {principles.map((p) => (
          <span
            key={p}
            className="text-[11px] font-medium text-text-muted-custom border border-border rounded-full px-4 py-1.5 select-none"
            style={{ background: "hsl(220 18% 12% / 0.5)" }}
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, hsl(200 90% 50%), hsl(200 100% 65%))",
                  boxShadow: "var(--shadow-sm), 0 0 12px rgba(0, 180, 255, 0.2)",
                  color: "hsl(220 20% 8%)",
                }}
              >
                {p.num}
              </div>
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
        This engagement is designed for a pre-product stage. The Discovery Sprint ensures we understand your reality before making commitments. Items outside current scope can be explored as a future conversation.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default EngagementOverview;
