/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        green: '#5bab5d',
        orange: '#f75f1e',
        darkerGreen: '#36654f',
        gray: '#f4f7f5',
        black: '#1c1515',
        white: '#FFFFFF',
      },
    },
    plugins: [],
  },
};
