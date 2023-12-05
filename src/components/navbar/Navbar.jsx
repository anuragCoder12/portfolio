import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate=useNavigate
  const [link, setLink] = useState({ left: false });
  //Links
  const content = [
    {
      path: "/",
      name: "Home",
    },
   
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  //drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLink({ ...link, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {content.map((data, index) => (
          <Link to={data.path} style={{textDecoration:"none"}}>  <ListItem key={index} disablePadding >
          <ListItemButton>
            <ListItemIcon>{}</ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItemButton>
        </ListItem></Link>
         
        ))}
      </List>
    </Box>
  );

  //styling
  const Main_box = styled(Box)(({ theme }) => ({
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const Link_box = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing("4rem"),
    paddingLeft: "30rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const Menu = styled(MenuIcon)(({ theme }) => ({
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <Main_box>
      <Menu onClick={toggleDrawer("left", true)} />
      <Drawer
        anchor={"left"}
        open={link["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>

      <Link_box>
        {content.map((data, index) => (
          <Link to={data.path}style={{textDecoration:"none"}}>
          <Typography 
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": {
                color: "#8D23A7",
              },
            }} 
          >
            {data.name}
          </Typography></Link>
          
        ))}
      </Link_box>
      <Box>
        <Link to={'/contact'}>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#8D23A7",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#70008A",
            },
          }}
        >
          contact me
        </Button>
        </Link>
      </Box>
    </Main_box>
  );
}

export default Navbar;
