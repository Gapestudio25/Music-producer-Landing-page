import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Playlist from './components/playlist';
import AboutMe from './components/aboutMe';
import OurTeam from './components/ourTeam';
import Pricing from './components/pricing';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Playlist/>
      <AboutMe/>
      <OurTeam/>
      <Pricing/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
