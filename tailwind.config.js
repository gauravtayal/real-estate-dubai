/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#007bff",
          secondary: "#222",
          accent: "#7a7a7a",
          neutral: "#636363",
          info: "#17a2b8",
          success: "#28a745",
          warning: "#ffc107",
          error: "#dc3545",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
