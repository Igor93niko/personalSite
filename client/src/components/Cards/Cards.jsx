import React from 'react';
import {Card, CardMedia, CardContent, Typography, CardActions, Button, Grid} from '@mui/material';
import Img from '../../image/mainImage.jpg';
const Cards = () => {
  return (
    <Grid item md={6} xs={12} sm={6}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={Img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Cards;