/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc300",
        secondary: "#ffffcc",
        background: "#17061f",
        neutral: "#55218f",
        accent: "#c6c4d2",
        highlight: "#be8c23",
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
