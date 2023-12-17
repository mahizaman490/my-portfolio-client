import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a href="https://github.com/mahizaman490" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/fatematuz-jannat-mahi-9315b52a0/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/mahi3374" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaTwitter size={24} />
          </a>
          <a href="mahizaman490@email.com">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm mb-4">
          Connect with me on social media or send me an email
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Fatematuz Jannat Mahi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
