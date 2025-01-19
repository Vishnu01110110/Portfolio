import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { projects } from './projectsData';

const HardwareProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we came from the projects page
  const showNavigation = location.state?.fromProjectsPage;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      {/* Project Display Area */}
      <div className="max-w-4xl mx-auto">
        {/* Add your hardware projects content here */}
      </div>

      {showNavigation && (
        <button
          onClick={() => navigate('/projects/all')}
          className="fixed bottom-8 right-8 bg-gray-500 hover:bg-gray-600 
                   text-white rounded-full shadow-lg p-3 
                   transition-all duration-200 hover:shadow-xl z-10"
          aria-label="Back to Projects"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default HardwareProjects;