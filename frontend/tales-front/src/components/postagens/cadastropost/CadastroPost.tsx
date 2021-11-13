import React, { ChangeEvent, useEffect, useState } from 'react'
import { Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid, Box } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post } from '../../../services/Service';

function CadastroPost() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("VocÃª precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            nome: '',
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        imagemUrl: '',
        data: '',
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id == undefined) {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history.push('/posts')
    }

    return (
        <Grid container justifyContent="center" alignContent="center" >
            <Grid item xs={6}>
                <Box margin="10px" marginX="30px" >
                    <form onSubmit={onSubmit} className='paddingPost'>
                        <Typography variant="h4">Postar</Typography>
                        <Typography variant="h6" className="txtFieldColor-post" marginTop="10px" align="left">Titulo</Typography>
                        <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" placeholder="O titulo deve ter no minimo" fullWidth className="caixatexto-color" />
                        <Typography variant="h6" className="txtFieldColor-post" marginTop="10px" align="left">Texto</Typography>
                        <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" placeholder="O titulo deve ter no minimo" fullWidth multiline={true} minRows={5} className="caixatexto-color" />
                        <Typography variant="h6" className="txtFieldColor-post" marginTop="10px" align="left">Imagem</Typography>
                        <TextField value={postagem.imagemUrl} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagemUrl" label="imagem" name="imagemUrl" variant="outlined" placeholder="insira a url de uma imagem" fullWidth className="caixatexto-color" />

                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label" className="margemcaixa-tema">Tema </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                className="caixatexto-color tamanhocaixa-tema margemcaixa-tema"
                                onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                                    headers: {
                                        'Authorization': token
                                    }
                                })}>
                                {
                                    temas.map(tema => (
                                        <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                    ))
                                }
                            </Select>
                            <Box justifyContent="right" alignItems="flex-start">
                                <Button type="submit" variant="contained" color="primary" className="botao-">
                                    Postar
                                </Button>
                            </Box>
                        </FormControl>

                    </form>
                </Box>
            </Grid>
            <Grid item xs={6} marginTop="35px">
                <Box display="flex" className="containerForm  borda-cor" border={1}>
                    <Typography variant="h4" marginBottom="20px"> Deixe aqui suas ideias</Typography>
                    <Typography variant="h6" marginX="10px" textAlign="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor totam reiciendis repellendus dolorem temporibus consequuntur iusto
                        debitis, fugit voluptatum ea pariatur debitis, fugit voluptatum ea pariatur sequi veritatis facilis
                        quasi asperiores? Praesentium dolorum eum eos!</Typography>
                    <Box className="imagem-home"></Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default CadastroPost;