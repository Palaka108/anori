import { motion } from "framer-motion";

const PhaseCircle = ({ num, size = 48 }: { num: string; size?: number }) => (
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
    className="rounded-full flex items-center justify-center bg-accent text-accent-foreground"
    style={{ width: size, height: size }}
  >
    <span className="text-lg font-bold">{num}</span>
  </motion.div>
);

export default PhaseCircle;
