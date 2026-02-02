export default function Header() {
  return (
    <header className="relative">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 text-sm text-white/60">
        <div className="font-semibold tracking-[0.2em] text-white/80">
          NICO
        </div>
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
  );
}
