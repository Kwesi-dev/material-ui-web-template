import { AppBar, Container, Toolbar, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react"
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({ drawerOpen, setDrawerOpen })=>{
    const [anchorEl, setAnchorEl] = useState(null)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const open = Boolean(anchorEl)
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose = ()=>{
        setAnchorEl(null)
    }
    const handleOpen = () => {
        setDrawerOpen(!drawerOpen)
    }
    return(
        <>
            <AppBar sx={{backgroundColor: "#202140"}} elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar sx={{width: "100%", alignItems: "center"}}>
                        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                            <Typography 
                                variant="h5"
                                noWrap
                                mr={4}
                                component="div"
                                sx={{flex: 0.3, fontWeight: "bold", cursor: "pointer"}}
                                >   
                                Easy
                            </Typography>
                        </Link>
                        {matches ? <MenuIcon sx={{ml: {xs: "50%", mobileSm: "60%", sm: "80%"}}} onClick={handleOpen}/> :
                        <Box sx={{flex: 3, display: {xs: "none", md:"flex"}, alignItems: "center", justifyContent: "space-between"}}>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                                    <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}}>
                                        <Typography variant="span" sx={{fontSize: 18}}>Home</Typography>
                                    </Box>
                                </Link>
                                <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}} 
                                    aria-controls={open ? "basic-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                >
                                    <Typography variant="span" sx={{fontSize: 18}}>DropDown</Typography>
                                    <KeyboardArrowDownIcon/>
                                </Box>
                                <Menu 
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    elevation={1}
                                    >
                                    <MenuItem onClick={handleClose}>menuItem one</MenuItem>
                                    <MenuItem onClick={handleClose} sx={{":hover":{color: "red"}}}>menuItem two<KeyboardArrowRightOutlined/></MenuItem>
                                    <MenuItem onClick={handleClose}>menuItem three</MenuItem>
                                </Menu>
                                <Link to="/innerpage" style={{color: "inherit", textDecoration: "none"}}>
                                    <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}}>
                                        <Typography variant="span" sx={{fontSize: 18}}>Inner Page</Typography>
                                    </Box>
                                </Link>
                                <Link to="/contact" style={{color: "inherit", textDecoration: "none"}}>
                                    <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}}>
                                        <Typography variant="span" sx={{fontSize: {md: 16, laptop: 18}}}>Contact Us</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box>
                                <Button variant="outlined" color="error" sx={{color: "#ffff", borderRadius: 5, fontSize: 14}}>free templates</Button>
                            </Box>
                        </Box>   
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Navbar