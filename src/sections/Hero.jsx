import BuildGraph from "../components/BuildGraph";
import { ArrowUpRight, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="section-shell relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-surface px-3.5 py-1.5 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            <span className="font-mono text-[12px] text-paper-dim">
              open to Software Engineer / Full Stack / AI roles
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] sm:text-6xl font-semibold leading-[1.06] tracking-tight text-paper">
            I build systems that
            <br />
            <span className="text-signal">explain their reasoning</span>,
            <br />
            not just their output.
          </h1>

          <p className="mt-6 text-paper-dim text-[16px] leading-relaxed max-w-lg">
            Vyanktesh Hande — a final-year AI undergraduate who ships full-stack
            products end to end: React interfaces, Node APIs, and Gemini-powered
            reasoning layered on top, from PC-build recommenders to AI-text
            detectors.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-signal hover:bg-signal-soft text-white font-mono text-[13px] px-5 py-3 transition-colors"
            >
              View projects
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-border hover:border-signal text-paper font-mono text-[13px] px-5 py-3 transition-colors"
            >
              <FileDown size={15} />
              Get in touch
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 font-mono text-[12px] text-paper-faint">
            <div>
              <div className="text-paper text-lg font-semibold font-display">7.9</div>
              CGPA / 10
            </div>
            <div className="w-px h-8 bg-ink-border" />
            <div>
              <div className="text-paper text-lg font-semibold font-display">200+</div>
              DSA problems solved
            </div>
            <div className="w-px h-8 bg-ink-border" />
            <div>
              <div className="text-paper text-lg font-semibold font-display">2</div>
              shipped AI products
            </div>
          </div>
        </div>

        <div className="relative">
          <BuildGraph />
        </div>
      </div>
    </section>
  );
}
