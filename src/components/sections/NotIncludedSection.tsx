import { motion } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const items = [
  "Fundraising ownership or investor relations",
  "Investor deck creation",
  "Product roadmap ownership",
  "SDR / BDR management",
  "Heavy automation or custom engineering",
  "Ongoing CRM data entry",
];

const NotIncludedSection = () => (
  <AnimatedSection id="not-included">
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-8 text-text-primary">
        What's Not Included
      </motion.h2>

      <div className="space-y-3">
        {items.map((item) => (
          <motion.div key={item} variants={fadeUp} className="tap-card flex items-start gap-3">
            <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0 mt-0.5">
              <X className="w-3.5 h-3.5 text-text-muted-custom" />
            </div>
            <p className="text-[14px] text-text-secondary">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default NotIncludedSection;
