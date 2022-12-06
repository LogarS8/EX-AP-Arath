import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#c5c5c5",
      main: "#5e5e5e",
      dark: "#424242",
    },
    background: {
      default: "#efefef",
    },
    secondary: {
      light: "#fff5f8",
      main: "#574759",
      dark: "#87586c",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontWeightBold: 700, // Roboto Condensed
  },
});
