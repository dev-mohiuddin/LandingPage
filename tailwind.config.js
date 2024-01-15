/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "380px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
}

