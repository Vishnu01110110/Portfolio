import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from './projectsData';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState('hardware');
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => {
                setCurrentCategory(category.id);
                setCurrentIndex(0);
              }}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow
                border-l-4 ${category.color === 'blue' ? 'border-blue-500' : 'border-purple-500'}
                ${currentCategory === category.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            >
              <div className="flex items-center space-x-4">
                <Icon className={`w-8 h-8 ${category.color === 'blue' ? 'text-blue-500' : 'text-purple-500'}`} />
                <div className="text-left">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div 
            className="mx-12 cursor-pointer"
            onClick={() => navigate(`/projects/${currentProjects[currentIndex].id}`)}
          >
            <img
              src={currentProjects[currentIndex].image}
              alt={currentProjects[currentIndex].title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{currentProjects[currentIndex].title}</h3>
            <p className="text-gray-600">{currentProjects[currentIndex].description}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {currentProjects[currentIndex].technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;