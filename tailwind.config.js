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
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        green: 'rgb(21 128 61)',
        orange: 'rgb(251 146 60)',
        darkerGreen: 'rgb(20 83 45)',
        gray: 'rgb(229 231 235)',
        darkerGray: 'rgb(107 114 128)',
        black: 'rgb(2 6 23)',
        white: '#FFFFFF',
      },
    },
    plugins: [],
  },
};
