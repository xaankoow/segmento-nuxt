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
        iranyekan: ['iranyekan']
      },
      colors: {
        base: {
          "100": "#FFFFFF",
          "200": "#D9D9D9",
          "300": "#7D7D7D",
          "content": "#002145"
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
        disable: "#D9D9D9"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      segmento: {
        base: {
          "100": "#FFFFFF",
          "200": "#D9D9D9",
          "300": "#7D7D7D",
          "content": "#002145"
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
          default: "#F2F5F7",
          focus: "#0A65CD",
          active: "#0B4B94",
        },
        disable: "#D9D9D9"
      }
    },
  },
}

