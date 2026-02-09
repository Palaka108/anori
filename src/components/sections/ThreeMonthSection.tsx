import { motion } from "framer-motion";
import { Zap, Filter } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const ThreeMonthSection = () => (
  <AnimatedSection id="future-months" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">OPTIONAL</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Optional Future Months
      </motion.h2>
      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Additional months are available after the first Monthly Advisory Engagement. Scope and pricing are tailored to what we learn together. Inquire about bulk pricing for multi‑month commitments.
        </p>
      </motion.div>

      <div className="space-y-3">
        <motion.div variants={fadeUp} className="glow-card">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
            <span className="tag-accent">EXAMPLE</span>
          </div>
          <h3 className="text-[15px] font-semibold text-text-primary mb-1">Month 2 — Targeted Activation</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed">
            Focused outbound tests, pipeline refinement, and tooling recommendations based on patterns from the first month.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="glow-card">
          <div className="flex items-center gap-3 mb-3">
            <Filter className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
            <span className="tag-accent">EXAMPLE</span>
          </div>
          <h3 className="text-[15px] font-semibold text-text-primary mb-1">Month 3 — Refinement & Frameworks</h3>
          <p className="text-[13px] text-text-secondary leading-relaxed">
            Pipeline hygiene, simple repeatable playbooks, and hiring readiness guidance for your first sales or partnerships hire.
          </p>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="module-card mt-5 text-center">
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          These are illustrative only. Specific scope is agreed once we complete the Commercial Foundations Phase and first month.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ThreeMonthSection;
