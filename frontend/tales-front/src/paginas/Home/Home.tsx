import React, { useEffect } from 'react'
import './Home.css';

import { Grid, Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    useEffect(() => {
        if (token == '') { 
            alert("Você precisa estar logado!")
            history.push('/login')
        }
    }, [token])
    return (
        <>
            <Grid container direction='row' justifyContent="center" alignItems='center' className='fundo'>
                <Grid alignItems='center' item xs={6} className='fundo'>
                    <Box margin='30px'>
                        <Typography variant="h3">Titulo</Typography>
                        <Typography textAlign="justify"  alignItems='center' variant="h6">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Typography>
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/g8J9zlN.png" alt="" className='imgprincipal' />
                </Grid>
            </Grid>

        </>
    )
}

export default Home