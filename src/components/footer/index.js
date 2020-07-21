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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  logo: {
    borderRadius: '50%',
    width: '80px',
  },
  social: {
    margin: '30px 30px 0 30px',
    textDecoration: 'none',
  },
  socialLink: {
    color: '#000000',
    '&:hover': {
      color: '#3d3d3d',
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
    <Typography variant="body2" color="textSecondary" align="center">
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
    <React.Fragment>
      <Container maxWidth="md" component="footer" className={classes.footer}>
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
    </React.Fragment>
  );
};

export default Footer;