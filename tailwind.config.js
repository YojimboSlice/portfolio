/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      backgroundSize: {
        "200%": "200%",
      },
      gradientColorStops: {
        "0%": "#231557",
        "29%": "#44107a",
        "67%": "#ff1361",
        "100%": "#fff800",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
