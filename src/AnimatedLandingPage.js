import React, { useEffect, useState } from 'react';
import { User, Mail, Github, Linkedin, Phone } from 'lucide-react';

const AnimatedLandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeIcon, setActiveIcon] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState({
    hero: true,
    about: false,
    skills: false
  });

  useEffect(() => {
    const observers = {};
    const sections = ['hero', 'about', 'skills'];

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
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section */}
      <section 
        id="hero" 
        className={`h-screen flex items-center justify-center snap-start bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-1000 ${
          isIntersecting.hero ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Hey there! <br />I'm Vishnu 👋
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Thanks for stopping by
              </p>
              <button
                onClick={() => scrollToSection('about')}
                className="mt-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                Keep scrolling to explore my story ↓
              </button>
            </div>
            <div className="hidden md:block">
              {renderTechIcon()}
            </div>
          </div>
        </div>
      </section>



      {/* Rest of the sections remain unchanged */}
      {/* About Section */}
      <section 
        id="about" 
        className={`h-screen flex items-center justify-center snap-start bg-white dark:bg-gray-800 transition-all duration-1000 ${
          isIntersecting.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto p-8 text-center">
          <div className="flex flex-col items-center gap-8">
            <img 
              src="/api/placeholder/150/150"
              alt="Profile" 
              className="rounded-full w-32 h-32 md:w-40 md:h-40"
            />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                I'm a graduate student at Carnegie Mellon University specializing in Deep Learning and Computer Vision. 
                My journey into engineering started with robotics system design, which gradually evolved into a passion 
                for AI and production-ready ML systems.
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
        className={`h-screen flex items-center justify-center snap-start bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-1000 ${
          isIntersecting.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Skills & Interests</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Knowledge Areas</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Computer-Aided Design • Computer Vision and Perception • Machine Learning • 
                  Machining • Controls • Robotics Programming • Automation
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tools & Technologies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ROS • Python • C++ • Arduino IDE • MATLAB • Git • SQL • 
                  Fusion360 • SolidWorks • Ansys • TensorFlow • OpenCV
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Interests</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  New Product Development • Autonomous Systems • Mechanical Design • 
                  AI in Robotics • Manufacturing Automation • Cooking
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Current Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep Learning • Computer Vision • Production ML Systems • 
                  Robotics Integration • Advanced Control Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        {['hero', 'about', 'skills'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Scroll to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLandingPage;