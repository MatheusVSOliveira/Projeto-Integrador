import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Desenvolvedores.css';


function Desenvolvedores() {
    return (
        <Box display='flex' paddingX={5} marginTop={15} justifyContent='center' flexWrap='wrap'>
            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/9VSrhzV.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Matheus Oliveira
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/MatheusVSOliveira" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/matheusvsoliveira/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/SeyY8nA.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Larissa Inacio
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/larissacost" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/larissaimdacosta067841123/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/uqbyXdH.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Samantha Costa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/samanthaccosta" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/samantha-costa-0290b91a7/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/WXmbb8E.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        João Pedro
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/Jprood" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/joao-pedro-rocha/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/1HkrPQx.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Richard Narumi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/narumiincode" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/richard-kenji-300ba6bb/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Desenvolvedores;
