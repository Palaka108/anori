import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import PhaseCircle from "../PhaseCircle";

const discoveryFeatures = [
  "Technical & product deep dive",
  "Partner & market reality check",
  "GTM & CRM alignment session",
  "Two-page Discovery Summary",
  "Tailored Month 1 definition",
];

const monthlyFeatures = [
  "Senior advisory coverage with priority access",
  "CRM and infrastructure decisions informed by Discovery",
  "Outbound strategy and execution support",
  "Market Intelligence Report",
  "Weekly pipeline dashboards",
  "Monthly progress reports",
  "Partnership analysis",
];

const continuityFeatures = [
  { text: "Everything in Monthly Advisory", gold: false },
  { text: "Automation recommendation analysis", gold: true },
  { text: "Custom MEDDIC-style analysis for pre-product needs", gold: true },
  { text: "Full partnership scoreboard", gold: true },
  { text: "Dashboard alignment recommendations", gold: true },
  { text: "Hiring readiness considerations", gold: true },
  { text: "30/60/90 strategic framework", gold: true },
];

const steps = [
  { num: "01", title: "Alignment Sprint", desc: "Focused discovery to understand reality before committing resources" },
  { num: "02", title: "Monthly Advisory", desc: "Confirmed or adjusted engagement based on Discovery findings" },
  { num: "03", title: "Continuity Decision", desc: "Multi-month options discussed with full clarity on scope" },
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
        A disciplined sequence: understand first, then act. Each step builds on confirmed reality.
      </motion.p>

      {/* 3-tier pricing */}
      <div className="grid md:grid-cols-3 gap-5 md:gap-5 mb-10">
        {/* Discovery Sprint */}
        <motion.div variants={pricingCardEntry} className="module-card" style={{ boxShadow: "var(--shadow-md)" }}>
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted-custom mb-2">Pre-Execution</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] font-bold text-text-primary">$1,500</span>
              <span className="text-sm text-text-muted-custom">– $2,000</span>
            </div>
            <p className="text-[11px] font-medium text-text-muted-custom mt-1">Fixed fee · Credits toward Month 1</p>
          </div>
          <div className="h-px bg-border mb-5" />
          <h4 className="text-sm font-semibold text-text-primary mb-3">Alignment Sprint</h4>
          <ul className="space-y-2.5 mb-4">
            {discoveryFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                <Check className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-text-muted-custom">3 meetings · 2 senior advisors · deliverables retained regardless</p>
        </motion.div>

        {/* Monthly Advisory */}
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
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted-custom mb-2">Monthly Advisory Package</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[36px] font-bold text-text-primary">$6,000</span>
              <span className="text-sm text-text-muted-custom">/month</span>
            </div>
            <p className="text-[11px] font-medium text-text-muted-custom mt-1">Pre-Discovery estimate · confirmed after Alignment Sprint</p>
          </div>
          <div className="h-px bg-border mb-5" />
          <ul className="space-y-2.5 mb-4">
            {monthlyFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                <Check className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-text-muted-custom">$300/hr available for supplemental advisory hours</p>
        </motion.div>

        {/* Advisory Continuity */}
        <motion.div
          variants={pricingCardEntry}
          className="module-card"
          style={{
            border: "1px solid rgb(212 168 67 / 0.15)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted-custom mb-2">Advisory Continuity Package</p>
            <p className="text-[15px] font-semibold text-text-primary">Discussed After Discovery</p>
            <p className="text-[11px] font-medium text-text-muted-custom mt-1">Reflects efficiency of continuity, not reduced value</p>
          </div>
          <div className="h-px bg-border mb-5" />
          <ul className="space-y-2.5 mb-4">
            {continuityFeatures.map((item) => (
              <li key={item.text} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                {item.gold ? (
                  <Star className="w-3.5 h-3.5 mt-0.5 text-gold shrink-0" />
                ) : (
                  <Check className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-text-muted-custom">Multi-month pricing discussed when both parties have full clarity on scope</p>
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
