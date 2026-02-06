/**
 * Subtle architectural watermark SVG — sits behind the title section only.
 * Rendered at very low opacity so it's felt, not read.
 */
const BlueprintGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ opacity: 0.06 }}
  >
    {/* Building cross-section wireframe */}
    <g stroke="hsl(210 40% 54%)" fill="none" strokeWidth="0.7">
      {/* Base */}
      <rect x="20%" y="30%" width="60%" height="55%" rx="2" />
      {/* Floors */}
      <line x1="20%" y1="45%" x2="80%" y2="45%" />
      <line x1="20%" y1="58%" x2="80%" y2="58%" />
      <line x1="20%" y1="71%" x2="80%" y2="71%" />
      {/* Columns */}
      <line x1="35%" y1="30%" x2="35%" y2="85%" />
      <line x1="50%" y1="30%" x2="50%" y2="85%" />
      <line x1="65%" y1="30%" x2="65%" y2="85%" />
      {/* Roof */}
      <polyline points="18%,30% 50%,15% 82%,30%" />
      {/* Windows */}
      <rect x="23%" y="33%" width="8%" height="8%" rx="1" />
      <rect x="38%" y="33%" width="8%" height="8%" rx="1" />
      <rect x="53%" y="33%" width="8%" height="8%" rx="1" />
      <rect x="68%" y="33%" width="8%" height="8%" rx="1" />
      <rect x="23%" y="48%" width="8%" height="6%" rx="1" />
      <rect x="38%" y="48%" width="8%" height="6%" rx="1" />
      <rect x="53%" y="48%" width="8%" height="6%" rx="1" />
      <rect x="68%" y="48%" width="8%" height="6%" rx="1" />
      {/* Cross-section markers */}
      <circle cx="12%" cy="50%" r="8" />
      <line x1="10%" y1="50%" x2="14%" y2="50%" />
      <circle cx="88%" cy="50%" r="8" />
      <line x1="86%" y1="50%" x2="90%" y2="50%" />
    </g>
  </svg>
);

export default BlueprintGrid;
