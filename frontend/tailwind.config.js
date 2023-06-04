/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      margin: {
        "vw-1": "1vw",
        "vw-2": "2vw",
        "vw-3": "3vw",
        "vw-14": "14vw",
      },
    },
  },
  plugins: [],
};
