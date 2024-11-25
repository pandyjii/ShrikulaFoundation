/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        comic: ['"Comic Sans MS"', "cursive"],
      },
      animation: {
        scroll: "scroll 15s linear infinite", // Extended duration for smoother animation
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }, // Moves the content completely out of view
        },
      },
    },
  },
  plugins: [],
};
