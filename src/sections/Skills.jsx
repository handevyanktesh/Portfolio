import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-ink-border relative">
      <div className="section-shell">
        <SectionHeading
          index="02"
          label="stack"
          title="The stack, grouped the way I reach for it."
          description="Not an alphabetical badge wall — this is roughly the order a feature moves through, from interface to database to the AI layer on top."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-ink-border bg-ink-surface p-6 hover:border-signal-dim hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-paper font-medium text-[15px]">{group.label}</h3>
                <span className="font-mono text-[11px] text-signal-soft/70">/{group.tag}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] text-paper-dim border border-ink-border rounded-md px-2.5 py-1 bg-ink-raised"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
