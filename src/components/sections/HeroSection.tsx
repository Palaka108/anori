import { motion } from "framer-motion";
import { useCallback, useRef } from "react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const navItems = [
  { label: "Overview", anchor: "overview" },
  { label: "Initial Phase", anchor: "phase-0" },
  { label: "Month 1", anchor: "month-1" },
  { label: "Month 2", anchor: "month-2" },
  { label: "Included", anchor: "included" },
  { label: "Not Included", anchor: "not-included" },
  { label: "Pricing", anchor: "pricing" },
];

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleNavClick = useCallback((anchor: string) => {
    // Soft click sound
    try {
      if (!audioRef.current) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 600;
        gain.gain.value = 0.03;
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      }
    } catch {
      // Audio not available
    }

    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] md:min-h-[70vh] overflow-hidden px-5 py-20">
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 20%, hsl(215 70% 50% / 0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="relative z-10 w-full max-w-[600px] mx-auto text-center"
      >
        <motion.h1
          variants={fade}
          className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.1] text-text-primary mb-4 tracking-tight"
        >
          ANORI
        </motion.h1>

        <motion.p
          variants={fade}
          className="text-[16px] sm:text-lg font-medium text-text-secondary mb-4 leading-snug"
        >
          Commercial Advisory Engagement Proposal
        </motion.p>

        <motion.div variants={fade} className="section-divider max-w-[160px] mx-auto mb-6" />

        <motion.p
          variants={fade}
          className="text-[14px] text-text-muted-custom max-w-md mx-auto mb-8 leading-relaxed"
        >
          Execution-informed advisory for early-stage building-tech — clarity before scale.
        </motion.p>

        <motion.p variants={fade} className="text-[11px] text-text-muted-custom tracking-widest uppercase mb-10">
          February 2026 · Confidential
        </motion.p>

        {/* Nav pill row */}
        <motion.div
          variants={fade}
          className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible sm:mx-0 sm:px-0"
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
