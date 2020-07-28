import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Playlist from './components/playlist';
import AboutMe from './components/aboutMe';
import OurTeam from './components/ourTeam';
import Pricing from './components/pricing';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import {makeStyles} from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  body: {
    background: 'radial-gradient(circle, rgba(134,1,13,1) 0%, rgba(20,19,119,1) 100%)',
  },
  divider: {
    padding: theme.spacing(.3,0),
    background: '#ffffff'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Header/>
      <Main/>
      <Divider className={classes.divider} />
      <Playlist/>
      <Divider className={classes.divider} />
      <AboutMe/>
      <Divider className={classes.divider} />
      <OurTeam/>
      <Divider className={classes.divider} />
      <Pricing/>
      <Divider className={classes.divider} />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
