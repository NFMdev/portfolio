import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
  projects: Project[];
  pillClassName: string;
};

export default function FeaturedProjects({
  projects,
  pillClassName,
}: FeaturedProjectsProps) {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-white/50">
            Featured
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Featured Projects
          </h2>
        </div>
        <span className="hidden text-sm text-white/50 md:block">
          Selected work · 3 highlighted builds
        </span>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            pillClassName={pillClassName}
          />
        ))}
      </div>
    </section>
  );
}
