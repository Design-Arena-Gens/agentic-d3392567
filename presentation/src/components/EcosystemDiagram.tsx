const stakeholders = [
  { label: "Academic Medical Centers", angle: -60 },
  { label: "Oncology Hospitals", angle: -10 },
  { label: "MedTech OEM Partners", angle: 40 },
  { label: "AI & Imaging Vendors", angle: 90 },
  { label: "Pharma Collaborations", angle: 140 },
  { label: "Global Health Agencies", angle: 190 },
];

export function EcosystemDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Commercial ecosystem">
      <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="210"
          cy="128"
          r="56"
          fill="rgba(13,107,168,0.12)"
          stroke="rgba(13,107,168,0.5)"
          strokeWidth="3"
        />
        <circle
          cx="210"
          cy="128"
          r="18"
          fill="rgba(13,107,168,0.35)"
          stroke="rgba(13,107,168,0.6)"
          strokeWidth="2"
        />
        <text
          x="210"
          y="122"
          textAnchor="middle"
          fontSize="12"
          fill="#ffffff"
          fontWeight="700"
          fontFamily="Times New Roman, Times, serif"
        >
          HIFU
        </text>
        <text
          x="210"
          y="138"
          textAnchor="middle"
          fontSize="10.5"
          fill="#ffffff"
          fontFamily="Times New Roman, Times, serif"
        >
          Platform
        </text>
        {stakeholders.map((stakeholder) => {
          const radius = 100;
          const rad = ((stakeholder.angle - 90) * Math.PI) / 180;
          const targetX = 210 + radius * Math.cos(rad);
          const targetY = 128 + radius * Math.sin(rad);
          const labelX = 210 + (radius + 52) * Math.cos(rad);
          const labelY = 128 + (radius + 52) * Math.sin(rad);
          return (
            <g key={stakeholder.label}>
              <line
                x1="210"
                y1="128"
                x2={targetX}
                y2={targetY}
                stroke="rgba(13,107,168,0.35)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <circle
                cx={targetX}
                cy={targetY}
                r="20"
                fill="rgba(255,255,255,0.88)"
                stroke="rgba(13,107,168,0.45)"
                strokeWidth="2.4"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                fontSize="11"
                fill="rgba(15,26,42,0.68)"
                fontFamily="Times New Roman, Times, serif"
              >
                {stakeholder.label}
              </text>
            </g>
          );
        })}
        <circle
          cx="210"
          cy="128"
          r="86"
          fill="none"
          stroke="rgba(13,107,168,0.18)"
          strokeWidth="2"
          strokeDasharray="10 12"
        />
      </svg>
    </div>
  );
}
