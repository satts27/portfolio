/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        "3d-custom":
          "rgba(198, 177, 157, .1) 0 0 2px, rgba(198, 177, 157, .3) 4px 5px 0, rgba(198, 177, 157, .2) 7px 11px 0, rgba(198, 177, 157, .1) 12px 17px 0, rgba(198, 177, 157, .05) 17px 23px 0",
        "3d-cream":
          "rgba(237, 230, 220, .1) 0 0 2px, rgba(237, 230, 220, .3) 4px 5px 0, rgba(237, 230, 220, .2) 7px 11px 0, rgba(237, 230, 220, .1) 12px 17px 0, rgba(237, 230, 220, .05) 17px 23px 0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["Teko", "sans-serif"],
        heading2: ["Anton", "sans-serif"],
        heading3: ["Kalam", "cursive"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        creme: "#ede6dc",
        occur: "#6d5444",
        pinkish: "#c6b19d",
        ocshadow: "#896e57",
        orangish: "#f4ebdb",
      },
      scale: {
        200: "2.00",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-3d": {
          textShadow:
            "rgba(198, 177, 157, .1) 0 0 2px, rgba(198, 177, 157, .3) 4px 5px 0, rgba(198, 177, 157, .2) 7px 11px 0, rgba(198, 177, 157, .1) 12px 17px 0, rgba(198, 177, 157, .05) 17px 23px 0",
        },
        ".text-shadow-3d-cream": {
          textShadow:
            "rgba(237, 230, 220, .1) 0 0 2px, rgba(237, 230, 220, .3) 4px 5px 0, rgba(237, 230, 220, .2) 7px 11px 0, rgba(237, 230, 220, .1) 12px 17px 0, rgba(237, 230, 220, .05) 17px 23px 0",
        },
      });
    },
  ],
};
