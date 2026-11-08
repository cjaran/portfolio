import { useState } from "react";

const projects = [
  {
    title: "OneHC",
    subtitle: "Vehicle History Check Platform",
    description:
      "Building the complete OneHC application for the Irish market: a platform that gives vehicles a digital service passport, bringing together vehicle history, service records, and ownership-ready information in one place.",
    stack: [
      "Full-Stack Development",
      "Product Design",
      "Backend & APIs",
      "Frontend",
      "Linux Infrastructure",
      "Irish Market",
    ],
    link: "https://www.linkedin.com/in/ciaran-johnson/",
    featured: true,
  },
  {
    title: "Linux Server Administration",
    description:
      "Deployment, maintenance, and troubleshooting of Debian-based server infrastructure, including networking, system operations, and reliability-focused administration.",
    stack: ["Debian", "Linux", "Networking", "Bash", "Infrastructure"],
    link: "https://www.linkedin.com/in/ciaran-johnson/",
  },
  {
    title: "Raspberry Pi & Electronics",
    description:
      "Hardware and software projects involving Raspberry Pi, PCB design and assembly, soldering, electronics repair, and micro-soldering.",
    stack: ["Raspberry Pi", "Python", "PCB Design", "Soldering", "Electronics"],
    link: "https://www.linkedin.com/in/ciaran-johnson/",
  },
  {
    title: "IT Operations & Support Tooling",
    description:
      "Technical support and integration work across systems, equipment setup, diagnostics, and customer-facing technical problem solving.",
    stack: ["IT Operations", "Diagnostics", "Support", "Python", "Integration"],
    link: "https://www.linkedin.com/in/ciaran-johnson/",
  },
];

const skills = [
  "Full-Stack Development",
  "Product Design",
  "Python",
  "Linux / Debian",
  "Server Administration",
  "Networking",
  "APIs",
  "Raspberry Pi",
  "PCB Design",
  "Soldering",
  "IT Operations",
  "Technical Support",
  "Problem Solving",
];

const interests = [
  {
    title: "Product Engineering",
    detail:
      "Owning products end to end: shaping the idea, designing the experience, building the system, and shipping it to real users.",
  },
  {
    title: "Backend & Infrastructure",
    detail:
      "Reliable APIs, Linux systems, networking, deployments, and infrastructure that stays dependable as a product grows.",
  },
  {
    title: "Hardware & Electronics",
    detail:
      "Raspberry Pi projects, PCB design, soldering, electronics repair, and the intersection of software with physical systems.",
  },
  {
    title: "Automotive Technology",
    detail:
      "Mechanical systems, diagnostics, vehicle history, and hands-on automotive work.",
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "OneHC", href: "#onehc" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Interests", href: "#interests" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07030f] text-slate-100 antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07030f]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-tight">
            Ciaran Johnson
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/ciaran-johnson/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-5 py-2 font-medium text-white shadow-lg shadow-violet-900/40 transition hover:brightness-110"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-sm text-violet-200 md:hidden"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/5 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/ciaran-johnson/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="car-paint">
          <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              Full-Stack Engineer · Drogheda, Ireland
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              I build complete products, from backend systems to the
              <span className="text-shimmer"> applications people use.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg text-slate-300">
              I’m Ciaran Johnson, a Lead Software Engineer at OneHC. I’m
              currently building the OneHC application end to end, combining
              product development, backend systems, Linux infrastructure, and
              practical hardware knowledge.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#onehc"
                className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-7 py-3 font-medium text-white shadow-lg shadow-violet-900/40 transition hover:brightness-110"
              >
                See what I’m building
              </a>
              <a
                href="https://www.linkedin.com/in/ciaran-johnson/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-violet-300/25 bg-white/5 px-7 py-3 font-medium text-violet-100 transition hover:border-violet-300/50 hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering products with a practical, systems-minded approach.
            </h2>

            <p className="mt-6 text-lg text-slate-300">
              I work across software engineering, technical support, IT
              operations, electronics, and customer-facing technical problem
              solving. My experience includes Linux server administration,
              networking, Raspberry Pi projects, PCB design and assembly, and
              Python development.
            </p>

            <p className="mt-5 text-lg text-slate-300">
              At OneHC, I’m building the entire application: product design,
              application development, backend systems, infrastructure, and the
              platform experience. The goal is to give Irish vehicle owners a
              reliable digital record of their vehicle’s history and service
              life.
            </p>
          </div>
        </section>

        <section id="onehc" className="car-paint border-y border-white/5">
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <div className="glow-card relative rounded-3xl p-8 sm:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-300">
                Flagship project
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                OneHC
              </h2>

              <p className="mt-4 max-w-3xl text-lg text-slate-300">
                OneHC is a Vehicle History Check platform for the Irish market.
                I’m building the whole application: from product concept and
                user experience through backend systems, frontend development,
                data architecture, and supporting infrastructure.
              </p>

              <p className="mt-4 max-w-3xl text-slate-300">
                The product is designed to act as a vehicle’s digital service
                passport: a trusted, accessible record of its history, service
                activity, and important ownership information.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Product ownership",
                    detail:
                      "Defining the product direction, user experience, and core platform features.",
                  },
                  {
                    title: "Full-stack delivery",
                    detail:
                      "Building the application, backend services, frontend experience, and supporting systems.",
                  },
                  {
                    title: "Irish-market focus",
                    detail:
                      "Creating a vehicle history and service-record platform designed for the Irish market.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <h3 className="font-semibold text-violet-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/ciaran-johnson/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/5 px-6 py-3 text-sm font-medium text-violet-100 transition hover:border-violet-300/60 hover:bg-white/10"
              >
                Follow the build on LinkedIn
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`glow-card rounded-3xl p-7 transition duration-300 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-white">
                      Full application
                    </span>
                  )}
                </div>

                {project.subtitle && (
                  <p className="mt-1 text-sm text-violet-300">
                    {project.subtitle}
                  </p>
                )}

                <p className="mt-4 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-300/15 bg-violet-500/10 px-3 py-1 text-xs text-violet-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-block text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-200"
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="car-paint border-y border-white/5">
          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              What I work with
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-violet-300/20 bg-white/5 px-4 py-2 text-sm text-violet-100 transition hover:border-violet-300/50 hover:bg-violet-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              Interests
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Beyond the code
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="glow-card rounded-3xl p-7 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-violet-100">
                  {interest.title}
                </h3>
                <p className="mt-3 text-slate-300">{interest.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="car-paint border-t border-white/5">
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
              Let’s build something practical.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              I’m interested in full-stack product engineering, backend systems,
              infrastructure, and technical products with a real-world purpose.
            </p>

            <a
              href="https://www.linkedin.com/in/ciaran-johnson/"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-8 py-4 font-medium text-white shadow-xl shadow-violet-900/40 transition hover:brightness-110"
            >
              Get in touch on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Ciaran Johnson</p>
          <p>Drogheda, Ireland</p>
          <a
            href="https://www.linkedin.com/in/ciaran-johnson/"
            target="_blank"
            rel="noreferrer"
            className="text-violet-300 transition hover:text-violet-200"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}