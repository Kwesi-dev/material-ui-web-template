import { Box, TextareaAutosize, Paper, Container, Grid, Typography, TextField, Button } from '@mui/material'
import SapiensImg from "../assets/sapiens.webp"
import Slant from "../assets/slant.svg"
const Contact = () => {
  return (
    <Paper sx={{backgroundColor: "#f2f5fa"}}>
        <Box 
        sx={(theme)=>({backgroundColor: "#202140", height: { xs: "100%", md: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`}, width:"100%", overflowX: "hidden",position: "relative", top: `${theme.mixins.toolbar.minHeight}px`})} elevation={0}>
            <Container maxWidth="lg" sx={{height: "100%"}}>
                <Grid container alignItems="center" justifyContent="center"  sx={{width: "100%", height: "80%", m: {xs: "0 auto"}}}>
                    <Grid item xs={12} md={6} sx={{pl: 3, display: {xs: 'flex', md: "block"}, flexDirection: {xs: "column", md: "inherit"}, justifyContent: {xs: "center", md: "inherit"}, alignItems: {xs: "center", md: "inherit"}}}>
                        <Box sx={{width: "80%", mb: 4, mt:{xs: 10, md: "inherit"}}}>
                            <Typography variant="h3" component="h3" color="#ffff" sx={{fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.4rem", laptop: "3rem"}, textAlign: {xs: "center", md: "inherit"}}}>Contact Us</Typography>
                        </Box>
                        <Typography variant="body1" component="div"color="#ffff" sx={{width: {xs: "100%", sm: "80%"}, mb: 4, textAlign: {xs: "center", md: "inherit"}, fontSize: { xs: "0.9rem", sm: "1.1rem"}}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta tempore dolorem harum quae placeat, laudantium, animi quis ratione alias
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} md={6} alignItems="center" justifyContent="flex-end" sx={{zIndex: 4, width: "100%", height: "100%", pt: 6, display: {xs: 'flex', md: "block"}, flexDirection: {xs: "column", md: "inherit"}, justifyContent: {xs: "center", md: "inherit"}, alignItems: {xs: "center", md: "inherit"}}}>
                        <Box component="img" src={SapiensImg} alt="homepage img" sx={{width: {xs: "70%", sm: "80%",md: "100%"}, height: {xs: "70%", sm: "80%", md: "100%"}, objectFit: "contain", float:"right"}}/>
                    </Grid> 
                </Grid>
            </Container>
            <Box sx={{backgroundImage: `url(${Slant})`, height: 200, width: "100%", position: "absolute", bottom: 0, zIndex: 1, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} elevation={0}></Box>
        </Box>
        <Box component="section" sx={{py: 10, backgroundColor: "#f2f5fa"}}>
        <Container maxWidth="sm">
            <Grid container>
                <Grid item md={6}>
                    <Typography component="h6" sx={{fontWeight: "bold", color: "#ff6362", fontSize: 14}}>CONTACT US</Typography>
                    <Typography variant="h4" component="h3" sx={{fontSize: {xs: "1.2rem", sm: "2rem"}}}>Let's have a talk</Typography>
                </Grid> 
            </Grid>
            <Box component="form" noValidate autoComplete="off" sx={{mt: 4, mb: 2, width: "100%"}}>
                <Grid container columnSpacing={2} sx={{mb: 2}}>
                    <Grid item xs={12} mobile={6}>
                        <Typography component="h6" sx={{mb: 0.5}}>First name</Typography>
                        <TextField
                            id="text-input"
                            type="text"
                            sx={{width: "100%"}}
                        />
                    </Grid> 
                    <Grid item xs={12} mobile={6}>
                        <Typography component="h6" sx={{mb: 0.5}}>Last name</Typography>
                        <TextField
                            id="text-input"
                            type="text"
                            sx={{width: "100%"}}
                        />
                    </Grid>
                </Grid>
                <Box component="section" sx={{mb: 2}}>
                    <Typography component="h6" sx={{mb: 0.5}}>Email address</Typography>
                    <TextField
                        id="text-input"
                        type="email"
                        sx={{width: "100%"}}
                    />
                </Box>
                <Box cpmponent="section">
                    <Typography component="h6" sx={{mb: 0.5}}>Message</Typography>
                    <TextField
                        multiline
                        minRows={4}
                        aria-label="message textarea"
                        sx={{width: "100%"}}
                    />
                </Box>
                <Button variant="contained" color="error" size="lg" sx={{borderRadius: 7, px: 6, py: 2, mt: 2}}>Send message</Button>
            </Box>
        </Container>
        </Box>
    </Paper>
  )
}

export default Contact