import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const steps = [
  { num: "1", label: "Initial Phase", sub: "Alignment & Scoping" },
  { num: "2", label: "Scope Confirmation", sub: "Mutual agreement" },
  { num: "3", label: "Month 1 Execution", sub: "Foundation" },
  { num: "4", label: "3-Month Continuation", sub: "Optional" },
];

const EngagementFlowSection = () => (
  <AnimatedSection id="flow">
    <div className="w-full max-w-[620px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">PROCESS</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-8 text-text-primary">
        Engagement Flow
      </motion.h2>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div key={step.num} variants={fadeUp} className="flex items-start gap-4">
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[13px] font-bold shrink-0">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-10 bg-border" />
              )}
            </div>
            {/* Content */}
            <div className="pt-1.5 pb-6">
              <p className="text-[14px] font-semibold text-text-primary">{step.label}</p>
              <p className="text-[12px] text-text-muted-custom">{step.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EngagementFlowSection;
