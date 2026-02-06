import AnimatedSection from "../AnimatedSection";

const TitleSection = () => (
  <AnimatedSection className="justify-center">
    <div className="w-full max-w-4xl mx-auto px-6 text-center">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-blueprint/5 blur-[120px]" />
      </div>

      <div className="relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-block">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-dim border border-foreground/10 rounded-full px-4 py-1.5">
            GOSAI • gosai.io
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gradient">
          Commercial Engagement
          <br />
          Proposal
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl font-light text-text-dim">Anori</p>

        {/* Pillars */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {["Product Discovery", "Go-to-Market Advisory", "Partnership Strategy"].map((p) => (
            <span
              key={p}
              className="font-mono text-xs tracking-wider border border-foreground/15 rounded-full px-5 py-2 text-text-dim"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="font-mono text-xs text-text-muted-custom tracking-wider pt-4">
          February 2026 • Confidential
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default TitleSection;
