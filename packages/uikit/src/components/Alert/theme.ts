import { darkColors, lightColors } from "../../theme/colors";
import { AlertTheme } from "./types";

export const light: AlertTheme = {
  background: lightColors.backgroundAlt,
  info: lightColors.warning,
  success: "green",
  danger: lightColors.backgroundAlt,
  warning: lightColors.warning,
};

export const dark: AlertTheme = {
  background: darkColors.backgroundAlt,
  info: darkColors.warning,
  success: "green",
  danger: darkColors.backgroundAlt,
  warning: darkColors.warning,
};
