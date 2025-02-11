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
  Phone,
  Bot,
  GraduationCap,
  Laptop,
  Globe,
  Code
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
              props.onSectionChange?.(section);
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
      sections.forEach(section => {
        if (observers[section]) {
          observers[section].disconnect();
        }
      });
      clearInterval(interval);
    };
  }, [props.onSectionChange]);

  const renderTechIcon = () => {
    const icons = [
      <Bot className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <GraduationCap className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Laptop className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Wrench className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Code className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />,
      <Globe className="w-24 h-24 md:w-48 md:h-48 text-blue-500 dark:text-blue-400" />
    ];

    return (
      <div className="relative w-32 h-32 md:w-64 md:h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          {icons[activeIcon]}
        </div>
        <div className="absolute inset-0">
          <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-100/50 dark:bg-blue-900/30 rounded-full right-0 top-0 animate-pulse" />
          <div className="absolute w-16 h-16 md:w-32 md:h-32 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full left-0 bottom-0 animate-pulse delay-75" />
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory">
      <section 
        id="hero" 
        className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 snap-start py-8 ${
          isIntersecting.hero ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Hey there! <br />I'm Vishnu 👋
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Thanks for stopping by
              </p>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 md:mt-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
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

      <section 
        id="about" 
        className={`min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 transition-all duration-500 snap-start py-8 ${
          isIntersecting.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <img 
              src={profileImageError ? "/api/placeholder/150/150" : profileImagePath}
              alt="Profile" 
              className="rounded-full w-24 h-24 md:w-40 md:h-40 object-cover"
              onError={() => setProfileImageError(true)}
            />
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">About Me</h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-justify">
                Hi, I'm Vishnu, a graduate student at Carnegie Mellon University specializing in Deep Learning and Computer Vision. My journey into engineering started with robotics system design, which gradually evolved into a passion for AI and production-ready ML systems. With expertise in Python and PyTorch, I've focused on making robots smarter through computer vision and machine learning – from optimizing industrial processes to developing intelligent sorting systems.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-justify">
                Currently seeking opportunities to develop products that solve real-world challenges and make an impact.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-sm md:text-base">
                <a href="mailto:vishnuvardhan.badam@gmail.com" 
                   className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Email</span>
                </a>
                <a href="tel:+1 4123909259" 
                   className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Phone</span>
                </a>
                <a href="https://github.com/Vishnu01110110" 
                   className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/badam-vishnu-vardhan/" 
                   className="flex items-center gap-1 md:gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="skills" 
        className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 snap-start py-8 ${
          isIntersecting.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-4">
            Skills & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">Knowledge Areas</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Machine Learning • Computer Vision and Perception • Deep Learning 
                  • Robotics Programming • Automation • New Product Design • Cooking
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">Languages</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  <strong>For Computers:</strong> Python • C/C++ • JavaScript (Basic) • SQL <br />
                  <strong>For People:</strong> English • Telugu • Hindi
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="border-l-4 border-orange-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">Software & Frameworks</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Python • C++ • ROS/ROS2 • MATLAB • OpenCV • PyTorch • TensorFlow • MoveIt • Gazebo • RViz • V-REP • Git • Docker • Kubernetes • AWS • GCP
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">Hardware & Tools</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  CAD (SolidWorks, Fusion 360) • FEA (ANSYS) • Microcontroller Programming • Rapid prototyping • Welding • CNC Machining
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="projects-preview" 
        className={`min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 transition-all duration-500 snap-start py-8 ${
          isIntersecting['projects-preview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Thanks for Reading! ✨
            </h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The purpose of this site is to showcase my projects and experience. Here are the relevant links to explore my work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <a href="#" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-3 md:p-6 rounded-xl shadow-xl h-full">
                  <div className="h-16 md:h-24 flex items-center justify-center mb-2 md:mb-4">
                    <Star className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Proudest projects</h3>
                  <p className="text-yellow-50 text-xs md:text-sm">Significant achievements and contributions</p>
                </div>
              </div>
            </a>

            <a href="https://vishnu01110110.github.io/Portfolio/projects/all" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 md:p-6 rounded-xl shadow-xl h-full">
                  <div className="h-16 md:h-24 flex items-center justify-center mb-2 md:mb-4">
                    <CircuitBoard className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Projects Showcase</h3>
                  <p className="text-blue-50 text-xs md:text-sm">Deep learning and Machine Learning projects</p>
                </div>
              </div>
            </a>

            <a href="https://vishnu01110110.github.io/Portfolio/resume" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 md:p-6 rounded-xl shadow-xl h-full">
                  <div className="h-16 md:h-24 flex items-center justify-center mb-2 md:mb-4">
                    <Briefcase className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Experience</h3>
                  <p className="text-purple-50 text-xs md:text-sm">My professional journey and achievements</p>
                </div>
              </div>
            </a>

            <a href="https://vishnu01110110.github.io/Portfolio/hardware-projects" className="group relative perspective-1000 cursor-pointer">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 md:p-6 rounded-xl shadow-xl h-full">
                  <div className="h-16 md:h-24 flex items-center justify-center mb-2 md:mb-4">
                    <Wrench className="w-12 h-12 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Hardware Hobbies</h3>
                  <p className="text-green-50 text-xs md:text-sm">Mechanical Systems & Hands-on Builds</p>
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