/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
        },
        yellow: {
          500: "#f59e0b",
        },
        red: {
          500: "#ef4444",
        },
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      inset: {
        0: "0",
      },
    },
  },
  plugins: [],
};
