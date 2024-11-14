// src/hooks/useResponsive.ts

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useResponsive = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // ≥960px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px ≤ width < 960px
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  return { isDesktop, isTablet, isMobile, isTabletOrMobile };
};
