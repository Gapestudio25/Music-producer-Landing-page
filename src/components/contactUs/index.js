import React from 'react';
import {
  makeStyles,
  CssBaseline,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from '@material-ui/core';
import {Phone, Email, LocationOn} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  contactUs: {
    // height: '100vh',
    // background: '#FF0318',
    paddingBottom: theme.spacing(4),
    color: '#ffffff',
  },
  heroContent: {
    padding: theme.spacing(6, 0, 4),
  },
  card: {
    maxWidth: 500,
    margin: 'auto',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    paddingBottom: theme.spacing(2),
  },
  media: {
    paddingTop: '56.25%'
  },
  content: {
    textAlign: 'left',
    padding: theme.spacing(5, 5, 0),
  },
  contactTypeIcon: {
    marginRight: '20px',
  },
  divider: {
    margin: theme.spacing(3),
  },
}));

const phones = [
  {
    type: 'Mobile',
    number: '(999) 999-9999',
  },
  {
    type: 'Home',
    number: '(000) 000-0000',
  },
];

const emails = [
  {
    type: 'Personal',
    mail: 'JohnDoe@example.com',
  },
  {
    type: 'Company',
    mail: 'JohnDoe@ecompany.com',
  },
];

const locations = [
  {
    type: 'Home',
    direction: '1419 Westwood Blvd, LA',
  },
  {
    type: 'Office',
    direction: '1419 Westwood Blvd, LA',
  },
];

const ContactUs = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="contactUs" className={classes.contactUs}>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
            Contact Us
          </Typography>
        </Container>
        <Container maxWidth="xl" component="main">
          <Grid item>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={
                  'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg'
                }
              />
              <CardContent className={classes.content}>
                <Grid container direction="row" alignItems="stretch">
                  <Grid item xs={1} className={classes.contactTypeIcon}>
                    <Phone/>
                  </Grid>
                  <Grid item container direction="column" xs={10} spacing={2}>
                    {phones.map((phone, idx) => (
                      <Grid item key={idx}>
                        <Typography>
                          {phone.number}
                        </Typography>

                        <Typography variant={'caption'} color='secondary' className={classes.test}>
                          {phone.type}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Divider className={classes.divider} light />
                
                <Grid container direction="row" alignItems="stretch">
                  <Grid item xs={1} className={classes.contactTypeIcon}>
                    <Email/>
                  </Grid>
                  <Grid item container direction="column" xs={10} spacing={2}>
                    {emails.map((email, idx) => (
                      <Grid item key={idx}>
                        <Typography>
                          {email.mail}
                        </Typography>

                        <Typography variant={'caption'} color='secondary' className={classes.test}>
                          {email.type}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Divider className={classes.divider} light />

                <Grid container direction="row" alignItems="stretch">
                  <Grid item xs={1} className={classes.contactTypeIcon}>
                    <LocationOn/>
                  </Grid>
                  <Grid item container direction="column" xs={10} spacing={2}>
                    {locations.map((location, idx) => (
                      <Grid item key={idx}>
                        <Typography>
                          {location.direction}
                        </Typography>

                        <Typography variant={'caption'} color='secondary' className={classes.test}>
                          {location.type}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;