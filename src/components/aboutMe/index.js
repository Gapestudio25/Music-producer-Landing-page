import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    // height: '100vh',
    // background: '#0400EB',
    paddingBottom: theme.spacing(4),
    color: '#ffffff',
  },
  heroContent: {
    padding: theme.spacing(6, 0, 4),
  },
  imageForm: {
    width: '350px',
    height: '350px',
    borderRadius: '40%',
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="aboutMe" className={classes.aboutMe}>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>  
          <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
            About Me
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <img className={classes.imageForm} src="https://via.placeholder.com/150" alt="Foto de perfil"/>
            </Grid>
            
            <Grid item xs={6}>
              <Typography variant="h5" align="center" color="inherit" gutterBottom>
                Luis Miguel
              </Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in porttitor diam, maximus venenatis diam. In porta velit enim, nec pharetra nulla congue id. Phasellus vel augue ante. Pellentesque vitae mi non lacus iaculis elementum. Fusce egestas nisi urna, id gravida lacus imperdiet sit amet. Curabitur sit amet justo in massa posuere ornare. Aliquam consectetur eros ac consectetur auctor. Donec convallis ex sed ligula feugiat, non euismod metus pellentesque. Mauris ac aliquet dolor, aliquam blandit velit. Ut at pharetra nunc. Proin porta dui nec laoreet posuere.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in porttitor diam, maximus venenatis diam. In porta velit enim, nec pharetra nulla congue id. Phasellus vel augue ante. Pellentesque vitae mi non lacus iaculis elementum. Fusce egestas nisi urna, id gravida lacus imperdiet sit amet. Curabitur sit amet justo in massa posuere ornare. Aliquam consectetur eros ac consectetur auctor. Donec convallis ex sed ligula feugiat, non euismod metus pellentesque. Mauris ac aliquet dolor, aliquam blandit velit. Ut at pharetra nunc. Proin porta dui nec laoreet posuere.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;