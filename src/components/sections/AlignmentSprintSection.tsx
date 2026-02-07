import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const sessions = [
  {
    num: "1",
    title: "Understand Your Product & GTM Reality",
    items: [
      "Roadmap review — where you've been, where you're headed",
      "POC and pilot feedback synthesis",
      "Use case mapping and low-hanging fruit identification",
    ],
  },
  {
    num: "2",
    title: "Review Existing Leads & Sources",
    items: [
      "What exists across inboxes, spreadsheets, old campaigns",
      "Current partnership dynamics and engagement signals",
      "GTM signal validation against market reality",
    ],
  },
  {
    num: "3",
    title: "Customer-Facing Stakeholder Check",
    items: [
      "One conversation with a partner or customer-facing person (if available)",
      "CRM strategy: warehouse existing data vs. activate immediately",
      "Data flow design and team readiness assessment",
    ],
  },
];

const deliverables = [
  {
    title: "Current Stage Assessment",
    desc: "What exists, what doesn't, key risks, and recommended next actions — including potential automations.",
  },
  {
    title: "Tailored Month 1 Plan",
    desc: "What to do first, what to wait on, and what to skip — based on reality, not assumptions.",
  },
  {
    title: "3-Month Trajectory",
    desc: "A directional plan for the full engagement — preliminary and non-contractual until you decide to proceed.",
  },
];

const AlignmentSprintSection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">STEP 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Alignment Sprint
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-4 max-w-xl leading-relaxed">
        Before building anything, we spend focused time understanding where you actually are. This isn't an upsell — it's due diligence.
      </motion.p>
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom mb-12 max-w-xl leading-relaxed">
        The sprint is paid ($1,800). If you continue to Month 1, the fee credits in full. If you don't, you keep everything we produce. No obligation either way.
      </motion.p>

      {/* Session cards */}
      <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-8">
        {sessions.map((s) => (
          <motion.div key={s.num} variants={fadeUp} className="module-card">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 bg-accent text-accent-foreground">
                {s.num}
              </div>
              <h3 className="text-[15px] font-semibold text-text-primary mt-1">{s.title}</h3>
            </div>
            <ul className="space-y-2 ml-11">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-text-secondary leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Info bar */}
      <motion.div
        variants={fadeUp}
        className="rounded-lg px-5 py-4 mb-8 border border-border bg-card"
      >
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-border text-center">
          <div className="px-4">
            <p className="text-sm font-semibold text-text-primary mb-0.5">3 Sessions</p>
            <p className="text-xs text-text-muted-custom">Product, leads, stakeholder</p>
          </div>
          <div className="px-4">
            <p className="text-sm font-semibold text-text-primary mb-0.5">2 Senior Advisors</p>
            <p className="text-xs text-text-muted-custom">Present at key sessions</p>
          </div>
          <div className="px-4">
            <p className="text-sm font-semibold text-accent mb-0.5">$1,800</p>
            <p className="text-xs text-text-muted-custom">Credits toward Month 1</p>
          </div>
        </div>
      </motion.div>

      {/* Deliverables */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-8">
        <span className="tag-accent mb-3">WHAT YOU GET</span>
        <h3 className="text-lg font-semibold mt-2 mb-5 text-text-primary">
          Yours — Regardless of Whether the Engagement Continues
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
        className="text-[13px] text-text-muted-custom italic text-center max-w-lg mx-auto"
      >
        The Discovery fee credits toward Month 1 if the engagement continues. The deliverables are yours either way.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default AlignmentSprintSection;
