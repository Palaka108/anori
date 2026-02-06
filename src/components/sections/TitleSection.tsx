import { motion } from "framer-motion";
import BlueprintGrid from "../BlueprintGrid";

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

const TitleSection = () => (
  <section className="relative flex items-center justify-center overflow-hidden py-16 md:py-24 bg-steel-blue">
    <BlueprintGrid />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 text-center"
    >
      <motion.div variants={fade} className="mb-6">
        <span className="relative inline-block text-[30px] sm:text-[38px] md:text-[46px] font-semibold text-accent-light">
          Anori
          <span className="absolute left-0 -bottom-1.5 w-full h-[3px] rounded-full bg-accent-light/25" />
        </span>
      </motion.div>

      <motion.h1
        variants={fade}
        className="text-[24px] sm:text-[32px] md:text-[38px] font-semibold leading-tight text-white"
      >
        Commercial Engagement Proposal
      </motion.h1>

      <motion.div variants={fade} className="flex flex-wrap justify-center gap-2.5 mt-8">
        {["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"].map((p) => (
          <span
            key={p}
            className="text-[12px] font-medium text-mist-blue bg-white/5 border border-white/10 rounded px-4 py-1.5 select-none"
          >
            {p}
          </span>
        ))}
      </motion.div>

      <motion.p variants={fade} className="text-xs text-mist-blue tracking-wider mt-8">
        February 2026 · Confidential
      </motion.p>

      <motion.div variants={fade} className="mt-8">
        <span className="text-[11px] uppercase tracking-[0.08em] text-mist-blue/70 border border-white/10 rounded px-[18px] py-1.5 inline-block font-medium select-none">
          GOSAI · gosai.io
        </span>
      </motion.div>
    </motion.div>
  </section>
);

export default TitleSection;
