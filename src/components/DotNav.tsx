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
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-text-secondary whitespace-nowrap">
          {label}
        </span>
        <span
          className={`block rounded-full transition-all duration-300 ${
            activeIndex === i
              ? "w-3 h-3 bg-accent"
              : "w-2 h-2 bg-text-muted-custom hover:bg-text-secondary"
          }`}
        />
      </button>
    ))}
  </nav>
);

export default DotNav;
