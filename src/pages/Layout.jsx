import React from "react";
import { Outlet, Link } from "react-router-dom";
import DrawerBasic from "../components/DrawerUI";
import { Box } from "@mui/joy";
import SimpleBottomNavigation from "../components/BottomNav";

const Layout = () => {
  return (
    <>
      <Box sx={{ padding: "2vh" }}>
        <DrawerBasic />
        <Outlet />
        {/* <SimpleBottomNavigation /> */}
      </Box>
    </>
  );
};

export default Layout;
