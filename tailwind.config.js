/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#ff8300",
      white: "#fff",
      green: "green",
      grey: "#ddd",
      mainColor: "rgba(242, 242, 242, 1)",
      sliderBgColor: "#f2f2f27d",
      sliderItemColor: "#29292991",
      itemPcolor: "rgb(50, 72, 225)",
    },
    extend: {},

    screens: {
      xs: "550px",
      sm: "360px",
      md: "768px",
      lg: "992px",
      xl: "1110px",
      xxl: "1200px"
    },
  }
};
