/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cosmic-blue": "#0B132B",
        cobalt: "#1E90FF",
        bronze: "#D4A017",
        "light-gray": "#ECEFF4",
      },
    },
  },
  plugins: [],
};
