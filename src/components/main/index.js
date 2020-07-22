import React, {useState} from 'react';
import Modal from './modal';
import {makeStyles} from '@material-ui/core/styles';
import mainImage from '../../assets/Pic02.jpeg';
import {Grid, Container, Typography, Button, CssBaseline} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'radial-gradient(circle, rgba(134,1,13,1) 0%, rgba(20,19,119,1) 100%)',
    marginTop: 'auto',
    color: '#ffffff',
    padding: '70px 0',
  },
  mainText: {
    margin: theme.spacing(5, 0)
  },
  img: {
    width:'100%',
    borderRadius: '10%',
  },
  btnModalOpener: {
    background: '#86010d',
    color: '#ffffff',
    border: '1px solid #ffffff',
    '&:hover': {
      background: 'RGBA(134,1,13,.8)',
    }
  },
  btnTransparent: {
    background: 'rgba(255, 255, 255, 0)',
    color: '#ffffff',
    border: '1px solid #ffffff',
    '&:hover': {
      background: 'rgba(255, 255, 255, .3)',
    }
  },
  // (Asphal) #0d050b, (Rojo) #ef0109, (Miliano Red) #a70510,
  // (Navy Blue) #010075, (Red Devil) #86010d, (Silver Chalice) #a1a1a1,
}));

const Main = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <Container id="home" className={classes.container} maxWidth="xl" component="main">
      <Modal open={open} close={setOpen}/>
      <Grid direction="row" container alignItems="center">
        <CssBaseline />
        <Grid container item direction="column" xs={12} md={6} className={classes.mainText}>
          <Grid item>
            <Typography variant="h4" align="center" color="initial" gutterBottom>
              Great and High 
            </Typography>
            <Typography variant="h4" align="center" color="initial" gutterBottom>
              QUALITY INSTRUMENTALS 
            </Typography>
            <Typography variant="h4" align="center" color="initial" gutterBottom>
              For Everyone
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center" color="initial" gutterBottom>
              <span role="img" aria-label="fire-emoji">🔥 </span> 
              Get a FREE BEAT
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" color="initial" gutterBottom>
              Delivered in your inbox TODAY!!!
            </Typography>
            <Grid container item alignItems="flex-end" justify="space-evenly">
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.btnModalOpener}
                  onClick={handleOpenModal}
                >
                  Get Beat
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.btnTransparent}
                >
                  Read More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid container item direction="column" xs={12} md={6}>
          <img src={mainImage} className={classes.img} alt="Imagen de portada" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;