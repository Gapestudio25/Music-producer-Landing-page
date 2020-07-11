import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  ourTeam: {
    height: '100vh',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const OurTeam = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="ourTeam" className={classes.ourTeam}>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Our Team
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default OurTeam;