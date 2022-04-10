import { Typography, Paper, Grid, Container, Box, Card, CardContent, CardMedia, CardActions } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { blogs } from '../dummyData'
const Blogs = () => {
  return (
     <Paper elevation={0} sx={{backgroundColor: "#ebf0f6", pb: 10, pt: 6}}>
         <Container maxWidth="lg">
            <Box sx={{mb: 4}}>
                <Typography variant="h6" color="error" sx={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>BLOG</Typography>
                <Typography variant="h4" color="#202140" sx={{textAlign: "center", fontWeight: "bold"}}>Blog Posts</Typography>
            </Box>
            <Grid container spacing={3}>
                {blogs.map((blog)=>
                    <Grid item mobile={6} md={3} key={blog.id}>
                        <Card sx={{cursor: "pointer"}}>
                            <CardMedia
                                component="img"
                                alt="card picture"
                                height="200"
                                image={blog.image}
                                />
                            <CardContent>
                                <Typography variant="body1" component="h6" color="lightgray" sx={{fontSize: 14, mb: 2}}>{blog.date}</Typography>
                                <Typography component="h5" color="#202140" sx={{fontWeight: "bold",":hover":{color: "#ff6362"}}}>{blog.title}</Typography>
                                <Typography variant="body1" color="lightgray">{blog.content}</Typography>
                            </CardContent>
                            <CardActions sx={{float: "right", mr: 2}}>
                                    <Typography className="span" component="span" sx={{fontSize: 14, mr: 1, transform: "scale(0)", transition: "all 1s ease"}}>Read more</Typography>
                                    <Typography component="div" sx={{width: 30, height: 30, borderRadius: "50%", border: "1px solid lightgray", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 1s ease",":hover":{borderColor: "#ff6362"}}}>
                                        <KeyboardArrowRightIcon sx={{color: "#ff6362"}}/>      
                                    </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
         </Container>
     </Paper>
  )
}

export default Blogs