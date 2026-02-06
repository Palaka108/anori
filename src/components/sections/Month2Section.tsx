import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const dashboardRows = [
  { label: "Leads moved this week", status: "TRACKING" },
  { label: "Leads planned next week", status: "TRACKING" },
  { label: "Active targets", status: "TRACKING" },
  { label: "Persona analysis", status: "TRACKING" },
];

const Month2Section = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">MONTH 2</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Activation & Guided Outbound</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="card-glass p-6">
          <h3 className="text-base font-semibold mb-4 text-foreground">Guided Outbound Execution</h3>
          <ul className="space-y-2.5 text-sm text-text-dim">
            {["Email generation and sequences to identified targets", "Outbound calls to top 5 target accounts (identified in Month 1)", "LinkedIn follow-ups as appropriate", "Additional outbound methods identified through AI scan", "Economy-of-scale approach via email and digital media"].map((t) => (
              <li key={t} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />{t}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.4 }} className="card-glass p-6">
          <h3 className="text-base font-semibold mb-4 text-foreground">Systems & Automation Advisory</h3>
          <ul className="space-y-2.5 text-sm text-text-dim">
            {["AI automation scans for most efficient outbound methods", "Detailed cost estimates per recommended automation", "Advisory hours allocated to walk through recommended systems", "Smart recommendations paired with initial execution"].map((t) => (
              <li key={t} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />{t}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-text-muted-custom">
            Not all automations are built in Month 2. This month pairs targeted recommendations with focused execution. We outline costs so you make informed investment decisions.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4 }} className="card-glass p-6">
          <h3 className="text-base font-semibold mb-4 text-foreground">Weekly Pipeline Dashboard</h3>
          <div className="space-y-2 mt-2">
            {dashboardRows.map((r) => (
              <div key={r.label} className="flex justify-between items-center py-2 border-b border-foreground/5 last:border-0">
                <span className="text-sm text-text-dim">{r.label}</span>
                <span className="tag-blue text-[9px]">{r.status}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-muted-custom">Title-level persona analysis within target companies.</p>
        </motion.div>
      </div>

      <div className="accent-border-left card-glass-static p-6">
        <p className="text-sm text-text-dim leading-relaxed">
          <span className="text-accent font-semibold">Philosophy: </span>
          We advise and execute within the scope of this engagement. Outcomes depend on market response, product readiness, and client follow-through. Month 2 adapts to what we actually learned in Month 1 — not what we assumed before starting.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default Month2Section;
