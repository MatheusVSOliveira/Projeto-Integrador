import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { busca, post, } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import "./ListaPostagem.css";

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    useEffect(() => {
        if (token == "") {
            alert("VocÃª precisa estar logado")
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <div>
            <Grid className="fundo-listap">
                {
                    posts.map(post => (
                        <Grid container >
                            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center' >
                                <Box className='containerPost'>
                                    <Box alignItems='center' justifyContent='center' width='100%'>
                                        <Typography variant="body2" textAlign='justify' >
                                            {post.tema?.descricao}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom color='#224a59' align='left' justifyContent='center' textAlign='justify'>
                                            {post.titulo}
                                        </Typography>
                                        
                                        <Typography variant="h6" className='txtcolor' align='left' component="p" >
                                            {post.texto}
                                        </Typography>
                                        
                                    </Box>
                                    <Box>
                                        <img src={post.imagemUrl} alt="" width="500px" />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default ListaPostagem;