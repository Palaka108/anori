import { motion } from "framer-motion";
import BlueprintGrid from "../BlueprintGrid";
import { fadeUp } from "../AnimatedSection";

const TitleSection = () => (
  <section className="relative min-h-screen flex items-center justify-center section-surface overflow-hidden">
    <BlueprintGrid />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.08 }}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 py-20 text-center"
    >
      {/* Badge */}
      <motion.div variants={fadeUp} className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted-custom border border-border rounded-full px-4 py-1.5 inline-block">
          GOSAI • gosai.io
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-text-primary"
      >
        Advisory Engagement Proposal
      </motion.h1>

      {/* Client */}
      <motion.p variants={fadeUp} className="text-2xl sm:text-3xl font-light text-text-secondary mt-2">
        Anori
      </motion.p>

      {/* Pillars */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-10">
        {["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"].map((p) => (
          <span
            key={p}
            className="text-[13px] text-text-secondary border border-border rounded-full px-5 py-2 bg-surface-subtle"
          >
            {p}
          </span>
        ))}
      </motion.div>

      {/* Date */}
      <motion.p variants={fadeUp} className="font-mono text-xs text-text-muted-custom tracking-wider mt-10">
        February 2026 • Confidential
      </motion.p>
    </motion.div>
  </section>
);

export default TitleSection;
