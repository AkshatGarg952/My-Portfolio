// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        secondary: '#f7931e',
        accent: '#ffd700',
        dark: '#0a0a0a',
        'text-light': '#ffffff',
        'text-gray': '#cccccc',
        'text-muted': '#888888',
        'mystical-purple': '#8b5cf6',
        'mystical-blue': '#3b82f6',
        'mystical-green': '#10b981',
        'border-mystical': 'rgba(255, 107, 53, 0.3)',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'mystical-pulse': 'mysticalPulse 8s ease-in-out infinite alternate',
        'page-reveal': 'pageReveal 1s ease-out forwards',
        'title-glow': 'titleGlow 3s ease-in-out infinite',
        'education-pulse': 'educationPulse 4s ease-in-out infinite',
        'skill-rotate': 'skillRotate 8s linear infinite',
        'skill-icon-float': 'skillIconFloat 3s ease-in-out infinite',
        'cgpa-float': 'cgpaFloat 2s ease-in-out infinite',
        'magic-circle': 'magicCircleRotate 10s linear infinite',
        'trail-fade': 'trailFade 1.2s ease-out forwards',
      },
      keyframes: {
        mysticalPulse: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.7' },
        },
        pageReveal: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        titleGlow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
          '50%': { textShadow: '0 0 15px rgba(255, 215, 0, 0.6)' },
        },
        educationPulse: {
          '0%, 100%': { opacity: '0', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.1)' },
        },
        skillRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        skillIconFloat: {
          '0%, 100%': { transform: 'translateY(0) rotateZ(0deg)' },
          '50%': { transform: 'translateY(-5px) rotateZ(5deg)' },
        },
        cgpaFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        magicCircleRotate: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        trailFade: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0) translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'w-0', 'w-full', 'w-[90%]', 'w-[75%]', 'w-[60%]',
    'animate-mystical-pulse', 'animate-page-reveal', 'animate-title-glow',
    'hover:scale-105', 'hover:translate-y-[-10px]', 'hover:rotate-y-2'
  ],
}