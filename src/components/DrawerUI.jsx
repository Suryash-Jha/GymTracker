import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

export default function DrawerBasic() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };
  const ListWithLinkMap = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Daily Tracker",
      link: "/daily-tracker",
    },
    {
      name: "Overall Stats",
      link: "/overall-stats",
    },
    {
      name: "Setting",
      link: "/setting",
    },
    {
      name: "Weekly Scheduler",
      link: "/scheduler",
    },
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid xs={12} md={12} lg={12}>
        <Typography sx={{ fontSize: "5vh" }} align="center">
          <img
            src="/images/strength.png"
            style={{
              height: "4vh",
              transform: "scaleX(-1)",
            }}
          ></img>
          TRACK FIT
          <img src="/images/strength.png" style={{ height: "4vh" }}></img>
        </Typography>
      </Grid>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {ListWithLinkMap.map((data, index) => (
              <ListItem key={index}>
                <Link to={data.link}>
                  <ListItemButton> {data.name} </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[{ name: "Setting", link: "/setting" }].map((data, index) => (
              <ListItem key={index}>
                <Link to={data.link}>
                  <ListItemButton> {data.name} </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          {/* <List>
                        {['Setting'].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </List> */}
        </Box>
      </Drawer>
    </Box>
  );
}
