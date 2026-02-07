import { motion } from "framer-motion";
import BlueprintGrid from "../BlueprintGrid";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const chipFade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const focusChips = ["Strategic Advisory", "Go-to-Market Partnership", "Partnership Activation"];

const TitleSection = () => (
  <section className="relative flex items-center justify-center overflow-hidden py-20 md:py-28 section-surface">
    <BlueprintGrid />
    {/* Radial glow behind title */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsl(200 90% 50% / 0.08), transparent 70%)",
      }}
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 text-center"
    >
      {/* Client name */}
      <motion.div variants={fade} className="mb-6">
        <span className="text-[22px] sm:text-[28px] md:text-[32px] font-normal text-accent">
          Anori
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h1
        variants={fade}
        className="text-[24px] sm:text-[32px] md:text-[38px] font-bold leading-tight text-text-primary mb-10"
      >
        Commercial Engagement Proposal
      </motion.h1>

      {/* Focus chips */}
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="flex flex-wrap justify-center gap-3"
      >
        {focusChips.map((p) => (
          <motion.span
            key={p}
            variants={chipFade}
            className="text-[13px] font-medium text-accent rounded-full px-5 py-2 select-none border"
            style={{
              background: "hsl(200 90% 50% / 0.06)",
              borderColor: "hsl(200 90% 50% / 0.2)",
            }}
          >
            {p}
          </motion.span>
        ))}
      </motion.div>

      {/* Date */}
      <motion.p variants={fade} className="text-xs text-text-muted-custom tracking-wider mt-12">
        February 2026 · Confidential
      </motion.p>

      {/* Gosai badge */}
      <motion.div variants={fade} className="mt-12">
        <span className="text-[11px] uppercase tracking-[0.08em] text-text-muted-custom border border-border rounded px-[18px] py-1.5 inline-block font-medium select-none">
          GOSAI · gosai.io
        </span>
      </motion.div>
    </motion.div>
  </section>
);

export default TitleSection;
