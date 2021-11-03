import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import './SobreNos.css';

function SobreNos() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixaPrincipal'>
                <Grid container direction='row' justifyContent='center' alignItems='center' xs={9} className='caixa1'>
                    <Grid alignItems='center' xs={6}>
                        <Box paddingX={10} textAlign="center">
                            <Typography variant="h3" gutterBottom color="initial" align='center' >
                                Sobre nós
                            </Typography>
                            <Typography variant="h5" color="initial" align='center' className='texto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                                Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                                quisquam voluptates, tenetur corporis quidem!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} className='img'></Grid>
                </Grid>

                <Grid container direction='row' justifyContent='center' alignItems='center' xs={9} className='caixa2'>
                    <Grid xs={6} className='img2'> </Grid>
                    <Grid alignItems='center' xs={6}>
                        <Box paddingX={10} textAlign="center">
                            <Typography variant="h3" gutterBottom color="initial" align='center'>
                                ODS 6
                            </Typography>
                            <Typography variant="h5" color="initial" className='texto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                                Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                                quisquam voluptates, tenetur corporis quidem!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='center' alignItems='center' xs={9} className='caixa1'>
                    <Grid alignItems='center' xs={6}>
                        <Box paddingX={10} textAlign="center">
                            <Typography variant="h3" gutterBottom color="initial" align='center'>
                                Objetivo
                            </Typography>
                            <Typography variant="h5" color="initial" className='texto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                                Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                                quisquam voluptates, tenetur corporis quidem!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} className='img3'></Grid>
                </Grid>

                <Grid container direction='row' justifyContent='center' alignItems='center' xs={9} className='caixa2'>
                    <Grid xs={6} className='img4'> </Grid>
                    <Grid alignItems='center' xs={6}>
                        <Box paddingX={10} textAlign="center">
                            <Typography variant="h3" gutterBottom color="initial" align='center'>
                                ???
                            </Typography>
                            <Typography variant="h5" color="initial" className='texto'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                                Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                                quisquam voluptates, tenetur corporis quidem!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default SobreNos
