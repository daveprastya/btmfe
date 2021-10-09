const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mons: ["Montserrat"],
        TTnorm: ["TT Norms Pro Regular", "TT Norms Pro Italic"],
        TTnormB: ["TT Norms Pro Bold", "TT Norms Pro Bold Italic"],
      },
      colors: {
        wardah: {
          primary: "#7FC7C6",
          button: "#006F7A",
          pink: "#FDE5DB",
          danger: "#EB8871",
        },
      },
    },
    borderWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    container: {
      center: true,
    },
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      padding: ["hover", "focus"],
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
