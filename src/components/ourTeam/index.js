import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  ourTeam: {
    // height: '100vh',
    //background: '#FF0318',
    paddingBottom: theme.spacing(4),
    color: '#ffffff',
  },
  heroContent: {
    padding: theme.spacing(6, 0, 10),
  },
  imageForm: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
  },
}));

const members = [
  {
    name: 'Empleado',
    cargo: 'Cargo',
    photo: 'https://via.placeholder.com/150',
  },
  {
    name: 'Empleado',
    cargo: 'Cargo',
    photo: 'https://via.placeholder.com/150',
  },
];

const OurTeam = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="ourTeam" className={classes.ourTeam}>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
            Our Team
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <Grid
            container
            justify="space-around"
          >
            {members.map((employ, idx) => (
              <Grid
                key={idx}
                container
                item
                spacing={10}
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
              >
                <img
                  className={classes.imageForm}
                  src={employ.photo}
                  alt="Foto de perfil"
                />
                <Grid item>
                  <Typography
                    variant="h5"
                    align="center"
                    color="inherit"
                    gutterBottom
                  >
                    {employ.name + idx}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="inherit"
                    gutterBottom
                  >
                    {employ.cargo + idx}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default OurTeam;