import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from './projectsData';
import { ChevronLeft } from 'lucide-react';

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.values(projects).flat().map((project) => (
        <div 
          key={project.id}
          onClick={() => navigate(`/projects/${project.id}`)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer
                     hover:shadow-lg transition-shadow duration-200"
        >
          <div className="bg-gray-100 dark:bg-gray-700 rounded-t-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full 
                           text-xs text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Floating Back Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => navigate('/projects')}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg 
                     px-6 py-3 flex items-center space-x-2 transition-all duration-200 
                     hover:shadow-xl"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Project Showcase</span>
        </button>
      </div>
    </div>
  );
};

export default AllProjects; 