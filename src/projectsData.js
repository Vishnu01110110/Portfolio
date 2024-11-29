export const projects = {
    hardware: [
      {
        id: 'robot-whip-mechanism',
        title: 'Novel Whip-like Linkage Mechanism',
        description: 'Automated battery removal system using innovative whip-like mechanism',
        image: '/api/placeholder/600/400',
        technologies: ['ROS', 'UR5', 'CAD', 'Motion Planning'],
        overview: 'Developed at CMU Biorobotics Lab, this project focused on creating an efficient battery removal system',
        features: [
          '40% improvement in cycle time',
          'Custom linkage mechanism design',
          'Integrated UR5 robot control',
          'Computer vision for component detection'
        ],
        challenges: 'Optimizing the mechanism trajectory while maintaining precision'
      },
      {
        id: 'ev-chassis',
        title: 'Electric Vehicle Chassis Design',
        description: 'Last-mile delivery vehicle chassis optimization',
        image: '/api/placeholder/600/400',
        technologies: ['CAD', 'FEA', 'Mechanical Design'],
        overview: 'Collaborated on outer body and chassis design for last-mile delivery electric vehicle',
        features: [
          'Optimized cargo space',
          'Lightweight design',
          'Enhanced structural integrity',
          'Improved aerodynamics'
        ],
        challenges: 'Balancing weight reduction with structural strength'
      }
    ],
    software: [
      {
        id: '3d-vision-assistant',
        title: '3D Printing Vision Assistant',
        description: 'Computer vision system for multi-functional 3D printing assistance',
        image: '/api/placeholder/600/400',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Scipy'],
        overview: 'An intelligent computer vision system designed to enhance 3D printing processes',
        features: [
          'Real-time print monitoring',
          'Feature detection algorithms',
          'STL file conversion',
          'Print quality analysis'
        ],
        challenges: 'Implementing robust feature detection across various lighting conditions'
      },
      {
        id: 'v2v-communication',
        title: 'V2V Communication System',
        description: 'IoT-based vehicle-to-vehicle communication for accident prevention',
        image: '/api/placeholder/600/400',
        technologies: ['IoT', 'Arduino', 'Python', 'Wireless Communication'],
        overview: 'Developed a system for real-time accident detection and prevention using V2V communication',
        features: [
          'Real-time data transmission',
          'Accident scenario detection',
          'Emergency alert system',
          'Low-latency communication'
        ],
        challenges: 'Ensuring reliable communication in varying road conditions'
      }
    ]
  };
  
  export const getProjectData = (id) => {
    return Object.values(projects)
      .flat()
      .find(project => project.id === id);
  };