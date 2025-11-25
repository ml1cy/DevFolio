import { skills } from '../data/content';

export default function Skills() {
  return (
    <div className="space-y-12 pt-12">
      <section className="section-shell space-y-4">
        <p className="font-mono text-xs text-aurora/80">Toolkit</p>
        <h1>Skills tuned for sharp delivery.</h1>
        <p className="lead max-w-3xl">
          I move quickly with a well-practiced front-end toolkit and keep exploring backend capabilities to ship end-to-end
          prototypes.
        </p>
      </section>

      <section className="section-shell grid lg:grid-cols-2 gap-8">
        <div className="card-surface glow-ring p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-white">Frontend</h3>
            <span className="tag">Crafted daily</span>
          </div>
          <div className="space-y-4">
            {skills.frontend.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm text-mist/70">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-aurora via-cobalt to-plasma"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface glow-ring p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-white">Backend (learning)</h3>
            <span className="tag">Iterating</span>
          </div>
          <div className="space-y-4">
            {skills.backend.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm text-mist/70">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cobalt via-plasma to-aurora"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid lg:grid-cols-2 gap-8">
        <div className="card-surface glow-ring p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-aurora animate-pulse" />
            <h3 className="text-xl text-white">Tools & platforms</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool) => (
              <span key={tool} className="tag">{tool}</span>
            ))}
          </div>
        </div>

        <div className="card-surface glow-ring p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-plasma" />
            <h3 className="text-xl text-white">Soft skills</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {skills.soft.map((soft) => (
              <div key={soft} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-mist/80">
                {soft}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
