/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
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
        warning: "#FFCE47",
        error: "#F35242",
        primary: {
          DEFAULT: "#0A65CD",
          focus: "#0AC7E2",
          active: "#009FB9",
        },
        scondary: {
          DEFAULT: "#F2F5F7",
          focus: "#0A65CD",
          active: "#0B4B94",
        },
        bronze: "#BF8970",
        silver: "#7D7D7D",
        gold: "#FFCE47",
        diamond: "#0A65CD",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
