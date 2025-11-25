import { stats, timeline } from '../data/content';

export default function About() {
  return (
    <div className="space-y-16 pt-12">
      <section className="section-shell grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <p className="font-mono text-xs text-aurora/80">About</p>
          <h1>Builder with a bias for momentum.</h1>
          <p className="lead">
            I mix design intuition with front-end engineering to craft experiences that feel intentional. I like contrast—soft
            gradients against sharp type, neon edges against deep midnight backgrounds. Every pixel should earn its place.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-mist/70">
            <span className="tag">Clean code</span>
            <span className="tag">Accessible UI</span>
            <span className="tag">Playful motion</span>
            <span className="tag">Systems thinking</span>
          </div>
        </div>
        <div className="card-surface glow-ring p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-aurora/10 border border-aurora/40 text-aurora flex items-center justify-center font-mono font-bold">
              IA
            </div>
            <div>
              <p className="text-white font-semibold">Ijaz Ali</p>
              <p className="text-sm text-mist/60">Front-end Developer</p>
            </div>
          </div>
          <p className="text-sm text-mist/70">
            Based on the web. Inspired by cyberpunk palettes, aviation design, and products that value clarity. Outside of code, I
            explore interfaces for fun and document learnings.
          </p>
          <div className="flex gap-3 text-sm">
            <a href="https://github.com/ii-ali" target="_blank" rel="noreferrer" className="button-ghost">GitHub</a>
            <a href="https://twitter.com/ijazadev" target="_blank" rel="noreferrer" className="button-ghost">Twitter</a>
          </div>
        </div>
      </section>

      <section className="section-shell grid md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="card-surface glow-ring p-5">
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="text-sm text-mist/70">{stat.label}</p>
            <p className="text-xs text-mist/50 mt-2">{stat.detail}</p>
          </div>
        ))}
      </section>

      <section className="section-shell grid lg:grid-cols-3 gap-10">
        <div className="space-y-3">
          <p className="font-mono text-xs text-aurora/80">Journey</p>
          <h2 className="mb-0">Milestones</h2>
          <p className="text-sm text-mist/70">
            A quick scroll through the highlights that shaped my approach to design and development.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {timeline.map((item) => (
            <div key={item.year} className="card-surface glow-ring p-5 flex gap-4 items-start">
              <div className="h-12 w-12 rounded-xl bg-aurora/10 border border-aurora/40 text-aurora flex items-center justify-center font-mono">
                {item.year}
              </div>
              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-sm text-mist/70">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell card-surface glow-ring p-8 grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <p className="font-mono text-xs text-aurora/80">Values</p>
          <h2 className="mb-0">Principles</h2>
          <p className="text-sm text-mist/70">What guides every build.</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
          {[{ title: 'Innovation', copy: 'I push for unexpected twists that still feel usable.' }, { title: 'Clean code', copy: 'Readable, componentized, and maintainable.' }, { title: 'Collaboration', copy: 'Pairing early, iterating fast, and shipping often.' }].map((value) => (
            <div key={value.title} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <p className="text-white font-semibold">{value.title}</p>
              <p className="text-sm text-mist/70">{value.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
