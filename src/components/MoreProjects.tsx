import type { Project } from "../data/projects";

type MoreProjectsProps = {
  project?: Project;
  pillClassName: string;
};

export default function MoreProjects({
  project,
  pillClassName,
}: MoreProjectsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-white/50">
            More
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Other Projects
          </h2>
        </div>
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {project?.name}
            </h3>
            <p className="mt-2 text-white/70">{project?.tagline}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/70">{project?.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project?.tags.map((tag) => (
            <span className={pillClassName} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
          href={project?.link}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
