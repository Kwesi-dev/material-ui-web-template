import { Container,Typography, Box, Paper, Switch, Grid, Divider, List, ListItem, ListItemText, ListItemIcon, Button, Chip, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from "@mui/material/styles"
import { useState } from 'react';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#ff6362' : '#ff6362',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#ff6362' : '#ff6362',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

const Pricing = () => {
    const [yearly, setYearly] = useState(false)
    const handleChange = (e)=>{
        setYearly(!yearly)
    }
  return (
    <Paper sx={{width: "100%", py: 10, backgroundColor: "#f2f5fa"}} elevation={0}>
        <Container maxWidth="lg">
            <Box component="header" sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h6" color="error" sx={{fontWeight: "bold", fontSize: 14}}>PRICING FOR EVERYONE</Typography>
                <Typography variant="h3" color="#202140" sx={{fontWeight: "bold", mb: 1}}>OUR PRICING</Typography>
                <Stack direction="row" spacing={1} sx={{display: "flex" , alignItems: "center"}}>
                    <Typography>Monthly</Typography>
                    <IOSSwitch size="large" onChange={handleChange}/>
                    <Typography>Yearly</Typography>
                    <Chip label="Save 25%" color="error" size="small"/>
                </Stack>
            </Box>
            <Grid container sx={{mt: 10}}>
                <Grid item mobile={6} md={4}>
                    <Paper elevation={0} sx={{backgroundColor: "#f2f5fa", height: 500, width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                        <Box sx={{pt: 4, boxSizing: "border-box"}}>
                            <Typography variant="h5" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 3}}>Personal</Typography>
                            <Typography variant="body1" color="lightgray" sx={{textAlign: "center", pb: 3}}>Far far away, behind the word mountains</Typography>
                            <Divider variant="middle"/>
                        </Box>
                        <Box>
                            <Typography component="div" sx={{height: 45, overflow: "hidden", display: "flex", flexDirection: "column"}}>
                                <Box sx={{height: "200%",transition: "all 1.8s ease", transform: yearly ? "translateY(-45px)": "translateY(0px)"}}>
                                    <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center", height: 45}} component="div">$29</Typography>
                                    <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center", height: 45}} component="div">$39</Typography>
                                </Box>
                            </Typography>
                            <Typography color="#202140" component="div" sx={{display: "flex", alignItems: "center"}}>
                                <Typography>Per</Typography>
                                <Typography component="div" sx={{height: 20, overflow: "hidden", ml: 0.5, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Box sx={{height: "200%", transition: "all 1.8s ease", transform: yearly ? "translateY(-18px)" : "translateY(2px)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <Typography component="div" sx={{height: 20, mt: 1.5}}>Month</Typography>
                                        <Typography component="div" sx={{height: 20}}>Year</Typography>
                                    </Box>
                                </Typography>
                            </Typography>
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
                <Grid item mobile={6} md={4}>
                    <Paper elevation={0} sx={{height: 500, width: "90%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                        <Box sx={{pt: 4, boxSizing: "border-box"}}>
                            <Typography variant="h5" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 3}}>Enterprise</Typography>
                            <Typography  variant="body1" color="lightgray" sx={{textAlign: "center", pb: 3}}>Far far away, behind the word mountains</Typography>
                            <Divider variant="middle"/>
                        </Box>
                        <Box>
                            <Typography component="div" sx={{height: 45, overflow: "hidden", display: "flex", flexDirection: "column"}}>
                                <Box sx={{height: "200%",transition: "all 1.8s ease", transform: yearly ? "translateY(-45px)": "translateY(0px)"}}>
                                    <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center", height: 45}} component="div">$29</Typography>
                                    <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center", height: 45}} component="div">$39</Typography>
                                </Box>
                            </Typography>
                            <Typography color="#202140" component="div" sx={{display: "flex", alignItems: "center"}}>
                                <Typography>Per</Typography>
                                <Typography component="div" sx={{height: 20, overflow: "hidden", ml: 0.5, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Box sx={{height: "200%", transition: "all 1.8s ease", transform:yearly ? "translateY(-18px)" : "translateY(2px)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <Typography component="div" sx={{height: 20, mt: 1.5}}>Month</Typography>
                                        <Typography component="div" sx={{height: 20}}>Year</Typography>
                                    </Box>
                                </Typography>
                            </Typography>
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
                <Grid item mobile={6} md={4}>
                <Paper elevation={0} sx={{backgroundColor: "#f2f5fa", height: 500, width: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                        <Box sx={{pt: 4, boxSizing: "border-box"}}>
                            <Typography variant="h5" color="#202140" sx={{textAlign: "center", fontWeight: "bold", mb: 3}}>Enterprise</Typography>
                            <Typography variant="body1" color="lightgray" sx={{textAlign: "center", pb: 3}}>Far far away, behind the word mountains</Typography>
                            <Divider variant="middle"/>
                        </Box>
                        <Box>
                            <Typography component="div" sx={{height: 45, overflow: "hidden", display: "flex", flexDirection: "column"}}>
                                <Box sx={{height: "200%",transition: "all 1.8s ease", transform: yearly ? "translateY(-45px)": "translateY(0px)"}}>
                                    <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center", height: 45}} component="div">$29</Typography>
                                    <Typography variant="h4" color="error" sx={{fontWeight: "bold", textAlign: "center", height: 45}} component="div">$39</Typography>
                                </Box>
                            </Typography>
                            <Typography color="#202140" component="div" sx={{display: "flex", alignItems: "center"}}>
                                <Typography>Per</Typography>
                                <Typography component="div" sx={{height: 20, overflow: "hidden", ml: 0.5, display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <Box sx={{height: "200%", transition: "all 1.8s ease", transform: yearly ? "translateY(-18px)" : "translateY(2px)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <Typography component="div" sx={{height: 20, mt: 1.5}}>Month</Typography>
                                        <Typography component="div" sx={{height: 20}}>Year</Typography>
                                    </Box>
                                </Typography>
                            </Typography>
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