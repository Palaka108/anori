import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";
import PhaseCircle from "../PhaseCircle";

const steps = [
  {
    num: "01",
    title: "Align on reality",
    desc: "We start with a paid sprint to understand your product, leads, and GTM truth — before building anything.",
  },
  {
    num: "02",
    title: "Build foundations",
    desc: "Set up a right-sized CRM, organize existing leads, and create a follow-up rhythm your team can actually use.",
  },
  {
    num: "03",
    title: "Test and learn",
    desc: "Run focused outbound tests, capture what works, and build frameworks you keep — whether we continue or not.",
  },
];

const notIncluded = [
  "Full product strategy or roadmap ownership",
  "Fundraising or investor relations",
  "Full-time sales leadership or SDR management",
];

const HowAnoriHelpsSection = () => (
  <AnimatedSection>
    <div className="w-full max-w-[1000px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">HOW IT WORKS</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-4 text-text-primary">
        A Phased Approach — No Generic Playbooks
      </motion.h2>
      <motion.p variants={fadeUp} className="text-base sm:text-[17px] text-text-secondary mb-12 max-w-xl leading-relaxed">
        Anori is a revenue systems advisory built for founders who need clarity, not complexity. We design right-sized systems — then teach you to run them.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14">
        {steps.map((s) => (
          <motion.div key={s.num} variants={fadeUp} className="module-card text-center pt-10 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <PhaseCircle num={s.num} size={40} />
            </div>
            <h3 className="text-base font-semibold text-text-primary mb-2">{s.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Role boundaries */}
      <motion.div variants={fadeUp} className="module-card max-w-2xl mx-auto">
        <h3 className="text-[15px] font-semibold text-text-primary mb-3">What Anori is not:</h3>
        <ul className="space-y-2.5">
          {notIncluded.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted-custom shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-text-muted-custom mt-3 italic">
          These may be separate future engagements — happy to discuss.
        </p>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default HowAnoriHelpsSection;
