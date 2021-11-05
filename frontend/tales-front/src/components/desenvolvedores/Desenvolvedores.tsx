import React from 'react'
import {Box,Typography } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'; 



function Desenvolvedores() {
    return (
        <Box display='flex' paddingX={5} marginTop={15} justifyContent='center'>
            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px'}}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/DfcvKsN.jpg"
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
                    <Button size="small">GitHub</Button>
                    <Button size="small">LinkedIn </Button>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/bkY3Job.png"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Larissa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">GitHub</Button>
                    <Button size="small">LinkedIn </Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/bkY3Job.png"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Samantha
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat, quisquam illum inventore corporis deserunt aut
                        quibusdam autem laudantium itaque natus est qui unde dolorem obcaecati nisi, praesentium id officiis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">GitHub</Button>
                    <Button size="small">LinkedIn </Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px'}}> 
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/CpL4vfZ.png"
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
                    <Button size="small">GitHub</Button>
                    <Button size="small">LinkedIn </Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }} style={{ margin: '30px' }}>
                <CardMedia
                    component="img"
                    height="230"
                    image="https://i.imgur.com/CpL4vfZ.png"
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
                    <Button size="small">GitHub</Button>
                    <Button size="small">LinkedIn </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Desenvolvedores;
