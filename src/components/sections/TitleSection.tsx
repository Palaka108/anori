import { motion } from "framer-motion";
import BlueprintGrid from "../BlueprintGrid";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const badgeFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const TitleSection = () => (
  <section className="relative min-h-screen flex items-center justify-center section-surface overflow-hidden">
    <BlueprintGrid />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 py-20 text-center"
    >
      <motion.div variants={badgeFade} className="mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted-custom border border-border rounded px-[18px] py-1.5 inline-block">
          GOSAI • gosai.io
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-[32px] sm:text-[40px] md:text-[52px] font-bold leading-tight text-text-primary"
      >
        Advisory Engagement Proposal
      </motion.h1>

      <motion.p variants={fadeUp} className="text-2xl sm:text-[36px] font-light text-text-secondary mt-2">
        Anori
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-10">
        {["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"].map((p) => (
          <span
            key={p}
            className="text-[13px] text-text-secondary border border-border rounded-full px-5 py-2 bg-surface-elevated"
          >
            {p}
          </span>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="font-mono text-xs text-text-muted-custom tracking-wider mt-12">
        February 2026 • Confidential
      </motion.p>
    </motion.div>
  </section>
);

export default TitleSection;
