import { Grid, Typography, AppBar, Toolbar, CssBaseline } from '@mui/material';
import React, {useState} from 'react';
import {makeStyles} from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import cl from './navbar.module.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  bar:{
    height:'80px'
  },
  navlinks: {
    display: "flex"
  },
 logo: {
    fontFamily:'Oswald ',
    flexGrow: "1",
    color:'white',
    cursor: "pointer",
    "&:hover":{
      color:'yellow'
    }
  },
  link: {
    textDecoration: "none",
    marginLeft: "10px", 
    color: "white",
    fontSize: "20px",
    boxSizing: 'border-box',
    paddingLeft:'5px',
    paddingRight:'5px',
    paddingBottom:'1px',
    background: 'rgba(0,0,0, 0.3)',
    "&:hover": {
      color: "yellow",
      paddingBottom:'0',
      borderBottom: "1px solid white",
    },
  },
  linkMob: {
    background: "rgba(0,0,0,0.4)",
    padding:'5px 10px',
    textDecoration: "none",
    marginLeft: "10px", 
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
    "& a":{
      textDecoration:"none",
      color:"aqua"
    }
  },
  icon:{
    color: 'aqua',
    "&:hover":{
      cursor:'pointer'
    },
  },
  close:{
    display:'none !important'
  },
  mobMenuDiv:{
    position: 'absolute',
    top:'10px',
    width:'100%'
  },
  mobLine:{
    marginLeft:'30px',
    marginTop:'50px',
    width:'100%',
    display:'flex',
    justifyContent:'left'
  }
});

const Navbar = () => {
  const classes = useStyles();
  const [mobMenu,setMobMenu] = useState(cl.mobMenu);
  const [icon, setIcon] = useState(classes.icon)
  const clickHandler = () => {
   setMobMenu(cl.mobMenu + ' ' + cl.active);
   setIcon(classes.icon+' '+ classes.close);
  }
  const closeHandler = () => {
   setMobMenu(cl.mobMenu);
   setIcon(classes.icon);
  }
  return (
    <>
    <AppBar position='static' color='inherit' className={classes.bar}>
      <CssBaseline/>
      <Toolbar className={cl.main}>
        <Typography fontFamily={'Oswald'} variant='h4' className={classes.logo}><Link to="/" className={cl.link}>Gari93</Link></Typography>
        <Grid className={classes.navlinks} sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} >
          <Link to='animation' className={classes.link}>
            CSS-анимации
          </Link>
        </Grid>
        <MenuIcon onClick={clickHandler} className={icon} sx={{display:{xs:'block',sm:'none',md:'none'}}}/>
      </Toolbar>
    </AppBar>
    <Grid className={mobMenu} sx={{display:{xs:'block',sm:'none',md:'none'}}}>
        <span onClick={closeHandler} className={cl.close}>&times;</span>
        <Grid item display={'block'} className={classes.mobMenuDiv}>
          <Grid className={classes.mobLine}>
            <Typography variant='h5' className={classes.linkMob}>
              <Link onClick={closeHandler} to='animation' >CSS-анимации</Link>
            </Typography>
          </Grid> 
        </Grid>
      </Grid>
   </>
  );
};

export default Navbar;