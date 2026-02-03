export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/30 hover:bg-white/[0.06]">
        <p className="text-sm uppercase tracking-[0.45em] text-white/50">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Let’s build the real-time layer
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          If you’re building a Java backend, data pipeline, or a product that
          needs real-time systems, I’d love to talk.
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
            href="mailto:nicofioritom@gmail.com"
          >
            Email
          </a>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
            href="https://www.linkedin.com/in/nico-fiorito"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:bg-white/[0.08]"
            href="https://nfmdev.github.io/cv-web-app"
            target="_blank"
            rel="noreferrer"
          >
            Web CV
          </a>
        </div>
      </div>
    </section>
  );
}
