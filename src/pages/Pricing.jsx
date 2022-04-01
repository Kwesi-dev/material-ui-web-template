import { Container,Typography, Box, Paper, Switch, Grid, Divider, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Pricing = () => {
  return (
    <Paper sx={{width: "100%", py: 10, backgroundColor: "#f2f5fa"}} elevation={0}>
        <Container maxWidth="lg">
            <Box component="header" sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h6" color="error" sx={{fontWeight: "bold", fontSize: 14}}>PRICING FOR EVERYONE</Typography>
                <Typography variant="h3" color="#202140" sx={{fontWeight: "bold"}}>OUR PRICING</Typography>
                <Switch size="large"/>
            </Box>
            <Grid container sx={{mt: 10}}>
                <Grid item md={4}>
                    <Paper elevation={0} sx={{backgroundColor: "#f2f5fa", height: 500, width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                        <Box sx={{pt: 4, boxSizing: "border-box"}}>
                            <Typography variant="h5" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 3}}>Personal</Typography>
                            <Typography variant="body1" color="lightgray" sx={{textAlign: "center", pb: 3}}>Far far away, behind the word mountains</Typography>
                            <Divider variant="middle"/>
                        </Box>
                        <Box>
                            <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center"}}>$29</Typography>
                            <Typography color="#202140">Per Month</Typography>
                        </Box>
                        <List >
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText sx={{color: "#202140"}}>Far far away, behind the word mountains</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText sx={{color: "#202140"}}>Far far away, behind the word mountains</ListItemText>
                            </ListItem>
                        </List>
                        <Button variant="contained" color="error" sx={{borderRadius: 4, mb: 2}}>Get Started</Button>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper elevation={0} sx={{height: 500, width: "90%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                        <Box sx={{pt: 4, boxSizing: "border-box"}}>
                            <Typography variant="h5" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 3}}>Enterprise</Typography>
                            <Typography  variant="body1" color="lightgray" sx={{textAlign: "center", pb: 3}}>Far far away, behind the word mountains</Typography>
                            <Divider variant="middle"/>
                        </Box>
                        <Box>
                            <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center"}}>$29</Typography>
                            <Typography color="#202140">Per Month</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText sx={{color: "#202140"}}>Far far away, behind the word mountains</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText sx={{color: "#202140"}}>Far far away, behind the word mountains</ListItemText>
                            </ListItem>
                        </List>
                        <Button variant="contained" color="error" sx={{borderRadius: 4, mb: 2}}>Get Started</Button>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                <Paper elevation={0} sx={{backgroundColor: "#f2f5fa", height: 500, width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                        <Box sx={{pt: 4, boxSizing: "border-box"}}>
                            <Typography variant="h5" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 3}}>Enterprise</Typography>
                            <Typography variant="body1" color="lightgray" sx={{textAlign: "center", pb: 3}}>Far far away, behind the word mountains</Typography>
                            <Divider variant="middle"/>
                        </Box>
                        <Box>
                            <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center"}}>$29</Typography>
                            <Typography color="#202140">Per Month</Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText sx={{color: "#202140"}}>Far far away, behind the word mountains</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary"/>
                                </ListItemIcon>
                                <ListItemText sx={{color: "#202140"}}>Far far away, behind the word mountains</ListItemText>
                            </ListItem>
                        </List>
                        <Button variant="contained" color="error" sx={{borderRadius: 4, mb: 2}}>Get Started</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

export default Pricing