import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ContactForm from './Contactform';

const Contact = () => {
  return (
    <div className="container mx-auto mt-10 p-8 bg-white  rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-600">Contact Me</h1>

      <div className="flex items-center justify-center space-x-4">
        <a href="mailto:mahizaman490@gmail.com" className="text-4xl text-blue-500 hover:underline">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/fatematuz-jannat-mahi-9315b52a0/" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:underline">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mahizaman490" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:underline">
          <FaGithub />
        </a>
        <a href="https://twitter.com/mahi3374" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:underline">
          <FaTwitter />
        </a>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
