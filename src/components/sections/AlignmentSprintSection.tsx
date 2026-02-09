import { motion } from "framer-motion";
import { Search, MessageCircle, Users, BarChart, TrendingUp, CheckCircle, Database, Clock, FileText, ClipboardList, Map } from "lucide-react";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import ExpandableCard from "../ExpandableCard";

const scopeItems = [
  { Icon: Search, text: "Product and roadmap alignment" },
  { Icon: MessageCircle, text: "Existing proof‑of‑concept and feedback review" },
  { Icon: Users, text: "One partner or customer‑facing conversation (where available)" },
  { Icon: BarChart, text: "Lead and CRM reality assessment" },
  { Icon: TrendingUp, text: "Go‑to‑market signal check (early interest and channels)" },
  { Icon: CheckCircle, text: "Initial execution priority definition" },
];

const deliverables = [
  { Icon: FileText, text: "Current Stage Assessment" },
  { Icon: ClipboardList, text: "Month 1 Commercial Plan" },
  { Icon: Map, text: "Preliminary 3‑Month View" },
];

const AlignmentSprintSection = () => (
  <AnimatedSection id="commercial-foundations" alt>
    <div className="content-container">
      <motion.p variants={labelSlide} className="section-label mb-3">COMMERCIAL FOUNDATIONS</motion.p>
      <motion.h2 variants={fadeUp} className="text-[22px] sm:text-[28px] md:text-[32px] font-bold mb-3 text-text-primary">
        Commercial Foundations Phase
      </motion.h2>
      <motion.p variants={fadeUp} className="text-[13px] text-accent/70 mb-4">Baseline & CRM Foundations — Required Once</motion.p>

      <motion.div variants={fadeUp} className="module-card mb-4">
        <p className="text-[14px] text-text-secondary leading-relaxed mb-2">
          Execution‑focused advisory work to establish a defensible commercial baseline and begin CRM implementation.
        </p>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Clarifies what should be executed now, what should wait, and what should not proceed.
        </p>
      </motion.div>

      {/* Scope — expandable */}
      <motion.div variants={fadeUp} className="mb-4">
        <ExpandableCard title="Scope of Work" subtitle="6 advisory focus areas" defaultOpen>
          <div className="card-grid-2">
            {scopeItems.map((item) => (
              <div key={item.text} className="scope-box-static">
                <item.Icon className="scope-icon w-[18px] h-[18px]" strokeWidth={1.5} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </ExpandableCard>
      </motion.div>

      {/* CRM Setup */}
      <motion.div variants={fadeUp} className="module-card mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-[18px] h-[18px] text-accent" strokeWidth={1.5} />
          <p className="text-[12px] font-semibold uppercase tracking-wider text-accent">CRM Setup Included</p>
        </div>
        <p className="text-[13px] text-text-secondary leading-relaxed">
          HubSpot configuration for one primary user (Adrian). Additional team members (up to four) are added during the first Monthly Advisory Engagement.
        </p>
      </motion.div>

      {/* Time Box */}
      <motion.div variants={fadeUp} className="module-card mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-[18px] h-[18px] text-accent shrink-0" strokeWidth={1.5} />
          <p className="text-[13px] text-text-primary leading-relaxed">
            Up to <span className="font-semibold">6 hours</span> of working sessions, analysis, and documentation.
          </p>
        </div>
      </motion.div>

      {/* Deliverables — expandable */}
      <motion.div variants={fadeUp} className="mb-4">
        <ExpandableCard title="Deliverables" subtitle="Outputs from this phase" defaultOpen>
          <div className="card-grid-3">
            {deliverables.map((d) => (
              <div key={d.text} className="deliverable-tile">
                <d.Icon className="tile-icon w-5 h-5" strokeWidth={1.5} />
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </ExpandableCard>
      </motion.div>

      {/* Investment */}
      <motion.div variants={fadeUp} className="investment-card">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent mb-0.5">Commercial Foundations Phase</p>
            <p className="text-[11px] text-text-muted-custom">Credited toward the first Monthly Advisory Engagement if we proceed</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[22px] sm:text-[28px] font-bold text-text-primary">$1,800</span>
            <span className="text-[11px] sm:text-[12px] text-text-muted-custom ml-1">fixed</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default AlignmentSprintSection;
