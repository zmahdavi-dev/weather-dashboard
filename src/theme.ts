import { createTheme } from "@mui/material/styles";

import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";

export const appColors = {
  sidebar: {
    background: "#1B1F61",
    active: "#5E6494",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.65)",
    hover: "rgba(255, 255, 255, 0.08)",
  },

  weather: {
    purple: "#8F84E8",
    purpleDark: "#6F65C9",
    purpleLight: "#F1EFFE",
  },
} as const;

export const createAppTheme = (direction: "rtl" | "ltr") =>
  createTheme({
    direction,

    palette: {
      mode: "light",

      primary: {
        main: "#8F84E8",
        dark: "#6F65C9",
        light: "#F1EFFE",
        contrastText: "#FFFFFF",
      },

      background: {
        default: "#F7F7FB",
        paper: "#FFFFFF",
      },

      text: {
        primary: "#181A2A",
        secondary: "#7D8192",
      },

      divider: "#E8E9F1",

      action: {
        hover: "rgba(143, 132, 232, 0.08)",
        selected: "#F1EFFE",
      },
    },

    typography: {
      fontFamily: '"Vazirmatn", Arial, sans-serif',

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 700,
      },

      h6: {
        fontWeight: 600,
      },

      body1: {
        fontWeight: 400,
      },

      body2: {
        fontWeight: 400,
      },

      button: {
        fontWeight: 500,
        textTransform: "none",
      },
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: '"Vazirmatn", Arial, sans-serif',
            backgroundColor: "#F7F7FB",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0 4px 20px rgba(24, 26, 42, 0.05)",
          },
        },
      },
    },
  });

