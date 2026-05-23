import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I’m Sruthi Sriram, a passionate and innovative software developer with a strong 
              interest in building impactful digital solutions. I specialize in web and application 
              development using technologies such as Java, Python, React.js, Flutter, HTML, CSS, and JavaScript.
            </p>
            <p>
              I enjoy transforming ideas into scalable, user-focused applications with clean design and 
              efficient functionality. My experience includes developing AI-powered healthcare applications, 
              real-time collaboration platforms,and responsive mobile applications that combine creativity with problem-solving.
            </p>
            <p>
              With a strong learning mindset, adaptability, and dedication to quality, 
              I aim to contribute to innovative projects that make technology more accessible and meaningful.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <strong>📧 Email:</strong> sriramsruthi10@gmail.com
            </div>
            <div className="info-item">
              <strong>📍 Location:</strong> Annur, Coimbatore
            </div>
            <div className="info-item">
              <strong>🎓 Education:</strong> M.Sc Software Systems
            </div>
            <div className="info-item">
              <strong>📞 Mobile:</strong> 9677463763
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;