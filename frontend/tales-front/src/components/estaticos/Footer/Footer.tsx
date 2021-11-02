import React from 'react'
import './Footer.css';

import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container  >
                <Grid item xs={12} >
                    <Box display="flex" flexDirection="row" className="box1"  >
                        
                            <img src="https://i.imgur.com/kjX8SxB.png" alt="" className="logo-footer"/>
                            <Typography variant="h5" className="textos-1" >Fale conosco</Typography>
                    
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" className="textos"> Todos os direitos reservados Tales© </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Footer
