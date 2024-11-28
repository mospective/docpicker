/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2e3d49",
        secondary: "#427AA1",
        grey: "#EFEFEF",
        pale: "#EBF2FA",
        tertiary: "#679436",
        quaternary: "#FCAE24",
        black: "#1F2421",
        error: "#f4b41e",
        fadeGreen: "#15803d",
      },
      fontFamily: {
        nunitoLight: ["Nunito-Light", "sans-serif"],
        nunitoRegular: ["Nunito-Regular", "sans-serif"],
        nunitoMedium: ["Nunito-Medium", "sans-serif"],
        nunitoSemibold: ["Nunito-SemiBold", "sans-serif"],
        nunitoBold: ["Nunito-Bold", "sans-serif"],
        nunitoItalic: ["Nunito-Italic", "sans-serif"],
        nunitoLightItalic: ["Nunito-LightItalic", "sans-serif"],
        nunitoMediumItalic: ["Nunito-MediumItalic", "sans-serif"],
      }
    },
  },
  plugins: [require("tailgrids/plugin")],
}

