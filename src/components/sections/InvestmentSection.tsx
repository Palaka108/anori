import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import PhaseCircle from "../PhaseCircle";

const sprintFeatures = [
  "3 focused alignment sessions",
  "Two senior advisors present",
  "Current Stage Assessment document",
  "Tailored Month 1 plan",
  "3-month trajectory",
  "Deliverables retained regardless",
];

const monthlyFeatures = [
  "Senior advisory with priority access",
  "CRM and infrastructure setup",
  "Follow-up architecture and templates",
  "ICP hypothesis mapping",
  "Market Intelligence Report",
  "Weekly dashboards and reporting",
  "Email templates and outreach prep",
  "CRM training guide",
];

const threeMonthFeatures = [
  { text: "Everything in Monthly Advisory Package", gold: false },
  { text: "Month 2: Activation & Guided Outbound", gold: false },
  { text: "Month 3: Refinement & Frameworks", gold: false },
  { text: "Custom pre-product partnership framework integrated in CRM", gold: true },
  { text: "Automation recommendation analysis", gold: true },
  { text: "Partnership analysis", gold: true },
  { text: "Dashboard alignment", gold: true },
  { text: "Hiring readiness considerations", gold: true },
  { text: "30/60/90 strategic framework", gold: true },
];

const nextSteps = [
  { num: "01", title: "Schedule Alignment Sprint", desc: "Understand your reality before building anything" },
  { num: "02", title: "Review Findings", desc: "Review deliverables and confirm engagement scope" },
  { num: "03", title: "Begin Month 1", desc: "Launch the tailored advisory engagement" },
];

const InvestmentSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">INVESTMENT</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Engagement Options
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12">
        Alignment to advisory — designed to reduce risk for both parties.
      </motion.p>

      {/* 3-tier pricing */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {/* Sprint */}
        <motion.div variants={fadeUp} className="module-card">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted-custom mb-2">Alignment Sprint</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] font-bold text-text-primary">$1,800</span>
              <span className="text-sm text-text-muted-custom">/fixed</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-1">Credits toward Month 1</p>
          </div>
          <div className="h-px bg-border mb-4" />
          <p className="text-[13px] text-text-secondary mb-4">For founders who want clarity before committing.</p>
          <ul className="space-y-2.5 mb-4">
            {sprintFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                <Check className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-text-muted-custom italic">You can stop here with value delivered.</p>
        </motion.div>

        {/* Monthly */}
        <motion.div
          variants={fadeUp}
          className="module-card relative"
          style={{
            border: "2px solid hsl(215 70% 50% / 0.3)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted-custom mb-2">Monthly Advisory Package</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[44px] font-bold text-accent">$6,000</span>
              <span className="text-base text-text-muted-custom">/month</span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted-custom mt-1">Initial estimate — confirmed after Alignment Sprint</p>
          </div>
          <div className="h-px bg-border mb-5" />
          <p className="text-[13px] text-text-secondary mb-4">For founders ready to build their first revenue system.</p>
          <ul className="space-y-2.5 mb-4">
            {monthlyFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                <Check className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-text-muted-custom italic mb-1">Scope tailored by Alignment Sprint findings</p>
          <p className="text-[11px] text-text-muted-custom">$300/hr for supplemental advisory · Net 15</p>
        </motion.div>

        {/* 3-Month */}
        <motion.div
          variants={fadeUp}
          className="module-card"
          style={{
            border: "1px solid hsl(38 65% 48% / 0.2)",
            borderTop: "3px solid hsl(38 65% 48%)",
          }}
        >
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted-custom mb-2">3-Month Advisory Package</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] font-bold text-text-primary">$15,000</span>
              <span className="text-sm text-text-muted-custom">/3 months</span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted-custom mt-1">Initial estimate — confirmed after Alignment Sprint</p>
          </div>
          <div className="h-px bg-border mb-4" />
          <p className="text-[13px] text-text-secondary mb-4">For founders who want the full system built and handed over.</p>
          <ul className="space-y-2.5 mb-4">
            {threeMonthFeatures.map((item) => (
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
          <p className="text-xs text-text-muted-custom italic">Efficiency and continuity — not reduced value.</p>
        </motion.div>
      </div>

      <motion.p
        variants={fadeUp}
        className="text-[13px] text-text-muted-custom italic text-center max-w-lg mx-auto mb-14"
      >
        All pricing reflects initial estimates. Final scope and pricing confirmed after the Alignment Sprint.
      </motion.p>

      {/* Next Steps */}
      <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-14">
        {nextSteps.map((s) => (
          <motion.div key={s.num} variants={fadeUp} className="text-center">
            <div className="mx-auto mb-3 w-fit">
              <PhaseCircle num={s.num} size={44} />
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
