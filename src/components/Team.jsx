import { Container, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import team1 from "../assets/gallery1.webp"
import team2 from "../assets/gallery2.webp"
import team3 from "../assets/gallery3.webp"
import team4 from "../assets/gallery4.webp"
const Team = () => {
  return (
    <Box>
        <Container maxWidth="sm">
            <Box component="section" sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", mb: 6}}>
                <Typography variant="h6" color="error" sx={{textAlign: "center", fontSize: 14, fontWeight: "bold", mb: 1}}>LEADERSHIP</Typography>
                <Typography variant="h4" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 1}}>Our Team</Typography>
            </Box>
            <Grid container columnSpacing={8} sx={{mb: 4}}>
                <Grid item md={6}>
                    <Box component="img" src={team1} alt="team pictures" sx={{width: "100%", borderRadius: 6}}/>
                    <Typography component="section">
                        <Typography sx={{fontWeight: "bold"}}>James Watson</Typography>
                        <Typography sx={{color: "lightgray", fontWeight: "bold"}}>Co-Founder & CEO</Typography>
                    </Typography>
                </Grid>
                <Grid item md={6} sx={{mt: 5}}>
                    <Box component="img" src={team2} alt="team pictures" sx={{width: "100%", borderRadius: 6}}/>
                    <Typography component="section">
                        <Typography sx={{fontWeight: "bold"}}>James Watson</Typography>
                        <Typography sx={{color: "lightgray", fontWeight: "bold"}}>Co-Founder & CEO</Typography>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container columnSpacing={8}>
                <Grid item md={6}>
                    <Box component="img" src={team3} alt="team pictures" sx={{width: "100%", borderRadius: 6}}/>
                    <Typography component="section">
                        <Typography sx={{fontWeight: "bold"}}>James Watson</Typography>
                        <Typography sx={{color: "lightgray", fontWeight: "bold"}}>Co-Founder & CEO</Typography>
                    </Typography>
                </Grid>
                <Grid item md={6} sx={{mt: 5}}>
                    <Box component="img" src={team4} alt="team pictures" sx={{width: "100%", borderRadius: 6}}/>
                    <Typography component="section">
                        <Typography sx={{fontWeight: "bold"}}>James Watson</Typography>
                        <Typography sx={{color: "lightgray", fontWeight: "bold"}}>Co-Founder & CEO</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Team