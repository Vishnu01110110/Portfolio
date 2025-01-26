import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'conveyor-belt',
    title: "Conveyor Belt System",
    description: "Designed, machined, and coded a conveyor belt system for material tracking in recycling. Successfully designed and welded frames for two units, with one playing a crucial role in the recycling project.",
    image: "/api/placeholder/600/400",
    tools: ["SolidWorks", "Welding Equipment", "Arduino"],
    materials: ["Steel Frame", "Belt Material", "Electronics"],
    tags: ["Automation", "Mechanical Design", "Electronics"]
  },
  {
    id: 'chiller-box',
    title: "Chiller Box Mechanism",
    description: "Designed a chilling box and mechanism to evenly distribute cooling from a chiller, ensuring proper temperature control for devices before battery removal.",
    image: "/api/placeholder/600/400",
    tools: ["CAD Software", "CNC Machine", "Thermal Analysis Tools"],
    materials: ["Aluminum", "Cooling Components", "Insulation"],
    tags: ["Thermal Management", "Precision Engineering"]
  },
  {
    id: 'vacuum-gripper',
    title: "Custom Vacuum Gripper",
    description: "Innovative foam vacuum gripper design using balls to block off air from non-gripping areas, enhancing suction efficiency. Combines foam gripper with circular vacuum cup.",
    image: "/api/placeholder/600/400",
    tools: ["3D CAD", "CNC Machining", "Vacuum Systems"],
    materials: ["Custom Foam", "Metal Plates", "Precision Balls"],
    tags: ["Robotics", "Automation", "Custom Tools"]
  },
  {
    id: 'latch-mechanism',
    title: "Latch Mechanism",
    description: "Engineered a safety latch mechanism to prevent clamp opening during the battery removal process, solving a critical operational issue in the recycling system.",
    image: "/api/placeholder/600/400",
    tools: ["CAD", "Precision Machining"],
    materials: ["Steel", "Springs", "Bearings"],
    tags: ["Safety Systems", "Mechanical Design"]
  },
  {
    id: 'three-wheeler',
    title: "Three Wheeler Chassis",
    description: "Designed an ultra-light frame using AL6061 for the Shell Eco-marathon competition, focusing on optimal mileage efficiency.",
    image: "/api/placeholder/600/400",
    tools: ["SolidWorks", "FEA Software", "Welding Equipment"],
    materials: ["AL6061", "Carbon Fiber", "Custom Parts"],
    tags: ["Automotive", "Lightweight Design", "Competition"]
  },
  {
    id: 'kleiba-toys',
    title: "Kleiba Toys",
    description: "Innovative educational toy design project focusing on interactive learning experiences for children.",
    image: "/api/placeholder/600/400",
    tools: ["3D Printing", "CAD", "Electronics"],
    materials: ["Child-safe Plastics", "Educational Components", "Smart Electronics"],
    tags: ["Educational", "Product Design", "Interactive"]
  },
  {
    id: 'warar-ev',
    title: "Warar Electric Vehicle",
    description: "Electric vehicle project focusing on sustainable transportation solutions with innovative power management systems.",
    image: "/api/placeholder/600/400",
    tools: ["Automotive Design Software", "Electric Drivetrain", "Battery Systems"],
    materials: ["EV Components", "Lightweight Frame", "Battery Packs"],
    tags: ["Electric Vehicles", "Sustainable Design", "Innovation"]
  },
  {
    id: 'battery-smasher',
    title: "Battery Smasher",
    description: "Automated system for safe battery removal and recycling with advanced safety features and precision control.",
    video: "https://example.com/battery-smasher-video",
    image: "/api/placeholder/600/400",
    tools: ["Industrial Automation", "Safety Systems", "Control Software"],
    materials: ["Reinforced Frame", "Safety Barriers", "Control Electronics"],
    tags: ["Recycling", "Automation", "Safety Systems"]
  }
];

const HardwareProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we came from the projects page
  const showNavigation = location.state?.fromProjectsPage || false;

  const handleProjectClick = (projectId) => {
    navigate(`/hardware-projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      {/* Fixed Phone Number - updated text color for dark mode */}
      <a
        href="tel:412-390-9359"
        className="fixed bottom-8 left-8 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 
                  transition-colors bg-white dark:bg-gray-800 px-4 py-2 rounded-full 
                  shadow-lg z-20"
      >
        📱 412-390-9359
      </a>

      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Hardware Projects</h1>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-800 dark:text-white">
              Hey there! 👋 From CAD modeling to hands-on building, I love bringing ideas to life. Over the past 
              six years, I've worked on various projects that have pushed me to think creatively and find practical solutions.
            </p>
            
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              🔧 Currently navigating life with zip ties, duct tape, and a passion for problem-solving—seeking 
              opportunities to make an impact.
            </p>
            
            <p className="text-lg text-gray-800 dark:text-white">
              📸 Click the project cards below for more info.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              onClick={() => handleProjectClick(project.id)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  {project.video && (
                    <a 
                      href={project.video} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-800 dark:text-white"><span className="font-medium">Tools:</span> {project.tools.join(', ')}</p>
                  <p className="text-gray-800 dark:text-white"><span className="font-medium">Materials:</span> {project.materials.join(', ')}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back button - only show if coming from projects page */}
      {showNavigation && (
        <button
          onClick={() => navigate('/projects/all')}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 
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