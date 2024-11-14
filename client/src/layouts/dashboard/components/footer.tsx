import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: theme.palette.background.default }}
      >
        © 2024 Millenium Task. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
