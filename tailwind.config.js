/** @type {import('tailwindcss').Config} */

// Palette is declared here as literal hex so Tailwind's `/opacity` modifiers
// keep working (bg-gold/10, border-gold/30, …). The same values are mirrored as
// CSS custom properties in styles/common.css for hand-written CSS.
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08080A',
        'bg-elev': '#0E0E12',
        surface: '#111116',
        'surface-2': '#17171D',

        ink: '#F4F3EF',
        'ink-2': '#B7B6BE',
        muted: '#8A8A93',
        faint: '#5E5E68',

        gold: '#E8B961',
        'gold-light': '#F6DCA0',
        'gold-deep': '#B98C3A',
        violet: '#8C7CF0',
        'violet-light': '#B3A8F7',
        live: '#4ADE80',

        // Legacy aliases so any stragglers still resolve to the new palette.
        primary: '#E8B961',
        secondary: '#8C7CF0',
        accent: '#F6DCA0',
        dark: '#08080A',
        light: '#F4F3EF',
        'text-light': '#F4F3EF',
        'text-gray': '#8A8A93',
      },

      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      // Fluid type — every size interpolates between a mobile and a desktop
      // bound, so nothing needs per-breakpoint overrides.
      fontSize: {
        'fluid-xs': ['var(--step--2)', { lineHeight: '1.5' }],
        'fluid-sm': ['var(--step--1)', { lineHeight: '1.6' }],
        'fluid-base': ['var(--step-0)', { lineHeight: '1.7' }],
        'fluid-lg': ['var(--step-1)', { lineHeight: '1.6' }],
        'fluid-xl': ['var(--step-2)', { lineHeight: '1.35' }],
        'fluid-2xl': ['var(--step-3)', { lineHeight: '1.2' }],
        'fluid-3xl': ['var(--step-4)', { lineHeight: '1.1' }],
        'fluid-4xl': ['var(--step-5)', { lineHeight: '1.02' }],
      },

      maxWidth: {
        shell: '76rem',
        prose: '68ch',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      boxShadow: {
        glow: '0 0 48px -8px rgba(232,185,97,0.35)',
        'glow-violet': '0 0 48px -8px rgba(140,124,240,0.35)',
        lift: '0 24px 60px -24px rgba(0,0,0,0.85)',
        'inset-hair': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      animation: {
        marquee: 'marquee 44s linear infinite',
        'marquee-reverse': 'marquee-reverse 44s linear infinite',
        float: 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.6s ease-out infinite',
        'dash-flow': 'dashFlow 1.6s linear infinite',
        'caret-blink': 'caretBlink 1.05s step-end infinite',
      },

      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        dashFlow: {
          to: { strokeDashoffset: '-16' },
        },
        caretBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
