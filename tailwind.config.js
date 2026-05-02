/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0f0e0d',
          800: '#1a1817',
          700: '#262321',
          600: '#3a3633',
          500: '#524d48',
        },
        bone: {
          50: '#faf8f4',
          100: '#f5f1ea',
          200: '#ece6db',
          300: '#ddd4c3',
        },
        stone: {
          warm: '#8a847b',
          mid: '#6b6660',
          deep: '#4a4641',
        },
        bronze: {
          400: '#c8a26a',
          500: '#b08856',
          600: '#94703f',
          700: '#72542a',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,14,13,0.04), 0 8px 24px rgba(15,14,13,0.06)',
        lift: '0 2px 4px rgba(15,14,13,0.06), 0 20px 40px rgba(15,14,13,0.10)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
