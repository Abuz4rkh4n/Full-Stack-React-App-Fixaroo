/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Open-Sans": "Open Sans",
        Montserrat: "Montserrat",
        Roboto: "Roboto",
      },
      colors: {
        "navbar-button": "#EBAD1E",
        "text-black": "#212121",
        "step-progress": "#EAEAEA",
        "continue-button": "#0F1337",
        "border-grey": "#000000 15%",
        "dra-and-drop": "#FAFAFB",
        "link-blue": "#0F1337",
      },
    },
  },
  plugins: [],
};
