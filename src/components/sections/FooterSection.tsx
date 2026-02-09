import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const FooterSection = () => {
  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className="section-surface py-12 sm:py-16 md:py-20"
    >
      <div className="content-container text-center">
        <motion.div variants={fade} className="section-divider max-w-[80px] mx-auto mb-6" />

        <motion.div variants={fade} className="mb-6">
          <button onClick={scrollToOverview} className="btn-primary">
            View Engagement Structure
          </button>
        </motion.div>

        <motion.p variants={fade} className="text-[11px] sm:text-[12px] text-text-muted-custom mb-1 tracking-wide">
          Confidential · February 2026
        </motion.p>
        <motion.p variants={fade} className="text-[11px] sm:text-[12px] text-text-muted-custom">
          Anori / Gosai
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
