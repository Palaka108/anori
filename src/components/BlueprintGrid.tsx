const BlueprintGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="minor-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(30,144,255,0.03)" strokeWidth="0.5" />
        </pattern>
        <pattern id="major-grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#minor-grid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(30,144,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#major-grid)" />
    </svg>
  </div>
);

export default BlueprintGrid;
