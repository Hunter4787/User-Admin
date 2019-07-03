import React from 'react'
import Header from './header'
import InHeader from './inheader'
import AboutUs from './aboutus'
import Services from './services'
import Projects from './projects'
import Contactus from './contactus'
import Footer from './footer'
import './App.css';

function Home() {
  return (
    <div className="App">
      <Header/>
      <InHeader/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Contactus/>
      <Footer/>
      
    </div>
  );
}

export default Home;
