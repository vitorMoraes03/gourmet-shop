/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        subtitle: ['var(--font-noto)', 'sans-serif'],
        title: ['var(--font-bodoni)', 'serif'],
        text: ['var(--font-cormorant)', 'sans-serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        green: '#5BAB5D',
        orange: '#b5442b',
        darkerGreen: '#36654f',
        gray: '#f4f7f5',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
    plugins: [],
  },
};
