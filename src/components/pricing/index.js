import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  pricing: {
    // height: '100vh',
    //background: '#0400EB',
    paddingBottom: theme.spacing(4),
    color: '#ffffff'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(6, 0, 4),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardDescription: {
    wordWrap: 'break-word',
    margin: '0 0 20px 0',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: 'Simple Package',
    price: '10',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Maecenas libero ipsum, tincidunt mattis posuere eu, fermentum ac mauris.`,
    content: ['5 Beats'],
    buttonText: 'Purchase Now',
    buttonVariant: 'outlined',
  },
  {
    title: 'Standard Package',
    subheader: 'Most popular',
    price: '20',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Maecenas libero ipsum, tincidunt mattis posuere eu, fermentum ac mauris.`,
    content: ['11 Beats'],
    buttonText: 'Purchase Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Professional Package',
    price: '40',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Maecenas libero ipsum, tincidunt mattis posuere eu, fermentum ac mauris.`,
    content: ['25 Beats'],
    buttonText: 'Purchase Now',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="pricing" className={classes.pricing}>
        <CssBaseline />
        <Container maxWidth="sm" component="main" className={classes.heroContent}>  
          <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
            Pricing
          </Typography>
        </Container>
        
        <Container maxWidth="xl" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Professional Package' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardDescription}>
                      <Typography color="textPrimary" align="center" component="p">
                        {tier.description}
                      </Typography>
                    </div>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                      </Typography>
                    </div>
                    <ul>
                      {tier.content.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}