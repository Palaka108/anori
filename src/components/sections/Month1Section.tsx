import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const cards = [
  {
    title: "CRM Foundation Live",
    desc: "Platform configured, pipeline structure aligned to current stage, existing leads consolidated.",
  },
  {
    title: "Existing Lead Nurture",
    desc: "Reactivation sequences for existing contacts. Follow-up architecture with calendar and templates.",
  },
  {
    title: "Outbound Readiness Assessment",
    desc: "ICP and persona mapping across target verticals. Outreach preparation and sequencing recommendations.",
  },
  {
    title: "Weekly Visibility Updates",
    desc: "Dashboards and reporting on pipeline activity, lead status, and market signals.",
  },
];

const Month1Section = () => (
  <AnimatedSection id="month-1" alt>
    <div className="w-full max-w-[600px] mx-auto px-5">
      <motion.p variants={labelSlide} className="section-label mb-4">MONTH 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Foundation Execution
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[14px] text-text-secondary mb-8 leading-relaxed">
        Establishing core infrastructure and surfacing initial market signals.
      </motion.p>

      <div className="space-y-3">
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="tap-card">
            <h3 className="text-[14px] font-semibold text-text-primary mb-1.5">{card.title}</h3>
            <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* End of month output */}
      <motion.div variants={fadeUp} className="module-card-highlight mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">End of Month Output</p>
        <p className="text-[14px] text-text-primary font-medium">
          Clear next-step GTM recommendation based on real data — not assumptions.
        </p>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card border-l-[3px] border-l-accent mt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Month 1 Advisory</p>
            <p className="text-[11px] text-text-muted-custom">Confirmed after Initial Phase</p>
          </div>
          <div className="text-right">
            <span className="text-[24px] sm:text-[28px] font-bold text-text-primary">$6,000</span>
            <span className="text-[12px] text-text-muted-custom ml-1">/ month</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
