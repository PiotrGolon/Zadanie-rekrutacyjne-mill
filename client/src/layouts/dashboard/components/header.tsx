import { useState } from "react";

import NavigationDrawer from "./navigation-drawer";
import Navbar from "./navbar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Navbar onMenuClick={handleDrawerToggle} />
      <NavigationDrawer open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Header;
