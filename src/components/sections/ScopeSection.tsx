import AnimatedSection from "../AnimatedSection";

const outOfScope = [
  "Ad management or campaign optimization",
  "Content creation beyond email templates",
  "Web/tech integrations into client's existing systems",
  "Guaranteed leads, meetings, or revenue",
  "Execution ownership — Gosai advises and supports; Anori owns outcomes",
];

const addOns = [
  "Robo-dialing integration",
  "Customizable CRM expansions",
  "Text outreach campaigns",
  "LinkedIn outbound outreach",
  "Expanded AI automation workflows",
  "Landing page development",
];

const ScopeSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">SCOPE & FUTURE CAPABILITIES</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Boundaries & Opportunities</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card-glass-static p-6 border border-destructive/20">
          <span className="tag-red mb-3">SCOPE BOUNDARIES</span>
          <h3 className="text-base font-semibold mb-4 mt-2 text-foreground">Engagement Boundaries</h3>
          <ul className="space-y-2.5 text-sm text-text-dim">
            {outOfScope.map((t) => (
              <li key={t} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-destructive shrink-0" />{t}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-text-muted-custom">For more information on expanding any of these areas, ask us — we'll outline what that engagement would look like.</p>
        </div>

        <div className="card-glass-static p-6 border border-gold/20">
          <span className="tag-gold mb-3">FUTURE CAPABILITIES</span>
          <h3 className="text-base font-semibold mb-4 mt-2 text-foreground">Available Add-Ons</h3>
          <ul className="space-y-2.5 text-sm text-text-dim">
            {addOns.map((t) => (
              <li key={t} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />{t}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-text-muted-custom">We explore integration platforms and provide recommendations during the engagement. A detailed options list will be provided.</p>
        </div>
      </div>

      {/* Lead Gen Automation Handover */}
      <div className="card-glass-static p-6 border border-accent/20 mb-8">
        <span className="tag-green mb-3">3-MONTH PACKAGE</span>
        <h3 className="text-lg font-semibold mt-2 mb-3 text-foreground">Lead Gen Automation Handover</h3>
        <p className="text-sm text-text-dim leading-relaxed mb-3">
          We build a lead gen automation workflow during the engagement. At the end, the automation is yours to keep — along with documentation and a care guide. We show you how to use the system during onboarding.
        </p>
        <p className="text-sm font-semibold text-foreground">
          Automations built during the engagement are yours. Ongoing technical support or modifications after the engagement period require a separate arrangement.
        </p>
      </div>

      <div className="card-glass-static p-5">
        <p className="text-xs text-text-muted-custom leading-relaxed">
          We've structured this engagement to be lean and intentionally bounded. Items listed as out-of-scope are not refusals — they're invitations to scope further if and when you're ready. We are conscious of scope creep and design engagements to deliver clarity, not open-ended commitments.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default ScopeSection;
