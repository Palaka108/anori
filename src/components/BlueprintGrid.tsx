import { motion } from "framer-motion";

const BlueprintGrid = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
    {/* Grid pattern */}
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.04 }}
    >
      <g stroke="hsl(200 90% 50%)" fill="none" strokeWidth="0.5">
        <rect x="20%" y="25%" width="60%" height="55%" rx="2" />
        <line x1="20%" y1="40%" x2="80%" y2="40%" />
        <line x1="20%" y1="53%" x2="80%" y2="53%" />
        <line x1="20%" y1="66%" x2="80%" y2="66%" />
        <line x1="35%" y1="25%" x2="35%" y2="80%" />
        <line x1="50%" y1="25%" x2="50%" y2="80%" />
        <line x1="65%" y1="25%" x2="65%" y2="80%" />
        <polyline points="18%,25% 50%,12% 82%,25%" />
        <rect x="23%" y="28%" width="8%" height="8%" rx="1" />
        <rect x="38%" y="28%" width="8%" height="8%" rx="1" />
        <rect x="53%" y="28%" width="8%" height="8%" rx="1" />
        <rect x="68%" y="28%" width="8%" height="8%" rx="1" />
        <rect x="23%" y="43%" width="8%" height="6%" rx="1" />
        <rect x="53%" y="43%" width="8%" height="6%" rx="1" />
        <circle cx="12%" cy="50%" r="6" />
        <line x1="10%" y1="50%" x2="14%" y2="50%" />
        <circle cx="88%" cy="50%" r="6" />
        <line x1="86%" y1="50%" x2="90%" y2="50%" />
      </g>
    </svg>
    {/* Ambient glow orbs */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(200 90% 50% / 0.06), transparent 70%)",
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -20, 15, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(200 90% 50% / 0.04), transparent 70%)",
      }}
      animate={{
        x: [0, -25, 15, 0],
        y: [0, 20, -10, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

export default BlueprintGrid;
