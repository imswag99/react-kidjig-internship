/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#6881FF;",
        bg: "#151515;",
        radiate: "#101C5C;",
      },
      boxShadow: {
        "3xl": "0 35px 60px 5rem rgba(0, 0, 0, 0.1)",
      },
      screens: {
        'sm': {"max" : "640px"},
        'md': {"min": "650px", "max" : "1024px"},
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
