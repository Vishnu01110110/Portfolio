import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from './projectsData';
import { ChevronLeft, Wrench } from 'lucide-react';

const AllProjects = () => {
  const navigate = useNavigate();
  
  const handleHardwareClick = () => {
    navigate('/hardware-projects', { state: { fromProjectsPage: true } });
  };
  
  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`, { state: { fromProjectsPage: true } });
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(projects).flat().map((project) => (
          <div 
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
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
      </div>
      
      {/* Page Under Reconstruction Message */}
      <div className="mt-12 mb-20 text-center px-4">
        <div className="py-4 px-6 bg-yellow-50 dark:bg-gray-700 rounded-lg inline-block shadow-sm border border-yellow-200 dark:border-gray-600">
          <p className="text-base text-yellow-700 dark:text-yellow-200 font-medium">
            🚧 Page under reconstruction. More projects will be added soon! 🚧
          </p>
        </div>
      </div>
      
      {/* Hardware Hobbies Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={handleHardwareClick}
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg
                      px-4 py-3 transition-all duration-200 hover:shadow-xl"
          aria-label="Hardware Hobbies"
        >
          <Wrench className="w-5 h-5 mr-2" />
          <span>Hardware Hobbies</span>
        </button>
      </div>
    </div>
  );
};

export default AllProjects;