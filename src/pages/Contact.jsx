import { faqs } from '../data/content';

export default function Contact() {
  return (
    <div className="space-y-12 pt-12">
      <section className="section-shell grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="font-mono text-xs text-aurora/80">Contact</p>
          <h1>Let&apos;s build something vivid.</h1>
          <p className="lead">
            Share what you&apos;re imagining—product idea, UI refresh, or a playful experiment. I respond fast with timelines and next
            steps.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[{ label: 'Email', value: 'ijazali.business101@gmail.com' }, { label: 'Location', value: 'Remote • GMT-5' }, { label: 'Discord', value: 'ijazadev', copyable: true }, { label: 'Social', value: '@ijazadev' }].map((item) => (
              <div key={item.label} className="card-surface glow-ring p-4 space-y-1">
                <p className="text-sm text-mist/60">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
                {item.copyable && <p className="text-xs text-mist/50">Copy: {item.value}</p>}
              </div>
            ))}
          </div>
        </div>

        <form
          action="https://formspree.io/f/mnnabnzd"
          method="POST"
          className="card-surface glow-ring p-6 space-y-4"
        >
          <div className="space-y-1">
            <label className="text-sm text-mist/70">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-aurora"
              placeholder="How should I address you?"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-mist/70">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-aurora"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-mist/70">Project vision</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-aurora"
              placeholder="What are we building together?"
            />
          </div>
          <button type="submit" className="button-primary justify-center w-full">Send it</button>
          <p className="text-xs text-mist/50">I respond in under 48 hours. Your info stays private.</p>
        </form>
      </section>

      <section className="section-shell card-surface glow-ring p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-aurora/80">FAQs</p>
            <h2 className="mb-0">Answers before we chat</h2>
          </div>
          <a href="mailto:ijazali.business101@gmail.com" className="button-ghost">Email directly</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((item) => (
            <div key={item.question} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <p className="text-white font-semibold">{item.question}</p>
              <p className="text-sm text-mist/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
