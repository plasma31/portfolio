/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
