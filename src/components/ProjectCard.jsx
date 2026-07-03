import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "./icons";

const accentMap = {
  circuit: {
    text: "text-circuit",
    border: "hover:border-circuit/50",
    dot: "bg-circuit",
    chip: "border-circuit/30 text-circuit",
  },
  signal: {
    text: "text-signal-soft",
    border: "hover:border-signal-dim",
    dot: "bg-signal",
    chip: "border-signal-dim text-signal-soft",
  },
};

export default function ProjectCard({ project }) {
  const accent = accentMap[project.accent];

  return (
    <div
      className={`rounded-3xl border border-ink-border bg-ink-surface p-7 sm:p-9 transition-colors duration-300 ${accent.border}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <span className="font-mono text-[12px] text-paper-faint">{project.index}</span>
          <h3 className="font-display text-2xl font-semibold text-paper mt-1">{project.name}</h3>
          <p className={`font-mono text-[12.5px] mt-1.5 ${accent.text}`}>{project.tagline}</p>
        </div>

        {/* Node-chain motif: a compact readout of the pipeline / component chain for this project */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.nodes.map((n, i) => (
            <span key={n} className="flex items-center gap-1.5">
              <span className={`font-mono text-[10.5px] border rounded px-2 py-1 ${accent.chip}`}>
                {n}
              </span>
              {i < project.nodes.length - 1 && (
                <span className={`h-[3px] w-[3px] rounded-full ${accent.dot} opacity-60`} />
              )}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-5 text-paper-dim text-[14.5px] leading-relaxed max-w-2xl">
        {project.description}
      </p>

      <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
        {project.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-[13.5px] text-paper-dim">
            <Check size={14} className={`mt-0.5 shrink-0 ${accent.text}`} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-ink-border/70">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] text-paper-faint border border-ink-border rounded-md px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-paper hover:text-signal-soft transition-colors shrink-0"
        >
          <GithubIcon size={15} />
          Source
          <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
