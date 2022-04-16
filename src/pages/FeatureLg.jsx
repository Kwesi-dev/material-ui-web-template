import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material'
import rainSvg  from "../assets/rain.svg"
import walletSvg  from "../assets/wallet.svg"
const FeatureLg = () => {
  return (
    <Paper sx={{backgroundColor: "#f2f5fa", py: 10}} elevation={0}>
        <Container maxWidth="lg">
            <Grid container alignItems="center" sx={{my: 10}}>
                <Grid item xs={12} md={6} sx={{width: "100%", display: {xs: "flex", md: "block"}, flexDirection: "column", mb: {xs: 10, md: 0}}}>
                    <Typography variant="h5" color="error" sx={{fontWeight: "bold", mb: 3, textAlign: {xs:"center", md: "left"}}}>Life Changing App</Typography>
                    <Typography variant="h4" sx={{width: {xs: "100%", sm: "60%"}, fontWeight: "bold", mb: 3, textAlign: {xs:"center", md: "left"}, alignSelf: {xs: "center", md: "left"}}} color="#202140">
                        Far far away, behind the word mountains
                    </Typography>
                    <Typography variant="body1" sx={{width: {xs: "100%", sm: "65%"}, fontWeight: "light", mb: 3, textAlign: {xs:"center", md: "left"}, alignSelf: {xs: "center", md: "left"}}} color="#202140">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they 
                    live.
                    </Typography>
                    <Button size="large" variant="contained" color="error" sx={{borderRadius: 6, width: {xs: "50%"}, alignSelf: "center", textAlign: {xs:"center", md: "left"}}}>Get Started</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={rainSvg} alt="wallet svg" style={{width: "100%", height: "100%"}}/>
                </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{my: 10}}>
                <Grid item xs={12} md={6} sx={{mb: {xs: 10, md: 0}}}>
                    <img src={walletSvg} alt="make-it-rain svg" style={{width: "100%", height: "100%"}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="h5" color="error" sx={{fontWeight: "bold", mb: 3}}>Life Changing App</Typography>
                        <Typography variant="h4" sx={{width: {xs: "100%", sm: "60%"}, fontWeight: "bold", mb: 3, textAlign: "center"}} color="#202140">
                            Far far away, behind the word mountains
                        </Typography>
                        <Typography variant="body1" sx={{width: {xs: "100%", sm: "65%"}, fontWeight: "light", mb: 3, textAlign: "center"}} color="#202140">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they 
                        live.
                        </Typography>
                        <Button size="large" variant="contained" color="error" sx={{borderRadius: 6}}>Get Started</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

export default FeatureLg