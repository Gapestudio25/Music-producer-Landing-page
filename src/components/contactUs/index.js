import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  contactUs: {
    height: '100vh',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="contactUs" className={classes.contactUs}>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Contact Us
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;