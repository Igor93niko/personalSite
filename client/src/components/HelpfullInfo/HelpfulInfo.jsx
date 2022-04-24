import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Button from '../Button/Button';
import cl from './help.module.css';

const useStyle = makeStyles({
  title:{
    textAlign:"center",
    fontFamily:"Oswald !important"
  },
  main:{
    padding: '20px 40px',
  },
  link:{
    marginRight: '5px',
  },
  line:{
    marginTop: '8px',
  }
})
const HelpfulInfo = () => {
  const classes = useStyle();
  return (
    <Grid className={classes.main} id="info">
      <Typography variant="h3" className={classes.title} marginBottom={'20px'}>
        Полезная информация
      </Typography>
      <Grid className={cl.line} container>
        
        <Grid item md={6} xs={12} sm={6}   display={'flex'} justifyContent={'center'} padding={'10px 0'}>
          <Button link="https://metanit.com" className={cl.link} text="METANIT.COM"/>
        </Grid>


        <Grid item md={6} xs={12} sm={6}  display={'flex'} justifyContent={'center'} padding={'10px 0'}>
          <Button link="https://jsonplaceholder.typicode.com" text="JSONPlaceholder"/>
        </Grid>
       
        
       

        
        <Grid item md={6} xs={12} sm={6}  display={'flex'} justifyContent={'center'} padding={'10px 0'}>
          <Button link="https://www.youtube.com/c/VladilenMinin" text="Владилен Минин"/>
        </Grid>

        
        

        
        <Grid item md={6} xs={12} sm={6} display={'flex'} justifyContent={'center'} padding={'10px 0'}>
          <Button link='https://www.youtube.com/c/VladilenMinin' text="Ubi TV"/>
        </Grid>

        
        
      </Grid>
    </Grid>
  );
};

export default HelpfulInfo;