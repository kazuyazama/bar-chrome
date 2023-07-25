/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto Flex Variable", "sans-serif"],
      montserrat: ["montserrat Variable", "sans-serif"],
      moonDance:["Moon Dance", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        "access-image": "url('/src/assets/Frame116.webp')",
        "access-image-svg": "url('/src/assets/Frame 116.svg')",
      },
      animation: {
        "scroll-down": "pathmove 1.4s ease-in-out infinite",
        "fade-in-left":
          "fade-in-left 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-right":
          "fade-in-right 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-bottom": "fade-in-bottom 1.2s ease-in-out   forwards",
        "fade-in":
          "fade-in 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   forwards",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "fade-in-right": {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },

        pathmove: {
          "0%": { height: 0, top: 0, opacity: 0 },
          "30%": {
            height: "40px",
            opacity: 1,
          },
          "100%": { height: 0, top: "60px", opacity: 0 },
        },
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
