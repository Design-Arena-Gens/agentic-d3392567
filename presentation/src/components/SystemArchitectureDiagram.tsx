export function SystemArchitectureDiagram() {
  return (
    <div
      className="diagram"
      role="img"
      aria-label="Closed-loop adaptive HIFU system architecture diagram"
    >
      <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="module" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(13,107,168,0.15)" />
            <stop offset="100%" stopColor="rgba(107,185,242,0.35)" />
          </linearGradient>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 8 4, 0 8" fill="rgba(13,107,168,0.8)" />
          </marker>
          <marker
            id="arrowtail"
            markerWidth="8"
            markerHeight="8"
            refX="0"
            refY="4"
            orient="auto"
          >
            <polygon points="8 0, 0 4, 8 8" fill="rgba(13,107,168,0.6)" />
          </marker>
        </defs>
        <rect
          x="32"
          y="60"
          width="100"
          height="76"
          rx="16"
          fill="url(#module)"
          stroke="rgba(13,107,168,0.5)"
          strokeWidth="2.5"
        />
        <text
          x="82"
          y="94"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          HIFU
        </text>
        <text
          x="82"
          y="114"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          Transducer
        </text>
        <rect
          x="172"
          y="46"
          width="104"
          height="56"
          rx="14"
          fill="url(#module)"
          stroke="rgba(13,107,168,0.5)"
          strokeWidth="2.5"
        />
        <text
          x="224"
          y="76"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          Acoustic Sensors
        </text>
        <rect
          x="172"
          y="134"
          width="104"
          height="76"
          rx="16"
          fill="url(#module)"
          stroke="rgba(13,107,168,0.5)"
          strokeWidth="2.5"
        />
        <text
          x="224"
          y="166"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          Thermal Imaging
        </text>
        <text
          x="224"
          y="186"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          &amp; Doppler
        </text>
        <rect
          x="308"
          y="80"
          width="88"
          height="96"
          rx="18"
          fill="url(#module)"
          stroke="rgba(13,107,168,0.55)"
          strokeWidth="2.5"
        />
        <text
          x="352"
          y="116"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          Intelligent
        </text>
        <text
          x="352"
          y="136"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          Control
        </text>
        <text
          x="352"
          y="156"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(15,26,42,0.75)"
          fontFamily="Times New Roman, Times, serif"
        >
          Engine
        </text>
        <path
          d="M132 98 H168"
          stroke="rgba(13,107,168,0.65)"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
          fill="none"
        />
        <path
          d="M132 98 C168 98 168 72 172 72"
          stroke="rgba(13,107,168,0.65)"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M132 98 C168 98 168 170 172 170"
          stroke="rgba(13,107,168,0.65)"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M276 72 H304"
          stroke="rgba(13,107,168,0.65)"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
          fill="none"
        />
        <path
          d="M276 172 H304"
          stroke="rgba(13,107,168,0.65)"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
          fill="none"
        />
        <path
          d="M308 128 H280"
          stroke="rgba(13,107,168,0.45)"
          strokeWidth="2.5"
          strokeDasharray="6 8"
          markerEnd="url(#arrowtail)"
          fill="none"
        />
        <path
          d="M172 112 H148"
          stroke="rgba(13,107,168,0.45)"
          strokeWidth="2.5"
          strokeDasharray="6 8"
          markerEnd="url(#arrowtail)"
          fill="none"
        />
      </svg>
    </div>
  );
}
