/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto Flex Variable", "sans-serif"],
      montserrat: ["montserrat Variable", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "access-image": "url('src/assets/Frame 116.png')",
      },
      keyframes: {
        pathmove: {
          "0%": { height: 0, top: 0, opacity: 0 },
          "30%":{
            height:"40px",
            opacity: 1
          },
          "100%":{height:0,top:"60px",opacity: 0},
        },
      },
      animation: {
        "scroll-down": "pathmove 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FEE9C4",
          secondary: "#FFD79F",
          accent: "#E26E3F",
          neutral: "#944424",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
