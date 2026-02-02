type HeroProps = {
  pillClassName: string;
};

export default function Hero({ pillClassName }: HeroProps) {
  return (
    <section className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-20">
      <div className="max-w-2xl">
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
          Nico Fiorito
        </h1>
        <p className="mt-4 text-lg text-white/70 md:text-xl">
          Full Stack &amp; data systems · product-minded software developer
        </p>
        <p className="mt-6 text-base text-white/70 md:text-lg">
          I build real-time, cutting-edge, interactive experiences.
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
            "Java + Spring Boot",
            "Node.js",
            "React + TS",
            "PostgreSQL",
            "MongoDB",
            "Elasticsearch",
            "Flink",
            "Docker",
            "Linux",
            "CI/CD",
            "AWS",
            "Azure",
          ].map((item) => (
            <span className={pillClassName} key={item}>
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
  );
}
