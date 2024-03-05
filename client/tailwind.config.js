/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#f03649",
        secondary: "#0dbb83",
        background: "#eef2f5",
        foreground: "#ffff",
        front: "",
        back: "",
        gray: "#748393",
        blue: "#0052fe",
        light_blue: "#e7f4fd",
        'green-200': "#15af7b",
        green : "#e7faf4",
        light_green: "#eaf9f4",
        barblue: "#0081fd",
        barorgange: "#f6a104",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
