import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Divider,
  Typography,
  Link,
  Container,
  Box,
} from '@material-ui/core';
import {Facebook, Twitter, Instagram, YouTube} from '@material-ui/icons';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 0),
    marginTop: theme.spacing(5),
    background: 'black', //'rgba(255, 255, 255, .3)',
    borderTop: '1px solid #ffffff',
    color: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 2),
    },
  },
  logo: {
    borderRadius: '50%',
    width: '200px',
  },
  social: {
    margin: '30px 30px 0 30px',
    textDecoration: 'none',
  },
  socialLink: {
    color: '#ffffff',
    '&:hover': {
      color: '#DEDEDE',
    }
  }
}));

function Logo() {
  const classes = useStyles();

  return (
    <Typography variant="h4" align="center">
      <img className={classes.logo} src={logo} alt="Logo" />
    </Typography>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const socials = [
  {
    icon: 'Facebook',
    link: 'https://www.google.com',
    alt: 'facebook icon',
  },
  {
    icon: 'Instagram',
    link: 'https://www.google.com',
    alt: 'instagram icon',
  },
  {
    icon: 'Twitter',
    link: 'https://www.google.com',
    alt: 'twitter icon',
  },
  {
    icon: 'Youtube',
    link: 'https://www.google.com',
    alt: 'Youtube icon',
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" component="footer" className={classes.footer}>
      <Box>
        <Logo />
      </Box>

      <Box mb={1}>
        <Copyright />
      </Box>

      <Divider />

      <Grid container justify="center">
        {socials.map((social, idx) => (
          <Box key={idx} className={classes.social}>
            <Typography>
              <a href={social.link} className={classes.socialLink}>
                {
                  social.icon === 'Facebook' ? <Facebook/> :
                    social.icon === 'Instagram' ? <Instagram/> :
                      social.icon === 'Youtube' ? <YouTube/> :
                        <Twitter/>
                }
              </a>
            </Typography>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Footer;
