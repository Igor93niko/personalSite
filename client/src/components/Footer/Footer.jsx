import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import mainImage from '../../image/mainImage.jpg'
const useStyle = makeStyles({
 footer:{
   background:`url(${mainImage})`,
   backgroundRepeat:'no-repeat',
   backgroundSize: 'cover',
   backgroundPosition:'bottom ',
   width:'100%',
   minHeight:'50px',
   marginTop:'0px !important',
   paddingRight:'20px',
   display:'flex',
   justifyContent:"flex-end",
   alignItems:'center'
 },
title:{
  fontFamily: 'Oswald',
  fontSize:'20px',
  color: 'white'
}
});

const Footer = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.footer}>
  
    </Grid>
  );
};

export default Footer;