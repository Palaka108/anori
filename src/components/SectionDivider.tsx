import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="flex justify-center my-12 md:my-20">
    <motion.svg
      width="200"
      height="2"
      viewBox="0 0 200 2"
      className="overflow-visible"
    >
      <motion.line
        x1="100" y1="1" x2="200" y2="1"
        stroke="hsl(200 90% 50% / 0.2)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.line
        x1="100" y1="1" x2="0" y2="1"
        stroke="hsl(200 90% 50% / 0.2)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Center dot glow */}
      <circle cx="100" cy="1" r="2" fill="hsl(200 90% 50% / 0.5)" />
    </motion.svg>
  </div>
);

export default SectionDivider;
