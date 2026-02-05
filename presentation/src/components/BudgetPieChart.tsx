const segments = [
  { label: "AI Monitoring & Control Stack", value: 28, color: "#0d6ba8" },
  { label: "Imaging & Sensor Instrumentation", value: 22, color: "#58aee8" },
  { label: "Preclinical & Clinical Studies", value: 24, color: "#8bc4f5" },
  { label: "Regulatory & Quality Systems", value: 14, color: "#b8d9f8" },
  { label: "Commercialization Enablement", value: 12, color: "#d7e8fb" },
];

const total = segments.reduce((sum, seg) => sum + seg.value, 0);
const radius = 90;
const circumference = 2 * Math.PI * radius;

export function BudgetPieChart() {
  const sliceData = segments.map((segment, index) => {
    const preceding = segments
      .slice(0, index)
      .reduce((sum, current) => sum + current.value, 0);
    return {
      ...segment,
      preceding,
    };
  });

  return (
    <div className="slide-columns">
      <div className="pie-chart">
        <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="130"
            cy="130"
            r={radius}
            fill="none"
            stroke="rgba(13,107,168,0.18)"
            strokeWidth="26"
          />
          {sliceData.map((segment) => {
            const length = (segment.value / total) * circumference;
            const dashOffset =
              circumference - (segment.preceding / total) * circumference - length;
            const circleElement = (
              <circle
                key={segment.label}
                cx="130"
                cy="130"
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth="26"
                strokeDasharray={`${length} ${circumference - length}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                style={{
                  animationDelay: `${0.3 + segment.preceding / total}s`,
                }}
              />
            );
            return circleElement;
          })}
          <circle
            cx="130"
            cy="130"
            r="54"
            fill="rgba(255,255,255,0.95)"
            stroke="rgba(13,107,168,0.2)"
            strokeWidth="1.5"
          />
          <text
            x="130"
            y="124"
            textAnchor="middle"
            fontSize="14"
            fill="rgba(15,26,42,0.75)"
            fontWeight="700"
            fontFamily="Times New Roman, Times, serif"
          >
            $6.8M
          </text>
          <text
            x="130"
            y="146"
            textAnchor="middle"
            fontSize="11"
            fill="rgba(15,26,42,0.6)"
            fontFamily="Times New Roman, Times, serif"
          >
            FY1 Budget
          </text>
        </svg>
      </div>
      <div className="pie-labels">
        {segments.map((segment, index) => (
          <div
            className="pie-label"
            key={segment.label}
            style={{ animationDelay: `${0.3 + index * 0.18}s`, animationName: "itemReveal", animationDuration: "0.6s", animationFillMode: "forwards" }}
          >
            <span
              className="pie-swatch"
              style={{ background: segment.color }}
              aria-hidden="true"
            />
            <div>
              <div
                style={{
                  fontWeight: 700,
                  color: "rgba(15,26,42,0.78)",
                }}
              >
                {segment.label}
              </div>
              <div style={{ color: "rgba(15,26,42,0.6)" }}>
                {segment.value}% allocation
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
