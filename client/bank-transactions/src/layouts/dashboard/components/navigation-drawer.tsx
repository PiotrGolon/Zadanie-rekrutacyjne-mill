import Drawer from "@mui/material/Drawer";

import DrawerContent from "./drawer-content";

import { NavigationDrawerProps } from "../../../utils/types";

const NavigationDrawer = ({
  open,
  onClose,
  drawerWidth = 240,
}: NavigationDrawerProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      role="navigation"
      aria-label="Side navigation drawer"
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <DrawerContent onClose={onClose} />
    </Drawer>
  );
};

export default NavigationDrawer;
