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
        scroll: "scroll 12s linear infinite",
        scroll2: "scroll 25s linear infinite",
        scrollSm: "scroll 8s linear infinite",
        fadeIn: "fadeIn 3s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }, // Moves the content completely out of view
        },
        scroll2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }, // Moves the content completely out of view
        },
        scrollSm: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 1, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
