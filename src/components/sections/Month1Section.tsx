import { motion } from "framer-motion";
import { Box, Download, GitBranch, Users, Calendar, Target, BookOpen, Compass, Settings, PieChart, Activity, Mail, Cpu, Clock, BarChart2 } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import ExpandableCard from "../ExpandableCard";

const infrastructure = [
  { Icon: Box, text: "CRM platform finalization & full team setup" },
  { Icon: Download, text: "Intake of initial lead set (volume/sources defined in Design Phase)" },
  { Icon: GitBranch, text: "Stage-appropriate pipeline structure" },
  { Icon: Users, text: "CRM access for all 5 team members" },
];

const systems = [
  { Icon: Calendar, text: "Follow-up architecture (calendar + templates)" },
  { Icon: Target, text: "ICP & persona mapping across target verticals" },
  { Icon: BookOpen, text: "CRM enablement guide (up to three revisions)" },
];

const advisory = [
  { Icon: Compass, text: "Strategic planning & prioritization" },
  { Icon: Settings, text: "CRM and pipeline operations" },
  { Icon: PieChart, text: "Lead & market analysis" },
  { Icon: Activity, text: "Weekly dashboards & reporting" },
  { Icon: Mail, text: "Outreach preparation" },
  { Icon: Cpu, text: "Automation scoping (recommendations only)" },
];

const Month1Section = () => (
  <AnimatedSection id="month-1">
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">MONTH 1</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Month 1 — Engagement
      </motion.h2>
      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Establishing core infrastructure and surfacing initial market signals.
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
        <ExpandableCard title="Advisory Work" subtitle="6 strategic focus areas">
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
            Up to <span className="font-semibold">8 hours</span> of customer-, partner-, and Anori-facing meetings.
          </p>
        </div>
      </motion.div>

      {/* Deliverable */}
      <motion.div variants={fadeUp} className="module-card mb-5">
        <div className="flex items-center gap-2 mb-2">
          <BarChart2 className="w-[18px] h-[18px] text-accent" strokeWidth={1.5} />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Month 1 Deliverable</p>
        </div>
        <p className="text-[14px] font-semibold text-text-primary mb-2">Market Intelligence Report</p>
        <p className="text-[13px] text-text-secondary leading-relaxed">
          Market signals · Channel insights · System recommendations · Cost estimates
        </p>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Per-Month Estimate</p>
            <p className="text-[11px] text-text-muted-custom">Final scope confirmed after Design Phase</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">$6,000</span>
            <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">/ month</span>
          </div>
        </div>
        <p className="text-[12px] text-text-muted-custom leading-relaxed">
          Future months follow the same pattern. Inquire about bulk pricing for extended engagements.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Month1Section;
