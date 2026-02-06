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
        <span className="text-[11px] uppercase tracking-[0.08em] text-text-muted-custom border border-border rounded px-[18px] py-1.5 inline-block font-medium">
          GOSAI • gosai.io
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight text-text-primary"
      >
        Advisory Engagement Proposal
      </motion.h1>

      <motion.p variants={fadeUp} className="text-[22px] sm:text-[32px] font-normal text-text-secondary mt-2">
        Anori
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-10">
        {["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"].map((p) => (
          <span
            key={p}
            className="text-[13px] font-medium text-accent border border-border-accent rounded-full px-5 py-2"
            style={{ background: "hsl(224 65% 51% / 0.06)" }}
          >
            {p}
          </span>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="text-xs text-text-muted-custom tracking-wider mt-12">
        February 2026 • Confidential
      </motion.p>
    </motion.div>
  </section>
);

export default TitleSection;
