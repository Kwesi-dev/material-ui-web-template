import React from 'react'
import { Box, Container, Paper, Typography, Grid, Button, InputBase } from "@mui/material"
import SapiensImg from "../assets/sapiens.webp"
import Slant from "../assets/slant.svg"
const Home = () => {
  return (
    <Paper 
        sx={(theme)=>({backgroundColor: "#202140", height: {sm: "100%", md: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`}, width:"100%", overflowX: "hidden",position: "relative", top: `${theme.mixins.toolbar.minHeight}px`})} elevation={0}>
        <Container maxWidth="lg" sx={{height: "100%", width:"100%"}}>
            <Grid container alignItems="center" justifyContent="center" sx={{width: "100%", height: "80%", m: {xs: "0 auto"}}}>
                <Grid item xs={12} md={6} sx={{pl: 3, display: {xs: 'flex', md: "block"}, flexDirection: {xs: "column", md: "inherit"}, justifyContent: {xs: "center", md: "inherit"}, alignItems: {xs: "center", md: "inherit"}}}>
                    <Box sx={{width: "80%", mb: 4, mt:{xs: 10, md: "inherit"}}}>
                        <Typography variant="h3" component="h3" color="#ffff" sx={{fontWeight: "bold", mb: 2, fontSize: { md: "2.4rem", laptop: "3rem"}, textAlign: {xs: "center", md: "inherit"}}}>Get Paid Easily</Typography>
                        <Typography variant="h3" component="h3" color="#ffff" sx={{fontWeight: "bold", fontSize: { md: "2.4rem", laptop: "3rem"}, textAlign: {xs: "center", md: "inherit"}}}>Without Hassle</Typography>
                    </Box>
                    <Typography variant="body1" component="div"color="#ffff" sx={{width: "80%", mb: 4, textAlign: {xs: "center", md: "inherit"}, fontSize: { xs: "1.1rem"}}}>
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
                <Grid item xs={12} md={6} alignItems="center" sx={{zIndex: 4, width: "100%", height: "100%", pt: 6, display: {xs: 'flex', md: "block"}, flexDirection: {xs: "column", md: "inherit"}, justifyContent: {xs: "center", md: "inherit"}, alignItems: {xs: "center", md: "inherit"}}}>
                    <img src={SapiensImg} alt="homepage img" style={{width: {xs: "60%",md: "80%"}, height: {xs: "80%", md: "100%"}, objectFit: "contain", float: {xs:"center", md: "right"}}}/>
                </Grid> 
            </Grid>
        </Container>
        <Box sx={{backgroundImage: `url(${Slant})`, height: 200, width: "100%", position: "absolute", bottom: 0, zIndex: 1, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} elevation={0}></Box>
    </Paper>
  )
}

export default Home