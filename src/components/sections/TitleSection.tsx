import { motion } from "framer-motion";
import BlueprintGrid from "../BlueprintGrid";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const chipFade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const focusChips = ["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"];

const TitleSection = () => (
  <section className="relative flex items-center justify-center overflow-hidden py-20 md:py-28 bg-steel-blue">
    <BlueprintGrid />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 text-center"
    >
      {/* Gosai badge — credibility anchor */}
      <motion.div variants={fade} className="mb-12">
        <span className="text-[11px] uppercase tracking-[0.08em] text-mist-blue/70 border border-white/10 rounded px-[18px] py-1.5 inline-block font-medium select-none">
          GOSAI · gosai.io
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        variants={fade}
        className="text-[24px] sm:text-[32px] md:text-[38px] font-bold leading-tight text-white mb-2"
      >
        Commercial Engagement Proposal
      </motion.h1>

      {/* Client name — prominent */}
      <motion.div variants={fade} className="mb-10">
        <span className="relative inline-block text-[22px] sm:text-[28px] md:text-[32px] font-normal text-mist-blue">
          Anori
        </span>
      </motion.div>

      {/* Focus chips */}
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="flex flex-wrap justify-center gap-3"
      >
        {focusChips.map((p) => (
          <motion.span
            key={p}
            variants={chipFade}
            className="text-[13px] font-medium text-accent-light bg-white/5 border border-white/10 rounded-full px-5 py-2 select-none"
          >
            {p}
          </motion.span>
        ))}
      </motion.div>

      {/* Date */}
      <motion.p variants={fade} className="text-xs text-mist-blue/70 tracking-wider mt-12">
        February 2026 · Confidential
      </motion.p>
    </motion.div>
  </section>
);

export default TitleSection;
