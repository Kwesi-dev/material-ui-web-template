import { Box, Paper, Container, Grid, Typography, Button, ImageList, ImageListItem } from '@mui/material'
import SapiensImg from "../assets/sapiens.webp"
import Slant from "../assets/slant.svg"
import AccordionComp from '../components/AccordionComp'
import Slider from '../components/Slider'
import { items } from '../dummyData'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import innerpic from "../assets/innerpic1.webp"
const Innerpage = () => {

  return (
    <Paper sx={{backgroundColor: "#f2f5fa"}}>
         <Box 
        sx={(theme)=>({backgroundColor: "#202140", height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`, width:"100%", overflowX: "hidden",position: "relative", top: `${theme.mixins.toolbar.minHeight}px`})} elevation={0}>
            <Container maxWidth="lg" sx={{height: "100%"}}>
                <Grid container alignItems="center" justifyContent="center" sx={{height: "80%"}}>
                    <Grid item xs={12} md={6} sx={{pl: 3}}>
                        <Box sx={{width: "80%", mb: 4}}>
                            <Typography variant="h3" component="h3" color="#ffff" sx={{fontWeight: "bold", mb: 2}}>Elements & Insights</Typography>
                        </Box>
                        <Typography variant="body1" component="div"color="#ffff" sx={{width: "80%", mb: 4}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta tempore dolorem harum quae placeat, laudantium, animi quis ratione alias
                        </Typography>
                        <Button variant="contained" color="error" size="large" sx={{borderRadius: 6}}>Get Started</Button>
                    </Grid> 
                    <Grid item xs={12} md={6} alignItems="center" justifyContent="flex-end" sx={{zIndex: 4, width: "100%", height: "100%", pt: 6}}>
                        <img src={SapiensImg} alt="homepage img" style={{width: "80%", height: "100%", objectFit: "contain", float: "right"}}/>
                    </Grid> 
                </Grid>
            </Container>
            <Box sx={{backgroundImage: `url(${Slant})`, height: 200, width: "100%", position: "absolute", bottom: 0, zIndex: 1, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} elevation={0}></Box>
        </Box>
        <Box sx={(theme)=>({pt: `${theme.mixins.toolbar.minHeight}px`, pb: 4})}>
            <Container maxWidth="lg" sx={{pt: 4}}>
                <Grid container sx={{mb: 2}}>
                    <Grid item md={6}>
                        <Typography variant="body1" component="p" sx={{width: "80%"}}>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="body1" component="p" sx={{width: "80%"}}>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={6}>
                        <Typography variant="body1" component="p" sx={{width: "80%"}}>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="body1" component="p" sx={{width: "80%"}}>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                        </Typography>
                    </Grid>
                </Grid>
                <Slider/>
                <Grid container columnSpacing={3} sx={{mt: 10}}>
                    <Grid item md={6}>
                        <AccordionComp/>
                        <Box component="section" sx={{mt: 5}}>
                            <Typography variant="h6" component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1}}>Gallery</Typography>
                            <ImageList sx={{width: "100%", height: "60vh"}} cols={3} rowHeight={180} gap={16}>
                                {items.map((item)=>
                                    <ImageListItem key={item.key} sx={{cursor: "pointer"}}>
                                        <img 
                                            src={item.image}
                                            srcSet={item.image} 
                                            alt={item.title}
                                            loading="lazy"
                                            style={{borderRadius: 14}}
                                            />
                                    </ImageListItem>
                                )}
                            </ImageList>
                        </Box>
                        <Box component="section">
                            <Typography variant="h6" component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1}}>Video</Typography>
                            <Typography component="div" sx={{position: "relative", width: "100%", cursor: "pointer"}}>
                                 <Typography component="div" sx={{position: "absolute", top: 0, right: 0, bottom: 0, left: 0, m: "auto", width: 45, height: 45, borderRadius: "50%", backgroundColor: "rgba(225, 225, 277, 0.6)", display: "flex", alignItems: "center", justifyContent: "center", ":hover":{transform: "scale(1.2)"}, transition: "all 1s ease", cursor: "pointer"}}>
                                     <PlayArrowIcon sx={{fontSize: 30, color: "#ff6362"}}/>
                                 </Typography>
                                 <img src={innerpic} alt="video template" style={{width: "100%"}}/>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Paper>
  )
}

export default Innerpage