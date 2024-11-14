import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

import Header from "./components/header";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 4,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
