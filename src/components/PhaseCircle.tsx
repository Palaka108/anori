import { motion } from "framer-motion";

const PhaseCircle = ({ num, size = 56 }: { num: string; size?: number }) => (
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.45,
      ease: [0.34, 1.56, 0.64, 1],
    }}
    className="rounded-full flex items-center justify-center"
    style={{
      width: size,
      height: size,
      background: "linear-gradient(135deg, hsl(200 90% 50%), hsl(200 100% 65%))",
      boxShadow: "var(--shadow-md), 0 0 20px rgba(0, 180, 255, 0.15)",
    }}
  >
    <span className="text-[22px] font-bold" style={{ color: "hsl(220 20% 8%)" }}>{num}</span>
  </motion.div>
);

export default PhaseCircle;
