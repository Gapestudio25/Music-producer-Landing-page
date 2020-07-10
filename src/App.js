import React from 'react';
import Header from './components/header';
import Main from './components/main';
import PlayList from './components/playlist';
import AboutMe from './components/aboutMe';
import OurTeam from './components/ourTeam';
import Pricing from './components/pricing';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <PlayList/>
      <AboutMe/>
      <OurTeam/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
