import { motion } from "framer-motion";
import AnimatedSection, { fadeUp, labelSlide } from "../AnimatedSection";

const AboutSection = () => (
  <AnimatedSection alt>
    <div className="w-full max-w-[800px] mx-auto px-5 md:px-10">
      <motion.p variants={labelSlide} className="section-label mb-4">ABOUT</motion.p>
      <motion.h2 variants={fadeUp} className="text-[26px] sm:text-[32px] md:text-[36px] font-bold mb-6 text-text-primary">
        Why Work With Us
      </motion.h2>

      <motion.div variants={fadeUp} className="module-card mb-6">
        <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
          We've spent years working with early-stage companies in messy, ambiguous environments — the kind where the product is ahead of the go-to-market. That's the space we know best.
        </p>
        <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
          Our focus is building right-sized revenue systems. Not enterprise CRM deployments. Not 50-page strategy decks. Just the minimum viable sales infrastructure that lets you learn what works, tell a traction story, and make your next hire with confidence.
        </p>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          We bring joint development and Fortune 50 partnership experience — applied practically at your stage. Two senior advisors attend key sessions, not every session. Coverage is intentional, not performative.
        </p>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="text-sm text-text-muted-custom text-center italic"
      >
        We'd rather build something you can maintain than something that impresses on a slide.
      </motion.p>
    </div>
  </AnimatedSection>
);

export default AboutSection;
