/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sanf-serif'],
        general:['general', 'sanf-serif'],
        'circular-web': ['circular-web', 'scanf-serif'],
        'robert-medium':  ['robert-medium', 'scanf-serif'],
        'robert-regular': ['robert-regular', 'scanf-serif'],
        
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          300: '#5794FF',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66',
        }
      }
    },
  },
  plugins: [],
};
