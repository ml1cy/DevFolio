# DevFolio (React + Tailwind)

A multi-page portfolio rebuilt with React, Tailwind CSS, and a neon hacker-inspired palette.

## Running locally
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## Tech stack
- React + Vite
- Tailwind CSS with custom neon theme
- React Router for page routing

## Structure
```
├── index.html
├── public/
│   └── Images/ (static assets)
├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── Layout.jsx
│   ├── data/
│   │   └── content.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

## Notes
- Static images live in `public/Images` and are referenced directly in React components.
- The layout and sections lean into a modern, neon aesthetic with glow effects and a grid background.
