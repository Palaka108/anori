import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const items = [
  "Advisory guidance across defined phases",
  "CRM and infrastructure decisions",
  "Defined outbound support",
  "Weekly reporting and dashboards",
  "Market intelligence and system recommendations",
];

const IncludedSection = () => (
  <AnimatedSection id="included" alt>
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-8 text-text-primary">
        What's Included
      </motion.h2>

      <div className="space-y-3">
        {items.map((item) => (
          <motion.div key={item} variants={fadeUp} className="tap-card flex items-start gap-3">
            <div className="w-6 h-6 rounded-md bg-success-surface flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-success" />
            </div>
            <p className="text-[14px] text-text-primary font-medium">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default IncludedSection;
