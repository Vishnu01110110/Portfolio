// ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // This would come from your projects data file
  const project = getProjectData(id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/projects" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex space-x-4 mb-6">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-bold mb-2">Overview</h2>
            <p>{project.overview}</p>
            
            <h2 className="text-xl font-bold mt-6 mb-2">Key Features</h2>
            <ul className="list-disc pl-6">
              {project.features.map(feature => (
                <li key={feature} className="mb-2">{feature}</li>
              ))}
            </ul>
            
            {project.challenges && (
              <>
                <h2 className="text-xl font-bold mt-6 mb-2">Challenges & Solutions</h2>
                <p>{project.challenges}</p>
              </>
            )}
          </div>
          
          <div className="flex space-x-4 mt-6">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
                <span>View Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;