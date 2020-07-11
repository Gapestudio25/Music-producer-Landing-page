import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  home: {
    height: '100vh',
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.home}>

    </div>
  );
};

export default Main;