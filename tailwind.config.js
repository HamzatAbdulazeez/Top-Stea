/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colours sampled from the TOP-STEA logo
        gold: {
          DEFAULT: '#B88F50',
          50: '#faf6ee',
          100: '#f3ead7',
          200: '#e7d3ab',
          300: '#d8b783',
          400: '#c9a468',
          500: '#B88F50',
          600: '#9a753d',
          700: '#7a5b2f',
        },
        charcoal: {
          DEFAULT: '#373435',
          800: '#2d2a2b',
          900: '#211f20',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(34px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pageIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(.94) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .9s cubic-bezier(.22,1,.36,1) both',
        slideRight: 'slideRight .9s cubic-bezier(.22,1,.36,1) both',
        kenburns: 'kenburns 9s ease-out both',
        marquee: 'marquee 35s linear infinite',
        float: 'float 7s ease-in-out infinite',
        pageIn: 'pageIn .6s cubic-bezier(.22,1,.36,1) both',
        draw: 'draw 1s cubic-bezier(.22,1,.36,1) both',
        progress: 'progress 6.5s linear both',
        pop: 'pop .35s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
