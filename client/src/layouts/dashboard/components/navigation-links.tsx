import Box from "@mui/material/Box";

import NavigationButton from "./navigation-button";

import { navigation } from "../../../utils/navigation";

const NavigationLinks = () => {
  return (
    <Box
      component="nav"
      aria-label="Drawer navigation"
      sx={{ display: "flex", gap: 2 }}
    >
      {navigation.map((link) => (
        <NavigationButton key={link.text} path={link.text} to={link.to} />
      ))}
    </Box>
  );
};

export default NavigationLinks;
