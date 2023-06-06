/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DM: ['"DM Sans"'],
      },
      colors: {
        primary: "#000",
        bg: "#09090A",
        sidebar: "#1d1d1d",
        sidebarText: "#3DAFCD",
        accent: "#64C7E3",
        accent2: "#008080",
        cards: "#242629",
        input: "#4242422d",
        inputPh: "#42424262",
        inputText: "#424242",
        red: "#cf5454",
        green: "#54cf7f",
        darkGreen: "#4A735F",
        buttongreen: "#80E6AF",
        textGreen: "#00FF00",
      },
    },
  },
  plugins: [],
};

