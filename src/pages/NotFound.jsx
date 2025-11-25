import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section-shell pt-24 text-center space-y-6">
      <p className="font-mono text-sm text-aurora/70">404</p>
      <h1>Signal lost.</h1>
      <p className="lead max-w-2xl mx-auto">The page you&apos;re looking for slipped into the neon grid. Let&apos;s guide you back.</p>
      <div className="flex justify-center gap-3">
        <Link to="/" className="button-primary">Return home</Link>
        <Link to="/contact" className="button-ghost">Contact</Link>
      </div>
    </div>
  );
}
