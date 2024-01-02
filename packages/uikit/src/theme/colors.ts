import { Colors } from "./types";

export const baseColors = {
  primary: "#1BD3D5",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#212929",
  failure: "#FF2d55",
  success: "#31D0AA",
  warning: "#D87E2C",
};

export const tooltipColors = {
  background: "#111717",
  borderColor: "#384748",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#12171A",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};
export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  tooltipColors,
  background: "#020F0F",
  backgroundDisabled: "#233e42",
  backgroundAlt: "#020F0F",
  cardBorder: "#171E1E",
  cardBackground: "#111717",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#12171A",
  text: "#CFDADA",
  textDisabled: "#666171",
  textSubtle: "#6E8182",
  textSubSubtle: "#3C4E4E",
  disabled: "#524B63",
  btnTextColor: "#111717",
  btnBgSecondaryColor: "#01100f",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
  borderColor: "#384748",
};
export const lightColors = darkColors;
