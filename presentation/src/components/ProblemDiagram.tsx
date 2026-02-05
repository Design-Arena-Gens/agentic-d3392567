export function ProblemDiagram() {
  return (
    <div
      className="diagram"
      role="img"
      aria-label="Infographic of open-loop HIFU therapy limitations"
    >
      <svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="24"
          y="48"
          width="120"
          height="124"
          rx="18"
          fill="rgba(13,107,168,0.08)"
          stroke="rgba(13,107,168,0.55)"
          strokeWidth="2.4"
        />
        <path
          d="M36 60 L36 160"
          stroke="rgba(13,107,168,0.6)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
        <path
          d="M120 110 C168 80 220 80 272 110"
          stroke="rgba(228,106,118,0.76)"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="216"
          cy="110"
          r="32"
          fill="rgba(228,106,118,0.24)"
          stroke="rgba(228,106,118,0.78)"
          strokeWidth="3"
        />
        <path
          d="M200 94 L232 126"
          stroke="rgba(228,106,118,0.78)"
          strokeWidth="3"
        />
        <path
          d="M232 94 L200 126"
          stroke="rgba(228,106,118,0.78)"
          strokeWidth="3"
        />
        <path
          d="M294 65 C334 85 334 135 294 155"
          stroke="rgba(13,107,168,0.6)"
          strokeWidth="6"
          strokeDasharray="12 14"
          fill="none"
        />
        <path
          d="M312 60 C352 80 352 140 312 160"
          stroke="rgba(13,107,168,0.45)"
          strokeWidth="4"
          strokeDasharray="14 16"
          fill="none"
        />
        <rect
          x="308"
          y="82"
          width="76"
          height="66"
          rx="14"
          fill="rgba(255,255,255,0.88)"
          stroke="rgba(13,107,168,0.35)"
          strokeWidth="2"
        />
        <line
          x1="308"
          y1="92"
          x2="384"
          y2="92"
          stroke="rgba(13,107,168,0.35)"
          strokeWidth="2"
        />
        <circle
          cx="320"
          cy="115"
          r="10"
          stroke="rgba(228,106,118,0.7)"
          strokeWidth="2"
          fill="rgba(228,106,118,0.16)"
        />
        <line
          x1="340"
          y1="115"
          x2="370"
          y2="115"
          stroke="rgba(13,107,168,0.6)"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <circle
          cx="320"
          cy="140"
          r="10"
          stroke="rgba(13,107,168,0.6)"
          strokeWidth="2"
          fill="rgba(13,107,168,0.12)"
        />
        <line
          x1="340"
          y1="140"
          x2="370"
          y2="140"
          stroke="rgba(13,107,168,0.6)"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <text
          x="36"
          y="40"
          fontSize="12"
          fill="rgba(15,26,42,0.6)"
          fontFamily="Times New Roman, Times, serif"
        >
          Open-loop HIFU
        </text>
        <text
          x="184"
          y="190"
          fontSize="12"
          fill="rgba(15,26,42,0.6)"
          fontFamily="Times New Roman, Times, serif"
        >
          Cavitation Risk &amp; Overheating
        </text>
        <text
          x="312"
          y="78"
          fontSize="11"
          fill="rgba(15,26,42,0.55)"
          fontFamily="Times New Roman, Times, serif"
        >
          No feedback loop
        </text>
      </svg>
    </div>
  );
}
