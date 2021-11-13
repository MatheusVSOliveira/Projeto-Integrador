import React, { useEffect } from 'react'
import './Home.css';

import { Grid, Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';
import CadastroPost from '../../components/postagens/cadastropost/CadastroPost';

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
            <Grid container direction='row' justifyContent="center" alignItems='center' className='fundo-home'>
                <Grid item xs={12}>
                    <CadastroPost/>
                </Grid>
                <Grid item xs={6} justifyContent="center" alignItems="center">
                    <ListaPostagem/>
                </Grid>
            </Grid>

        </>
    )
}

export default Home