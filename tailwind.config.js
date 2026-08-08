/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f7f4f1',
          100: '#ece3da',
          200: '#d8c6b4',
          300: '#bfa07f',
          400: '#a17a54',
          500: '#8a5e38',
          600: '#714a2d',
          700: '#5a3a25',
          800: '#3f2a1d',
          900: '#2a1c14',
          950: '#1a110b',
        },
        tan: {
          50: '#fbf7f0',
          100: '#f3e8d5',
          200: '#e6d0ab',
          300: '#d4b27d',
          400: '#c2975a',
          500: '#b07f44',
          600: '#966837',
          700: '#78512e',
          800: '#5f4127',
          900: '#4d3622',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf5ea',
          200: '#f4ead2',
          300: '#ecd9b3',
        },
        charcoal: {
          700: '#2b2622',
          800: '#211d19',
          900: '#161310',
          950: '#0c0a08',
        },
        brass: {
          300: '#d8b878',
          400: '#c69a4f',
          500: '#b3843a',
          600: '#946a2c',
        },
      },
      fontFamily: {
        display: ['"Oswald"', '"Bebas Neue"', 'ui-sans-serif', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.08) translate(-1%,-1%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
        fadeIn: 'fadeIn 0.9s ease both',
        scaleIn: 'scaleIn 1.1s cubic-bezier(0.16,1,0.3,1) both',
        kenburns: 'kenburns 18s ease-out infinite alternate',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
