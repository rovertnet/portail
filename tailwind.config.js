/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

