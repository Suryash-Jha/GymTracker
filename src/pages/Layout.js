import { Outlet, Link } from "react-router-dom";
import DrawerBasic from "../components/DrawerUI";
import { Box } from "@mui/joy";

const Layout = () => {
    return (
        <>
            <Box sx={{ padding: '2vh' }}>
                <DrawerBasic />
                <Outlet />
            </Box>
        </>
    )
};

export default Layout;