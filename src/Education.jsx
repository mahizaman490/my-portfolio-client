import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="container mx-auto mt-10 p-8 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-600">
        My Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="education-card hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">
            <FaGraduationCap className="inline mr-2" />
            Bachelor of Science in Computer Science and Engineering
          </h2>
          <p className="text-lg text-gray-700 mb-1">The International University of Scholars</p>
          {/* Add more details like duration, GPA, etc., if needed */}
        </div>

        {/* Add more education cards if needed */}
      </div>
    </div>
  );
};

export default Education;
