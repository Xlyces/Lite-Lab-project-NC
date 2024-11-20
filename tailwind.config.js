/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{component.html,html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        intro: "fade-in 1s linear forwards",
        "fade-up": "fade-up 0.5s ease-in-out forwards",
        wiggle: "wiggle 10s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { rotate: "0deg" },
          "50%": { rotate: "4deg" },
        },
        "fade-switch": {
          "0%, 100%": { opacity: "0" },
          "5%, 95%": { opacity: "100" },
        },
        intro: {
          "0%": { opacity: "0", transform: "translate(-50%, -50%)" },
          "50%": { opacity: "100", transform: "translate(-50%, -50%)" },
          "100%": { opacity: "100", transform: "translate(-50%, -120%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "100", transform: "translateY(0px)" },
        },
      },
    },
    colors: {
      purple: "#5F0099",
      "dark-purple": "#421d58",
      "light-purple": "#A800E3",
      white: "#fff",
      red: "#ff0000",
      "crimson": "#8D0000",
      "gray-light": "#f3f3f3",
      gray: "#e6e6e6",
      "gray-dark": "#909090",
      black: "#171717",
      'midnight': "#000000",
      "light-black": "#1e1e1e",
      transparent: "transparent",
      current: "currentColor",
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
  safelist: ["opacity-0", "opacity-100"],
};