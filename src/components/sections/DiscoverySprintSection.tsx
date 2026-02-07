import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const sprintCards = [
  {
    num: "1",
    title: "Technical & Product Deep Dive",
    items: [
      "Roadmap history and forward roadmap review",
      "POC feedback synthesis and pattern identification",
      "Use case mapping and low-hanging fruit assessment",
    ],
  },
  {
    num: "2",
    title: "Partner & Market Reality Check",
    items: [
      "One partner or customer-facing conversation",
      "Current partnership intent and engagement dynamics",
      "GTM signal validation against market reality",
    ],
  },
  {
    num: "3",
    title: "GTM & CRM Alignment Session",
    items: [
      "Lead reality assessment — what exists and what doesn't",
      "CRM strategy: warehouse existing data vs. activate immediately",
      "Data flow design and BDR readiness considerations",
    ],
  },
];

const infoItems = [
  { title: "3 Meetings Minimum", sub: "Technical, partner, and alignment sessions", accent: false },
  { title: "2 Senior Advisors", sub: "Present at a minimum of two sessions", accent: false },
  { title: "$1,800", sub: "Full credit toward Month 1 if engagement proceeds", accent: true },
];

const deliverables = [
  {
    title: "Current Stage Assessment",
    desc: "A comprehensive document used to tailor Month 1 and beyond — including potential automations to be built.",
  },
  {
    title: "Tailored Month 1 Definition",
    desc: "What should happen in Month 1, what should wait, and what should not be done yet — based on reality, not assumptions.",
  },
  {
    title: "3-Month Trajectory",
    desc: "A high-level directional plan for the advisory engagement — preliminary and non-contractual until the client proceeds.",
  },
];

const DiscoverySprintSection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">ALIGNMENT</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Pre-Execution Alignment Sprint
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12 max-w-[620px] leading-relaxed">
        Before committing advisory resources, we conduct a focused sprint to ensure the engagement is tailored precisely to where Anori is today.
      </motion.p>

      {/* Sprint cards */}
      <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-8">
        {sprintCards.map((card) => (
          <motion.div key={card.num} variants={fadeUp} className="module-card relative pt-5">
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(224 65% 51%), hsl(224 80% 67%))",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {card.num}
              </div>
              <div>
                <span className="tag-accent mb-2">ALIGNMENT</span>
                <h3 className="text-[15px] font-semibold text-text-primary mt-1">{card.title}</h3>
              </div>
            </div>
            <ul className="space-y-2 ml-11">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Info bar */}
      <motion.div variants={fadeUp} className="rounded-lg bg-card border border-border px-5 py-4 mb-8">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-border text-center">
          {infoItems.map((item) => (
            <div key={item.title} className="px-4">
              <p className={`text-sm font-semibold mb-0.5 ${item.accent ? "text-accent" : "text-text-primary"}`}>
                {item.title}
              </p>
              <p className="text-xs text-text-muted-custom">{item.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Deliverables */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-8">
        <span className="tag-accent mb-3">DISCOVERY DELIVERABLES</span>
        <h3 className="text-lg font-semibold mt-2 mb-5 text-text-primary">
          What You Receive — Regardless of Whether the Engagement Continues
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {deliverables.map((d) => (
            <div key={d.title}>
              <h4 className="text-sm font-semibold text-text-primary mb-1">{d.title}</h4>
              <p className="text-[13px] text-text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="text-[13px] text-text-muted-custom italic text-center max-w-[580px] mx-auto"
      >
        If the engagement does not proceed, these deliverables are yours to keep. If it does, the Discovery fee credits toward Month 1 and the summary deepens into an execution plan.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default DiscoverySprintSection;
