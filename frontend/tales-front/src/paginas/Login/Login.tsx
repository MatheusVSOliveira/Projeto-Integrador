import React from 'react';
import './Login.css';

import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="colorlogin-background">
                <Grid item xs={3} alignItems="center">
                    <Box paddingX="20px" border={1} borderRadius={9} className="boxlogin1">
                        <Box>
                            <form>
                                <img src="https://i.imgur.com/lkhAgRt.png" alt="" className="tamanho-logo"/>
                                <Typography align="left">Usuario</Typography>
                                <TextField id="usuario" label="digite seu email" variant="outlined" name="usuario" fullWidth className="campo-de-texto" />
                                <Typography align="left">Senha</Typography>
                                <TextField id="senha" label="digite sua senha" variant="outlined" name="senha" type="password" fullWidth className="campo-de-texto" />
                            </form>
                        </Box>
                        <Box marginTop={1} textAlign="center">
                            <Link to='/home' className="textDecoration">
                                <Button type="submit" variant="contained" className="botao">
                                    Entrar
                                </Button>
                            </Link>
                            <Box display="flex" justifyContent="center" marginTop={2}>
                                <Box>
                                    <Typography variant="subtitle1" gutterBottom align="center">Não possui um cadastro</Typography>
                                    <Typography variant="subtitle1" gutterBottom align="center" className="bold cursor">Cadastrar-se</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login