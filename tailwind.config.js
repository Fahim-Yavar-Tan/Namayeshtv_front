/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffe382",
        secondary: "#f3ba69",
        background: "#0d0d0d",
        neutral: "#2a2a2a",
        accent: "#e0a55c",
        highlight: "#740000",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to left, rgba(13, 13, 13, 0.8) 60%, rgba(13, 13, 13, 0.8) 75%, transparent)",
        "custom-gradient1":
          "linear-gradient(to top, rgba(13, 13, 13, 1) 60%, rgba(13, 13, 13, 0.8) 75%, transparent)",
      },
    },
  },
  plugins: [],
};
