import AnimatedSection from "../AnimatedSection";

const beyondItems = [
  "Strategic planning and market research",
  "CRM configuration and ongoing administration",
  "AI-assisted lead and market analysis",
  "Weekly status updates and reporting",
  "Dashboard development and maintenance",
  "Pipeline management and hygiene",
];

const RetainerSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">YOUR RETAINER</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">What's Behind the 8 Hours</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Left — 8 hours */}
        <div className="card-glass p-8 flex flex-col items-center text-center">
          <span className="text-7xl font-bold text-blueprint font-mono">8</span>
          <span className="text-lg font-semibold mt-2 text-foreground">Dedicated Advisory Hours</span>
          <p className="text-sm text-text-dim mt-4 leading-relaxed">
            Internal strategy, guided outbound, or hands-on execution. You direct. Hours roll between months within the active engagement.
          </p>
        </div>

        {/* Right — Beyond */}
        <div className="card-glass p-8">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Beyond the 8 Hours</h3>
          <ul className="space-y-3">
            {beyondItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-dim">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Team bar */}
      <div className="card-glass-static p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <span className="tag-blue shrink-0">TEAM</span>
        <p className="text-sm text-text-dim leading-relaxed">
          Two senior enterprise sales professionals with Fortune 50 client executive experience. Advisory capacity, hands-on execution support, and systems expertise.
        </p>
      </div>

      <p className="text-xs text-text-muted-custom leading-relaxed max-w-4xl">
        After our initial assessment, we outline recommended activities for each month. You adjust priorities based on outcomes. Advisory capacity is structured — not open-ended — to ensure focused, high-impact engagement.
      </p>
    </div>
  </AnimatedSection>
);

export default RetainerSection;
