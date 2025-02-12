import React, { useEffect, useState } from 'react';
import { 
  CircuitBoard, 
  Briefcase, 
  Wrench, 
  Star,
  Mail, 
  Github, 
  Linkedin, 
  Phone,
  Bot,
  GraduationCap,
  Laptop,
  Globe,
  Code
} from 'lucide-react';

const AnimatedLandingPage = ({ navHeight = 0, onSectionChange }) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;
  const [profileImageError, setProfileImageError] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeIcon, setActiveIcon] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState({
    hero: true,
    about: false,
    skills: false,
    'projects-preview': false,
  });

  useEffect(() => {
    const observers = {};
    const sections = ['hero', 'about', 'skills', 'projects-preview'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting((prev) => ({
              ...prev,
              [section]: entry.isIntersecting,
            }));
            if (entry.isIntersecting) {
              setActiveSection(section);
              onSectionChange && onSectionChange(section);
            }
          },
          { threshold: 0.5 }
        );
        observers[section].observe(element);
      }
    });
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 6);
    }, 1500);
    return () => {
      sections.forEach((section) => {
        if (observers[section]) {
          observers[section].disconnect();
        }
      });
      clearInterval(interval);
    };
  }, [onSectionChange]);

  // Render the tech icon. On mobile, it will be left-aligned.
  const renderTechIcon = () => {
    const icons = [
      <Bot key="bot" className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <GraduationCap key="graduationCap" className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Laptop key="laptop" className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Wrench key="wrench" className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Code key="code" className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Globe key="globe" className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />
    ];

    return (
      <div className="relative w-32 h-32 md:w-64 md:h-64 flex items-center justify-start md:justify-center">
        {/* Directly render the active icon (left aligned on mobile) */}
        {icons[activeIcon]}
        {/* Decorative circles remain absolutely positioned */}
        <div className="absolute inset-0">
          <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-100/50 dark:bg-blue-900/30 rounded-full right-0 top-0 animate-pulse" />
          <div className="absolute w-16 h-16 md:w-32 md:h-32 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full left-0 bottom-0 animate-pulse delay-75" />
        </div>
      </div>
    );
  };

  // Use the custom viewport variable to calculate the available section height.
  // This ensures we subtract both the navHeight and account for mobile viewport quirks.
  const sectionHeight = { height: `calc((var(--vh, 1vh) * 100) - ${navHeight}px)` };

  return (
    <div style={sectionHeight} className="overflow-y-auto snap-y snap-mandatory">
      
      {/* HERO SECTION */}
      <section 
        id="hero" 
        style={sectionHeight}
        className={`overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 snap-start snap-always ${
          isIntersecting.hero ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2 md:mb-4">
                Hey there! <br />I'm Vishnu 👋
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Thanks for stopping by
              </p>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 md:mt-6 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                Keep scrolling to explore my story ↓
              </button>
            </div>
            <div className="flex justify-center w-full md:w-auto">
              {renderTechIcon()}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section 
        id="about" 
        style={sectionHeight}
        className={`overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800 transition-all duration-500 snap-start snap-always ${
          isIntersecting.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <img 
              src={profileImageError ? "/api/placeholder/150/150" : profileImagePath}
              alt="Profile" 
              className="rounded-full w-24 h-24 md:w-40 md:h-40 object-cover"
              onError={() => setProfileImageError(true)}
            />
            <div className="space-y-3 md:space-y-4 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
                About Me
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-justify">
                Hi, I'm Vishnu, a graduate student at Carnegie Mellon University specializing in Deep Learning and Computer Vision. My journey into engineering started with robotics system design, which gradually evolved into a passion for AI and production-ready ML systems. With expertise in Python and PyTorch, I've focused on making robots smarter through computer vision and machine learning – from optimizing industrial processes to developing intelligent sorting systems.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-justify">
                Currently seeking opportunities to develop products that solve real-world challenges and make an impact.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center pt-2">
                <a 
                  href="mailto:vishnuvardhan.badam@gmail.com" 
                  className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Email</span>
                </a>
                <a 
                  href="tel:+1 4123909259" 
                  className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Phone</span>
                </a>
                <a 
                  href="https://github.com/Vishnu01110110" 
                  className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/badam-vishnu-vardhan/" 
                  className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section 
        id="skills" 
        style={sectionHeight}
        className={`overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 snap-start snap-always ${
          isIntersecting.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-2">
            Skills & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                  Knowledge Areas
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                  Machine Learning • Computer Vision and Perception • Deep Learning 
                  • Robotics Programming • Automation • New Product Design • Cooking
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                  Languages
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                  <strong>For Computers:</strong> Python • C/C++ • JavaScript (Basic) • SQL <br />
                  <strong>For People:</strong> English • Telugu • Hindi
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                  Software & Frameworks
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                  Python • C++ • ROS/ROS2 • MATLAB • OpenCV • PyTorch • TensorFlow • MoveIt • Gazebo • RViz • V-REP • Git • Docker • Kubernetes • AWS • GCP
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                  Hardware & Tools
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                  CAD (SolidWorks, Fusion 360) • FEA (ANSYS) • Actuator Control • Sensor Integration • Motor Drivers • Microcontroller Programming (Arduino IDE) • 3D Printing • Welding • CNC Machining
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW SECTION */}
      <section 
        id="projects-preview" 
        style={sectionHeight}
        className={`overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800 transition-all duration-500 snap-start snap-always ${
          isIntersecting['projects-preview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              See What I'm Building 🛠️
            </h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The purpose of this site is to showcase my projects and experience. Here are the relevant links to explore my work.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <a href="#" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-3 md:p-6 rounded-xl shadow-xl h-full flex flex-col items-center">
                  <div className="h-16 md:h-24 flex items-center justify-center">
                    <Star className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mt-2">
                    Proudest projects
                  </h3>
                  <p className="text-xs md:text-sm text-yellow-50 mt-1">
                    Significant achievements and contributions
                  </p>
                </div>
              </div>
            </a>
            <a href="https://vishnu01110110.github.io/Portfolio/projects/all" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 md:p-6 rounded-xl shadow-xl h-full flex flex-col items-center">
                  <div className="h-16 md:h-24 flex items-center justify-center">
                    <CircuitBoard className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mt-2">
                    Projects Showcase
                  </h3>
                  <p className="text-xs md:text-sm text-blue-50 mt-1">
                    Deep learning and Machine Learning projects
                  </p>
                </div>
              </div>
            </a>
            <a href="https://vishnu01110110.github.io/Portfolio/resume" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 md:p-6 rounded-xl shadow-xl h-full flex flex-col items-center">
                  <div className="h-16 md:h-24 flex items-center justify-center">
                    <Briefcase className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mt-2">
                    Experience
                  </h3>
                  <p className="text-xs md:text-sm text-purple-50 mt-1">
                    My professional journey and achievements
                  </p>
                </div>
              </div>
            </a>
            <a href="https://vishnu01110110.github.io/Portfolio/hardware-projects" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 md:p-6 rounded-xl shadow-xl h-full flex flex-col items-center">
                  <div className="h-16 md:h-24 flex items-center justify-center">
                    <Wrench className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mt-2">
                    Hardware Hobbies
                  </h3>
                  <p className="text-xs md:text-sm text-green-50 mt-1">
                    Mechanical Systems & Hands-on Builds
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Crafted from scratch—just prompts and persistence!
            </p>
          </div>
        </div>
      </section>
    </div>
  ); 
};

export default AnimatedLandingPage;
