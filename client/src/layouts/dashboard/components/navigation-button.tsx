import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import { NavigationButtonProps } from "../../../utils/types";

const NavigationButton = ({ path, to }: NavigationButtonProps) => {
  return (
    <Button key={path} component={Link} to={to} color="inherit">
      {path}
    </Button>
  );
};

export default NavigationButton;
