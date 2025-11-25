/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: '#050910',
        void: '#0b1220',
        aurora: '#7ef29d',
        plasma: '#a855f7',
        cobalt: '#38bdf8',
        mist: '#cbd5e1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        glow: '0 10px 60px rgba(56, 189, 248, 0.2)',
        neon: '0 0 20px rgba(126, 242, 157, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(126,242,157,0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.12), transparent 30%), radial-gradient(circle at 60% 70%, rgba(56,189,248,0.1), transparent 30%)',
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '80px 80px',
      },
    },
  },
  plugins: [],
};
