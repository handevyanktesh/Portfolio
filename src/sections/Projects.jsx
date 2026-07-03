import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-ink-border">
      <div className="section-shell">
        <SectionHeading
          index="03"
          label="projects"
          title="Two products, one habit: make the AI show its work."
          description="Both are full-stack builds where a Gemini-powered reasoning layer sits behind a real interface, not a notebook."
        />

        <div className="mt-12 flex flex-col gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
