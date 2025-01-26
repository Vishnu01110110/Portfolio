import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  WrenchIcon, 
  LightbulbIcon, 
  SettingsIcon,
  ImageIcon 
} from 'lucide-react';

const projectDetails = {
  'conveyor-belt': {
    title: "Conveyor Belt System",
    what: "An automated conveyor belt system designed for material tracking in recycling operations. The system features a robust welded frame, integrated sensors, and programmable control systems.",
    why: "The recycling process required efficient material movement and tracking. This system was developed to streamline operations and improve throughput while maintaining accurate material tracking.",
    how: "The project involved several key phases:\n- CAD design using SolidWorks\n- Frame welding and assembly\n- Integration of electronic controls\n- Programming of tracking systems\n- Testing and optimization",
    challenges: [
      "Ensuring consistent belt tracking over long runs",
      "Integrating reliable sensor systems",
      "Optimizing speed control for various materials"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      dimensions: "Length: 12ft, Width: 2ft",
      capacity: "Up to 100kg continuous load",
      speed: "0.1-1.0 m/s variable"
    }
  },
  'chiller-box': {
    title: "Chiller Box Mechanism",
    what: "A precision-engineered cooling system designed to maintain consistent temperatures across multiple devices during the battery removal process.",
    why: "Temperature control is crucial for safe battery removal. This system ensures uniform cooling across all devices, improving safety and efficiency.",
    how: "Development process included:\n- Thermal analysis and modeling\n- Prototype testing\n- Material selection for optimal heat transfer\n- Integration with existing systems",
    challenges: [
      "Achieving uniform temperature distribution",
      "Managing condensation issues",
      "Optimizing coolant flow patterns"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      temperature: "Operating range: -10°C to +5°C",
      capacity: "12 devices simultaneously",
      cooling: "Closed-loop liquid cooling system"
    }
  },
  'vacuum-gripper': {
    title: "Custom Vacuum Gripper",
    what: "An innovative foam vacuum gripper design utilizing balls to optimize suction efficiency in non-gripping areas.",
    why: "Traditional grippers weren't effective for specific material handling needs. This custom solution provides better grip control and efficiency.",
    how: "Development process included:\n- Prototype design and testing\n- Integration of ball-blocking mechanism\n- Optimization of vacuum flow\n- Final assembly and testing",
    challenges: [
      "Achieving optimal suction distribution",
      "Ball placement optimization",
      "Material selection for durability"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      "suction power": "Up to 0.8 MPa",
      "grip area": "200mm x 200mm",
      "ball count": "24 precision balls"
    }
  },
  'latch-mechanism': {
    title: "Latch Mechanism",
    what: "A safety-critical latch mechanism designed to secure clamps during battery removal operations.",
    why: "Safety concerns during battery removal required a foolproof locking mechanism to prevent accidental clamp opening.",
    how: "Development process included:\n- Safety requirement analysis\n- Mechanical design\n- Prototype testing\n- Integration with existing systems\n- Safety validation",
    challenges: [
      "Ensuring fail-safe operation",
      "Minimizing mechanical complexity",
      "Meeting safety standards"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      "load capacity": "500kg holding force",
      "activation time": "<0.5 seconds",
      "lifecycle": "100,000 operations"
    }
  },
  'three-wheeler': {
    title: "Three Wheeler Chassis",
    what: "An ultra-lightweight three-wheel vehicle chassis designed for the Shell Eco-marathon competition.",
    why: "Maximum fuel efficiency required minimal weight while maintaining structural integrity and safety.",
    how: "Development process included:\n- Lightweight design optimization\n- FEA analysis\n- Material selection\n- Fabrication\n- Testing and validation",
    challenges: [
      "Weight optimization",
      "Maintaining structural integrity",
      "Aerodynamic considerations"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      "weight": "Under 25kg",
      "material": "AL6061 aluminum",
      "design load": "150kg maximum"
    }
  },
  'kleiba-toys': {
    title: "Kleiba Toys",
    what: "Educational toy system designed to combine learning with interactive play experiences.",
    why: "Modern education needs engaging tools that make learning fun while developing critical skills.",
    how: "Development process included:\n- Educational research\n- Product design\n- Safety testing\n- Electronic integration\n- User testing with children",
    challenges: [
      "Child safety compliance",
      "Durability requirements",
      "Educational value integration"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      "age range": "3-12 years",
      "materials": "Child-safe plastics",
      "battery life": "100+ hours"
    }
  },
  'warar-ev': {
    title: "Warar Electric Vehicle",
    what: "Electric vehicle project focused on sustainable urban transportation solutions.",
    why: "Growing need for efficient, environmentally friendly urban mobility options.",
    how: "Development process included:\n- Powertrain design\n- Battery system integration\n- Control system development\n- Safety systems implementation\n- Performance testing",
    challenges: [
      "Range optimization",
      "Battery management",
      "Weight distribution"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      "range": "150km per charge",
      "top speed": "80km/h",
      "charging time": "4 hours"
    }
  },
  'battery-smasher': {
    title: "Battery Smasher",
    what: "Automated system for safe battery removal and recycling with advanced safety features.",
    why: "Battery recycling requires safe and efficient methods for battery removal and processing.",
    how: "Development process included:\n- Safety system design\n- Automation integration\n- Control system development\n- Testing and validation\n- Safety certification",
    challenges: [
      "Safety protocol implementation",
      "Precision control",
      "Material handling"
    ],
    gallery: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: {
      "processing rate": "60 units/hour",
      "safety rating": "Class A",
      "automation level": "Fully automated"
    }
  }
};

const HProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projectDetails[projectId];
  
  // Get the original fromProjectsPage state
  const fromProjectsPage = location.state?.fromProjectsPage;

  // Add scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          Project not found
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Projects
          </button>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{project.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* What Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <SettingsIcon className="w-6 h-6 mr-2 text-blue-500" />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">What</h2>
              </div>
              <p className="text-gray-800 dark:text-white">{project.what}</p>
            </section>

            {/* Why Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <LightbulbIcon className="w-6 h-6 mr-2 text-yellow-500" />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Why</h2>
              </div>
              <p className="text-gray-800 dark:text-white">{project.why}</p>
            </section>

            {/* How Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <WrenchIcon className="w-6 h-6 mr-2 text-green-500" />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">How</h2>
              </div>
              <p className="text-gray-800 dark:text-white whitespace-pre-line">{project.how}</p>
            </section>

            {/* Gallery */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <ImageIcon className="w-6 h-6 mr-2 text-purple-500" />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Gallery</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Challenges */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Challenges</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-white">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>

            {/* Specifications */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Specifications</h3>
              <dl className="space-y-2">
                {Object.entries(project.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="font-medium text-gray-800 dark:text-white capitalize">
                      {key}:
                    </dt>
                    <dd className="text-gray-800 dark:text-white ml-4">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>

      {/* Fixed Phone Number */}
      <a
        href="tel:412-390-9359"
        className="fixed bottom-8 left-8 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 
                  transition-colors bg-white dark:bg-gray-800 px-4 py-2 rounded-full 
                  shadow-lg z-20"
      >
        📱 412-390-9359
      </a>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 
                  text-white rounded-full shadow-lg p-3 
                  transition-all duration-200 hover:shadow-xl z-10"
        aria-label="Back"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HProjectDetails; 