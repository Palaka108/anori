import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const steps = [
  { num: "1", title: "Design Phase", sub: "Alignment & CRM Setup" },
  { num: "2", title: "Scope Confirmation", sub: "" },
  { num: "3", title: "Month 1", sub: "Full Foundation Build" },
  { num: "4", title: "Optional", sub: "Multi-Month Continuation" },
];

const EngagementFlowSection = () => (
  <AnimatedSection id="flow" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">PROCESS</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-6 text-text-primary">
        Engagement Flow
      </motion.h2>

      <motion.div variants={fadeUp} className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.num}>
            <div className="step-card">
              <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <span className="text-[13px] font-bold text-accent">{step.num}</span>
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-text-primary">{step.title}</p>
                {step.sub && <p className="text-[12px] text-text-secondary mt-0.5">{step.sub}</p>}
              </div>
            </div>
            {i < steps.length - 1 && <div className="step-connector" />}
          </div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default EngagementFlowSection;
