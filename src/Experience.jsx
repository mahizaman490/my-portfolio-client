const Experience = () => {
    return (
      <div className="container mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-600">Experience</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="text-lg font-bold mb-2 text-cyan-600">Computer Science Student</h2>
            <p className="text-sm text-gray-600 mb-4">
              I am currently studying Computer Science at The International University of Scholars.
            </p>
          </div>
  
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="text-lg font-bold mb-2 text-cyan-600">Varsity Assignments</h2>
            <p className="text-sm text-gray-600 mb-4">
              Completed various assignments as part of the academic curriculum, gaining hands-on experience in
              problem-solving and programming.
            </p>
          </div>
  
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="text-lg font-bold mb-2 text-cyan-600">Programming Hero Courses</h2>
            <p className="text-sm text-gray-600 mb-4">
              Successfully completed thought development courses on Programming Hero, enhancing my skills in
              web development.
            </p>
          </div>
  
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="text-lg font-bold mb-2 text-cyan-600">Project Assignments</h2>
            <p className="text-sm text-gray-600 mb-4">
              Completed numerous project assignments, applying theoretical knowledge to practical scenarios,
              reinforcing my understanding of development concepts.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  