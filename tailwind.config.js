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
        TTnormS: ["TT Norms Pro Light", "TT Norms Pro Light Italic"],
        TTnormXS: ["TT Norms Pro ExtraLight", "TT Norms Pro ExtraLight Italic"],
        TTnormT: ["TT Norms Pro Thin", "TT Norms Pro Thin Italic"]
      },
      colors: {
        wardah: {
          primary: "#80B7BC",
          button: "#006F7A",
          pink: "#FDE5DB",
          danger: "#EB8871",
          light: "#70CACB",
          dark: "#48B9C7",
          gray: "#8C8E90",
          salem: "#F68D76",
          ardent: "#006F79"
        },
      },
      fontSize: {
        '10xl': '200px'
      }
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
