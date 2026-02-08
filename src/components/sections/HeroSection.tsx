import { motion } from "framer-motion";
import { useCallback } from "react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const navItems = [
  { label: "Overview", anchor: "overview" },
  { label: "Design Phase", anchor: "design-phase" },
  { label: "Month 1", anchor: "month-1" },
  { label: "Future Months", anchor: "future-months" },
  { label: "Scope", anchor: "scope" },
  { label: "Flow", anchor: "flow" },
];

const HeroSection = () => {
  const handleNavClick = useCallback((anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[75vh] overflow-hidden px-4 sm:px-6 py-16 sm:py-20"
      style={{
        background: "radial-gradient(ellipse at 50% 20%, hsl(240 40% 18%) 0%, hsl(220 20% 7%) 70%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
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

        <motion.div variants={fade} className="inline-block mb-8">
          <span className="text-[10px] sm:text-[11px] text-accent tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
            February 2026 · Confidential
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row sm:gap-3 justify-center mb-10 px-2 sm:px-0">
          <button onClick={() => handleNavClick("overview")} className="btn-primary">
            View Engagement Structure
          </button>
          <button onClick={() => handleNavClick("design-phase")} className="btn-secondary">
            Proceed with Design Phase
          </button>
        </motion.div>

        {/* Nav pills */}
        <motion.div
          variants={fade}
          className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible sm:mx-0 sm:px-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {navItems.map((item) => (
            <button key={item.anchor} onClick={() => handleNavClick(item.anchor)} className="nav-pill shrink-0">
              {item.label}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
