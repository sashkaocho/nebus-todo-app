const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        success: "#16a34a",
        warning: "#ffc107",
        error: "#dc2626",
        secondary: "#06b6d4",
        primary: {
          50: "#eef3ff",
          100: "#e0e8ff",
          200: "#c8d4fd",
          300: "#a6b9fb",
          400: "#8392f6",
          500: "#5963ee",
          600: "#4a48e3",
          700: "#3e3ac8",
          800: "#3331a2",
          900: "#2f3080",
          950: "#1d1c4a",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}
