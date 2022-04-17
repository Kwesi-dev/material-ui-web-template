import React, { useState } from 'react'
import Drawer from '../components/Drawer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material' 
const Layout = ({children}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
        <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
        {matches &&
          <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
        } 
        {children}
        <Footer/>
    </>
  )
}

export default Layout