import { Box, Typography } from '@mui/material'
import React from 'react'
import html from '../../../assets/HTML5_logo_and_wordmark.svg.png'
import styled from '@emotion/styled'
import css from '../../../assets/css-logo.png'
import js from '../../../assets/javascript-logo-transparent-logo-javascript-images-3.png'

function Skills() {
    const Logo=styled("img")(({theme})=>({
        width:"100px"
    }))
  return (
    <div>
      <Box >
      
      <Box sx={{display:"flex",padding:"100px",gap:"13rem"}}>
      
        <Logo src={html} alt="" />
        <Logo src={css} alt="" />
        <Logo src={js} alt="" />    
        </Box>   
        </Box>   
           
    </div>
  )
}

export default Skills
