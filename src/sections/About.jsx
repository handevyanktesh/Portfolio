import SectionHeading from "../components/SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "G H Raisoni College of Engineering and Management",
    location: "Pune, Maharashtra",
    detail: "B.Tech in Artificial Intelligence",
    meta: "CGPA 7.9 / 10",
    period: "2023 — 2027",
  },
  {
    school: "Yeshwant Mahavidyalaya",
    location: "Nanded, Maharashtra",
    detail: "Higher Secondary",
    meta: "67.33%",
    period: "",
  },
  {
    school: "Shri Shivaji High School",
    location: "Nanded, Maharashtra",
    detail: "Secondary School",
    meta: "84.80%",
    period: "",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-ink-border">
      <div className="section-shell grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <SectionHeading index="01" label="about" title="Currently compiling a career in AI-driven software." />
          <p className="mt-6 text-paper-dim text-[15px] leading-relaxed max-w-md">
            I'm a fourth-year Artificial Intelligence student who prefers
            building over theorizing. Most of my time goes into full-stack
            products where an AI model does the reasoning and a clean
            interface makes that reasoning legible — whether that's picking
            compatible PC parts or explaining why a paragraph reads as
            machine-written.
          </p>
          <p className="mt-4 text-paper-dim text-[15px] leading-relaxed max-w-md">
            Comfortable across the stack: React and Tailwind on the front,
            Node and Express on the back, MongoDB or MySQL underneath, and
            JWT holding the whole thing together securely.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {education.map((e) => (
            <div
              key={e.school}
              className="group rounded-2xl border border-ink-border bg-ink-surface p-6 hover:border-signal-dim transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 h-9 w-9 shrink-0 rounded-lg bg-ink-raised border border-ink-border flex items-center justify-center text-signal-soft">
                    <GraduationCap size={17} />
                  </div>
                  <div>
                    <h3 className="font-display text-paper font-medium text-[15px] leading-snug">
                      {e.school}
                    </h3>
                    <p className="text-paper-faint text-[13px] mt-0.5">{e.location}</p>
                  </div>
                </div>
                {e.period && (
                  <span className="font-mono text-[11px] text-paper-faint whitespace-nowrap">{e.period}</span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between pl-[50px]">
                <span className="text-paper-dim text-[13.5px]">{e.detail}</span>
                <span className="font-mono text-[12px] text-mint">{e.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
