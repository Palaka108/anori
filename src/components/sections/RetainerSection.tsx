import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const monthlyCards = [
  { title: "Strategy & Planning", desc: "Market positioning, pipeline reviews, and advisory sessions — tailored to Discovery findings." },
  { title: "Outbound Execution", desc: "Customer-facing calls, emails, LinkedIn engagement — targeting accounts surfaced in the Alignment Sprint." },
  { title: "Hands-On Support", desc: "CRM decisions, system walkthroughs, team enablement — scoped to what actually needs to happen." },
];

const opsLeft = [
  "Strategic planning and research",
  "CRM configuration and pipeline ops",
  "Advanced lead and market analysis",
];

const opsRight = [
  "Weekly reporting and dashboards",
  "Email templates and outreach prep",
  "System and automation scoping",
];

const RetainerSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">ADVISORY MODEL</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        How the Advisory Operates
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12 max-w-2xl leading-relaxed">
        Clear ownership. Selective senior coverage. Outcome-driven execution.
      </motion.p>

      {/* Block 1 — Single Point of Ownership */}
      <motion.div variants={fadeUp} className="module-card mb-6">
        <span className="tag-accent mb-3">CORE</span>
        <h3 className="text-base font-semibold text-text-primary mt-2 mb-2">Single Point of Ownership</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          One accountable advisor manages your engagement end-to-end. Decisions surface to the CEO — never buried in committee.
        </p>
      </motion.div>

      {/* Block 2 — What You Get Each Month */}
      <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-4">
        {monthlyCards.map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="module-card">
            <div className="flex items-start gap-2.5 mb-2">
              <span className="mt-1 w-2.5 h-2.5 rounded-sm bg-accent shrink-0" />
              <h4 className="text-sm font-semibold text-text-primary">{item.title}</h4>
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed ml-5">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p variants={fadeUp} className="text-[13px] text-text-muted-custom italic text-center mb-8">
        We surface options and recommendations. Final priorities are decided with the CEO.
      </motion.p>

      {/* Block 3 — Selective Senior Coverage — glass panel */}
      <motion.div
        variants={fadeUp}
        className="rounded-lg px-5 py-5 mb-6 border"
        style={{
          background: "hsl(220 18% 12% / 0.6)",
          backdropFilter: "blur(12px)",
          borderColor: "hsl(200 90% 50% / 0.1)",
        }}
      >
        <h3 className="text-[15px] font-semibold text-text-primary mb-2">Selective Senior Coverage</h3>
        <p className="text-[13px] text-text-secondary leading-relaxed">
          Two senior advisors with joint development and Fortune 50 partnership experience. Both attend key sessions — not every session. Coverage is intentional, not performative. Architecture and enterprise expertise applied where they move the needle.
        </p>
      </motion.div>

      {/* Block 4 — Ongoing Operations */}
      <motion.div variants={fadeUp} className="mb-0">
        <h3 className="text-[15px] font-semibold text-text-primary mb-1">Beyond Direct Engagement</h3>
        <p className="text-xs text-text-muted-custom mb-4">Continuous work that happens outside scheduled sessions.</p>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {[...opsLeft, ...opsRight].map((item, i) => (
            <div key={item} className={`flex items-start gap-2.5 ${i < 3 ? "sm:col-start-1" : "sm:col-start-2"}`}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-accent shrink-0" />
              <span className="text-sm text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default RetainerSection;
