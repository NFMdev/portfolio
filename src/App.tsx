import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MoreProjects from "./components/MoreProjects";
import Skills from "./components/Skills";
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

      <Header />

      <main className="relative">
        <Hero pillClassName={pillBase} />

        <FeaturedProjects projects={featured} pillClassName={pillBase} />

        <MoreProjects project={more[0]} pillClassName={pillBase} />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
