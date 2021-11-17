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
      <Grid container xs={12} className='fundo-listap' justifyContent='center' alignItems='center'>
        <Grid item xs={6} display='flex' justifyContent='center' alignItems='center'>
          <Box className='containerListPost'>
            <Box alignItems='center' justifyContent='center'>
              <Typography variant="h5" gutterBottom>
                Deseja excluir a postagem?
              </Typography>
              <Typography variant="body2" textAlign='left' style={{ fontWeight: 'bold', color: 'black' }}>
                {post?.usuario?.nome}
              </Typography>
              <Typography variant="h5" gutterBottom align='center' justifyContent='center'>
                {post?.titulo}
              </Typography>
              <Typography variant="body1" align='center' component="p" noWrap>
                {post?.texto}
              </Typography>
            </Box>
            <Box>
              <img src={post?.imagemUrl} alt="" width="500px" />
            </Box>
            <Typography variant="body2" textAlign='right'>
              {post?.tema?.nome}
            </Typography>
            <Typography variant="body2" textAlign='left'>
              {post?.data}
            </Typography>
            <Box display="flex" justifyContent="center" >
              <Box mx={2} my={2}>
                <Button onClick={sim} variant="contained" className="btnColorBlue" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2} my={2}>
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