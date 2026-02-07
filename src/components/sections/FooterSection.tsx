import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const FooterSection = () => (
  <motion.footer
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    className="section-surface-alt py-16 md:py-20"
  >
    <div className="w-full max-w-[700px] mx-auto px-5 md:px-10 text-center">
      <motion.div variants={fade} className="mb-8">
        <a
          href="#alignment-phase"
          className="inline-block px-8 py-3.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold transition-all hover:opacity-90"
        >
          Proceed with Alignment Phase
        </a>
      </motion.div>

      <motion.div variants={fade} className="section-divider max-w-[120px] mx-auto mb-6" />

      <motion.p variants={fade} className="text-xs text-text-muted-custom mb-1">
        Confidential · February 2026
      </motion.p>
      <motion.p variants={fade} className="text-xs text-text-muted-custom">
        Anori / Gosai
      </motion.p>
    </div>
  </motion.footer>
);

export default FooterSection;
