import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { getDesignTokens } from "../../theme";
import { ColorModeContext } from "./theme-contex";
import { getInitialMode } from "../../utils/helpers";

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">(getInitialMode);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme: Theme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
