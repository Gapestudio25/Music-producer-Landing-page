import React, {useState} from 'react';
import Modal from './modal';
import {makeStyles} from '@material-ui/core/styles';
import mainImage from '../../assets/portada.jpg';
import {Grid, Container, Typography, Button, CssBaseline} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background:'black',//radial-gradient(circle, rgba(134,1,13,1) 0%, rgba(20,19,119,1) 50%)',
    marginTop: 'auto',
    color: '#ffffff',
    padding: '70px 0',
  },
  mainText: {
    margin: theme.spacing(5, 0)
  },
  img: {
    width:'100%',

  },
  btnModalOpener: {
    background: '#FF3EB3',
    color: '#ffffff',
    border: '1px solid #ffffff',
    '&:hover': {
    background: '#FAC03D',
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
            {/* <Typography variant="h4" align="center" color="initial" gutterBottom> */}
              {/* Great and High */} 
            {/* </Typography> */}
            <Typography variant="h4" align="center" color="initial" gutterBottom>
              BEATS DE ALTA CALIDAD
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center" color="initial" gutterBottom>
			  10 BEATS Para Artistas Independientes
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center" color="initial" gutterBottom>
              <span role="img" aria-label="fire-emoji">🔥 </span> 
               Directo en tu bandeja de entrada en '3 minutos'
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
