// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#ff6b35',
//         secondary: '#f7931e',
//         accent: '#ffd700',
//         dark: '#0a0a0a',
//         'text-light': '#ffffff',
//         'text-gray': '#cccccc',
//         'text-muted': '#888888',
//         'mystical-purple': '#8b5cf6',
//         'mystical-blue': '#3b82f6',
//         'mystical-green': '#10b981',
//         'border-mystical': 'rgba(255, 107, 53, 0.3)',
//       },
//       fontFamily: {
//         cinzel: ['Cinzel', 'serif'],
//         inter: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         'mystical-pulse': 'mysticalPulse 8s ease-in-out infinite alternate',
//         'page-reveal': 'pageReveal 1s ease-out forwards',
//         'title-glow': 'titleGlow 3s ease-in-out infinite',
//         'education-pulse': 'educationPulse 4s ease-in-out infinite',
//         'skill-rotate': 'skillRotate 8s linear infinite',
//         'skill-icon-float': 'skillIconFloat 3s ease-in-out infinite',
//         'cgpa-float': 'cgpaFloat 2s ease-in-out infinite',
//         'magic-circle': 'magicCircleRotate 10s linear infinite',
//         'trail-fade': 'trailFade 1.2s ease-out forwards',
//       },
//       keyframes: {
//         mysticalPulse: {
//           '0%': { opacity: '0.3' },
//           '100%': { opacity: '0.7' },
//         },
//         pageReveal: {
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },
//         titleGlow: {
//           '0%, 100%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
//           '50%': { textShadow: '0 0 15px rgba(255, 215, 0, 0.6)' },
//         },
//         educationPulse: {
//           '0%, 100%': { opacity: '0', transform: 'scale(1)' },
//           '50%': { opacity: '0.3', transform: 'scale(1.1)' },
//         },
//         skillRotate: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//         skillIconFloat: {
//           '0%, 100%': { transform: 'translateY(0) rotateZ(0deg)' },
//           '50%': { transform: 'translateY(-5px) rotateZ(5deg)' },
//         },
//         cgpaFloat: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-2px)' },
//         },
//         magicCircleRotate: {
//           '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
//           '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
//         },
//         trailFade: {
//           '0%': { opacity: '1', transform: 'scale(1)' },
//           '100%': { opacity: '0', transform: 'scale(0) translateY(-20px)' },
//         },
//       },
//     },
//   },
//   plugins: [],
//   safelist: [
//     'w-0', 'w-full', 'w-[90%]', 'w-[75%]', 'w-[60%]',
//     'animate-mystical-pulse', 'animate-page-reveal', 'animate-title-glow',
//     'hover:scale-105', 'hover:translate-y-[-10px]', 'hover:rotate-y-2'
//   ],
// }




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#ff6b35',
//         secondary: '#f7931e',
//         accent: '#ffd700',
//         dark: '#0a0a0a',
//         light: '#ffffff',
//         gray: '#cccccc',
//         'text-light': '#ffffff',
//         'text-gray': '#cccccc',
//         'text-muted': '#888888',
//         'mystical-purple': '#8b5cf6',
//         'mystical-blue': '#3b82f6',
//         'mystical-green': '#10b981',
//         purple: '#8b5cf6',
//         blue: '#3b82f6',
//         border: 'rgba(255, 107, 53, 0.3)',
//         'border-mystical': 'rgba(255, 107, 53, 0.3)',
//       },
//       fontFamily: {
//         cinzel: ['Cinzel', 'serif'],
//         inter: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         'mystical-pulse': 'mysticalPulse 8s ease-in-out infinite alternate',
//         'page-reveal': 'pageReveal 1s ease-out forwards',
//         'title-glow': 'titleGlow 3s ease-in-out infinite',
//         'education-pulse': 'educationPulse 4s ease-in-out infinite',
//         'skill-rotate': 'skillRotate 8s linear infinite',
//         'skill-icon-float': 'skillIconFloat 3s ease-in-out infinite',
//         'cgpa-float': 'cgpaFloat 2s ease-in-out infinite',
//         'magic-circle': 'magicCircleRotate 10s linear infinite',
//         'trail-fade': 'trailFade 1.2s ease-out forwards',
//         'project-glow': 'projectGlow 3s ease-in-out infinite alternate',
//         'float': 'float 15s ease-in-out infinite',
//         'float-slow': 'float 20s ease-in-out infinite',
//       },
//       keyframes: {
//         mysticalPulse: {
//           '0%': { opacity: '0.3' },
//           '100%': { opacity: '0.7' },
//         },
//         pageReveal: {
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },
//         titleGlow: {
//           '0%, 100%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
//           '50%': { textShadow: '0 0 15px rgba(255, 215, 0, 0.6)' },
//         },
//         educationPulse: {
//           '0%, 100%': { opacity: '0', transform: 'scale(1)' },
//           '50%': { opacity: '0.3', transform: 'scale(1.1)' },
//         },
//         skillRotate: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//         skillIconFloat: {
//           '0%, 100%': { transform: 'translateY(0) rotateZ(0deg)' },
//           '50%': { transform: 'translateY(-5px) rotateZ(5deg)' },
//         },
//         cgpaFloat: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-2px)' },
//         },
//         magicCircleRotate: {
//           '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
//           '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
//         },
//         trailFade: {
//           '0%': { opacity: '1', transform: 'scale(1)' },
//           '100%': { opacity: '0', transform: 'scale(0) translateY(-20px)' },
//         },
//         projectGlow: {
//           '0%': { transform: 'scale(1) rotate(0deg)' },
//           '100%': { transform: 'scale(1.1) rotate(1deg)' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translate(0,0) rotate(0deg)', opacity: '0.5' },
//           '25%': { transform: 'translate(15px,-15px) rotate(90deg)', opacity: '0.8' },
//           '50%': { transform: 'translate(-10px,15px) rotate(180deg)', opacity: '1' },
//           '75%': { transform: 'translate(10px,10px) rotate(270deg)', opacity: '0.8' },
//         },
//       },
//     },
//   },
//   plugins: [],
//   safelist: [
//     'w-0', 'w-full', 'w-[90%]', 'w-[75%]', 'w-[60%]',
//     'animate-mystical-pulse', 'animate-page-reveal', 'animate-title-glow',
//     'hover:scale-105', 'hover:translate-y-[-10px]', 'hover:rotate-y-2'
//   ],
// };




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        secondary: '#f7931e',
        accent: '#ffd700',
        dark: '#0a0a0a',
        'dark-bg': '#0a0a0a',
        light: '#ffffff',
        gray: '#cccccc',
        'text-light': '#ffffff',
        'text-gray': '#cccccc',
        'text-muted': '#888888',
        'mystical-purple': '#8b5cf6',
        'mystical-blue': '#3b82f6',
        'mystical-green': '#10b981',
        purple: '#8b5cf6',
        blue: '#3b82f6',
        border: 'rgba(255, 107, 53, 0.3)',
        'border-mystical': 'rgba(255, 107, 53, 0.3)',
      },

      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },

      backdropBlur: {
        xs: '2px',
      },

      animation: {
        // Combined Animations
        'mystical-pulse': 'mysticalPulse 8s ease-in-out infinite alternate',
        'page-reveal': 'pageReveal 1s ease-out forwards',
        'title-glow': 'titleGlow 3s ease-in-out infinite',
        'education-pulse': 'educationPulse 4s ease-in-out infinite',
        'skill-rotate': 'skillRotate 8s linear infinite',
        'skill-icon-float': 'skillIconFloat 3s ease-in-out infinite',
        'cgpa-float': 'cgpaFloat 2s ease-in-out infinite',
        'magic-circle': 'magicCircleRotate 10s linear infinite',
        'trail-fade': 'trailFade 1.2s ease-out forwards',
        'project-glow': 'projectGlow 3s ease-in-out infinite alternate',
        'float': 'float 15s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'fadeInDown': 'fadeInDown 1s ease-out',
        'expandWidth': 'expandWidth 1.5s ease-out',
        'pulse': 'pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'rotateGlow': 'rotateGlow 10s linear infinite',
        'bulletPulse': 'bulletPulse 2s ease-in-out infinite',
        'ripple': 'rippleExpand 0.6s ease-out',
        'orb-float': 'orbFloat 20s ease-in-out infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'underline-glow': 'underlineGlow 2s ease-in-out infinite',
        'gradient-rotate': 'gradientRotate 4s ease infinite',
        'success-pulse': 'successPulse 2s ease-in-out infinite',
        'fade-in-out': 'fadeInOut 2s ease-out forwards',
        'spin': 'spin 1s linear infinite',
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
        projectGlow: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.1) rotate(1deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)', opacity: '0.5' },
          '25%': { transform: 'translate(15px,-15px) rotate(90deg)', opacity: '0.8' },
          '50%': { transform: 'translate(-10px,15px) rotate(180deg)', opacity: '1' },
          '75%': { transform: 'translate(10px,10px) rotate(270deg)', opacity: '0.8' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        rotateGlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bulletPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        rippleExpand: {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-30px, 50px) scale(0.9)' },
          '75%': { transform: 'translate(30px, 30px) scale(1.05)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translateY(-30px) rotate(90deg)', opacity: '1' },
          '50%': { transform: 'translateY(-60px) rotate(180deg)', opacity: '0.5' },
          '75%': { transform: 'translateY(-30px) rotate(270deg)', opacity: '1' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
          '50%': { textShadow: '0 0 30px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.6)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        underlineGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)' },
        },
        gradientRotate: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        successPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateX(-50%) translateY(10px)' },
          '15%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '85%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(-10px)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
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
};



