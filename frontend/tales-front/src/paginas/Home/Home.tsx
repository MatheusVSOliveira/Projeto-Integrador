import React from 'react'
import './Home.css';

import { Grid, Box, Typography } from '@material-ui/core';

function Home() {
    return (
        <>
            <Grid container direction='row' justifyContent="center" alignItems='center' className='fundo'>
                <Grid alignItems='center' item xs={6} className='fundo'>
                    <Box>
                        <Typography variant="h3">Titulo</Typography>
                        <Typography variant="h6">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Typography>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/g8J9zlN.png" alt="" className='imgprincipal' />
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent="center" alignItems='center' className='fundo'>
                <Grid item xs={12}>
                    <Box className="margem-dev">
                        <Typography variant="h3">Desenvolvedores</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} >
                    <img src="https://i.imgur.com/2y1Fwv7.png" alt="" className="imgdev" />
                </Grid>
                <Grid item xs={2} >
                    <img src="https://i.imgur.com/2y1Fwv7.png" alt="" className="imgdev" />
                </Grid>
                <Grid item xs={2} >
                    <img src="https://i.imgur.com/2y1Fwv7.png" alt="" className="imgdev" />
                </Grid>
                <Grid item xs={2}  >
                    <img src="https://i.imgur.com/2y1Fwv7.png" alt="" className="imgdev" />
                </Grid>
                <Grid item xs={2} >
                    <img src="https://i.imgur.com/2y1Fwv7.png" alt="" className="imgdev" />
                </Grid>
            </Grid>
        </>
    )
}

export default Home
