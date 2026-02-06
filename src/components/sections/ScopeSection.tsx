import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const included = [
  "Advisory guidance across all engagement phases",
  "CRM and infrastructure decisions informed by Discovery",
  "Outbound strategy and execution support",
  "Weekly reporting and dashboards",
  "Market intelligence and system recommendations",
];

const future = [
  "Advanced automation development",
  "CRM expansions and customization",
  "Robo-dialing integration",
  "LinkedIn outbound campaigns",
  "Text and social outreach campaigns",
  "Landing pages, A/B testing, and pipeline campaign optimization",
  "Ongoing technical support arrangements",
];

const ScopeSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">SCOPE</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Designed to Be Focused
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12 max-w-2xl">
        We structure engagements to deliver clarity within clear boundaries. Anything listed below can be explored as a future conversation.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10">
        {/* Current Focus */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[15px] font-semibold mb-4 text-text-primary">This Engagement Includes</h3>
          <ul className="space-y-3">
            {included.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent/40 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Future */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[15px] font-semibold mb-4 text-text-primary">Available in Future Conversations</h3>
          <ul className="space-y-3">
            {future.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-soft-azure/40 shrink-0" />
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
      <motion.div variants={fadeUp} className="module-card-highlight mb-8">
        <span className="tag-accent mb-3">ADVISORY CONTINUITY PACKAGE</span>
        <h3 className="text-lg font-semibold mt-2 mb-3 text-text-primary">Automation Handover</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-3">
          During a multi-month engagement, we build a lead processing workflow and hand it over with documentation and a usage guide at the end of the advisory period. The system becomes yours.
        </p>
        <p className="text-[13px] text-text-muted-custom">
          Future adjustments or technical support would be a separate conversation.
        </p>
      </motion.div>

      {/* Scope closing note */}
      <motion.p
        variants={fadeUp}
        className="text-[13px] text-text-muted-custom italic text-center max-w-[560px] mx-auto"
      >
        We've structured this engagement to be lean and focused. Items listed above can be scoped into future phases — reach out for details so we can tailor the next engagement to your needs.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default ScopeSection;
