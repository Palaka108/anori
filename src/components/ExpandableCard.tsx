import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const ExpandableCard = ({ title, subtitle, children, defaultOpen = false, className = "" }: ExpandableCardProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`module-card overflow-hidden ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 text-left -webkit-tap-highlight-color-transparent"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <div className="min-w-0">
          <p className="text-[13px] sm:text-[14px] font-semibold text-text-primary">{title}</p>
          {subtitle && <p className="text-[12px] text-text-secondary mt-0.5">{subtitle}</p>}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-text-muted-custom" strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border mt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCard;
