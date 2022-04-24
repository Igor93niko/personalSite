import React from 'react';
import { Grid } from '@mui/material';
import {makeStyles} from '@mui/styles';
import mainImage from "../../image/mainImage.jpg"

const useStyles = makeStyles({
  img:{
  marginTop:'-80px',
  minHeight: '100vh',
  width: '100%',
  objectFit:'contain',
  backgroundImage:`url(${mainImage})`,
  backgroundRepeat:'no-repeat',
  backgroundSize: 'cover',
  imageRendering:'pixelated'
  }
  
});

const MainImage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.img}>
    
    </Grid>
  );
};

export default MainImage;