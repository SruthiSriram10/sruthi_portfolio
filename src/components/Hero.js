import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Text Content Section - Left Side */}
          <div className="hero-text-wrapper">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Sruthi Sriram</h1>
            <h2 className="hero-title">FullStack Developer</h2>
            <p className="hero-description">
              Passionate FullStack Developer with expertise in building modern web applications.
              I love creating elegant solutions to complex problems.
            </p>
            <div className="hero-buttons">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <button className="btn btn-primary">
                  Hire Me
                </button>
              </ScrollLink>
              <a 
                href="/Sruthi_Resume.pdf" 
                download="Sruthi_Resume.pdf" 
                className="btn btn-secondary"
              >
                <FaDownload style={{ marginRight: '8px' }} />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image Section - Right Side */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="/images/Sruthi.jpeg" 
                alt="Sruthi Sriram - FullStack Developer" 
                className="hero-profile-image"
              />
              <div className="hero-image-ring"></div>
              <div className="hero-image-dots"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;