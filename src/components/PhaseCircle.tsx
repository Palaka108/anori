import { motion } from "framer-motion";

const PhaseCircle = ({ num }: { num: string }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-md"
  >
    <span className="font-mono text-2xl font-semibold text-primary-foreground">{num}</span>
  </motion.div>
);

export default PhaseCircle;
