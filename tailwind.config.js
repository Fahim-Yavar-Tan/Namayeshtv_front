/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffe382",
        secondary: "#f3ba69",
        background: "#0d0d0d",
        neutral: "#e0a55c",
        accent: "#2a2a2a",
        highlight: "#740000",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to left, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.8) 75%, transparent)",
        "custom-gradient1":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.8) 75%, transparent)",
      },
    },
  },
  plugins: [],
};
