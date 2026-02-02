import { useRef, type FocusEvent } from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  pillClassName: string;
};

export default function ProjectCard({
  project,
  pillClassName,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const preview = project.preview;
  const isVideo = preview?.type === "video";

  const playPreview = () => {
    if (!isVideo || !videoRef.current) return;
    const video = videoRef.current;
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  const resetPreview = () => {
    if (!isVideo || !videoRef.current) return;
    const video = videoRef.current;
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      // Ignore reset errors for some browsers.
    }
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node)) {
      return;
    }
    resetPreview();
  };

  return (
    <article
      tabIndex={0}
      aria-label={`${project.name} featured project`}
      onMouseEnter={playPreview}
      onMouseLeave={resetPreview}
      onFocus={playPreview}
      onBlur={handleBlur}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-within:ring-2 focus-within:ring-cyan-400/40 transition-transform hover:scale-[1.015] focus-within:scale-[1.015] hover:z-10 focus-within:z-10"
    >
      <div>
        {preview ? (
          <div className="mb-4 hidden md:block">
            <div className="mx-auto aspect-video max-h-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] opacity-0 translate-y-2 blur-[1px] transition-[max-height,opacity,transform,filter] duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:blur-0 group-hover:max-h-[220px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:blur-0 group-focus-within:max-h-[240px] group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:blur-0">
                <div className="flex h-full w-full items-center justify-center">
                  {preview.type === "image" ? (
                    <img
                      src={preview.src}
                      alt={preview.alt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover object-center"
                      src={preview.src}
                      poster={preview.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
            </div>
          </div>
        ) : null}
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
          {project.tagline}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {project.name}
        </h3>
        <p className="mt-4 text-sm text-white/70">{project.description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span className={pillClassName} key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <a
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} on GitHub`}
      >
        GitHub
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
}
