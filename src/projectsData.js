// projectsData.js
export const projects = {
    hardware: [
      {
        id: 'robot-whip-mechanism',
        title: 'Novel Whip-like Linkage Mechanism',
        description: 'Automated battery removal system using innovative whip-like mechanism',
        image: '/projects/whip-mechanism.jpg',
        technologies: ['ROS', 'UR5', 'CAD', 'Motion Planning'],
        overview: 'Developed at CMU Biorobotics Lab, this project focused on creating an efficient battery removal system...',
        features: [
          '40% improvement in cycle time',
          'Custom linkage mechanism design',
          'Integrated UR5 robot control',
          'Precision component manipulation'
        ],
        challenges: 'Key challenges included optimizing the mechanism trajectory while maintaining precision...',
        githubUrl: 'https://github.com/yourusername/project-name'
      },
      // Add more hardware projects...
    ],
    software: [
      {
        id: '3d-vision-assistant',
        title: '3D Printing Vision Assistant',
        description: 'Computer vision system for multi-functional 3D printing assistance',
        image: '/projects/vision-assistant.jpg',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Scipy'],
        overview: 'An intelligent computer vision system designed to enhance 3D printing processes...',
        features: [
          'Real-time print monitoring',
          'Feature detection algorithms',
          'STL file conversion and optimization',
          'Print quality analysis'
        ],
        challenges: 'Implementing robust feature detection across various lighting conditions...',
        githubUrl: 'https://github.com/yourusername/project-name'
      },
      // Add more software projects...
    ]
  };
  
  export const getProjectData = (id) => {
    // Flatten all projects and find by id
    return Object.values(projects)
      .flat()
      .find(project => project.id === id);
  };