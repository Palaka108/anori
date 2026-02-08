import { motion } from "framer-motion";
import { useCallback } from "react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const navItems = [
  { label: "Overview", anchor: "overview" },
  { label: "Initial Phase", anchor: "initial-phase" },
  { label: "Month 1", anchor: "month-1" },
  { label: "3-Month", anchor: "three-month" },
  { label: "Scope", anchor: "scope" },
  { label: "Pricing", anchor: "pricing" },
];

const HeroSection = () => {
  const handleNavClick = useCallback((anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToOverview = useCallback(() => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToInitial = useCallback(() => {
    document.getElementById("initial-phase")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[75vh] overflow-hidden px-4 sm:px-6 py-16 sm:py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, hsl(225 70% 48% / 0.04) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="relative z-10 w-full max-w-[620px] mx-auto text-center"
      >
        <motion.h1
          variants={fade}
          className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.1] text-text-primary mb-3 tracking-tight"
        >
          ANORI
        </motion.h1>

        <motion.p
          variants={fade}
          className="text-[15px] sm:text-[17px] font-medium text-text-secondary mb-3 leading-snug"
        >
          Commercial Advisory Engagement Proposal
        </motion.p>

        <motion.div variants={fade} className="section-divider max-w-[120px] mx-auto mb-5" />

        <motion.p
          variants={fade}
          className="text-[13px] sm:text-[14px] text-text-muted-custom max-w-sm mx-auto mb-6 leading-relaxed px-2"
        >
          Structured advisory support for early-stage building-tech initiatives — designed to earn clarity before scale.
        </motion.p>

        <motion.p variants={fade} className="text-[10px] sm:text-[11px] text-text-muted-custom tracking-widest uppercase mb-8">
          February 2026 · Confidential
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row sm:gap-3 justify-center mb-10 px-2 sm:px-0">
          <button
            onClick={scrollToOverview}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-[14px] font-semibold bg-accent text-accent-foreground transition-all hover:opacity-90 active:scale-[0.97] min-h-[48px]"
          >
            View Engagement Structure
          </button>
          <button
            onClick={scrollToInitial}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-[14px] font-semibold border border-accent text-accent transition-all hover:bg-accent-surface active:scale-[0.97] min-h-[48px]"
          >
            Proceed with Initial Phase
          </button>
        </motion.div>

        {/* Nav pills */}
        <motion.div
          variants={fade}
          className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible sm:mx-0 sm:px-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {navItems.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleNavClick(item.anchor)}
              className="nav-pill shrink-0"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
