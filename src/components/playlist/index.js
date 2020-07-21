import React from 'react';
import {
  makeStyles,
  CssBaseline,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  reproducer: {
    width: '100%',
    height: '80vh',
  }
}));

const Playlist = () => {
  const classes = useStyles();

  return (
    <div id="playlist" className={classes.playlist}>
      <Container maxWidth="xl" component="main" className={classes.heroContent}>  
        <CssBaseline />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Playlist
        </Typography>
      </Container>
      <Container maxWidth="xl" component="main">
        <Grid container justify="center" alignItems="center">
          <iframe
            src="https://player.beatstars.com/?storeId=107684"
            title="Music Reproducer"
            className={classes.reproducer}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Playlist;