import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const faqs = [
  {
    q: "What if my product isn't ready?",
    a: "That's fine — most of our founders are pre-revenue or early-revenue. The Alignment Sprint is designed to meet you where you are, not where you wish you were. If we find the timing isn't right, you'll still walk away with a clear assessment.",
  },
  {
    q: "What if I don't have many leads?",
    a: "You don't need a big list. We work with what exists — even if it's scattered across inboxes and spreadsheets. Part of Month 1 is organizing what you have and identifying realistic targets.",
  },
  {
    q: "Can you help with investors?",
    a: "We don't own fundraising or investor relations — that's outside this engagement. But a working CRM, clean pipeline, and market intelligence report are exactly the traction signals investors want to see.",
  },
  {
    q: "What happens after 3 months?",
    a: "After Month 3, you have frameworks, a trained CRM, partnership tools, and a 30/60/90 plan. You can run independently, hire your first sales rep, or continue with additional advisory — it's your call.",
  },
];

const FAQSection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[800px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">FAQ</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-10 text-text-primary">
        Common Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <motion.div key={faq.q} variants={fadeUp} className="module-card">
            <h3 className="text-[15px] font-semibold text-text-primary mb-2">{faq.q}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default FAQSection;
