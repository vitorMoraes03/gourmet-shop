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
    },
  },
  plugins: [],
};
