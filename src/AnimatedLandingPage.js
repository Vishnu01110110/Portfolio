import React, { useEffect, useState } from 'react';
import { 
  CircuitBoard, 
  Briefcase, 
  Wrench, 
  Star,
  User, 
  Mail, 
  Github, 
  Linkedin, 
  Phone 
} from 'lucide-react';

const AnimatedLandingPage = (props) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;
  const [profileImageError, setProfileImageError] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeIcon, setActiveIcon] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState({
    hero: true,
    about: false,
    skills: false,
    'projects-preview': false
  });

  useEffect(() => {
    const observers = {};
    const sections = ['hero', 'about', 'skills', 'projects-preview'];

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(prev => ({
              ...prev,
              [section]: entry.isIntersecting
            }));
            if (entry.isIntersecting) {
              setActiveSection(section);
              // Notify parent component about section change
              props.onSectionChange?.(section);
            }
          },
          { threshold: 0.5 }
        );
        observers[section].observe(element);
      }
    });

    // Animation interval for morphing icons
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      sections.forEach(section => {
        if (observers[section]) {
          observers[section].disconnect();
        }
      });
      clearInterval(interval);
    };
  }, [props.onSectionChange]);

  // Remove the scrollToSection function as it's no longer needed

  // Simplify scrolling behavior by removing the wheel event handler
  // and allowing natural scrolling

  const renderTechIcon = () => {
    const icons = [
      // Brain icon for AI/ML
      <path
        d="M50,20 C70,20 85,35 85,55 C85,75 70,90 50,90 C30,90 15,75 15,55 C15,35 30,20 50,20 M35,45 L65,45 M35,65 L65,65"
        className="stroke-current"
        fill="none"
        strokeWidth="4"
      />,
      // Computer/Laptop icon
      <path
        d="M25,30 L75,30 L75,60 L25,60 Z M20,60 L80,60 L85,70 L15,70 Z"
        className="stroke-current"
        fill="none"
        strokeWidth="4"
      />,
      // Robot icon
      <path
        d="M40,20 L60,20 L60,35 L40,35 Z M30,35 L70,35 L70,75 L30,75 Z M45,75 L55,75 L55,85 L45,85 Z"
        className="stroke-current"
        fill="none"
        strokeWidth="4"
      />,
      // Code icon
      <path
        d="M35,40 L25,50 L35,60 M65,40 L75,50 L65,60 M55,30 L45,70"
        className="stroke-current"
        fill="none"
        strokeWidth="4"
      />
    ];

    return (
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-48 h-48 text-blue-500 dark:text-blue-400 transition-transform duration-500 transform"
          >
            {icons[activeIcon]}
          </svg>
        </div>
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 bg-blue-100/50 dark:bg-blue-900/30 rounded-full right-0 top-0 animate-pulse" />
          <div className="absolute w-32 h-32 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full left-0 bottom-0 animate-pulse delay-75" />
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      {/* Hero Section */}
      <section 
        id="hero" 
        className={`h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 ${
          isIntersecting.hero ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-[500px]">
            <div className="max-w-xl text-center md:text-left mt-16 md:mt-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Hey there! <br />I'm Vishnu 👋
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Thanks for stopping by
              </p>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                Keep scrolling to explore my story ↓
              </button>
            </div>
            <div className="block w-full md:w-auto">
              {renderTechIcon()}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 transition-all duration-500 ${
          isIntersecting.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto p-8 text-center">
          <div className="flex flex-col items-center gap-8">
            <img 
              src={profileImageError ? "/api/placeholder/150/150" : profileImagePath}
              alt="Profile" 
              className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover"
              onError={() => setProfileImageError(true)}
            />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 text-justify">
                Hi, I'm Vishnu, a graduate student at Carnegie Mellon University specializing in Deep Learning and Computer Vision. My journey into engineering started with robotics system design, which gradually evolved into a passion for AI and production-ready ML systems. With expertise in Python and PyTorch, I've focused on making robots smarter through computer vision and machine learning – from optimizing industrial processes to developing intelligent sorting systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-justify">
              Currently seeking opportunities to develop products that solve real-world challenges and make an impact.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:vishnuvardhan.badam@gmail.com" 
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a href="tel:+1 4123909259" 
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Phone className="w-5 h-5" />
                  <span>Phone</span>
                </a>
                <a href="https://github.com/Vishnu01110110" 
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/badam-vishnu-vardhan/" 
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 ${
          isIntersecting.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-4">
            Skills & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Knowledge Areas</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Machine Learning • Computer Vision and Perception • Deep Learning 
                  • Robotics Programming • Automation • New Product Design • Cooking
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Languages</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>For Computers:</strong> Python • C/C++ • JavaScript (Basic) • SQL <br />
                  <strong>For People:</strong> English • Telugu • Hindi
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Software & Frameworks</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Python • C++ • ROS/ROS2 • MATLAB • OpenCV • PyTorch • TensorFlow • MoveIt • Gazebo • RViz • V-REP • Git • Docker • Kubernetes • AWS • GCP
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Hardware & Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  CAD (SolidWorks, Fusion 360) • FEA (ANSYS) • Actuator Control • Sensor Integration • Motor Drivers • Microcontroller Programming (Arduino IDE) • 3D Printing • Welding • CNC Machining
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section - Updated */}
      <section 
        id="projects-preview" 
        className={`min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 transition-all duration-500 ${
          isIntersecting['projects-preview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Thanks for Reading! ✨
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The purpose of this site is to showcase my projects and experience. Here are the relevant links to explore my work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* AI Projects Card */}
            <a href="http://localhost:3000/Portfolio/projects/all" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl shadow-xl h-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <CircuitBoard className="w-20 h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Projects Showcase</h3>
                  <p className="text-blue-50 text-sm">Deep learning and ML/AI projects</p>
                </div>
              </div>
            </a>

            {/* Experience Card */}
            <a href="http://localhost:3000/Portfolio/resume" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl shadow-xl h-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Briefcase className="w-20 h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Experience</h3>
                  <p className="text-purple-50 text-sm">My professional journey and achievements</p>
                </div>
              </div>
            </a>

            {/* Hardware Projects Card */}
            <a href="http://localhost:3000/Portfolio/hardware-projects" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl shadow-xl h-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Wrench className="w-20 h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Hardware Hobbies</h3>
                  <p className="text-green-50 text-sm">Mechanical Systems & Hands-on Builds</p>
                </div>
              </div>
            </a>

            {/* Proudest Contributions Card */}
            <a href="#" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-xl shadow-xl h-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Star className="w-20 h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Proudest Contributions</h3>
                  <p className="text-yellow-50 text-sm">Impactful Projects</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AnimatedLandingPage;