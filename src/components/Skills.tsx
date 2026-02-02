export default function Skills() {
  return (
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
  );
}
