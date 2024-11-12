import PersonIcon from "@mui/icons-material/Person";

import { Avatar, IconButton } from "@mui/material";

import { useTheme } from "@mui/material/styles";

const FakeAvatar = () => {
  const theme = useTheme();

  return (
    <IconButton aria-label="User profile">
      <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
        <PersonIcon />
      </Avatar>
    </IconButton>
  );
};

export default FakeAvatar;
