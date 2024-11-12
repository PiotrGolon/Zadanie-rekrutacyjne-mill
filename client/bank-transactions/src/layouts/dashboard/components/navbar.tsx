import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import NavigationLinks from "./navigation-links";
import FakeAvatar from "./fake-avatar";

import { useResponsive } from "../../../hooks/use-responsive";
import { NavbarProps } from "../../../utils/types";

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { isTabletOrMobile } = useResponsive();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "xl",
          width: "100%",
          mx: "auto",
        }}
      >
        {isTabletOrMobile && (
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {!isTabletOrMobile && (
          <>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: isTabletOrMobile ? 1 : 0,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Millenium Task
            </Typography>
            <NavigationLinks />
          </>
        )}
        <FakeAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
