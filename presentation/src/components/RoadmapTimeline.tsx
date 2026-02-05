const phases = [
  {
    quarter: "Q1 FY1",
    heading: "System Architecture & Modeling",
    items: [
      "Finalize safety-critical requirements",
      "Simulate acoustic-thermal coupling",
      "Design closed-loop controller",
    ],
  },
  {
    quarter: "Q2 FY1",
    heading: "Prototype Integration",
    items: [
      "Assemble sensing suite",
      "Integrate FPGA/GPU control stack",
      "Bench validation on phantoms",
    ],
  },
  {
    quarter: "Q3 FY1",
    heading: "Preclinical Evaluation",
    items: [
      "In-vivo large-animal studies",
      "Refine AI monitoring algorithms",
      "Regulatory readiness dossier",
    ],
  },
  {
    quarter: "Q4 FY1",
    heading: "Clinical Pilot Launch",
    items: [
      "Initiate multi-site pilot",
      "Health economics assessment",
      "Commercial partner onboarding",
    ],
  },
];

export function RoadmapTimeline() {
  return (
    <div className="timeline">
      {phases.map((phase, index) => (
        <div
          className="timeline-card"
          data-quarter={phase.quarter}
          style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          key={phase.quarter}
        >
          <h3
            style={{
              fontSize: "12pt",
              fontWeight: 700,
              marginBottom: "12px",
              color: "rgba(15,26,42,0.78)",
            }}
          >
            {phase.heading}
          </h3>
          <ul
            style={{
              margin: 0,
              padding: "0 0 0 18px",
              display: "grid",
              gap: "8px",
            }}
          >
            {phase.items.map((item) => (
              <li key={item} style={{ color: "rgba(15,26,42,0.7)" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
