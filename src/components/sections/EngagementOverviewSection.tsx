import { motion } from "framer-motion";
import { Compass, Layers, TrendingUp } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const cards = [
  {
    icon: Compass,
    title: "Alignment & Scoping Phase",
    desc: "Establish factual baseline and execution priorities.",
  },
  {
    icon: Layers,
    title: "Month 1 — Foundation",
    desc: "Build core systems and surface early market signals.",
  },
  {
    icon: TrendingUp,
    title: "3-Month Advisory Package",
    desc: "Activate, refine, and convert learning into frameworks.",
  },
];

const EngagementOverviewSection = () => (
  <AnimatedSection alt id="engagement-overview">
    <div className="w-full max-w-[1000px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        Engagement Overview
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[15px] text-text-secondary mb-12 max-w-xl leading-relaxed">
        This engagement is structured to ensure advisory effort is guided by reality — not assumptions.
        Execution options are unlocked only after initial alignment and scoping.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <motion.div key={c.title} variants={fadeUp} className="module-card text-center py-8 px-5">
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <c.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-[15px] font-semibold text-text-primary mb-2">{c.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EngagementOverviewSection;
