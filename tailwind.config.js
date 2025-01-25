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
        // blue
        first: {
          DEFAULT: "#2ca2c1",
        },
        //green
        second: {
          DEFAULT: "#345424",
        },
        //orange
        third: {
          DEFAULT: "#db6b17",
        },
        //brown
        forth: {
          DEFAULT: "#9a3d31",
        },
        //olive
        fifth: {
          DEFAULT: "#a8a890",
        },
        //light color
        light: {
          DEFAULT: "#ffffff",
        },
        //dark color
        dark: {
          DEFAULT: "#000000",
        },
        //gold
        sixth: {
          DEFAULT: "#edca60",
        },
      },
    },
  },
  plugins: [],
};
