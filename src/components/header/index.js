import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.png';

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
  logo: {
    borderRadius: '50%',
    width: '60px',
    margin: '0 20px',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    padding: theme.spacing(2),
    '&:hover': {
      background: 'rgba(255, 255, 255, .3)',
    }
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
    tittle: 'Logo',
    link: '#home',
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
            {navigation.map((link, idx) => (
              (link.tittle === 'Logo') ?
                <IconButton key={idx} href={link.link}>
                  <img className={classes.logo} src={logo} alt="Logo" />
                </IconButton> :
              
              <Link
                variant="button"
                underline="none"
                color="textPrimary"
                key={link.tittle}
                href={link.link}
                className={classes.link}
              >
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