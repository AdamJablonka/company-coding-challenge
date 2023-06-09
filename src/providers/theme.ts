import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontFamily: "Oswald, sans-serif",
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
  palette: {
    background: {
      default: "#f9f9f9",
    },
    primary: {
      main: "#27ebaf",
    },
  },
});
