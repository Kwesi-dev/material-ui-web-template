import { Container, Grid, Paper, Typography, Button } from '@mui/material'
import rainSvg  from "../assets/rain.svg"
import walletSvg  from "../assets/wallet.svg"
const FeatureLg = () => {
  return (
    <Paper sx={{backgroundColor: "#f2f5fa", py: 10}} elevation={0}>
        <Container maxWidth="lg">
            <Grid container alignItems="center" sx={{my: 10}}>
                <Grid item sm={6}>
                    <Typography variant="h5" color="error" sx={{fontWeight: "bold", mb: 3}}>Life Changing App</Typography>
                    <Typography variant="h4" sx={{width: "60%", fontWeight: "bold", mb: 3}} color="#202140">
                        Far far away, behind the word mountains
                    </Typography>
                    <Typography variant="body1" sx={{width: "65%", fontWeight: "light", mb: 3}} color="#202140">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they 
                    live.
                    </Typography>
                    <Button size="large" variant="contained" color="error" sx={{borderRadius: 6}}>Get Started</Button>
                </Grid>
                <Grid item sm={6}>
                    <img src={rainSvg} alt="wallet svg" style={{width: "100%", height: "100%"}}/>
                </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{my: 10}}>
                <Grid item sm={6}>
                    <img src={walletSvg} alt="make-it-rain svg" style={{width: "100%", height: "100%"}}/>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h5" color="error" sx={{fontWeight: "bold", mb: 3}}>Life Changing App</Typography>
                    <Typography variant="h4" sx={{width: "60%", fontWeight: "bold", mb: 3}} color="#202140">
                        Far far away, behind the word mountains
                    </Typography>
                    <Typography variant="body1" sx={{width: "65%", fontWeight: "light", mb: 3}} color="#202140">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they 
                    live.
                    </Typography>
                    <Button size="large" variant="contained" color="error" sx={{borderRadius: 6}}>Get Started</Button>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

export default FeatureLg