import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sruthi-sriram-053001263?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SruthiSriram10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* Netlify */}
        <a
          href="https://app.netlify.com/teams/sriramsruthi10/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNetlify />
        </a>

        {/* Email */}
        <a href="mailto:sriramsruthi10@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p>&copy; 2026 Sruthi Sriram. All rights reserved.</p>
    </footer>
  );
};

export default Footer;