import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

import aboutImage from '../../assets/about.jpg';

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    paddingBottom: theme.spacing(4),
    color: '#ffffff',
  },
  heroContent: {
    padding: theme.spacing(6, 0, 4),
  },
  imageForm: {
    width: '350px',
    height: '350px',
    borderRadius: '50%',
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div id="aboutMe" className={classes.aboutMe}>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>  
        <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <img className={classes.imageForm} src={aboutImage} alt="Foto de perfil"/>
          </Grid>
          
          <Grid item xs={6}>
            <Typography variant="h3" align="center" color="inherit" gutterBottom>
             Gilbert Sosa
            </Typography>
          <Typography variant="h6" align="left" color="inherit" gutterBottom>
               Hey!! Que tal estas? Mi nombre es Gilbert Sosa, tambien conocido como "Leggy Beats". Soy un
              productor musical nacido en la ciudad de Bonao, Republica Dominicana.
              He estado envuelto en la musica desde el año "2016"; ademas de ser productor soy el fundador y
              propietario de "Leggy Studios".
              Me especialiso en el "Reggaeton" inspirado en los sonidos de la musica alternativa. Mi musica se podria
              describir como un Reggaeton actual, inspirado en la musica alternativa moderna.
            </Typography>
       
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMe;
