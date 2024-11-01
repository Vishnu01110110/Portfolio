import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Mail, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('about');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = {
    mechanical: [
      { title: "Automated Assembly Line", description: "Designed and implemented robotic assembly system", image: "/api/placeholder/600/400" },
      { title: "Industrial Robot Arm", description: "Custom 6-DOF robotic arm design", image: "/api/placeholder/600/400" }
    ],
    machinelearning: [
      { title: "Computer Vision System", description: "Deep learning for object detection", image: "/api/placeholder/600/400" },
      { title: "Predictive Maintenance", description: "ML model for equipment failure prediction", image: "/api/placeholder/600/400" }
    ],
    robotics: [
      { title: "Autonomous Mobile Robot", description: "Navigation and path planning system", image: "/api/placeholder/600/400" },
      { title: "Drone Swarm Control", description: "Multi-robot coordination system", image: "/api/placeholder/600/400" }
    ]
  };

  const [currentCategory, setCurrentCategory] = useState('mechanical');

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === projects[currentCategory].length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects[currentCategory].length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('about')}
              className={`px-4 py-2 rounded ${currentPage === 'about' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={`px-4 py-2 rounded ${currentPage === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        {currentPage === 'about' ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <img src="/api/placeholder/150/150" alt="Profile" className="rounded-full w-24 h-24" />
                <div>
                  <h2 className="text-2xl font-bold">Your Name</h2>
                  <p className="text-gray-600">Robotics Engineer</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Experienced robotics engineer specializing in automation, machine learning, and robotic systems design.
                </p>
                <div className="flex space-x-4">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <Github className="w-5 h-5 text-gray-600" />
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-semibold">Senior Robotics Engineer</h4>
                  <p className="text-gray-600">Company Name • 2020-Present</p>
                  <p className="text-sm text-gray-700">Led development of autonomous systems</p>
                </div>
                {/* Add more experience items */}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center space-x-4 mb-6">
              {Object.keys(projects).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setCurrentCategory(category);
                    setCurrentProjectIndex(0);
                  }}
                  className={`px-4 py-2 rounded ${
                    currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="mx-12">
                <img
                  src={projects[currentCategory][currentProjectIndex].image}
                  alt={projects[currentCategory][currentProjectIndex].title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">
                  {projects[currentCategory][currentProjectIndex].title}
                </h3>
                <p className="text-gray-600">
                  {projects[currentCategory][currentProjectIndex].description}
                </p>
              </div>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;