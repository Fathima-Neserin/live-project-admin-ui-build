/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0F6FF;",
        highlight: "#5570F1;",
        textHl: "black",
        textLg: "gray",
        highlight: "#6F4FF2",
        standard: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
