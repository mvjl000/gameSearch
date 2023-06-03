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
        unbounded: ['var(--font-unbounded)'],
        dbMono: ['var(--font-db-mono)'],
      },
      textColor: {
        'default': '#f9fafb'
      },
    },
  },
  plugins: [],
}
