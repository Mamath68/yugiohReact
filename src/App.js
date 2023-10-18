// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Remix Icons
import 'remixicon/fonts/remixicon.css';
// import Boxicons
import 'boxicons/css/boxicons.min.css';


import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
  const [aboutActive, setAboutActive] = useState();
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const serviceRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const sections = [
    {
      name: 'header',
      ref: homeRef,
      active: true,
    },
    {
      name: 'about',
      ref: aboutRef,
      active: false,
    },
    {
      name: 'resume',
      ref: resumeRef,
      active: false,
    },
    {
      name: 'services',
      ref: serviceRef,
      active: false,
    },
    {
      name: 'portfolio',
      ref: portfolioRef,
      active: false,
    },
    {
      name: 'contact',
      ref: contactRef,
      active: false,
    },
  ];

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove("section-show");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("section-show");
      }
      return section;
    });
  };

  return (
    <>
      <Header reference={homeRef}
        sectionActive={handleSectionActive}
        aboutActive={setAboutActive}
      />
      <About reference={aboutRef} aboutActive={aboutActive} />
      <Resume reference={resumeRef} />
      <Contact reference={serviceRef} />
      <Portfolio reference={portfolioRef} />
      <Services reference={contactRef} />
    </>
  );
}

export default App;
