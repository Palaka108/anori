import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="flex justify-center py-2">
    <motion.svg
      width="120"
      height="2"
      viewBox="0 0 120 2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      className="overflow-visible"
    >
      <motion.line
        x1="0" y1="1" x2="120" y2="1"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.svg>
  </div>
);

export default SectionDivider;
