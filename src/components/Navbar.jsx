import { AppBar, Container, Toolbar, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react"
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
const Navbar = ()=>{
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose = ()=>{
        setAnchorEl(null)
    }

    return(
        <>
            <AppBar sx={{backgroundColor: "#202140"}} elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar sx={{alignItems: "center"}}>
                        <Typography 
                            variant="h5"
                            noWrap
                            mr={4}
                            component="div"
                            sx={{flex: 0.3, fontWeight: "bold"}}
                        >   
                            Easy
                        </Typography>
                        <Box sx={{flex: 3, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}}>
                                    <Typography variant="span" sx={{fontSize: 18}}>Home</Typography>
                                </Box>
                                <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}} 
                                    aria-controls={open ? "basic-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onMouseEnter={handleClick}
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
                                <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}}>
                                    <Typography variant="span" sx={{fontSize: 18}}>Inner Page</Typography>
                                </Box>
                                <Box sx={{display: "flex", mr: 3, cursor: "pointer", alignItems: "center", ":hover":{ color: "#ab3849"}}}>
                                    <Typography variant="span" sx={{fontSize: 18}}>Contact Us</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Button variant="outlined" color="error" sx={{color: "#ffff", borderRadius: 5, fontSize: 14}}>free templates</Button>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Navbar