import React  from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import './SobreNos.css';
import Desenvolvedores from '../../components/desenvolvedores/Desenvolvedores';



function SobreNos() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='caixaPrincipal'>
            <Box className='container1'>
                <Box alignItems='center' justifyContent='center' width="500px">
                    <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center' width='500px' >
                        Sobre nós
                    </Typography>
                    <Typography variant="h5" className='txtcolor' align='center' width='500px' textAlign='justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                        Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                        quisquam voluptates, tenetur corporis quidem!
                    </Typography>
                </Box>
                <Box className='img'></Box>
            </Box>

            <Box className='container2'>
                <Box className='img2'></Box>
                <Box alignItems='center' justifyContent='center' width="500px">
                    <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center' width='500px' >
                        ODS 6
                    </Typography>
                    <Typography variant="h5" className='txtcolor' align='center' width='500px' textAlign='justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                        Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                        quisquam voluptates, tenetur corporis quidem!
                    </Typography>
                </Box>
            </Box>

            <Box className='container3'>
                <Box alignItems='center' justifyContent='center' width="500px">
                    <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center' width='500px' >
                        Objetivo
                    </Typography>
                    <Typography variant="h5" className='txtcolor' align='center' width='500px' textAlign='justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                        Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                        quisquam voluptates, tenetur corporis quidem!
                    </Typography>
                </Box>
                <Box className='img3'></Box>
            </Box>

            <Box className='container4'>
                <Box className='img4'></Box>
                <Box alignItems='center' justifyContent='center' width="500px">
                    <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center' width='500px' >
                        ???
                    </Typography>
                    <Typography variant="h5" className='txtcolor' align='center' width='500px' textAlign='justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti esse veniam similique.
                        Rem beatae at labore repudiandae nostrum laboriosam ipsum itaque? Deserunt numquam molestiae
                        quisquam voluptates, tenetur corporis quidem!
                    </Typography>
                </Box>
            </Box>
            <Desenvolvedores />     
        </Grid>
    )
}

export default SobreNos
