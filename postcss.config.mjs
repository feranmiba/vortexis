// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], // Adjust the paths as needed
  theme: {
    extend: {
      colors: {
        primaryblue: "#407BFF", // Primary blue
        secondaryblue: "#717171", // Secondary blue
        button: "#009AFF", // Button blue
        title: "#4D4D4D", // Dark title
        darktext: "#202020", // Dark text
        lighttext: "#272833", // Light text
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

