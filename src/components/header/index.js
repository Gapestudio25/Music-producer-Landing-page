import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  nav: {
    textAlign: 'center',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const navigation = [
  {
    tittle: 'Home',
    link: '#home',
  },
  {
    tittle: 'Playlist',
    link: '#playlist',
  },
  {
    tittle: 'About Me',
    link: '#aboutMe',
  },
  {
    tittle: 'Our Team',
    link: '#ourTeam',
  },
  {
    tittle: 'Pricing',
    link: '#pricing',
  },
  {
    tittle: 'Contact Us',
    link: '#contactUs',
  }
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={5} justify="center">
          <nav>
            <IconButton href="#home">
              Logo
            </IconButton>
            {navigation.map((link) => (
              <Link variant="button" color="textPrimary" key={link.tittle} href={link.link} className={classes.link}>
                {link.tittle}
              </Link>
            ))}
          </nav>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;