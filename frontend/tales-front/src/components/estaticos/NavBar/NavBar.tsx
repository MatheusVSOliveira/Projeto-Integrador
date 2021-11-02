import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

function NavBar() {
    return (
        <>
            <AppBar position="static" className="cor-navBar">
                <Toolbar variant="dense">
                    <Box>
                        <img src="https://i.imgur.com/kjX8SxB.png" alt="" className="logo-nav" />
                    </Box>

                    <Box display="flex" justifyContent="space-around" ml="alto" width="100%">
                        <Link to="/home" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/sobre-nos" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Sobre nós
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
