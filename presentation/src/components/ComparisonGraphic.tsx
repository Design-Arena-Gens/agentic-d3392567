const metrics = [
  {
    label: "Thermal Overshoot",
    conventional: "High risk",
    smart: "Predictive damping",
  },
  {
    label: "Real-time Feedback",
    conventional: "Temperature only",
    smart: "Acoustic + thermal fusion",
  },
  {
    label: "Personalization",
    conventional: "Static presets",
    smart: "Adaptive learning loop",
  },
  {
    label: "Treatment Efficiency",
    conventional: "Manual retargeting",
    smart: "Automated beam steering",
  },
];

export function ComparisonGraphic() {
  return (
    <div className="slide-card">
      <div className="legendary">
        <div className="accent-bar" aria-hidden="true" />
        <h2 className="slide-subtitle" style={{ fontWeight: 700 }}>
          Competitive Contrast
        </h2>
      </div>
      <div className="diagram" style={{ marginTop: "18px" }}>
        <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="32"
            y="34"
            width="140"
            height="172"
            rx="20"
            fill="rgba(216,232,246,0.55)"
            stroke="rgba(13,107,168,0.4)"
            strokeWidth="2.5"
          />
          <rect
            x="240"
            y="22"
            width="148"
            height="196"
            rx="22"
            fill="rgba(13,107,168,0.12)"
            stroke="rgba(13,107,168,0.45)"
            strokeWidth="2.8"
          />
          <text
            x="102"
            y="58"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="rgba(15,26,42,0.7)"
            fontFamily="Times New Roman, Times, serif"
          >
            Conventional HIFU
          </text>
          <text
            x="314"
            y="48"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="rgba(15,26,42,0.7)"
            fontFamily="Times New Roman, Times, serif"
          >
            Smart Adaptive HIFU
          </text>
          {metrics.map((metric, index) => {
            const y = 84 + index * 38;
            return (
              <g key={metric.label}>
                <text
                  x="102"
                  y={y}
                  textAnchor="middle"
                  fontSize="11.5"
                  fill="rgba(15,26,42,0.68)"
                  fontFamily="Times New Roman, Times, serif"
                >
                  {metric.conventional}
                </text>
                <line
                  x1="182"
                  y1={y - 8}
                  x2="242"
                  y2={y - 8}
                  stroke="rgba(13,107,168,0.42)"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />
                <polygon
                  points={`242 ${y - 12}, 258 ${y - 8}, 242 ${y - 4}`}
                  fill="rgba(13,107,168,0.6)"
                />
                <text
                  x="314"
                  y={y}
                  textAnchor="middle"
                  fontSize="11.5"
                  fill="rgba(13,107,168,0.82)"
                  fontFamily="Times New Roman, Times, serif"
                >
                  {metric.smart}
                </text>
                <text
                  x="206"
                  y={y + 16}
                  textAnchor="middle"
                  fontSize="10.5"
                  fill="rgba(15,26,42,0.55)"
                  fontFamily="Times New Roman, Times, serif"
                >
                  {metric.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
