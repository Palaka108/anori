import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center pt-6">
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 text-[11px] text-text-muted-custom hover:text-accent transition-colors duration-200"
      >
        <ArrowUp className="w-3 h-3" strokeWidth={1.5} />
        Back to top
      </button>
    </div>
  );
};

export default BackToTop;
