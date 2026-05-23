import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/portfolio.css';


function App() {

  useEffect(() => {

    const handleAnchorClick = (e) => {

      const targetId = e.currentTarget.getAttribute('href');

      if(targetId?.startsWith('#')){

        e.preventDefault();

        const section = document.querySelector(targetId);

        if(section){

          section.scrollIntoView({
            behavior:'smooth',
            block:'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {

      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };

  }, []);

  useEffect(() => {

    const button = document.createElement('button');

    button.innerHTML = '↑';

    button.className = 'scroll-to-top';

    document.body.appendChild(button);

    const handleScroll = () => {

      if(window.scrollY > 300){
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    };

    const scrollTop = () => {

      window.scrollTo({
        top:0,
        behavior:'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);

    button.addEventListener('click', scrollTop);

    return () => {

      window.removeEventListener('scroll', handleScroll);

      button.removeEventListener('click', scrollTop);

      document.body.removeChild(button);
    };

  }, []);

  return (

    <div className="App">

      <Navbar />

      <main>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;