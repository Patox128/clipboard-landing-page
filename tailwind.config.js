/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(171, 66%, 44%)",
        secundary: "hsl(233, 100%, 69%)",
        "color-title": "hsl(210, 10%, 33%)",
        "color-text": "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        baijamjuree: ["Bai Jamjuree"],
      },
    },
  },
  plugins: [],
};
