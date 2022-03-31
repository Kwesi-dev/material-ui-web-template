import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import adobe from "../assets/adobe.webp"
import google from "../assets/google.webp"
import paypal from "../assets/paypal.webp"
import puma from "../assets/puma.webp"
import coins from "../assets/coins.svg"
import stats from "../assets/stats.svg"
import gold from "../assets/gold.svg"
import notebook from "../assets/notebook.svg"
import garage from "../assets/garage.svg"
import brochure from "../assets/brochure.svg"
import { Box } from '@mui/system'
const Features = () => {
  return (
    <Paper sx={{width: "100%", py: 10, backgroundColor: "#f2f5fa"}} elevation={0}>
        <Container maxWidth="md" sx={{width: "100%", py: 5}} justifyContent="center" alignItems="center">
            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <img src={paypal} alt="paypal logo" style={{width: "100%"}} />
                </Grid>
                <Grid item sm={3}>
                    <img src={adobe} alt="adobe logo" style={{width: "100%"}}/>
                </Grid>
                <Grid item sm={3}>
                    <img src={google} alt="google logo" style={{width: "100%"}}/>
                </Grid>
                <Grid item sm={3}>
                    <img src={puma} alt="puma logo" style={{width: "100%"}}/>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="lg">
            <Box sx={{mb: 6}}>
                <Typography variant="h6" color="error" sx={{textAlign: "center", fontSize: 14, fontWeight: "bold", mb: 1}}>AWESOME FEATURES</Typography>
                <Typography variant="h4" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 1}}>Cool Features</Typography>
                <Typography variant="body1" sx={{mx: "auto", my: 0, width: "50%", textAlign: "center"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatem distinctio a, ex vel cupiditate quos excepturi ipsa
                </Typography>
            </Box>
            <Grid container spacing={3} sx={{mb: 10}}>
                <Grid item md={4}>
                    <Paper sx={{width: 90, height: 90, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", mb: 4}}>
                        <img src={coins} alt="" style={{width: 60, height: 60, objectFit: "cover"}}/>
                    </Paper>
                    <Typography variant="h6" color="#202140" sx={{fontWeight: "bold", mb: 1}}>Cash Collection</Typography>
                    <Typography variant="body1" color="#202140" sx={{width: "60%"}}>
                        Manage your invoces fromcreation to payment. With Upflow you'll collect 100% of.
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Paper sx={{width: 90, height: 90, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", mb: 4}}>
                        <img src={stats} alt="" style={{width: 60, height: 60, objectFit: "cover"}}/>
                    </Paper>
                    <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Analytics</Typography>
                    <Typography variant="body1" color="#202140" sx={{width: "60%"}}>
                        Manage your invoces fromcreation to payment. With Upflow you'll collect 100% of.
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Paper sx={{width: 90, height: 90, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", mb: 4}}>
                        <img src={garage} alt="" style={{width: 60, height: 60, objectFit: "cover"}}/>
                    </Paper>
                    <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Payment</Typography>
                    <Typography variant="body1" color="#202140" sx={{width: "60%"}}>
                        Manage your invoces fromcreation to payment. With Upflow you'll collect 100% of.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Paper sx={{width: 90, height: 90, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", mb: 4}}>
                        <img src={notebook} alt="" style={{width: 60, height: 60, objectFit: "cover"}}/>
                    </Paper>
                    <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Cash Collection</Typography>
                    <Typography variant="body1" color="#202140" sx={{width: "60%"}}>
                        Manage your invoces fromcreation to payment. With Upflow you'll collect 100% of.
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Paper sx={{width: 90, height: 90, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", mb: 4}}>
                        <img src={gold} alt="" style={{width: 60, height: 60, objectFit: "cover"}}/>
                    </Paper>
                    <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Analytics</Typography>
                    <Typography variant="body1" color="#202140" sx={{width: "60%"}}>
                        Manage your invoces fromcreation to payment. With Upflow you'll collect 100% of.
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Paper sx={{width: 90, height: 90, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", mb: 4}}>
                        <img src={brochure} alt="" style={{width: 60, height: 60, objectFit: "cover"}}/>
                    </Paper>
                    <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>Payment</Typography>
                    <Typography variant="body1" color="#202140" sx={{width: "60%"}}>
                        Manage your invoces fromcreation to payment. With Upflow you'll collect 100% of.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

export default Features