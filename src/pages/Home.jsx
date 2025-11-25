import { Link } from 'react-router-dom';
import { stats, projects } from '../data/content';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-24 pt-12">
      <section className="section-shell grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-aurora/80">Front-end craft × hacker glow</p>
          <h1>
            Interfaces that feel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aurora via-cobalt to-plasma">alive, sharp, and memorable.</span>
          </h1>
          <p className="lead max-w-2xl">
            I&apos;m Ijaz Ali, a front-end developer who blends modern aesthetics with a new-age hacker vibe.
            I design and code fast experiences with thoughtful motion, crisp typography, and reliable delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="button-primary">View my work</Link>
            <Link to="/contact" className="button-ghost">Book a collaboration</Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-mist/70">
            <span className="tag">React</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Design Systems</span>
            <span className="tag">Storytelling</span>
          </div>
        </div>

        <div className="card-surface glow-ring p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-aurora/10 via-plasma/5 to-cobalt/10" aria-hidden />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-lg">
                {'</>'}
              </div>
              <div>
                <p className="text-white font-semibold">Latest Drop</p>
                <p className="text-sm text-mist/60">DevFolio 2.0 · multi-page React</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/5 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs text-mist/60 mt-1 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-[11px] text-mist/50 mt-2">{stat.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-mist/70">
              <span className="h-2 w-2 rounded-full bg-aurora animate-pulse" />
              Shipping polished front-ends with a hacker-grade toolkit.
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-aurora/80">Signal boost</p>
            <h2>Featured projects</h2>
            <p className="lead max-w-2xl">A mix of client-ready launches and playful experiments that keep my skills sharp.</p>
          </div>
          <Link to="/projects" className="button-ghost self-start">See all</Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <article key={project.title} className="card-surface glow-ring p-5 flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl border border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-44 object-cover hover:scale-105 transition" />
              </div>
              <div className="flex items-center gap-2 text-xs text-aurora/70">
                <span className="h-2 w-2 rounded-full bg-aurora" />
                {project.status}
              </div>
              <h3 className="text-xl text-white">{project.title}</h3>
              <p className="text-sm text-mist/70 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="button-primary justify-center mt-2"
              >
                Launch
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell card-surface glow-ring p-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-2">
          <p className="font-mono text-xs text-aurora/80">Workflow DNA</p>
          <h2 className="mb-2">How I collaborate</h2>
          <p className="text-sm text-mist/70">Expect transparent communication, crisp documentation, and iterative releases.</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
          {[ 'Discover + scope', 'Design, prototype, validate', 'Build, launch, iterate' ].map((step, index) => (
            <div key={step} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <div className="h-10 w-10 rounded-lg bg-aurora/10 border border-aurora/40 text-aurora flex items-center justify-center font-mono text-sm">
                0{index + 1}
              </div>
              <p className="text-white font-semibold">{step}</p>
              <p className="text-sm text-mist/70">I keep the feedback loop short with async updates and shareable previews.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
