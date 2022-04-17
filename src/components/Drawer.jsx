import React from 'react'
import { Divider, Drawer as Dropdown, IconButton, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom';

const DrawerHeader = styled('div')(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    padding: 2, 
})) 
const Drawer = ({ drawerOpen, setDrawerOpen }) => {
    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }
  return (
    <>
        <Dropdown
            anchor="right"
            open={drawerOpen}
            sx={{"& .MuiDrawer-paper": {
                width: {xs: "10rem", sm: "20rem"}
            }}}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon/>
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <ListItem>
                    <ListItemButton>
                        <ListItemText>Dropdown</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Link to="/innerpage" style={{color: "inherit", textDecoration: "none"}}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText>Innerpage</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/contact" style={{color: "inherit", textDecoration: "none"}}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText>Contact</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Dropdown>
    </>
  )
}

export default Drawer