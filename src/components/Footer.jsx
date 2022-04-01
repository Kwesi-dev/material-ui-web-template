import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"
import { Container, Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
const Footer = () =>{
    return(
        <Paper sx={{width: "100%", pt: 10, pb: 2, backgroundColor: "#f2f5fa"}} elevation={0}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6}>
                        <Box>
                            <Typography variant="h6" color="#202140" sx={{fontWeight: "bold", mb: 2}}>About</Typography>
                            <Typography variant="body1" color="#202140" sx={{width: "60%"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" color="#202140" sx={{fontWeight: "bold", my: 2, fontSize: 16}}>Connect with us</Typography>
                            <Stack direction="row" spacing={2}>
                                <Typography component="div">
                                    <Facebook/>
                                </Typography>
                                <Typography component="div">
                                    <Twitter/> 
                                </Typography>
                                <Typography component="div">
                                    <Instagram/> 
                                </Typography>
                                <Typography component="div">
                                    <LinkedIn/>
                                </Typography>
                                <Typography component="div">
                                    <WhatsApp/>
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Typography  variant="h6" color="#202140" sx={{fontWeight: "bold"}}>Navigations</Typography>
                        <Grid container sx={{cursor: "pointer"}}>
                            <Grid item md={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText color="#202140">Home</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Services</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Work</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Process</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">About Us</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={4}>
                            <List>
                                    <ListItem>
                                        <ListItemText color="#202140">Press</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Blog</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Contact</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Support</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText color="#202140">Privacy</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={4}>
                            <List>
                                    <ListItem>
                                        <ListItemText>Privacy</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>FAQ</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>Careers</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>Process</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>About Us</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography variant="body1" color="#202140" sx={{textAlign: "center", mt: 3}}>
                    Copyright ©2022 All rights reserved | This template is made with by Kwesi-dev
                </Typography>
            </Container>
        </Paper>
    )
}

export default Footer