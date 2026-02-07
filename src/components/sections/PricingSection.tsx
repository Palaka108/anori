import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const tiers = [
  {
    label: "Initial Phase",
    price: "$1,800",
    unit: "fixed",
    note: "Credited toward Month 1 if engagement proceeds",
    accent: true,
  },
  {
    label: "Month 1 Advisory",
    price: "$6,000",
    unit: "/ month",
    note: "Final scope confirmed after Initial Phase",
    accent: true,
  },
  {
    label: "3-Month Package",
    price: "$15,000",
    unit: "total",
    note: "Months 1–3 bundled — confirmed after Initial Phase",
    accent: false,
  },
];

const PricingSection = () => (
  <AnimatedSection id="pricing" alt>
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">INVESTMENT</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-8 text-text-primary">
        Pricing
      </motion.h2>

      <div className="space-y-4">
        {tiers.map((tier) => (
          <motion.div
            key={tier.label}
            variants={fadeUp}
            className={`investment-card border-l-[3px] ${tier.accent ? "border-l-accent" : "border-l-gold"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={`text-[12px] font-semibold uppercase tracking-wider mb-0.5 ${tier.accent ? "text-accent" : "text-gold"}`}>
                  {tier.label}
                </p>
                <p className="text-[11px] text-text-muted-custom">{tier.note}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[24px] sm:text-[28px] font-bold text-text-primary">{tier.price}</span>
                <span className="text-[12px] text-text-muted-custom ml-1">{tier.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p variants={fadeUp} className="text-[12px] text-text-muted-custom mt-6 leading-relaxed text-center">
        All pricing represents initial estimates. Final scope and investment confirmed after the Initial Phase.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default PricingSection;
