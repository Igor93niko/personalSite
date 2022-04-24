import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import git from '../../icons/git.svg'; 
import vk from '../../icons/vk.svg'; 
import gmail from '../../icons/gmail.svg'; 


const useStyle = makeStyles({
  main:{
    minHeight: '300px',
    justifyContent: 'center'
  },
  contact:{
    background:'#fff',
    minHeight:'300px'
  },
  title:{
    textAlign: 'center',
    fontFamily: 'Oswald !important',
    marginBottom: '20px'
  },
  text:{
    fontFamily: 'Oswald !important', 
    paddingTop: '20px',
    paddingBottom:'20px',
    paddingLeft:'30px',
    "&:hover":{
      cursor:'pointer'
    }
  },
  git:{
    background: `url(${git}) no-repeat`,
    backgroundSize: '24px 24px',
    backgroundPositionY: 'center',
  },
  vk:{
    background: `url(${vk}) no-repeat`,
    backgroundSize: '30px 30px',
    backgroundPositionY: 'center',
  },
  gmail:{
    background: `url(${gmail}) no-repeat`,
    backgroundSize: '24px 24px',
    backgroundPositionY: 'center',
  },
  line:{
    display:'flex',
    justifyContent:"center"
  }
});

const Contacts = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.main} id="contact">
      <Grid item md={6} xs={6} sm={9} className={classes.contact}>
        <Typography variant='h3' className={classes.title}>Контакты</Typography>
        <Grid className={classes.line}>
         
           <a rel="noreferrer" href='mailto:gari1993niko@gmail.com' target="_blank">
            <Typography variant='h5' className={classes.text+ ' '+ classes.gmail}> gari199niko@gmail.com</Typography>
          </a> 

        </Grid>
        <Grid className={classes.line}>
         <Typography variant='h5' className={classes.text+ ' '+ classes.git}>
           <a href='https://github.com/Igor93niko' target="_blank" rel="noreferrer">Igor93niko</a>
          </Typography>
        </Grid>
        <Grid className={classes.line}>
          <Typography variant='h5' className={classes.text + ' '+ classes.vk}>
            <a href='https://vk.com/gari1993niko' target="_blank" rel="noreferrer">gari1993niko</a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contacts;