// The hero's signature element: a small "compatibility graph" of connected
// build components. It's a direct, literal nod to Rigora (the flagship
// project — a PC-builder compatibility engine) rather than a generic
// abstract blob or gradient orb.
const nodes = [
  { id: "cpu", label: "CPU", x: 60, y: 40 },
  { id: "mobo", label: "MOBO", x: 220, y: 20 },
  { id: "gpu", label: "GPU", x: 340, y: 90 },
  { id: "ram", label: "RAM", x: 200, y: 130 },
  { id: "psu", label: "PSU", x: 60, y: 160 },
  { id: "ssd", label: "SSD", x: 340, y: 200 },
];

const edges = [
  ["cpu", "mobo"],
  ["mobo", "gpu"],
  ["mobo", "ram"],
  ["cpu", "psu"],
  ["ram", "psu"],
  ["gpu", "ssd"],
  ["mobo", "ssd"],
];

const pointFor = (id) => nodes.find((n) => n.id === id);

export default function BuildGraph() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
      <svg
        viewBox="0 0 400 240"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Diagram of connected PC build components representing the Rigora compatibility engine"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B6CFF" />
            <stop offset="100%" stopColor="#F2A93B" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const p1 = pointFor(a);
          const p2 = pointFor(b);
          return (
            <line
              key={`${a}-${b}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="url(#edgeGrad)"
              strokeWidth="1.4"
              strokeDasharray="4 4"
              opacity="0.55"
              className="animate-pulseline"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g
            key={n.id}
            transform={`translate(${n.x}, ${n.y})`}
            className="animate-floaty"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            <circle r="26" fill="#121826" stroke="#232C40" strokeWidth="1" />
            <circle r="26" fill="none" stroke="#5B6CFF" strokeWidth="1" opacity="0.35" />
            <text
              textAnchor="middle"
              dy="4"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="10.5"
              fill="#EDEFF4"
              letterSpacing="0.02em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full pt-3">
        <div className="flex items-center gap-2 rounded-full border border-ink-border bg-ink-surface/80 backdrop-blur px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
          <span className="font-mono text-[11px] text-paper-dim">build_status: compatible</span>
        </div>
      </div>
    </div>
  );
}
