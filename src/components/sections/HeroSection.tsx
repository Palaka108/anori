import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const HeroSection = () => (
  <section className="relative flex items-center justify-center py-24 md:py-36 section-surface overflow-hidden">
    {/* Subtle radial glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, hsl(215 70% 50% / 0.04), transparent 70%)" }}
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative z-10 w-full max-w-3xl mx-auto px-5 text-center"
    >
      {/* Eyebrow */}
      <motion.p variants={fade} className="text-sm font-medium text-accent tracking-wide mb-4">
        Revenue Systems Advisory for Early-Stage Founders
      </motion.p>

      {/* Main headline */}
      <motion.h1
        variants={fade}
        className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-tight text-text-primary mb-6"
      >
        Your product is strong.
        <br />
        <span className="text-accent">Your revenue system isn't built yet.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fade}
        className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed"
      >
        We help early-stage founders in AEC and building-tech go from scattered leads and fuzzy GTM to a working CRM, clear pipeline, and a 90-day plan that earns investor confidence.
      </motion.p>

      {/* Pain points */}
      <motion.div variants={fade} className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
        {["Leads buried in spreadsheets", "No repeatable follow-up", "Can't tell a traction story"].map((p) => (
          <span
            key={p}
            className="text-[13px] text-text-secondary bg-surface-subtle border border-border rounded-full px-4 py-2"
          >
            {p}
          </span>
        ))}
      </motion.div>

      {/* Engagement flow */}
      <motion.p variants={fade} className="text-sm text-text-muted-custom mb-10">
        Alignment Sprint → CRM + Lead Foundation → Guided Outbound → Frameworks You Keep
      </motion.p>

      {/* Footer badges */}
      <motion.div variants={fade} className="flex flex-col items-center gap-4">
        <span className="text-[11px] uppercase tracking-[0.08em] text-text-muted-custom border border-border rounded px-4 py-1.5 inline-block font-medium">
          GOSAI · gosai.io
        </span>
        <p className="text-xs text-text-muted-custom">Confidential · February 2026</p>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
