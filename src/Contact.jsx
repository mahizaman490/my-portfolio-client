import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ContactForm from './Contactform';

const Contact = () => {
  return (
    <div className="container mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-600">Contact Me</h1>

      <div className="flex items-center justify-center space-x-4">
        <a href="mailto:your.email@example.com" className="text-4xl text-blue-500 hover:underline">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:underline">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:underline">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:underline">
          <FaTwitter />
        </a>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
