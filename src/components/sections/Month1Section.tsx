import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const cards = [
  {
    title: "CRM Setup & Lead Organization",
    items: [
      "Ingest existing leads from emails, spreadsheets, and current systems (up to 5 users)",
      "Organize and clean existing leads from content and inbound channels",
      "Add pertinent notes on accounts before loading",
      "Landing page capability if desired (Gosai-hosted, independent of client web systems)",
    ],
  },
  {
    title: "Structured Follow-Up System",
    items: [
      "Existing leads tied to calendar invites for next personnel to execute on",
      "Next step assigned per lead: demo, call, email, or other action",
      "Follow-ups routed to team via structured cadence",
      "Email templates provided for follow-up and outreach",
    ],
  },
  {
    title: "Discovery & ICP Documentation",
    items: [
      "Begin documenting ICP hypotheses across Building Departments, AEC, and adjacent verticals",
      "80/20 target partner list — highest-potential opportunities",
      "Partner and customer community map from initial learnings",
    ],
    note: "This is a documentation and hypothesis phase — not a finalized ICP or GTM strategy.",
  },
  {
    title: "Training & Scope",
    items: [
      "Basic CRM training guide — best practices for primary user",
      "Not designed as full sales team onboarding (can be repurposed later)",
      "3 CRM revisions per month past initial scope included",
      "Additional revisions available as scoped add-ons",
    ],
  },
];

const reportCols = [
  { title: "Market Observations", desc: "What we're seeing across verticals" },
  { title: "Channel Analysis", desc: "Outbound channel efficiency findings" },
  { title: "Month 2 Recommendations", desc: "Suggested systems and approaches" },
  { title: "Cost Estimates", desc: "Build-out pricing for recommended automations" },
];

const Month1Section = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">MONTH 1</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Foundation & Discovery</h2>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-glass p-6"
          >
            <h3 className="text-base font-semibold mb-4 text-foreground">{c.title}</h3>
            <ul className="space-y-2.5">
              {c.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-dim">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            {c.note && (
              <p className="mt-4 text-xs italic text-text-muted-custom">{c.note}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Deliverable */}
      <div className="card-glass-static border-gold/20 p-6">
        <span className="tag-gold mb-4">MONTH 1 DELIVERABLE</span>
        <h3 className="text-xl font-semibold mt-3 mb-6 text-foreground">Market Intelligence Report</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportCols.map((r) => (
            <div key={r.title}>
              <p className="text-sm font-medium text-foreground mb-1">{r.title}</p>
              <p className="text-xs text-text-dim">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs italic text-text-muted-custom">
          This report is yours regardless of whether you continue. It serves as a foundation for your next steps — with or without Gosai.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
