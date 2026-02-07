import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const HeroSection = () => (
  <section className="relative flex items-center justify-center py-28 md:py-40 overflow-hidden"
    style={{ background: "linear-gradient(180deg, hsl(224 65% 52% / 0.03) 0%, hsl(220 14% 97%) 100%)" }}
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative z-10 w-full max-w-[720px] mx-auto px-5 text-center"
    >
      {/* Title */}
      <motion.h1
        variants={fade}
        className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.15] text-text-primary mb-5 tracking-tight"
      >
        ANORI
      </motion.h1>

      {/* Proposal subtitle */}
      <motion.p
        variants={fade}
        className="text-lg sm:text-xl md:text-[22px] font-medium text-text-secondary mb-6 leading-snug"
      >
        Commercial Advisory Engagement Proposal
      </motion.p>

      {/* Divider */}
      <motion.div variants={fade} className="section-divider max-w-[200px] mx-auto mb-8" />

      {/* Subtext */}
      <motion.p
        variants={fade}
        className="text-[15px] text-text-muted-custom max-w-lg mx-auto mb-10 leading-relaxed"
      >
        Structured advisory support for early-stage building-tech initiatives — designed to earn clarity before scale.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={fade} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <a href="#engagement-overview" className="px-6 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold transition-all hover:opacity-90">
          View Engagement Structure
        </a>
        <a href="#alignment-phase" className="px-6 py-3 rounded-lg border border-border text-text-secondary text-sm font-medium transition-all hover:border-accent hover:text-accent">
          Proceed with Alignment Phase
        </a>
      </motion.div>

      {/* Meta */}
      <motion.p variants={fade} className="text-xs text-text-muted-custom tracking-wide">
        February 2026 · Confidential
      </motion.p>
    </motion.div>
  </section>
);

export default HeroSection;
