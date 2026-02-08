import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const tiers = [
  {
    label: "Initial Phase",
    price: "$1,800",
    unit: "fixed",
    note: "Credited toward Month 1 if engagement proceeds",
  },
  {
    label: "Month 1 Advisory",
    price: "$6,000",
    unit: "/ month",
    note: "Initial estimate — confirmed after Initial Phase",
  },
  {
    label: "3-Month Package",
    price: "$15,000",
    unit: "total",
    note: "Initial estimate — confirmed after Initial Phase",
  },
];

const PricingSection = () => (
  <AnimatedSection id="pricing" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">INVESTMENT</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-6 text-text-primary">
        Pricing Summary
      </motion.h2>

      <div className="space-y-3">
        {tiers.map((tier) => (
          <motion.div
            key={tier.label}
            variants={fadeUp}
            className="investment-card border-l-[3px] border-l-accent"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">
                  {tier.label}
                </p>
                <p className="text-[11px] text-text-muted-custom">{tier.note}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">{tier.price}</span>
                <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">{tier.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="module-card mt-5 text-center">
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          All pricing represents initial estimates. Final scope and investment confirmed after the Initial Phase.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default PricingSection;
