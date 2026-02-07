interface DotNavProps {
  sections: string[];
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const DotNav = ({ sections, activeIndex, onDotClick }: DotNavProps) => (
  <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
    {sections.map((label, i) => (
      <button
        key={label}
        onClick={() => onDotClick(i)}
        className="group flex items-center gap-3 justify-end"
        aria-label={`Go to ${label}`}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-text-secondary whitespace-nowrap">
          {label}
        </span>
        <span
          className={`block rounded-full transition-all duration-300 ${
            activeIndex === i
              ? "w-2.5 h-2.5 bg-accent shadow-[0_0_8px_rgba(0,180,255,0.4)]"
              : "w-2 h-2 bg-mist-blue hover:bg-soft-azure"
          }`}
        />
      </button>
    ))}
  </nav>
);

export default DotNav;
