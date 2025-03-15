/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-custom-blue",
    "text-custom-violet",
    "text-custom-pink",
    "text-custom-orange",
    "text-custom-orange-strong",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
