import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  User, Mail, Github, Linkedin, FileText, Sun, Moon, Send, Phone, 
  Brain, Wrench, GraduationCap, Award, Command, Briefcase, Menu 
} from 'lucide-react';
import ProjectsPage from './ProjectsPage';
import ModernToggle from './components/ModernToggle';
import HardwareProjects from './HardwareProjects';
import AllProjects from './AllProjects';
import HProjectDetails from './HProjectDetails';
import ProjectDetails from './ProjectDetails';

const Portfolio = ({ children }) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;

  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Vishnu's Portfolio";
    
    // Set current page based on location
    const path = location.pathname.split('/')[1] || 'about';
    setCurrentPage(path);
  }, [location.pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  const renderContent = () => {
    if (location.pathname === '/' || location.pathname === '/about') {
      return (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={profileImageError ? "/api/placeholder/150/150" : profileImagePath}
                  alt="Profile" 
                  className="rounded-full w-24 h-24"
                  onError={() => setProfileImageError(true)} 
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Vishnu</h2>
                  <p className="text-gray-600 dark:text-gray-300">Engineer</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Hi, I'm Vishnu, a passionate robotics engineer with a keen interest in automation, machine learning, and robotic systems design. Always excited to learn and create innovative solutions. They say engineers love fixing things, but honestly, I'm just trying to break fewer things each day.
                </p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a 
                href="mailto:vishnuvardhan.badam@gmail.com" 
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a 
                href="tel:+1 4123909259" 
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+1 412 390 9259</span>
              </a>
              <a 
                href="https://github.com/Vishnu01110110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/badam-vishnu-vardhan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          {/* Skills section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Skills & Interests</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Knowledge Areas</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Computer-Aided Design • Computer Vision and Perception • Machine Learning • Machining • Controls • Robotics Programming • Automation</p>
                </div>  
              <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Tools & Technologies</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">ROS • Python • C++ • Arduino IDE • MATLAB • Git • SQL • Fusion360 • SolidWorks • Ansys • TensorFlow • OpenCV</p>
              </div>
              <div className="border-l-2 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Interests</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">New Product Development • Autonomous Systems • Mechanical Design • AI in Robotics • Manufacturing Automation • Cooking</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    if (location.pathname === '/resume') {
      return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Resume</h1>
              <a 
                href={`${baseUrl}/resume.pdf`} 
                download="Vishnu_Vardhan_Badam_Resume.pdf"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  fetch(`${baseUrl}/resume.pdf`)
                    .then(response => {
                      if (response.ok) {
                        window.location.href = `${baseUrl}/resume.pdf`;
                      } else {
                        alert('Resume file is not available yet. Please check back later.');
                      }
                    })
                    .catch(error => {
                      alert('Unable to download resume. Please try again later.');
                    });
                }}
              >
                <FileText className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Skills Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-sm mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Command className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Skills</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                    <Wrench className="w-5 h-5 text-blue-500" />
                    Tools & Software
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["ROS", "Python", "C/C++", "Arduino IDE", "MATLAB", "Git", "SQL", "Fusion360", "SolidWorks", "Ansys"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full text-sm shadow-sm border border-blue-100 dark:border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                    <Brain className="w-5 h-5 text-blue-500" />
                    Knowledge Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Computer-Aided Design", "Computer Vision", "Machine Learning", "Machining", "Controls", "Perception", "Robotics"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full text-sm shadow-sm border border-blue-100 dark:border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Carnegie Mellon University</h3>
                  <p className="text-blue-600 dark:text-blue-400">Master of Science in Mechanical Engineering-Research | GPA: 4.0/4.0</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>May 2025 | Pittsburgh, PA</p>
                    <p className="mt-2">Relevant Coursework: Machine Learning and AI for Engineers, Engineering Computation, Computer Vision, Introduction to Deep Learning</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Vellore Institute of Technology</h3>
                  <p className="text-blue-600 dark:text-blue-400">Bachelor of Technology in Mechanical Engineering | GPA: 8.94/10</p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>May 2023 | Vellore, India</p>
                    <p className="mt-2">Relevant Coursework: Mechatronics System Design, CAD/CAM, Artificial Intelligence for Beginners, Robotics, Product Design for Manufacturing, Manufacturing Automation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Work Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Graduate Research Assistant</h3>
                      <p className="text-blue-600 dark:text-blue-400">Biorobotics Lab - Apple Project (Carnegie Mellon University)</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">August 2023 - Present</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Pittsburgh, PA</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Assisted in developing and implementing a robot with a novel whip-like linkage mechanism for efficient battery removal in end-of-life devices, contributing over a 12-month period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Optimized control systems and circuit designs, enhancing overall operational efficiency and reliability, resulting in a 40% increase in cycle time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Enhanced kinematics and built efficient gripping mechanisms for pick-and-place operations leveraging a UR5 arm, and evaluated performance to ensure precision and efficiency</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Teaching Assistant</h3>
                      <p className="text-blue-600 dark:text-blue-400">Carnegie Mellon University's College of Engineering</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Pittsburgh, PA</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Teaching Assistant for Machine Learning and AI for Engineers (January 2024 - May 2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Course Assistant for Introduction to CAD/CAM (August 2023 - December 2023)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Mechanical Design Intern</h3>
                      <p className="text-blue-600 dark:text-blue-400">Warar Energy</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">February 2022 - July 2022</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vellore, India</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Collaborated with three engineers as an outer body and chassis designer for a last-mile delivery electric vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Managed process planning and benchmarking for revamping an electric motorbike outer shell and worked on integrating a delivery box with a 20% increased size</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Yielded more cargo space by optimizing chassis and component layout during a five-month vehicle development internship</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Academic Projects Section */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Command className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Academic Projects</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Multi-functional 3D Printing Computer Vision Assistant</h3>
                      <p className="text-blue-600 dark:text-blue-400">Carnegie Mellon University</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Fall 2023</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Pittsburgh, PA</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Engineered a Python-based computer vision assistant for 3D printing using OpenCV and Scipy to detect object dimensions and features accurately, increasing 3D print precision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Designed and implemented algorithms for scale and feature size detection, overhang identification, and STL conversion, improving print reliability and quality</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Mitigating Risks in Autonomous Vehicles</h3>
                      <p className="text-blue-600 dark:text-blue-400">Vellore Institute of Technology</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Fall 2022</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vellore, India</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Developed an IoT-based vehicle-to-vehicle (V2V) communication system using 3 different modules to improve road safety by enabling real-time accident detection and alert transmission between vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Cooperated with two members to mimic vehicle interactions and accidents leveraging prototype circuits and assessed results to verify effective accident detection and communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Simulated interaction of two vehicles approaching an intersection with scaled prototype circuits, covering a range of accident scenarios with different velocities and impact angles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Leadership Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Leadership</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Head of Department-Design</h3>
                      <p className="text-blue-600 dark:text-blue-400">Team EcoTitans – Student Club VIT</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">May 2020 - May 2022</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Gained hands-on experience in designing, analyzing, and manufacturing a space frame chassis. Work involved devising a rule-compliant, ergonomic, aerodynamically superior, and highly safe aluminum 6061 chassis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Led a team of 20 to participate in shell eco marathon and was responsible for conducting several webinars and social media campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
    
    return null;  // Default return for unmatched routes
  };

  // Helper function to determine if a path is active
  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/about';
    }
    return location.pathname.startsWith(path);
  };

  // Add this check for hardware project pages
  const isHardwarePage = location.pathname.startsWith('/hardware-projects');
  const showNavigation = !isHardwarePage || (isHardwarePage && location.state?.fromProjectsPage);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Only show nav if showNavigation is true */}
      {showNavigation && (
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vishnu Vardhan Badam</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => {
                  navigate('/about');
                  setCurrentPage('about');
                }}
                className={`px-4 py-2 rounded ${
                  isActivePath('/') || isActivePath('/about')
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/projects/all');
                  setCurrentPage('projects');
                }}
                className={`px-4 py-2 rounded ${
                  isActivePath('/projects') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  navigate('/resume');
                  setCurrentPage('resume');
                }}
                className={`px-4 py-2 rounded ${
                  isActivePath('/resume') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Resume
              </button>
              
              {/* Desktop dark mode toggle */}
              <div className="ml-4">
                <ModernToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg`}>
            <div className="flex flex-col p-4 space-y-2">
              <button 
                onClick={() => {
                  navigate('/about');
                  setCurrentPage('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded text-left ${
                  isActivePath('/') || isActivePath('/about')
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/projects/all');
                  setCurrentPage('projects');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded text-left ${
                  isActivePath('/projects') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  navigate('/resume');
                  setCurrentPage('resume');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded text-left ${
                  isActivePath('/resume') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Resume
              </button>
              
              {/* Mobile dark mode toggle */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-gray-600 dark:text-gray-300">Theme toggle</span>
                  <ModernToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      <main className={`${isHardwarePage ? '' : 'max-w-6xl mx-auto p-4 md:p-8'} ${
        !isHardwarePage && (currentPage === 'about' || location.pathname === '/') ? 'pb-24' : ''
      }`}>
        <Routes>
          <Route path="/" element={renderContent()} />
          <Route path="/about" element={renderContent()} />
          <Route path="/resume" element={renderContent()} />
          <Route path="/projects/all" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/hardware-projects" element={<HardwareProjects />} />
          <Route path="/hardware-projects/:projectId" element={<HProjectDetails />} />
        </Routes>
      </main>

      {/* Only show footer if NOT on hardware page and on about/home page */}
      {!isHardwarePage && (currentPage === 'about' || location.pathname === '/') && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 z-20">
          <div className="max-w-2xl mx-auto flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Always excited to chat—be it about ai, tech, robotics, or just life!
            </span>
            <a
              href="https://www.linkedin.com/messaging/compose/?to=badam-vishnu-vardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 
                       text-white font-medium rounded-lg transition-colors duration-200"
            >
              <span>Say Hi</span>
              <Send className="ml-2 h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;