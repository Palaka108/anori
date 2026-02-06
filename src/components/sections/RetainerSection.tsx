import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const hourItems = [
  { title: "Strategy Sessions", desc: "Internal planning, market positioning, pipeline reviews" },
  { title: "Outbound Execution", desc: "Customer-facing calls, emails, LinkedIn engagement" },
  { title: "Hands-On Support", desc: "CRM setup, system walkthroughs, team enablement" },
];

const behindScenes = [
  "Strategic planning and market research",
  "CRM configuration and pipeline management",
  "AI-assisted lead and market analysis",
  "Weekly reporting and dashboard development",
  "Email template creation and outreach prep",
  "System recommendations and automation scoping",
];

const RetainerSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">YOUR RETAINER</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        More Than Hours — A Full Advisory Operation
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12 max-w-2xl leading-relaxed">
        The retainer isn't 8 hours of labor. It's a senior advisory team running your go-to-market operation behind the scenes — with 8 hours of your direct, dedicated time each month.
      </motion.p>

      {/* Block 1 — The Team */}
      <motion.div variants={fadeUp} className="module-card-highlight mb-6">
        <span className="tag-accent mb-3">YOUR TEAM</span>
        <h3 className="text-lg font-semibold mt-2 mb-1 text-text-primary">Two Senior Enterprise Professionals</h3>
        <p className="text-[15px] text-text-secondary mb-4">with Fortune 50 client executive experience</p>
        <p className="text-sm text-text-secondary leading-relaxed mb-3">
          Your engagement is backed by two professionals who've led enterprise sales and client strategy at the Fortune 50 level. They bring the pattern recognition, frameworks, and deal instincts that come from years of high-stakes advisory work.
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">
          This isn't outsourced task work — it's senior judgment applied to your specific market position, partnerships, and growth trajectory.
        </p>
      </motion.div>

      {/* Block 2 — How the 8 Hours Work */}
      <motion.div variants={fadeUp} className="module-card mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-1">8 Hours of Direct Engagement Each Month</h3>
        <p className="text-sm text-text-muted-custom mb-6">You decide how they're spent.</p>

        <div className="grid sm:grid-cols-3 gap-5 mb-5">
          {hourItems.map((item) => (
            <div key={item.title}>
              <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
              <p className="text-[13px] text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-text-muted-custom italic">
          Unused hours roll within the active engagement period.
        </p>
      </motion.div>

      {/* Block 3 — Behind the Scenes */}
      <motion.div variants={fadeUp} className="module-card mb-8">
        <h3 className="text-base font-semibold text-text-primary mb-1">Ongoing Operations — Beyond Your 8 Hours</h3>
        <p className="text-[13px] text-text-muted-custom mb-5">This work happens continuously, not just during scheduled sessions.</p>

        <div className="grid sm:grid-cols-2 gap-3">
          {behindScenes.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-accent shrink-0" />
              <span className="text-sm text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Closing */}
      <motion.p variants={fadeUp} className="text-sm text-text-muted-custom italic text-center max-w-[560px] mx-auto">
        We outline recommended activities each month based on what we're seeing in your pipeline. You adjust the plan based on outcomes and priorities.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default RetainerSection;
