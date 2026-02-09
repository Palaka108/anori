import { motion } from "framer-motion";
import { Box, Download, GitBranch, Users, Calendar, Target, BookOpen, Compass, Settings, PieChart, Activity, Mail, Cpu, Clock, BarChart2 } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import BackToTop from "../BackToTop";
import ExpandableCard from "../ExpandableCard";

const infrastructure = [
  { Icon: Box, text: "CRM platform finalized for the team" },
  { Icon: Download, text: "Intake of initial lead set (volume and sources defined during Foundations Phase)" },
  { Icon: GitBranch, text: "Stage‑appropriate pipeline structure" },
  { Icon: Users, text: "CRM access for all five team members" },
];

const systems = [
  { Icon: Calendar, text: "Follow‑up structure (calendar, queues, templates)" },
  { Icon: Target, text: "Ideal customer and persona mapping across target verticals" },
  { Icon: BookOpen, text: "Short CRM enablement guide (up to three revisions)" },
];

const advisory = [
  { Icon: Compass, text: "Commercial planning and prioritization" },
  { Icon: Settings, text: "CRM and pipeline operations guidance" },
  { Icon: PieChart, text: "Lead and simple market pattern analysis" },
  { Icon: Activity, text: "Weekly pipeline and activity snapshots" },
  { Icon: Mail, text: "Outreach preparation (email and call templates)" },
  { Icon: Cpu, text: "Automation recommendations (advice only, no heavy builds)" },
];

const Month1Section = () => (
  <AnimatedSection id="monthly-advisory">
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">MONTHLY ADVISORY</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Monthly Advisory Engagement
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[13px] text-accent/70 mb-4">Per‑Month Estimate (After Foundations Phase)</motion.p>

      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Establish and operate the core commercial infrastructure, expand CRM to the full team, and learn from early customer and channel patterns.
        </p>
      </motion.div>

      {/* Infrastructure — expandable */}
      <motion.div variants={fadeUp} className="mb-4">
        <ExpandableCard title="Infrastructure" subtitle="CRM setup, pipeline, and lead intake" defaultOpen>
          <div className="space-y-2">
            {infrastructure.map((item) => (
              <div key={item.text} className="scope-box-static">
                <item.Icon className="scope-icon w-[18px] h-[18px]" strokeWidth={1.5} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </ExpandableCard>
      </motion.div>

      {/* Systems — expandable */}
      <motion.div variants={fadeUp} className="mb-4">
        <ExpandableCard title="Systems" subtitle="Templates, ICP mapping, enablement">
          <div className="space-y-2">
            {systems.map((item) => (
              <div key={item.text} className="scope-box-static">
                <item.Icon className="scope-icon w-[18px] h-[18px]" strokeWidth={1.5} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </ExpandableCard>
      </motion.div>

      {/* Advisory — expandable */}
      <motion.div variants={fadeUp} className="mb-6">
        <ExpandableCard title="Advisory Work" subtitle="6 commercial focus areas">
          <div className="card-grid-2">
            {advisory.map((item) => (
              <div key={item.text} className="scope-box-static">
                <item.Icon className="scope-icon w-[18px] h-[18px]" strokeWidth={1.5} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </ExpandableCard>
      </motion.div>

      {/* Time Box */}
      <motion.div variants={fadeUp} className="module-card mb-5">
        <div className="flex items-center gap-2">
          <Clock className="w-[18px] h-[18px] text-accent shrink-0" strokeWidth={1.5} />
          <p className="text-[13px] text-text-primary leading-relaxed">
            Up to <span className="font-semibold">8 hours</span> of founder, customer, and partner‑facing meetings per month.
          </p>
        </div>
      </motion.div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card mb-5">
        <div className="flex items-center gap-2 mb-2">
          <BarChart2 className="w-[18px] h-[18px] text-accent" strokeWidth={1.5} />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Monthly Deliverable</p>
        </div>
        <p className="text-[14px] font-semibold text-text-primary mb-2">Commercial & Market Summary</p>
        <p className="text-[13px] text-text-secondary leading-relaxed">
          Early customer and channel patterns · pipeline insights · system recommendations · approximate cost ranges for proposed improvements.
        </p>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Monthly Advisory Engagement</p>
            <p className="text-[11px] text-text-muted-custom">Final scope and fee confirmed after Commercial Foundations Phase</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">$6,000</span>
            <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">/ month</span>
          </div>
        </div>
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          Future months follow this pattern. Inquire about bulk pricing for extended engagements.
        </p>
      </motion.div>
      <BackToTop />
    </div>
  </AnimatedSection>
);

export default Month1Section;
