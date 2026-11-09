/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0f1c',
          secondary: '#0b1220',
          tertiary: '#0e172a',
        },
        surface: {
          DEFAULT: '#111b2e',
          hover: '#16233b',
          glass: 'rgba(17, 27, 46, 0.75)',
        },
        accent: {
          blue: '#4f8ef7',
          sky: '#60a5fa',
          cyan: '#22d3ee',
          cyanGlow: '#06b6d4',
        },
        navy: {
          850: '#0d1527',
          900: '#0a0f1c',
          950: '#070a14',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(79, 142, 247, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(79, 142, 247, 0.15)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

