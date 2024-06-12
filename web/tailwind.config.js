// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      "roboto-thin": ["ThinRoboto"],
      "roboto-light": ["LightRoboto"],
      sans: ["Niramit", "Sans-serif"],
      archivo: ["Archivo"],
      paytone: ["Paytone"],
    },
    extend: {},
    colors: {
      "bondi-blue": {
        DEFAULT: "#0285B8",
        50: "#74D7FD",
        100: "#60D1FD",
        200: "#38C6FD",
        300: "#0FBAFC",
        400: "#02A2E0",
        500: "#0285B8",
        600: "#015D81",
        700: "#013549",
        800: "#000D12",
        900: "#000000",
        950: "#000000",
      },
      abbey: {
        DEFAULT: "#464849",
        50: "#A1A4A5",
        100: "#979A9B",
        200: "#828687",
        300: "#6E7173",
        400: "#5A5D5E",
        500: "#464849",
        600: "#2B2C2C",
        700: "#0F1010",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
      white: {
        DEFAULT: "#FFFFFF",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#FFFFFF",
        600: "#E3E3E3",
        700: "#C7C7C7",
        800: "#ABABAB",
        900: "#8F8F8F",
        950: "#818181",
      },
      daintree: {
        DEFAULT: "#001D2F",
        50: "#008EE7",
        100: "#0082D2",
        200: "#0069A9",
        300: "#004F81",
        400: "#003658",
        500: "#001D2F",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
      "neon-carrot": {
        DEFAULT: "#FEA736",
        50: "#FFF7ED",
        100: "#FFEED8",
        200: "#FFDCB0",
        300: "#FECB87",
        400: "#FEB95F",
        500: "#FEA736",
        600: "#FB8E01",
        700: "#C36F01",
        800: "#8B4F01",
        900: "#532F00",
        950: "#371F00",
      },
      "great-blue": {
        DEFAULT: "#2A669F",
        50: "#E4F7F8",
        100: "#CCEEF2",
        200: "#9CD7E5",
        300: "#6CB9D8",
        400: "#3B94CB",
        500: "#2A669F",
        600: "#234B83",
        700: "#1B3366",
        800: "#14204A",
        900: "#0C102E",
      },
      ghost: {
        DEFAULT: "#C5C9D0",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#F2F3F5",
        400: "#DCDEE2",
        500: "#C5C9D0",
        600: "#A6ACB7",
        700: "#878F9E",
        800: "#6A7383",
        900: "#515864",
        950: "#444A54",
      },
      "shuttle-gray": {
        DEFAULT: "#5F646D",
        50: "#FFFFFF",
        100: "#F4F5F6",
        200: "#DEE0E3",
        300: "#C8CBD0",
        400: "#B3B6BD",
        500: "#9DA2AA",
        600: "#878D97",
        700: "#727883",
        800: "#5F646D",
        900: "#40434A",
        950: "#313338",
      },
      "st-tropaz": {
        DEFAULT: "#29669F",
        50: "#FCFDFE",
        100: "#ECF3FA",
        200: "#CBDFF2",
        300: "#ABCBE9",
        400: "#8AB7E1",
        500: "#6AA3D9",
        600: "#498FD0",
        700: "#317BBF",
        800: "#29669F",
        900: "#1D4972",
        950: "#183B5C",
      },
      flamingo: {
        DEFAULT: "#EF4444",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FCDADA",
        500: "#F9B5B5",
        600: "#F58F8F",
        700: "#F26A6A",
        800: "#EF4444",
        900: "#E71414",
        950: "#CD1212",
      },
      "mountain-meadow": {
        DEFAULT: "#10B981",
        50: "#FCFFFE",
        100: "#E9FDF7",
        200: "#C4FAE8",
        300: "#9EF7D9",
        400: "#79F3CB",
        500: "#53F0BC",
        600: "#2EEDAE",
        700: "#13DF9B",
        800: "#10B981",
        900: "#0C855D",
        950: "#096C4B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};