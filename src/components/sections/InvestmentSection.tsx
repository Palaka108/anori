import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import PhaseCircle from "../PhaseCircle";

const foundationItems = [
  "8 hours dedicated advisory engagement",
  "CRM setup and lead organization",
  "Follow-up architecture and calendar system",
  "ICP hypothesis mapping",
  "Market Intelligence Report",
  "Weekly dashboards",
  "Email templates and outreach prep",
  "CRM training guide",
];

const packageItems = [
  { text: "Everything in Foundation Engagement", gold: false },
  { text: "Month 2 — Activation & Outbound", gold: false },
  { text: "Month 3 — Refinement & Frameworks", gold: false },
  { text: "Custom MEDDIC-style analysis for pre-product partnership needs", gold: true },
  { text: "Automation recommendation analysis to scale GTM operations", gold: true },
  { text: "Full partnership scoreboard", gold: true },
  { text: "Dashboard alignment", gold: true },
  { text: "Hiring readiness", gold: true },
  { text: "30/60/90 framework", gold: true },
];

const steps = [
  { num: "01", title: "Align on Open Questions", desc: "CRM users, existing data, start date, platform" },
  { num: "02", title: "Choose Your Model", desc: "Foundation engagement or 3-month commitment" },
  { num: "03", title: "Begin", desc: "Set the start date and begin Foundation & Discovery" },
];

const pricingCardEntry = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const InvestmentSection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">INVESTMENT</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Engagement Options
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12">
        Two models, same advisory team, same commitment to clarity.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10">
        {/* Foundation Engagement */}
        <motion.div variants={pricingCardEntry} className="module-card" style={{ boxShadow: "var(--shadow-md)" }}>
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-[44px] font-bold text-text-primary">$6,000</span>
              <span className="text-base text-text-muted-custom">/minimum</span>
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted-custom mt-1">Month 1 — 8-hour minimum to start</p>
          </div>
          <div className="h-px bg-border mb-6" />
          <ul className="space-y-3 mb-6">
            {foundationItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[11px] font-medium text-text-muted-custom mb-1">After Month 1, engagement can continue hourly or via commitment package</p>
          <p className="text-[11px] font-medium text-text-muted-custom">$300/hr for additional or subsequent monthly hours</p>
        </motion.div>

        {/* 3-Month Commitment */}
        <motion.div
          variants={pricingCardEntry}
          className="module-card relative"
          style={{
            border: "1px solid rgba(47,95,215,0.2)",
            background: "linear-gradient(180deg, #FFFFFF, hsl(220 33% 98%))",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <span
            className="absolute top-4 right-4 text-[10px] font-medium uppercase tracking-[0.06em] text-white px-3 py-1 rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(224 65% 51%), hsl(224 80% 67%))" }}
          >
            RECOMMENDED
          </span>
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-[44px] font-bold text-text-primary">$15,000</span>
              <span className="text-base text-text-muted-custom">/total</span>
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted-custom mt-1">3 months — save $3,000 vs month-to-month</p>
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
          <p className="text-[11px] font-medium text-text-muted-custom">$300/hr if additional hours needed · Net 15</p>
        </motion.div>
      </div>

      <motion.p
        variants={fadeUp}
        className="text-sm text-text-secondary text-center max-w-[580px] mx-auto mb-14"
      >
        Advisory from two senior enterprise professionals with Fortune 50 experience — at a fraction of the cost of a fractional CRO or retained consulting firm.
      </motion.p>

      {/* Next Steps */}
      <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-14">
        {steps.map((s) => (
          <motion.div key={s.num} variants={fadeUp} className="text-center">
            <div className="mx-auto mb-3 w-fit">
              <PhaseCircle num={s.num} size={48} />
            </div>
            <h4 className="text-[15px] font-semibold text-text-primary mb-1">{s.title}</h4>
            <p className="text-[13px] text-text-muted-custom">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div variants={fadeUp} className="text-center pt-8 border-t border-border">
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted-custom inline-block border border-border rounded px-4 py-1.5 mb-2">
          GOSAI
        </span>
        <p className="text-xs text-text-muted-custom">Confidential · February 2026</p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default InvestmentSection;
