import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

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
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">YOUR RETAINER</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        What the Engagement Includes
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12">
        Each month combines dedicated advisory hours with ongoing operational support.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-8">
        {/* Left — 8 hours */}
        <motion.div variants={fadeUp} className="module-card flex flex-col items-center text-center">
          <div
            className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-4"
            style={{
              background: "hsl(224 65% 51% / 0.06)",
              borderColor: "hsl(224 65% 51%)",
            }}
          >
            <span className="text-[44px] font-bold text-accent">8</span>
          </div>
          <span className="text-[15px] font-semibold text-text-primary mb-4">Dedicated Advisory Hours</span>
          <ul className="space-y-2.5 text-sm text-text-secondary text-left">
            {[
              "Strategy sessions, guided outbound, or hands-on support",
              "You set the priorities each month",
              "Unused hours roll within the active engagement",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent/40 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Beyond */}
        <motion.div variants={fadeUp} className="module-card">
          <h3 className="text-[15px] font-semibold mb-5 text-text-primary">Beyond the 8 Hours</h3>
          <div className="grid grid-cols-2 gap-4">
            {supportItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-subtle shrink-0" />
                <span className="text-xs font-medium text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team bar */}
      <motion.div variants={fadeUp} className="rounded-lg bg-surface-subtle px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
        <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted-custom shrink-0">TEAM</span>
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
