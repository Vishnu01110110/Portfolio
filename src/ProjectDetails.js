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
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6 space-y-8">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />

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
            <div className="space-y-6">
              {Object.entries(project.methodology)
                .filter(([key]) => key !== 'intro')
                .map(([key, section]) => (
                  <div key={key} className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {section.details.map((detail, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">
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
    </div>
  );
};

export default ProjectDetails;