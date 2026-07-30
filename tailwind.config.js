/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0C',
        surface: '#121215',
        'surface-2': '#18181C',
        border: 'rgba(255,255,255,0.08)',
        'border-hover': 'rgba(255,255,255,0.18)',
        ink: '#F2F1ED',
        muted: '#9B9BA3',
        gold: '#E4B65A',
        'gold-light': '#F3D48C',
        violet: '#8C7CF0',

        // legacy aliases kept so existing utility classes resolve during rewrite
        primary: '#E4B65A',
        secondary: '#8C7CF0',
        accent: '#F3D48C',
        dark: '#0A0A0C',
        'dark-bg': '#0A0A0C',
        light: '#F2F1ED',
        gray: '#9B9BA3',
        'text-light': '#F2F1ED',
        'text-gray': '#9B9BA3',
        'text-muted': '#9B9BA3',
        'mystical-purple': '#8C7CF0',
        'mystical-blue': '#8C7CF0',
        'mystical-green': '#E4B65A',
        purple: '#8C7CF0',
        blue: '#8C7CF0',
        'border-mystical': 'rgba(228,182,90,0.3)',
      },

      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'sans-serif'],
        cinzel: ['"Fraunces"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },

      backdropBlur: {
        xs: '2px',
      },

      boxShadow: {
        glow: '0 0 40px rgba(228,182,90,0.25)',
        'glow-violet': '0 0 40px rgba(140,124,240,0.25)',
      },

      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        marquee: 'marquee 32s linear infinite',
        float: 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
