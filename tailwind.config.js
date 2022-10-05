/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roc-grotesk": ["roc-grotesk", "sans-serif"],
        "roc-grotesk-regular": ["Roc Grotesk Regular", "sans-serif"],
        "roc-grotesk-medium": ["Roc Grotesk Medium", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
