import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { navigation } from "../../../utils/navigation";
import { DrawerContentProps } from "../../../utils/types";

const DrawerContent = ({ onClose }: DrawerContentProps) => {
  return (
    <Box onClick={onClose} role="presentation">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" noWrap component="div">
          Millenium Task
        </Typography>
      </Toolbar>
      <List>
        {navigation.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.to}
              aria-label={`Navigate to ${item.text}`}
            >
              <ListItemText
                primary={item.text}
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerContent;
