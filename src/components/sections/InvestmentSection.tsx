import AnimatedSection from "../AnimatedSection";
import { Check, Star } from "lucide-react";

const monthlyItems = [
  "8 hours dedicated advisory engagement",
  "Full retainer benefits (strategy, CRM, AI, reporting)",
  "Foundation & Activation deliverables",
  "Market Intelligence Report (Month 1)",
  "Weekly pipeline dashboards (Month 2+)",
  "Lightweight partnership analysis",
  "Monthly progress reports",
];

const packageItems = [
  { text: "Everything in month-to-month", gold: false },
  { text: "Lead gen automation handover + care guide", gold: true },
  { text: "MEDDIC analysis + advisory playbook", gold: true },
  { text: "Sales hiring readiness scorecard", gold: true },
  { text: "Full partnership analysis scoreboard", gold: true },
  { text: "Dashboard standards alignment", gold: true },
  { text: "30/60/90 strategic recommendations", gold: true },
];

const steps = [
  { num: "01", title: "Align on Open Questions", desc: "CRM users, lead data sources, start date, platform preference" },
  { num: "02", title: "Select Engagement Model", desc: "Month-to-month retainer or 3-month package" },
  { num: "03", title: "Sign & Kickoff", desc: "Set the start date and begin Foundation & Discovery" },
];

const InvestmentSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">INVESTMENT</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Engagement Models</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Month-to-Month */}
        <div className="card-glass p-8">
          <h3 className="text-sm font-mono uppercase tracking-wider text-text-dim mb-4">Month-to-Month Retainer</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold font-mono text-foreground">$6,000</span>
            <span className="text-text-dim text-sm">/month</span>
          </div>
          <p className="text-xs text-text-muted-custom mb-6">1-month minimum commitment • $300/hr overage • Net 15</p>
          <ul className="space-y-3">
            {monthlyItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-dim">
                <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3-Month Package */}
        <div className="card-glass p-8 relative overflow-hidden">
          {/* Recommended ribbon */}
          <div className="absolute top-5 -right-8 bg-accent text-background text-[10px] font-mono font-bold uppercase tracking-wider py-1 px-10 rotate-45">
            Recommended
          </div>
          <h3 className="text-sm font-mono uppercase tracking-wider text-text-dim mb-4">3-Month Package</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold font-mono text-accent">Discounted</span>
            <span className="text-text-dim text-sm">/month</span>
          </div>
          <p className="text-xs text-text-muted-custom mb-6">3-month commitment • $300/hr overage • Net 15</p>
          <ul className="space-y-3">
            {packageItems.map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-text-dim">
                {item.gold ? (
                  <Star className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                ) : (
                  <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Value Context */}
      <div className="card-glass-static p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-12">
        <span className="tag-blue shrink-0">CONTEXT</span>
        <p className="text-sm text-text-dim leading-relaxed">
          Two senior enterprise sales professionals with Fortune 50 client executive experience — structured advisory at a fraction of the cost of a fractional CRO ($7,500-25,000/mo) or ex-MBB consultant ($300-500/hr).
        </p>
      </div>

      {/* Next Steps */}
      <h3 className="text-xl font-semibold mb-6 text-foreground">Next Steps</h3>
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {steps.map((s) => (
          <div key={s.num} className="card-glass p-6 text-center">
            <span className="text-4xl font-bold font-mono text-blueprint/30">{s.num}</span>
            <h4 className="text-base font-semibold mt-2 mb-2 text-foreground">{s.title}</h4>
            <p className="text-sm text-text-dim">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-foreground/5">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted-custom">
          GOSAI • Confidential • February 2026
        </span>
      </div>
    </div>
  </AnimatedSection>
);

export default InvestmentSection;
