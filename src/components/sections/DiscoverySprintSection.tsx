import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const sprintCards = [
  {
    num: "1",
    title: "Technical & Product Deep Dive",
    items: [
      "Roadmap history and forward roadmap review",
      "POC review and feedback pattern synthesis",
      "Use case identification and low-hanging fruit assessment",
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
      "Lead reality assessment — what exists, what doesn't",
      "CRM strategy: warehouse existing data vs. activate immediately",
      "Data flow design: lead capture → calendar → follow-up",
      "BDR readiness considerations",
    ],
  },
];

const deliverables = [
  {
    title: "Two-Page Discovery Summary",
    desc: "Current state assessment, gaps, risks, opportunities, and recommended next actions.",
  },
  {
    title: "Tailored Month 1 Definition",
    desc: "What should happen in Month 1, what should wait, and what should not be done yet.",
  },
  {
    title: "Preliminary 3-Month Trajectory",
    desc: "Directional advisory roadmap — serves as a conversation starter for multi-month commitment.",
  },
];

const DiscoverySprintSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">PRE-EXECUTION</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Alignment Sprint
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-4 max-w-[620px] leading-relaxed">
        Before committing advisory resources to execution, we conduct a focused alignment sprint to ensure every hour invested is directed by reality — not assumptions.
      </motion.p>
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom mb-12 max-w-[620px]">
        This is standard practice for senior advisory engagements. It protects both parties and ensures the monthly engagement is tailored precisely to where Anori is today.
      </motion.p>

      {/* Sprint cards */}
      <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-10">
        {sprintCards.map((card) => (
          <motion.div key={card.num} variants={fadeUp} className="module-card relative pt-12">
            <div className="absolute -top-4 left-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, hsl(224 65% 51%), hsl(224 80% 67%))",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {card.num}
              </div>
            </div>
            <span className="tag-accent mb-3">ALIGNMENT</span>
            <h3 className="text-[15px] font-semibold text-text-primary mt-2 mb-3">{card.title}</h3>
            <ul className="space-y-2">
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

      {/* Meeting cadence */}
      <motion.div variants={fadeUp} className="rounded-lg bg-card border border-border px-5 py-4 text-center mb-6">
        <p className="text-sm text-text-secondary leading-relaxed">
          <span className="font-semibold text-text-primary">Minimum three meetings</span> across the sprint — technical team session, partner or customer-facing conversation, and recap alignment session. Two senior advisors attend at least two of the three sessions.
        </p>
      </motion.div>

      {/* Pricing bar */}
      <motion.div
        variants={fadeUp}
        className="rounded-lg px-5 py-4 text-center mb-10"
        style={{
          background: "hsl(224 65% 51% / 0.04)",
          border: "1px solid hsl(224 65% 51% / 0.2)",
        }}
      >
        <p className="text-[15px] font-semibold text-text-primary">
          $1,500 – $2,000 fixed fee
          <span className="text-sm font-normal text-text-secondary ml-2">· Full credit applied toward Month 1</span>
        </p>
      </motion.div>

      {/* Deliverables */}
      <motion.div variants={fadeUp} className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-1">Discovery Deliverables</h3>
        <p className="text-[13px] text-text-muted-custom mb-5">These deliverables are yours regardless of whether the engagement continues.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {deliverables.map((d) => (
            <div key={d.title} className="module-card">
              <h4 className="text-sm font-semibold text-text-primary mb-1">{d.title}</h4>
              <p className="text-[13px] text-text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="text-[13px] text-text-muted-custom italic text-center max-w-[560px] mx-auto"
      >
        If the engagement proceeds, the Discovery fee credits toward Month 1 — making it a no-cost step for the client. If it does not, the client retains all deliverables outright.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default DiscoverySprintSection;
