import { styled } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import food from '../../../assets/Screenshot 2023-12-03 160130.png'
import edu from '../../../assets/Screenshot 2023-12-05 143153.png'

function Projects() {
  const Main_box=styled(Box)(({theme})=>({
    marginTop:"100px",
    marginBottom:"100px"
  
  }))
  const Content = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop:"30px",
    gap: "50px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  return (
    <Main_box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" sx={{marginBottom:"30px"}}>Projects</Typography>
        <br />
        <Content>
          <Box><img src={food} alt="" style={{width:"500px",}} /></Box>
          <Box
            sx={{
              width: "400px",
              
              padding: "10px",
            }}
          >
            <Typography>
              This is an demo for an restaurant website where you can order food items.
            </Typography><br />
            <Typography>
              Buld using React,Material UI
            </Typography>
            <Box sx={{ marginLeft: "250px", marginTop: "20px" }}>
              <Button href="https://github.com/anuragCoder12/Restaurant" sx={{color:"#8D23A7"}}>Code</Button>
              <Button href="https://anuragcoder12.github.io/Restaurant/" sx={{color:"#8D23A7"}}>Demo</Button>
            </Box>
          </Box>
        </Content>
        <Content>
          <Box><img src={edu} alt="" style={{width:"500px", border:"1px solid"}} /></Box>
          <Box
            sx={{
              width: "400px",
              
              padding: "10px",
            }}
          >
            <Typography>
              This is an demo for an educational institute
            </Typography><br />
            <Typography>
              Buld using React, css
            </Typography>
            <Box sx={{ marginLeft: "250px", marginTop: "20px" }}>
              <Button href="https://github.com/anuragCoder12/course_site/settings/pages" sx={{color:"#8D23A7"}}>Code</Button>
              <Button href=" https://anuragcoder12.github.io/course_site/" sx={{color:"#8D23A7"}}>Demo</Button>
            </Box>
          </Box>
        </Content>
      </Box>
    </Main_box>
  );
}

export default Projects;
