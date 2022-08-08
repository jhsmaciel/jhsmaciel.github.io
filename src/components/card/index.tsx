import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Projeto } from 'interfaces';
import Grid from '@mui/material/Grid';

interface CardProjetoProps {
    projeto: Projeto | undefined
    onClick: () => void | Promise<void>  
}

export const CardProjeto: React.FC<CardProjetoProps> = ({ projeto, onClick }) => {

    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    return (
        <Grid item {...colWidth} >
            <Card style={{ width: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {projeto ? projeto.titulo : <Skeleton />}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {projeto ? projeto.tecnologias : <Skeleton />}
                  </Typography>
                  <Typography variant="body2">
                    {projeto ? projeto.texto: <Skeleton height={60} />} 
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: 1.5 }}>
                  {
                    projeto ?
                    (
                      <Button
                        size="large"
                        style={{ textTransform: "none", color: "transparent" }} 
                        className="arco-iris"
                        onClick={onClick}
                      >
                        Ver projeto!
                      </Button>
                    ) :
                    (
                      <Skeleton variant="rectangular" width={91} height={30} />
                    )
                  }
                </CardActions>
            </Card>
        </Grid>
    );
}