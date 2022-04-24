import { Grid } from '@mui/material';
import React from 'react';
import cl from './loader.module.css';
const Loader = () => {
  return (
    <React.Fragment>
    <div className={cl.title}><h2>Бесконечный - Loader</h2></div>  
    <Grid className={cl.container} id={'example'}>
    <div className={cl.circle}>
      <span style={{'--i':1}}></span>
      <span style={{'--i':2}}></span>
      <span style={{'--i':3}}></span>
      <span style={{'--i':4}}></span>
      <span style={{'--i':5}}></span>
      <span style={{'--i':6}}></span> 
      <span style={{'--i':7}}></span>
      <span style={{'--i':8}}></span>
      <span style={{'--i':9}}></span>
      <span style={{'--i':10}}></span>
      <span style={{'--i':11}}></span>
      <span style={{'--i':12}}></span> 
      <span style={{'--i':13}}></span>
      <span style={{'--i':14}}></span>
      <span style={{'--i':15}}></span>
      <span style={{'--i':16}}></span>
      <span style={{'--i':17}}></span>
      <span style={{'--i':18}}></span>    
      <span style={{'--i':19}}></span>
      <span style={{'--i':20}}></span>  
    </div>
    <div className={cl.circle}>
    <span style={{'--i':1}}></span>
      <span style={{'--i':2}}></span>
      <span style={{'--i':3}}></span>
      <span style={{'--i':4}}></span>
      <span style={{'--i':5}}></span>
      <span style={{'--i':6}}></span> 
      <span style={{'--i':7}}></span>
      <span style={{'--i':8}}></span>
      <span style={{'--i':9}}></span>
      <span style={{'--i':10}}></span>
      <span style={{'--i':11}}></span>
      <span style={{'--i':12}}></span> 
      <span style={{'--i':13}}></span>
      <span style={{'--i':14}}></span>
      <span style={{'--i':15}}></span>
      <span style={{'--i':16}}></span>
      <span style={{'--i':17}}></span>
      <span style={{'--i':18}}></span>    
      <span style={{'--i':19}}></span>
      <span style={{'--i':20}}></span>    
    </div>
  </Grid>
  </React.Fragment>
  );
};

export default Loader;