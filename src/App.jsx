import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import WorkAndChill from './components/WorkAndChill/WorkAndChill';
import Locations from './components/Locations/Locations';
import SocialProof from './components/SocialProof/SocialProof';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Menu />
        <Gallery />
        <WorkAndChill />
        <Locations />
        <SocialProof />
      </main>
      <Footer />
      
      {/* Floating Order Button */}
      <a href="#menu" className="floating-order-btn">
        Order Now
      </a>
    </>
  );
}

export default App;
