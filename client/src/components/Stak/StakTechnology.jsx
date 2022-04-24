import { Typography, Grid, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import git from '../../icons/git.svg';
import react from '../../icons/react.svg';
import nodejs from '../../icons/nodejs.svg';
import mongo from '../../icons/mongodb.svg';
import css from '../../icons/css3.svg';
import html from '../../icons/html.svg';


const useStyle = makeStyles({
  main:{
    display:'flex',
    justifyContent:'center'
  },
  title:{
    textAlign:"center",
    fontFamily:"Oswald !important"
  },
  list:{
    padding:"0 20px",
    justifyContent:"center",
    display:"flex",
    flexWrap:"wrap"
  },
  // icon:{
  //   "& img":{
  //     animation: 'stak 3s linear infinite',
  //     animationDelay: 'calc(0.5s * var(--i))'
  //   }
  // },
  image:{
    width:"30px"
  }
});
const StakTechnology = () => {
  const classes = useStyle();
  return (
    <Grid id="stak">
      <Typography variant="h3" className={classes.title} marginBottom={'10px'}>
        Стек технологий
      </Typography>
      <Grid className={classes.main}>
      <Grid item className={classes.list} md={12} xs={12} sl={12}>
          <ListItemButton className={classes.icon}>
            <ListItemIcon >
              <img src={html} alt="HTML5" style={{'--i':0}} className={classes.image}/>
            </ListItemIcon>
            <ListItemText><Typography fontFamily={'Oswald'} color={'blue'}>HTML 5</Typography></ListItemText>
          </ListItemButton>
          <ListItemButton className={classes.icon}>
            <ListItemIcon>
              <img src={css} className={classes.image} style={{'--i':1}} alt="CSS3"/>
            </ListItemIcon>
            <ListItemText><Typography fontFamily={'Oswald'} color={'blue'}>CSS 3</Typography></ListItemText>
          </ListItemButton>
          <ListItemButton className={classes.icon}> 
            <ListItemIcon>
              <img src={react} className={classes.image} style={{'--i':2}} alt="ReactJS"/>
            </ListItemIcon>
            <ListItemText><Typography fontFamily={'Oswald'} color={'blue'}>ReactJS</Typography></ListItemText>
          </ListItemButton>
        <ListItemButton className={classes.icon}>
          <ListItemIcon>
           <img src={nodejs} className={classes.image} style={{'--i':3}} alt="NodeJS"/>
          </ListItemIcon>
          <ListItemText ><Typography fontFamily={'Oswald'} color={'blue'}>NodeJS</Typography></ListItemText>
        </ListItemButton>
        <ListItemButton className={classes.icon}>
          <ListItemIcon>
            <img src={mongo} className={classes.image} style={{'--i':4}} alt="mongo"/>
          </ListItemIcon>
          <ListItemText ><Typography fontFamily={'Oswald'} color={'blue'}>MongoDB</Typography></ListItemText>
        </ListItemButton>
        <ListItemButton className={classes.icon}>
          <ListItemIcon>
            <img src={git} className={classes.image} style={{'--i':5}} alt="gitHub"/>
          </ListItemIcon>
          <ListItemText ><Typography fontFamily={'Oswald'} color={'blue'}>GitHub</Typography></ListItemText>
        </ListItemButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StakTechnology;