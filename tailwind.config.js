/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: '375px', // to make design responsive
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {}, // This should be a sibling of screens, not a child
  },
  plugins: [],
}