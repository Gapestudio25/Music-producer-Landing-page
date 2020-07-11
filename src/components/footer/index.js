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

function Logo() {
  return (
    <Typography variant="h4" align="center">
      <Link color="inherit" href="https://www.google.com/">
        Logo
      </Link>
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

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  social: {
    margin: '40px 30px 0 30px',
    textDecoration: 'none',
    color: '#000000',
  }
}));

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
        <Box mb={1}>
          <Logo />
        </Box>

        <Box mb={4}>
          <Copyright />
        </Box>

        <Divider />

        <Grid container spacing={4} justify="center">
          {socials.map((social) => (
            <Box key={social.alt} mt={5} className={classes.social}>
              <Typography gutterBottom>
                <a href={social.link}>
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