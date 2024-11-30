import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from './projectsData';

const ProjectsPage = () => {
  const [currentCategory, setCurrentCategory] = useState(() => 
    localStorage.getItem('projectCategory') || 'hardware'
  );
  const [currentIndex, setCurrentIndex] = useState(() => 
    parseInt(localStorage.getItem('projectIndex')) || 0
  );

  useEffect(() => {
    localStorage.setItem('projectCategory', currentCategory);
    localStorage.setItem('projectIndex', currentIndex.toString());
  }, [currentCategory, currentIndex]);

  const navigate = useNavigate();
  const categories = [
    {
      id: 'hardware',
      title: 'Hardware & Robotics',
      icon: Cpu,
      description: 'Physical systems, robotics, and mechanical design projects',
      color: 'blue'
    },
    {
      id: 'software',
      title: 'Software & AI',
      icon: Code,
      description: 'Applications, algorithms, and intelligent systems',
      color: 'purple'
    }
  ];

  const currentProjects = projects[currentCategory];

  const nextProject = () => {
    setCurrentIndex((prev) => 
      prev === currentProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? currentProjects.length - 1 : prev - 1
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => {
                setCurrentCategory(category.id);
                setCurrentIndex(0);
              }}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow
                border-l-4 ${category.color === 'blue' ? 'border-blue-500' : 'border-purple-500'}
                ${currentCategory === category.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-6 h-6 ${category.color === 'blue' ? 'text-blue-500' : 'text-purple-500'}`} />
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{category.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate('/projects/all')}
          className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
                     text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-lg text-base font-semibold
                     transition-colors duration-200"
        >
          View All Projects
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="relative">
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-1.5 shadow-md z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="mx-10">
            <div 
              onClick={() => navigate(`/projects/${currentProjects[currentIndex].id}`)}
              className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-3 cursor-pointer"
            >
              <img
                src={currentProjects[currentIndex].image}
                alt={currentProjects[currentIndex].title}
                className="w-full h-64 md:h-80 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              {currentProjects[currentIndex].title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {currentProjects[currentIndex].description}
            </p>
            
            <div className="flex justify-between items-end pr-2">
              <div className="flex flex-wrap gap-2 flex-grow mr-6">
                {currentProjects[currentIndex].technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => navigate(`/projects/${currentProjects[currentIndex].id}`)}
                className="ml-6 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap"
              >
                Learn More
              </button>
            </div>
          </div>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-1.5 shadow-md z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;