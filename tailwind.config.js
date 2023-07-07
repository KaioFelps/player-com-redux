import tailwindScrollbar from "tailwind-scrollbar"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbar],
}

