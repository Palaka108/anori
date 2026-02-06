import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const AnimatedSection = ({ children, className = "", id, alt = false }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={staggerContainer}
    className={`relative ${alt ? "section-surface-alt" : "section-surface"} py-20 md:py-[120px] ${className}`}
  >
    {children}
  </motion.section>
);

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default AnimatedSection;
