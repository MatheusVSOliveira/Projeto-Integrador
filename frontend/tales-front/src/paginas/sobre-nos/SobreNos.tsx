import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import './SobreNos.css';
import Desenvolvedores from '../../components/desenvolvedores/Desenvolvedores';



function SobreNos() {
    return (
        <Grid container className='caixaPrincipal'>
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center' >
                <Box className='container1'>
                    <Box alignItems='center' justifyContent='center' width='45%'> 
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center'>
                            Sobre nÃ³s
                        </Typography>
                        <Typography variant="h5" className='txtcolor' align='center' textAlign='justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                    <Box width='45%' className='img'> </Box>
                </Box>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box className='container2'>
                    <Box width='45%' className='img2'></Box>
                    <Box alignItems='center' justifyContent='center' width='45%'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center'>
                            ODS 6
                        </Typography>
                        <Typography variant="h5" className='txtcolor' align='center' textAlign='justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box className='container3'>
                    <Box alignItems='center' justifyContent='center' width="45%">
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center'>
                            Objetivo
                        </Typography>
                        <Typography variant="h5" className='txtcolor' align='center' textAlign='justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                    <Box width="45%" className='img3'></Box>
                </Box>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box className='container4'>
                    <Box width='45%' className='img4'></Box>
                    <Box alignItems='center' justifyContent='center' width='45%'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center'>
                            ???
                        </Typography>
                        <Typography variant="h5" className='txtcolor' align='center' textAlign='justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                            Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                            quisquam voluptates, tenetur corporis quidem!
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'> 
                <Desenvolvedores />
            </Grid>
        </Grid>
    )
}

export default SobreNos;