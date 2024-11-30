import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { getProjectData } from './projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectData(id);

  useEffect(() => {
    // Listen for popstate event (browser back button)
    const handlePopState = (event) => {
      event.preventDefault();
      navigate('/projects/all');
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  if (!project) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <button 
          onClick={() => navigate('/projects/all')}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6 space-y-8">
        <button 
          onClick={() => navigate('/projects/all')}
          className="flex items-center space-x-2 text-base font-medium text-gray-600 dark:text-gray-300 
                     hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 mb-6 px-4 py-2
                     group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
          <span className="group-hover:text-blue-500 dark:group-hover:text-blue-400">View All Projects</span>
        </button>

        {/* Project Image with background */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-3">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-contain"
          />
        </div>

        {/* Title and Technologies */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview or Objective */}
        {(project.overview || project.objective) && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.objective ? 'Objective' : 'Overview'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.objective || project.overview}
            </p>
          </section>
        )}

        {/* Methodology */}
        {project.methodology && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Methodology</h2>
            {project.methodology.intro && (
              <p className="text-gray-700 dark:text-gray-300">{project.methodology.intro}</p>
            )}
            <div className="space-y-8">
              {Object.entries(project.methodology)
                .filter(([key]) => key !== 'intro')
                .map(([key, section], index) => (
                  <div key={key} className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {section.title}
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300">
                            {detail}
                          </li>
                        ))}
                      </ul>
                      {section.note && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                          {section.note}
                        </p>
                      )}
                    </div>
                    {project.id === 'digital-twin-vehicle' && (
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mt-4">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/dt-${index + 1}.jpg`}
                          alt={`Digital Twin Methodology ${index + 1}`}
                          className="w-full h-64 md:h-80 object-contain"
                        />
                      </div>
                    )}
                    {project.id === '3d-vision-assistant' && (
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mt-4">
                        <img
                          src={index === 2 ? project.image : `${process.env.PUBLIC_URL}/images/3d-${index + 1}.jpg`}
                          alt={`3D Vision Methodology ${index + 1}`}
                          className="w-full h-64 md:h-80 object-contain"
                        />
                      </div>
                    )}
                    {project.id === 'adaptive-conveyor-control' && (
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mt-4">
                        <img
                          src={index === 1 ? project.image : `${process.env.PUBLIC_URL}/images/cc-${index === 0 ? '1' : '3'}.jpg`}
                          alt={`Conveyor Control Methodology ${index + 1}`}
                          className="w-full h-64 md:h-80 object-contain"
                        />
                      </div>
                    )}
                    {project.id === 'diffusion-qr-imagery' && (
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mt-4">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/qr-${index + 1}.jpg`}
                          alt={`QR Diffusion Methodology ${index + 1}`}
                          className="w-full h-64 md:h-80 object-contain"
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Results */}
        {project.results && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Results</h2>
            {project.results.intro && (
              <p className="text-gray-700 dark:text-gray-300">{project.results.intro}</p>
            )}
            <ul className="list-disc pl-6 space-y-2">
              {project.results.achievements.map((result, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {result}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Discussion */}
        {project.discussion && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Discussion</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                {project.discussion.mainPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{point}</li>
                ))}
              </ul>
              
              {project.discussion.futureWork && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
                    Future Development
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.discussion.futureWork.map((item, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.discussion.summary && (
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  {project.discussion.summary}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Personal Contribution */}
        {project.personalContribution && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Contribution</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.personalContribution}
            </p>
          </section>
        )}

        {/* Features */}
        {project.features && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-2"
                >
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && (
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Challenges & Solutions</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </section>
        )}
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => navigate('/projects/all')}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg 
                     px-6 py-3 flex items-center space-x-2 transition-all duration-200 
                     hover:shadow-xl"
        >
          <span className="font-medium">View All Projects</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;