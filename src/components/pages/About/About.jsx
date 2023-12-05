import React from "react";
import about from "../../../assets/download (1).jpeg"
import { Box, Typography, styled } from "@mui/material";
function About() {
  const Main_box = styled(Box)(({ theme }) => ({
    padding: "100px",
    [theme.breakpoints.down("md")]: {
      padding: "30px",
    },
  }));
  const About=styled(Box)(({theme})=>({
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent:"space-evenly",
    alignItems: "center",
    
    [theme.breakpoints.down("md")]:{
      display:"flex",
      flexDirection:"column",
      gap:"20px"
    }
  }))
  return (
    <div>
      <Main_box>
      <Typography variant="h5" sx={{ fontStyle: "italic",textAlign:"center" ,marginBottom:"40px"}}>
            About
          </Typography>
        <About>
          <Box>
            <img src={about} alt="" style={{width:"400px"}} />
          </Box>
          <Box sx={{width:"500px"}}>
         
          <Typography variant="body1" sx={{ fontStyle: "italic",fontSize:"19px" }}>
            👋 Hello there! I'm Anurag, a passionate React.js developer eager to
            contribute to innovative projects and grow as a professional in the
            world of web development., I have acquired a solid foundation in
            computer science and an enthusiasm for building dynamic and
            user-friendly web applications using React.js.
          </Typography>
          </Box>
        </About>
      </Main_box>
    </div>
  );
}

export default About;
