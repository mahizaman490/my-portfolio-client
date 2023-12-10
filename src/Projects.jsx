import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Everything on this website is stored in the database, and all logged in users can add, update and delete any product they want.',
      demoUrl: 'https://technology-and-electroni-c64c7.web.app/',
      codeUrl: 'https://github.com/mahizaman490/assignment-10-client-side-',
      screenshot: 'https://i.ibb.co/Y7QKnkZ/Screenshot-2023-12-11-021423.png', // Replace with the actual URL to your screenshot image
    },
    {
      title: 'Project 2',
      description: 'This project focuses mainly on design and firebase authentication, the website has some private routes that only logged in users can see. Animation is also used throughout the home page of the website. This is one of my practice projects.',
      demoUrl: 'https://stellar-starship-6887a0.netlify.app/',
      codeUrl: 'https://github.com/mahizaman490/assignment9-private',
      screenshot: 'https://i.ibb.co/jb3B14V/Screenshot-2023-12-11-021448.png', // Replace with the actual URL to your screenshot image
    },
    // Add more projects as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-600">My Projects</h1>

      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-100">
            <h2 className="text-lg font-bold text-cyan-600 mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.screenshot}
                alt={`Screenshot of ${project.title}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="mt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                View Demo
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
