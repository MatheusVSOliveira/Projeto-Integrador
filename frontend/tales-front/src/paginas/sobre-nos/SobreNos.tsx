import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import './SobreNos.css';
import Desenvolvedores from '../../components/desenvolvedores/Desenvolvedores';


function SobreNos() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='caixaPrincipal'>
            <Grid container direction='row' alignItems='center' xs={9} className='caixa1'>
                <Grid xs={6}>
                    <Box className='container'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' >
                            Sobre nós
                        </Typography>
                        <Typography variant="h5" className='txtcolor'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={6} className='img'></Grid>
            </Grid>

            <Grid container direction='row' alignItems='center' xs={9} className='caixa2'>
                <Grid xs={6} className='img2'> </Grid>
                <Grid xs={6}>
                    <Box className='container'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center'>
                            ODS 6
                        </Typography>
                        <Typography variant="h5" className='txtcolor'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction='row' alignItems='center' xs={9} className='caixa3'>
                <Grid xs={6}>
                    <Box className='container'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center'>
                            Objetivo
                        </Typography>
                        <Typography variant="h5" className='txtcolor'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={6} className='img3'></Grid>
            </Grid>

            <Grid container direction='row' alignItems='center' xs={9} className='caixa4'>
                <Grid xs={6} className='img4'> </Grid>
                <Grid xs={6}>
                    <Box className='container'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center'>
                            ???
                        </Typography>
                        <Typography variant="h5" className='txtcolor'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Desenvolvedores />
        </Grid>
    )
}

export default SobreNos
