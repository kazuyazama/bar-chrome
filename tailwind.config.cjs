/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	fontFamily:{
		"roboto":["Roboto Flex Variable", "sans-serif"],
		"montserrat":["montserrat Variable","sans-serif"]
	},
    extend: {},
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
