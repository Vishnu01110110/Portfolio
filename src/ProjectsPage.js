import React from 'react';
import { Cpu, Code } from 'lucide-react';

const ProjectsPage = () => {
  const categories = [
    {
      id: 'hardware',
      title: 'Hardware',
      icon: Cpu,
      description: 'Physical systems, robotics, and mechanical design projects',
      color: 'blue'
    },
    {
      id: 'software',
      title: 'Software',
      icon: Code,
      description: 'Applications, algorithms, and intelligent systems',
      color: 'purple'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.id}
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow
              border-l-4 ${category.color === 'blue' ? 'border-blue-500' : 'border-purple-500'}`}
          >
            <div className="flex items-center space-x-4">
              <Icon className={`w-8 h-8 ${category.color === 'blue' ? 'text-blue-500' : 'text-purple-500'}`} />
              <div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPage;