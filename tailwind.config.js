/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./widget/**/*.{ts, js, vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranyekan: ["iranyekan"],
      },
      colors: {
        base: {
          100: "#FFFFFF",
          200: "#FCFCFB",
          250: "#F2F5F7",
          300: "#D3D5E2",
          350: "#D7D7D7",
          400: "#D9D9D9",
          500: "#7D7D7D",
          content: "#002145",
        },
        icon: "#002145",
        success: "#10CCAE",
        warning: "#ffcb1c",
        danger: "#ef4444",
        error: "#F35242",
        primary: {
          DEFAULT: "#0A65CD",
          hover: "#0AC7E2",
          focus: "#009FB9",
          active: "#009FB9",
          disabled: "#D9D9D9",
          text: "#FFFFFF"
        },
        secondary: {
          DEFAULT: "#F2F5F7",
          hover: "#0A65CD",
          focus: "#0B4B94",
          active: "#0B4B94",
          disabled: "#D9D9D9",
          text: "#488CDA"
        },
        disabled: "#7D7D7D"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
