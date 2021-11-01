import React from 'react';

import './Footer.css';

import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box">
                        <Box display="flex" >
                        <Typography variant="h3" align="left"  justifyContent="left" className="tales">Tales</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" className="box1" >
                            <Typography variant="h5" align="center" className="textos">Fale conosco</Typography>
                        </Box>
                    </Box>

                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" className="textos"> Todos os direitos reservados © </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;