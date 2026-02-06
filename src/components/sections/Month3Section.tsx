import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const exclusiveCards = [
  { title: "MEDDIC Deal Analysis", items: ["MEDDIC analysis of opportunities surfaced during the engagement", "Framework for how future reps could approach the market", "Advisory document — not a guaranteed sales playbook"] },
  { title: "Dashboard Standards", items: ["Standard vs. customized dashboard recommendations per user persona", "Reporting framework for ongoing use"] },
  { title: "Sales Hiring Readiness", items: ["Considerations for next BD hire — what to look for, when to hire", "Comp structure observations from market research", "Readiness criteria — not a guaranteed hiring plan"] },
  { title: "Partnership Analysis Scoreboard", items: ["Industry matrix — where initial signals suggest opportunity", "Lean team approach vs. larger investment considerations", "Full version in 3-month package; lightweight version in month-to-month"] },
];

const Month3Section = () => (
  <AnimatedSection>
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <p className="section-label mb-4">MONTH 3</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Refinement & Advisory Frameworks</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-glass p-6">
          <span className="tag-blue mb-3">CORE</span>
          <h3 className="text-base font-semibold mb-4 mt-2 text-foreground">Core Activities</h3>
          <ul className="space-y-2.5 text-sm text-text-dim">
            {["Pipeline hygiene and refinement", "Partnership strategy adjusted from real M1-M2 engagement data", "Strategic recommendations and noted adjustments", "Progress report with 30/60/90 recommendations"].map((t) => (
              <li key={t} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />{t}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-text-muted-custom">If deeper analysis or expanded scope is needed, we can outline what that engagement would look like.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-glass p-6 border-gold/20">
          <span className="tag-gold mb-3">3-MONTH EXCLUSIVE</span>
          <h3 className="text-base font-semibold mb-4 mt-2 text-foreground">3-Month Package Overview</h3>
          <p className="text-sm text-text-dim leading-relaxed">
            These advisory frameworks are only available in the 3-month package. They are built from real engagement data — not templates.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {exclusiveCards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card-glass p-6"
          >
            <span className="tag-gold mb-3">3-MONTH EXCLUSIVE</span>
            <h3 className="text-base font-semibold mb-4 mt-2 text-foreground">{c.title}</h3>
            <ul className="space-y-2.5 text-sm text-text-dim">
              {c.items.map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Month3Section;
