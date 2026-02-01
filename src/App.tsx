import { projects } from "./data/projects";

const pillBase =
  "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs tracking-wide text-white/70";

export default function App() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <div className="relative min-h-screen bg-[#0B0D10] text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] top-[30%] h-[340px] w-[340px] rounded-full bg-indigo-400/10 blur-[120px]" />

      <header className="relative">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 text-sm text-white/60">
          <div className="font-semibold tracking-[0.2em] text-white/80">NICO</div>
          <div className="flex gap-5">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <section className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.45em] text-white/50">
              Hero
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Nico Fiorito
            </h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              Backend &amp; data systems · product-minded engineer
            </p>
            <p className="mt-6 text-base text-white/70 md:text-lg">
              I build real-time pipelines, search, and interactive experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full border border-white/20 bg-white text-black px-6 py-2 text-sm font-semibold transition hover:bg-white/90"
                href="#projects"
              >
                View projects
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.08]"
                href="#contact"
              >
                Contact
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Java 21",
                "Spring Boot",
                "Flink",
                "Elasticsearch",
                "React + TS",
                "Docker",
              ].map((item) => (
                <span className={pillBase} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
            <span>Scroll</span>
            <span aria-hidden>↓</span>
          </div>
        </section>

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
            {featured.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                    {project.tagline}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm text-white/70">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className={pillBase} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span aria-hidden>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.45em] text-white/50">
                  More Projects
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {more[0]?.name}
                </h3>
                <p className="mt-2 text-white/70">{more[0]?.tagline}</p>
              </div>
              <a
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
                href={more[0]?.link}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">{more[0]?.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {more[0]?.tags.map((tag) => (
                <span className={pillBase} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.45em] text-white/50">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Systems, Search, and Product Craft
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Java / Spring Boot / JPA",
              "PostgreSQL / Flyway / WAL-CDC",
              "Apache Flink / stream processing",
              "Elasticsearch / search & analytics",
              "Docker / Compose / local orchestration",
              "React / TypeScript / Vite",
              "State: Zustand · UI: Tailwind / MUI",
              "Testing / CI mindset / clean architecture",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/30 hover:bg-white/[0.06]">
            <p className="text-sm uppercase tracking-[0.45em] text-white/50">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Let’s build the real-time layer
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/70">
              If you’re building a Java backend, data pipeline, or a product that needs real-time systems, I’d love to talk.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
                href="https://github.com/NFMdev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
                href="mailto:your@email.com"
              >
                Email
              </a>
              <a
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
                href="#"
              >
                LinkedIn (add)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/50">
        © 2026 Nico Fiorito
      </footer>
    </div>
  );
}
