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
    padding: theme.spacing(6, 0, 4),
  },
  playlist: {
    color: '#ffffff',
    paddingBottom: theme.spacing(4),
  },
  reproducer: {
    width: '100%',
    height: '80vh',
    maxHeight: '1000px',
  }
}));

const Playlist = () => {
  const classes = useStyles();

  return (
    <div id="playlist" className={classes.playlist}>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
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