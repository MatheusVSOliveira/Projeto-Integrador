import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent, Grid } from "@mui/material"
import './DeletarPostagem.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarPostagem() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history.push('/posts')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Postagem deletada com sucesso');
  }

  function nao() {
    history.push('/posts')
  }
  return (
    <>
      <Grid container className='fundo-listap'>
        <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
          <Box  className='containerListPost'> 
            <Box alignItems='center' justifyContent='center'>
              <Typography variant="h5" gutterBottom>
                Deseja deletar a Postagem? 
              </Typography>
              <Typography variant="h6" gutterBottom align='center' justifyContent='center'>
                {post?.titulo}
              </Typography>
              <Typography variant="body1" align='center' component="p" noWrap>
                {post?.texto}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" >
              <Box mx={2} my={5}>
                <Button onClick={sim} variant="contained" className="btnColorBlue" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2} my={5}>
                <Button onClick={nao} variant="contained" size='large' color='primary' className="btnColorRed">
                  Não
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default DeletarPostagem;