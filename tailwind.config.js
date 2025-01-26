/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tealBlue: "#5FB7D4",
        darkGreen: "#15633F",
        brickRed: "#A51E22",
        brightYellow: "#FFD700",
        skyBlue: "#C8F0F4",
        gray: "#E5E5E5",
        white: "#FFFFFF",
        nGreen: "#ced2ba",
        royalPurple: "#4B006E",
      },
    },
  },
  plugins: [],
};
