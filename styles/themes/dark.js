import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f",
    },
    background: {
      default: "#1e1e1f"
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
    allVariants: {
      color: "white",
    },
  },
});
