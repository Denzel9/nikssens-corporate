"use client";

import { createTheme } from "@mui/material/styles";

export const BASE_COLOR = 'rgb(77, 144, 142)';
export const BASE_LIGHT_COLOR = 'rgba(94, 174, 171, 0.83)';
export const BASE_EXTRA_LIGHT_COLOR = 'rgba(99, 182, 179, 0.23)';

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D0D0D",
      paper: "#1A1A1A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
    primary: {
      main: BASE_COLOR,
      contrastText: "#0D0D0D",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  shape: {
    borderRadius: 32,
  },
  typography: {
    fontFamily: "var(--font-plus-jakarta), sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0D0D0D",
          color: "#FFFFFF",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});
