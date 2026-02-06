import { motion } from "framer-motion";
import BlueprintGrid from "../BlueprintGrid";

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

const TitleSection = () => (
  <section className="relative flex items-center justify-center section-surface overflow-hidden py-16 md:py-24">
    <BlueprintGrid />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 text-center"
    >
      <motion.div variants={fade} className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.08em] text-text-muted-custom border border-border rounded px-[18px] py-1.5 inline-block font-medium select-none">
          GOSAI · gosai.io
        </span>
      </motion.div>

      <motion.h1
        variants={fade}
        className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-tight text-text-primary"
      >
        Advisory Engagement Proposal
      </motion.h1>

      <motion.p variants={fade} className="text-[20px] sm:text-[26px] font-medium text-accent mt-2">
        Anori
      </motion.p>

      <motion.div variants={fade} className="flex flex-wrap justify-center gap-2.5 mt-8">
        {["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"].map((p) => (
          <span
            key={p}
            className="text-[12px] font-medium text-text-secondary bg-surface-subtle border border-border rounded px-4 py-1.5 select-none"
          >
            {p}
          </span>
        ))}
      </motion.div>

      <motion.p variants={fade} className="text-xs text-text-muted-custom tracking-wider mt-8">
        February 2026 · Confidential
      </motion.p>
    </motion.div>
  </section>
);

export default TitleSection;
