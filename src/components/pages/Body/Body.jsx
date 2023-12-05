import { Box, Typography, keyframes } from "@mui/material";
import { styled } from "@mui/material";
import React from "react";
import pic from "../../../assets/d4a76f39-352e-4bad-9a71-46f02f4b4b84.jpeg";
import About from "../About/About";
import Skills from "../skill/Skills";
import Projects from "../projects/Projects";

function Body() {
  //key

  //style
  const Main_box = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  const Text_box = styled(Box)(({ theme }) => ({
    width: "60%",

    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  }));
  const Hello = styled(Typography)(({ theme }) => ({
    fontFamily: "italic sans-serif",
  }));
  const Name = styled(Typography)(({ theme }) => ({
    marginLeft: "11rem",
    fontFamily: "italic sans-serif",
    color: "#8D23A7",
  }));
  const Picture = styled("img")(({ theme }) => ({
    width: "300px",
    borderRadius: "100%",

    marginRight: "80px",
  }));

  return (
    <div>
      <Main_box>
        <Text_box>
          <Hello variant="h2">HELLO</Hello>
          <Typography
            variant="body1"
            sx={{
              marginLeft: "11rem",
              fontFamily: "italic sans-serif",
              fontSize: "24px",
            }}
          >
            I'm
          </Typography>
          <Name variant="h3">Anurag</Name>
        </Text_box>
        <Box>
          <Picture src={pic} alt="" />
        </Box>
      </Main_box>
      <About/>
     <Projects/>
    </div>
  );
}

export default Body;
