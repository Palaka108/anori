import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection, { fadeUp } from "../AnimatedSection";

const monthlyItems = [
  "8 hours dedicated advisory engagement",
  "Ongoing operational support (CRM, reporting, research)",
  "Foundation & Activation modules",
  "Market Intelligence Report",
  "Weekly pipeline dashboards",
  "Monthly progress reports",
  "Partnership analysis (standard)",
];

const packageItems = [
  { text: "Everything in Monthly Advisory", gold: false },
  { text: "Automation handover + documentation", gold: true },
  { text: "MEDDIC deal analysis", gold: true },
  { text: "Hiring readiness considerations", gold: true },
  { text: "Full partnership scoreboard", gold: true },
  { text: "Dashboard alignment recommendations", gold: true },
  { text: "30/60/90 strategic framework", gold: true },
];

const steps = [
  { num: "01", title: "Align on Open Questions", desc: "CRM users, existing data, start date, platform" },
  { num: "02", title: "Choose Your Model", desc: "Monthly advisory or 3-month engagement" },
  { num: "03", title: "Begin", desc: "Set the start date and begin Foundation & Discovery" },
];

const InvestmentSection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1120px] mx-auto px-5">
      <motion.p variants={fadeUp} className="section-label mb-4">INVESTMENT</motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
        Engagement Options
      </motion.h2>
      <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-12">
        Two models, same advisory team, same commitment to clarity.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Monthly */}
        <motion.div variants={fadeUp} className="module-card">
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-text-primary">$6,000</span>
              <span className="text-base text-text-muted-custom">/month</span>
            </div>
            <p className="font-mono text-[13px] text-text-muted-custom mt-1">1-month minimum</p>
          </div>
          <div className="h-px bg-border mb-6" />
          <ul className="space-y-3 mb-6">
            {monthlyItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-text-muted-custom">$300/hr if additional hours needed • Net 15</p>
        </motion.div>

        {/* 3-Month */}
        <motion.div variants={fadeUp} className="module-card relative border-accent/20 border-2">
          <span className="absolute top-4 right-4 tag-accent text-[10px]">RECOMMENDED</span>
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-semibold text-accent">Preferred Rate</span>
              <span className="text-base text-text-muted-custom">/month</span>
            </div>
            <p className="font-mono text-[13px] text-text-muted-custom mt-1">3-month commitment</p>
          </div>
          <div className="h-px bg-border mb-6" />
          <ul className="space-y-3 mb-6">
            {packageItems.map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-text-secondary">
                {item.gold ? (
                  <Star className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                ) : (
                  <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="text-xs text-text-muted-custom">$300/hr if additional hours needed • Net 15</p>
        </motion.div>
      </div>

      {/* Context */}
      <motion.p
        variants={fadeUp}
        className="text-sm text-text-secondary text-center max-w-[600px] mx-auto mb-14"
      >
        Advisory from two senior enterprise professionals with Fortune 50 experience — at a fraction of the cost of a fractional CRO or retained consulting firm.
      </motion.p>

      {/* Next Steps */}
      <div className="grid sm:grid-cols-3 gap-8 mb-14">
        {steps.map((s) => (
          <motion.div key={s.num} variants={fadeUp} className="text-center">
            <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center mx-auto mb-3">
              <span className="font-mono text-base text-text-secondary">{s.num}</span>
            </div>
            <h4 className="text-[15px] font-semibold text-text-primary mb-1">{s.title}</h4>
            <p className="text-[13px] text-text-muted-custom">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div variants={fadeUp} className="text-center pt-8 border-t border-border">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted-custom inline-block border border-border rounded-full px-4 py-1.5 mb-2">
          GOSAI
        </span>
        <p className="text-xs text-text-muted-custom">Confidential • February 2026</p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default InvestmentSection;
