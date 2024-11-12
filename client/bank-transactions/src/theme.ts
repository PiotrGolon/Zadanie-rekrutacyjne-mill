import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Kolory dla trybu jasnego
          primary: { main: "#e5007d" },
          secondary: { main: "#f8bbd0" },
          background: { default: "#ffffff", paper: "#f5f5f5" }, // Zmienione na #f5f5f5
          success: { main: "#4caf50" }, // Przychody
          error: { main: "#e57373" }, // Rozchody
          text: { primary: "#424242" }, // Tekst
        }
      : {
          // Kolory dla trybu ciemnego
          primary: { main: "#90caf9" },
          secondary: { main: "#f8bbd0" },
          background: { default: "#121212", paper: "#eeeeee" }, // Zmienione na #eeeeee
          success: { main: "#81c784" }, // Pastelowy zielony
          error: { main: "#ef9a9a" }, // Jasny czerwony
          text: { primary: "#ffffff" }, // Tekst w trybie ciemnym
        }),
  },
});
