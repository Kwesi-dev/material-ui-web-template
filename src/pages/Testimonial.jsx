import React from 'react'
import { Paper, Grid, Container, Typography, Button} from "@mui/material"
import TestimonialCard from '../components/TestimonialCard'
const Testimonial = () => {
  return (
    <Paper elevation={0} sx={{backgroundColor: "#f2f5fa", py: 10}}>
        <Container maxWidth="lg">
            <Grid container sx={{width: "100%"}}>
                <Grid item xs={12} md={6} sx={{width: "100%", display: {xs: "flex", md: "block"}, flexDirection: "column", alignContent: "center", justifyContent: "center", mb: {xs: 10, md: 0}}}>
                    <Typography variant="h6" color="error" sx={{fontWeight: "bold", fontSize: 16, textAlign: {xs: "center", md: "inherit"}}}>Join now</Typography>
                    <Typography variant="h4" sx={{width: {xs: "100%", sm: "60%"}, fontWeight: "bold", mb: 2, textAlign: {xs: "center", md: "inherit"}, alignSelf: {xs:"center", md: "inherit"}}} color="#202140">
                        Join More Than 90,000+ Amazing
                        People Loves Our Product
                    </Typography>
                    <Typography variant="body1" sx={{width: {xs: "100%", sm: "65%"}, fontWeight: "light", mb: 2, textAlign: {xs: "center", md: "inherit"}, alignSelf: {xs:"center", md: "inherit"}}} color="#202140">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Button size="large" variant="contained" color="error" sx={{borderRadius: 6, width: {xs: "50%"}, alignSelf: {xs:"center", md: "inherit"}}}>Product Tour</Button>
                </Grid>
                <Grid item xs={12} md={6} sx={{width: {xs: "80%", md:"100%"}}}>
                    <TestimonialCard/>
                </Grid>
            </Grid> 
        </Container>
    </Paper>
  )
}

export default Testimonial