import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "../AnimatedSection";

const supportItems = [
  "Strategic Research",
  "CRM Administration",
  "AI-Assisted Analysis",
  "Weekly Reporting",
  "Dashboard Development",
  "Pipeline Management",
];

const RetainerSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1120px] mx-auto px-5">
      <motion.p variants={fadeUp} className="section-label mb-4">YOUR RETAINER</motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
        What the Engagement Includes
      </motion.h2>
      <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-12">
        Each month combines dedicated advisory hours with ongoing operational support.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Left — 8 hours */}
        <motion.div variants={fadeUp} className="module-card flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-accent-surface border-2 border-accent flex items-center justify-center mb-4">
            <span className="text-5xl font-extrabold text-accent font-sans">8</span>
          </div>
          <span className="text-base font-semibold text-text-primary mb-4">Dedicated Advisory Hours</span>
          <ul className="space-y-2 text-sm text-text-secondary text-left">
            {[
              "Strategy sessions, guided outbound, or hands-on support",
              "You set the priorities each month",
              "Unused hours roll within the active engagement",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Beyond */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-base font-semibold mb-5 text-text-primary">Beyond the 8 Hours</h3>
          <div className="grid grid-cols-2 gap-4">
            {supportItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blueprint-light shrink-0" />
                <span className="text-[13px] font-medium text-text-primary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team bar */}
      <motion.div variants={fadeUp} className="rounded-lg bg-surface-subtle px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <span className="font-mono text-xs uppercase tracking-wider text-text-muted-custom shrink-0">TEAM</span>
        <p className="text-sm text-text-secondary leading-relaxed">
          Two senior enterprise sales professionals with Fortune 50 client executive experience.
        </p>
      </motion.div>

      <motion.p variants={fadeUp} className="text-[13px] text-text-muted-custom italic text-center max-w-2xl mx-auto">
        Advisory capacity is structured to ensure focused, high-value engagement. We outline recommended activities each month — you adjust based on outcomes.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default RetainerSection;
