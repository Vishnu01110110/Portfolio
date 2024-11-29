import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getProjectData } from './projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectData(id);

  if (!project) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <button 
          onClick={() => navigate('/projects')}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p className="text-gray-700">{project.overview}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </section>

        {project.challenges && (
          <section>
            <h2 className="text-xl font-bold mb-2">Challenges & Solutions</h2>
            <p className="text-gray-700">{project.challenges}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;