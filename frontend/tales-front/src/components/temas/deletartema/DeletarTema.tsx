import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { Grid } from '@mui/material';


function DeletarTema() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage('token');
  const [tema, setTema] = useState<Tema>()

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
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history.push('/temas')
    deleteId(`/temasadmin/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Tema deletado com sucesso');
  }

  function nao() {
    history.push('/temasadmin')
  }

  return (
    <>
        <Grid container xs={12} className='fundo-listap' justifyContent='center' alignItems='center'>
          <Grid item xs={6} display='flex' justifyContent='center' alignItems='center'>
            <Box className='containerListPost'>
              <Box justifyContent="center" alignItems="center">
                <Typography variant="h5" gutterBottom>
                  Deseja deletar o Tema:
                </Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold', color: '#224a59' }}>
                  {tema?.nome}
                </Typography>
                <Typography variant="body1">
                  {tema?.descricao}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box mx={2} my={2}>
                  <Button onClick={sim} variant="contained" className="marginLeft btnColorBlue" size='large' color="primary">
                    Sim
                  </Button>
                </Box>
                <Box mx={2} my={2}>
                  <Button onClick={nao} variant="contained" size='large' color="secondary" className="btnColorRed">
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
export default DeletarTema;