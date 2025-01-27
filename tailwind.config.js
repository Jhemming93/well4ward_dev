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
        tealBlue: "#2ca3c2",
        darkGreen: "#345424",
        brickRed: "#852c35",
        brightYellow: "#FFD700",
        earthyOrange: "#db6c18",
        gray: "#E5E5E5",
        white: "#FFFFFF",
        nGreen: "#485b55",
      },
    },
  },
  plugins: [],
};
