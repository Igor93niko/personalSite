import { Grid } from '@mui/material';
import React from 'react';
import Cards from '../Cards/Cards';
const Posts = () => {
  return (
    <Grid container padding={3} spacing={2}>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </Grid>
  );
};

export default Posts;