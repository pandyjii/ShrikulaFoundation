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
        scroll: "scroll 22s linear infinite",
        scroll2: "scroll 30s linear infinite",
        scrollSm: "scroll 20s linear infinite",
        scrollSmInspire: "scroll 8s linear infinite",
        fadeIn: "fadeIn 3s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }, 
        },
        scrollSm: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollSmInspire: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-400%)" },
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
