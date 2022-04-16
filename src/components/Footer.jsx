import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"
import { Container, Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
const Footer = () =>{
    return(
        <Paper sx={{width: "100%", pt: 10, pb: 6, backgroundColor: "#f2f5fa"}} elevation={0}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box>
                            <Typography variant="h6" color="#202140" sx={{fontWeight: "bold", mb: 2}}>About</Typography>
                            <Typography variant="body1" color="#202140" sx={{width: {xs: "100%", sm: "60%"}, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</Typography>
                        </Box>
                        <Box sx={{mb: 2}}>
                            <Typography variant="h6" color="#202140" sx={{fontWeight: "bold", my: 2}}>Connect with us</Typography>
                            <Stack direction="row" spacing={2}>
                                <Typography component="div" sx={{width: 40, height: 40, backgroundColor: "#ffff", borderRadius: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", ":hover":{color: "#ff6362"}}}>
                                    <Facebook/>
                                </Typography>
                                <Typography component="div" sx={{width: 40, height: 40, backgroundColor: "#ffff", borderRadius: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",":hover":{color: "#ff6362"}}}>
                                    <Twitter/> 
                                </Typography>
                                <Typography component="div" sx={{width: 40, height: 40, backgroundColor: "#ffff", borderRadius: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",":hover":{color: "#ff6362"}}}>
                                    <Instagram/> 
                                </Typography>
                                <Typography component="div" sx={{width: 40, height: 40, backgroundColor: "#ffff", borderRadius: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",":hover":{color: "#ff6362"}}}>
                                    <LinkedIn/>
                                </Typography>
                                <Typography component="div" sx={{width: 40, height: 40, backgroundColor: "#ffff", borderRadius: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",":hover":{color: "#ff6362"}}}>
                                    <WhatsApp/>
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography  variant="h6" color="#202140" sx={{fontWeight: "bold"}}>Navigations</Typography>
                        <Grid container sx={{cursor: "pointer"}}>
                            <Grid item xs={6} mobile={4}>
                                <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362"},fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Home</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Services</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Work</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Process</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>About Us</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={6} mobile={4}>
                            <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Press</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Blog</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Contact</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Support</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Privacy</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={6} mobile={4}>
                            <List disablePadding>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Privacy</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>FAQ</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Careers</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>Process</ListItemText>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText color="#202140" sx={{":hover":{color: "#ff6362", fontSize: { xs: "0.9rem", mobile: "1rem"}}}}>About Us</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography variant="body1" color="#202140" sx={{textAlign: "center", mt: 3, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>
                    Copyright ©2022 All rights reserved | This template is made with by Kwesi-dev
                </Typography>
            </Container>
        </Paper>
    )
}

export default Footer