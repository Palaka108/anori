import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "../AnimatedSection";

const included = [
  "Advisory guidance across all three phases",
  "CRM setup and administration",
  "Outbound strategy and initial execution",
  "Weekly reporting and dashboards",
  "Market intelligence and system recommendations",
];

const future = [
  "Advanced automation development",
  "CRM expansions and customization",
  "Text and social outreach campaigns",
  "Landing page design and development",
  "Ongoing technical support arrangements",
];

const ScopeSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1120px] mx-auto px-5">
      <motion.p variants={fadeUp} className="section-label mb-4">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
        Designed to Be Focused
      </motion.h2>
      <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-12 max-w-2xl">
        We structure engagements to deliver clarity within clear boundaries. Anything listed below can be explored as a future conversation.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Current Focus */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-base font-semibold mb-4 text-text-primary">Current Engagement Focus</h3>
          <ul className="space-y-3">
            {included.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Future */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-base font-semibold mb-4 text-text-primary">Available in Future Conversations</h3>
          <ul className="space-y-3">
            {future.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blueprint shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13px] italic text-text-muted-custom">
            We're happy to outline what any of these would look like.
          </p>
        </motion.div>
      </div>

      {/* Automation Handover */}
      <motion.div variants={fadeUp} className="module-card-highlight">
        <span className="tag-accent mb-3">3-MONTH ENGAGEMENT</span>
        <h3 className="text-lg font-semibold mt-2 mb-3 text-text-primary">Automation Handover</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-3">
          During a 3-month engagement, we build a lead processing workflow and hand it over with documentation and a usage guide at the end of the advisory period.
        </p>
        <p className="text-[13px] text-text-muted-custom">
          The system becomes yours. Future adjustments or technical support would be a separate conversation.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ScopeSection;
