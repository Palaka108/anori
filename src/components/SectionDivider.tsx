import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="flex justify-center my-12 md:my-20">
    <motion.svg
      width="120"
      height="2"
      viewBox="0 0 120 2"
      className="overflow-visible"
    >
      <motion.line
        x1="60" y1="1" x2="120" y2="1"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.line
        x1="60" y1="1" x2="0" y2="1"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </motion.svg>
  </div>
);

export default SectionDivider;
