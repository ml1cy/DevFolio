import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-midnight text-mist relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,242,157,0.06),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_60%_70%,rgba(56,189,248,0.07),transparent_30%)] pointer-events-none" aria-hidden />

      <header className="sticky top-0 z-30 backdrop-blur-xl bg-void/60 border-b border-white/5">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-plasma to-aurora flex items-center justify-center text-midnight font-mono font-bold shadow-neon">
              IA
            </div>
            <div>
              <p className="text-white font-semibold">Ijaz Ali</p>
              <p className="text-xs text-mist/70 font-mono">Front-end developer</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 text-sm overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition ${
                    isActive
                      ? 'bg-white/10 text-aurora shadow-neon'
                      : 'text-mist/80 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-aurora hover:border-aurora"
          >
            <span className="h-2 w-2 rounded-full bg-aurora animate-pulse" />
            Open to work
          </NavLink>
        </div>
      </header>

      <main className="relative z-10 pb-16">{children}</main>

      <footer className="border-t border-white/5 bg-void/60 backdrop-blur-xl">
        <div className="section-shell py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-white font-semibold">Let&apos;s build something vivid.</p>
            <p className="text-sm text-mist/70">Reach me at <a href="mailto:ijazali.business101@gmail.com" className="underline decoration-dotted">ijazali.business101@gmail.com</a></p>
          </div>
          <div className="flex gap-3 text-sm text-mist/70">
            <a href="https://github.com/ii-ali" target="_blank" rel="noreferrer" className="hover:text-aurora">GitHub</a>
            <span className="text-white/20">•</span>
            <a href="https://twitter.com/ijazadev" target="_blank" rel="noreferrer" className="hover:text-aurora">Twitter</a>
            <span className="text-white/20">•</span>
            <a href="https://discordapp.com/users/1115695254239897672" target="_blank" rel="noreferrer" className="hover:text-aurora">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
