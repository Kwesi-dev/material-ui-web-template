import React from 'react'
import { Box, Container, Paper, Typography, Grid, Button, InputBase } from "@mui/material"
import SapiensImg from "../assets/sapiens.webp"
import Slant from "../assets/slant.svg"
const Home = () => {
  return (
    <Paper 
        sx={(theme)=>({backgroundColor: "#202140", height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`, width:"100%", overflowX: "hidden",position: "relative", top: `${theme.mixins.toolbar.minHeight}px`})} elevation={0}>
        <Container maxWidth="lg" sx={{height: "100%"}}>
            <Grid container alignItems="center" justifyContent="center" sx={{height: "80%"}}>
                <Grid item xs={12} md={6} sx={{pl: 3}}>
                    <Box sx={{width: "80%", mb: 4}}>
                        <Typography variant="h3" component="h3" color="#ffff" sx={{fontWeight: "bold", mb: 2}}>Get Paid Easily</Typography>
                        <Typography variant="h3" component="h3" color="#ffff" sx={{fontWeight: "bold"}}>Without Hassle</Typography>
                    </Box>
                    <Typography variant="body1" component="div"color="#ffff" sx={{width: "80%", mb: 4}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta tempore dolorem harum quae placeat, laudantium, animi quis ratione alias
                    </Typography>
                    <Box sx={{backgroundColor: "#ffff", width: "80%", height: 60, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                        <InputBase
                            placeholder="Enter email address"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Button variant="contained" color="error">Sign up</Button>
                    </Box>
                </Grid> 
                <Grid item xs={12} md={6} alignItems="center" justifyContent="flex-end" sx={{zIndex: 4, width: "100%", height: "100%", pt: 6}}>
                    <img src={SapiensImg} alt="homepage img" style={{width: "80%", height: "100%", objectFit: "contain", float: "right"}}/>
                </Grid> 
            </Grid>
        </Container>
        <Box sx={{backgroundImage: `url(${Slant})`, height: 200, width: "100%", position: "absolute", bottom: 0, zIndex: 1, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} elevation={0}></Box>
    </Paper>
  )
}

export default Home