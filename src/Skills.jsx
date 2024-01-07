import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/96/000000/html-5.png'},
    { name: 'CSS', icon: 'https://img.icons8.com/color/96/000000/css3.png', },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/000000/javascript.png', },
    { name: 'React', icon: 'https://img.icons8.com/office/96/000000/react.png',},
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/000000/tailwindcss.png',},
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/000000/nodejs.png',  },
    { name: 'Express.js', icon: 'https://img.icons8.com/color/96/000000/express.png', },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/000000/mongodb.png', },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/96/000000/firebase.png', },
];








  return (
    <div className="container mx-auto mt-10 p-8  rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-cyan-600">My Skills</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 text-center transition-transform transform hover:scale-105  border-solid border-blue-300 border-2 rounded-full bg-slate-300" data-aos="fade-up"
          data-aos-duration="3000">
            <img src={skill.icon} alt={`${skill.name} Icon`} className="w-16 h-16 mx-auto mb-4 " />
            <p className="text-lg font-bold mb-2 text-cyan-800">{skill.name}</p>
            <div className="mb-4">
              <div >
                {/* <div
                  style={{ width: `${skill.progress}%` }}
                  className="h-2 bg-blue-500 rounded transition-width duration-300 ease-in-out"
                ></div> */}
              </div>
            </div>
            {/* <p className="text-sm text-gray-600">{skill.progress}% Proficient</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
