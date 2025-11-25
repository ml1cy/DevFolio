import { projects } from '../data/content';

export default function Projects() {
  return (
    <div className="space-y-12 pt-12">
      <section className="section-shell space-y-4">
        <p className="font-mono text-xs text-aurora/80">Showcase</p>
        <h1>Projects with attitude.</h1>
        <p className="lead max-w-3xl">
          A curated mix of client launches, playful experiments, and works-in-progress. Each piece carries a neon edge and a
          focus on usability.
        </p>
      </section>

      <section className="section-shell grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.title} className="card-surface glow-ring p-5 flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl border border-white/5">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-105 transition" />
            </div>
            <div className="flex items-center gap-2 text-xs text-aurora/70">
              <span className="h-2 w-2 rounded-full bg-aurora" />
              {project.status}
            </div>
            <h3 className="text-2xl text-white">{project.title}</h3>
            <p className="text-sm text-mist/70 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Open
              </a>
              <span className="text-xs text-mist/60">Crafted with focus</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
