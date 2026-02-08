import { motion } from "framer-motion";
import { Zap, Send, Building, Phone, Eye, Wrench, Filter, Calendar, Link, Layout, Briefcase, Clock } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import ExpandableCard from "../ExpandableCard";

const month2 = [
  { Icon: Zap, text: "Guided outbound execution" },
  { Icon: Send, text: "1–2 sequences" },
  { Icon: Building, text: "Up to 5 target accounts" },
  { Icon: Phone, text: "Limited, stage-appropriate touches" },
  { Icon: Eye, text: "Weekly pipeline visibility" },
  { Icon: Wrench, text: "Tooling & automation recommendations" },
];

const month3 = [
  { Icon: Filter, text: "Pipeline refinement & hygiene" },
  { Icon: Calendar, text: "30 / 60 / 90 advisory framework" },
  { Icon: Link, text: "CRM-integrated partnership framework" },
  { Icon: Layout, text: "Dashboard alignment guidance" },
  { Icon: Briefcase, text: "Hiring readiness considerations" },
];

const ThreeMonthSection = () => (
  <AnimatedSection id="future-months" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">OPTIONAL</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Month 2 & Month 3 Advisory
      </motion.h2>
      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Available upon request. Pricing and scope tailored after Month 1 completion. Inquire about bulk pricing for multi-month commitments.
        </p>
      </motion.div>

      <div className="space-y-4">
        {/* Month 2 — expandable */}
        <motion.div variants={fadeUp}>
          <ExpandableCard title="Month 2 — Activation" subtitle="Outbound execution, pipeline, tooling">
            <div className="space-y-2 mb-4">
              {month2.map((item) => (
                <div key={item.text} className="scope-box">
                  <item.Icon className="scope-icon w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="time-box">
              <Clock className="time-icon w-[18px] h-[18px]" strokeWidth={1.5} />
              <p className="text-[13px] text-text-primary leading-relaxed">
                Up to <span className="font-semibold">8 hours</span> of structured meetings and working sessions.
              </p>
            </div>
          </ExpandableCard>
        </motion.div>

        {/* Month 3 — expandable */}
        <motion.div variants={fadeUp}>
          <ExpandableCard title="Month 3 — Refinement" subtitle="Pipeline hygiene, frameworks, hiring readiness">
            <div className="space-y-2">
              {month3.map((item) => (
                <div key={item.text} className="scope-box">
                  <item.Icon className="scope-icon w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </ExpandableCard>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="module-card mt-5 text-center">
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          Contact for pricing and availability.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ThreeMonthSection;
