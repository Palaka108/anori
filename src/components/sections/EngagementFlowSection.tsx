import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const steps = [
  { num: "1", label: "Alignment & Scoping" },
  { num: "2", label: "Scope Confirmation" },
  { num: "3", label: "Month 1 Execution" },
  { num: "4", label: "Optional 3-Month Continuation" },
];

const EngagementFlowSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[900px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PROCESS</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-12 text-text-primary">
        Engagement Flow
      </motion.h2>

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch gap-0">
        {steps.map((s, i) => (
          <div key={s.num} className="flex-1 flex flex-col items-center relative">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden sm:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-[1.5px] bg-border z-0" />
            )}
            <div className="relative z-10 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold mb-3">
              {s.num}
            </div>
            <p className="text-[13px] font-medium text-text-primary text-center leading-snug max-w-[140px]">{s.label}</p>
            {/* Vertical connector for mobile */}
            {i < steps.length - 1 && (
              <div className="sm:hidden w-[1.5px] h-6 bg-border mt-3" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default EngagementFlowSection;
