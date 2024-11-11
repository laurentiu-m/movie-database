/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#E63946", // Bold red for a striking primary color.
      secondary: "#457B9D", // Muted blue-green to complement the primary red.
      violet: "#9A5CCB", // Deep purple for accents with a bit of vibrance.
      success: "#06D6A0", // Bright teal-green for success messages on dark backgrounds.
      error: "#FF4D4D", // Bright red for error alerts that’s distinct from primary.
      warning: "#FFB703", // Warm amber for warnings that contrasts against a dark background.
      background: "#1D1E26", // Dark, charcoal gray for the main background.
      surface: "#2A2C34", // Slightly lighter dark gray for cards, modals, or input fields.
      textPrimary: "#E5E5E5", // Light gray for main text on dark backgrounds.
      textSecondary: "#A8A8A8", // Medium gray for secondary text for readability.
      border: "#3A3A46", // Subtle dark gray for borders to add contrast without overpowering.
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      "mobile-m": "375px",
      "mobile-l": "425px",
      tablet: "768px",
      laptop: "1024px",
      "laptop-l": "1440px",
    },
    extend: {},
  },
  plugins: [],
};
