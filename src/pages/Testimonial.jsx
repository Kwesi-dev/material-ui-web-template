import React from 'react'
import { Paper, Grid, Container, Typography, Button} from "@mui/material"
import TestimonialCard from '../components/TestimonialCard'
const Testimonial = () => {
  return (
    <Paper elevation={0} sx={{backgroundColor: "#f2f5fa", py: 10}}>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item md={6}>
                    <Typography variant="h6" color="error" sx={{fontWeight: "bold", fontSize: 16}}>Join now</Typography>
                    <Typography variant="h4" sx={{width: "60%", fontWeight: "bold", mb: 2}} color="#202140">
                        Join More Than 90,000+ Amazing
                        People Loves Our Product
                    </Typography>
                    <Typography variant="body1" sx={{width: "65%", fontWeight: "light", mb: 2}} color="#202140">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Button size="large" variant="contained" color="error" sx={{borderRadius: 6}}>Product Tour</Button>
                </Grid>
                <Grid item md={6}>
                    <TestimonialCard/>
                </Grid>
            </Grid> 
        </Container>
    </Paper>
  )
}

export default Testimonial