import { motion } from "framer-motion";
import { Layers, Database, CalendarRange } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import BackToTop from "../BackToTop";

const cards = [
  {
    label: "PHASE 1",
    Icon: Layers,
    title: "Joint Development Blueprint",
    subtitle: "Required Once",
    desc: "A one‑time working phase to establish a factual commercial baseline, configure CRM for the founder, and define a focused first‑month plan.",
  },
  {
    label: "ONGOING",
    Icon: Database,
    title: "Monthly Advisory Engagement",
    subtitle: "Per‑Month Estimate",
    desc: "Ongoing advisory support to expand CRM to the full team, operate the system, and learn from early customer and channel patterns.",
  },
  {
    label: "ON REQUEST",
    Icon: CalendarRange,
    title: "Future Months",
    subtitle: "Available on Request",
    desc: "Additional months follow the same structure. Inquire about bulk pricing for multi‑month engagements.",
  },
];

const EngagementOverviewSection = () => (
  <AnimatedSection id="overview">
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">OVERVIEW</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-6 text-text-primary">
        Engagement Overview
      </motion.h2>

      <div className="space-y-3">
        {cards.map((card) => (
          <motion.div key={card.title} variants={fadeUp} className="glow-card">
            <div className="flex items-center gap-3 mb-3">
              <card.Icon className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
              <span className="tag-accent">{card.label}</span>
            </div>
            <h3 className="text-[15px] font-semibold text-text-primary mb-0.5">{card.title}</h3>
            <p className="text-[13px] text-accent/70 mb-2">{card.subtitle}</p>
            <p className="text-[13px] text-text-secondary leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="module-card mt-4 text-center">
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          The Joint Development Blueprint is required once before any ongoing monthly engagement. It is included in the first month and not repeated thereafter.
        </p>
      </motion.div>
      <BackToTop />
    </div>
  </AnimatedSection>
);

export default EngagementOverviewSection;
