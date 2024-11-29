import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Github, Linkedin, FileText, Sun, Moon, Send, Phone } from 'lucide-react';
import ProjectsPage from './ProjectsPage';
import ModernToggle from './components/ModernToggle';

const Portfolio = ({ children }) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;

  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Vishnu's Portfolio";
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  const renderContent = () => {
    switch(currentPage) {
      case 'about':
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
                  href="tel:+4123909259" 
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>+412 390 9259</span>
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
                  <h4 className="font-semibold text-gray-800 dark:text-white">Technical Skills</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Computer-Aided Design • Computer Vision and Perception • Machine Learning • Machining • Controls • Robotics Programming • Automation</p>
                  </div>  
                <div className="border-l-2 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Tools & Technologies</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">ROS • Python • C++ • Arduino IDE • MATLAB • Git • SQL • Fusion360 • SolidWorks • Ansys • TensorFlow • OpenCV</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Knowledge Areas</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Computer-Aided Design • Computer Vision and Perception • Machine Learning • Machining • Controls • Manufacturing Automation</p>
                </div>
                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Interests</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">New Product Development • Autonomous Systems • Mechanical Design • AI in Robotics • Manufacturing Automation • Cooking</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return <ProjectsPage />;
      
      case 'resume':
        return (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <a 
                  href={`${baseUrl}/resume.pdf`} 
                  download="Vishnu_Vardhan_Badam_Resume.pdf"
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-600"
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

              {/* Education Section */}
              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-600 text-gray-800 dark:text-white">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Carnegie Mellon University</h4>
                    <p className="text-gray-600 dark:text-gray-300">Master of Science in Mechanical Engineering-Research | GPA: 4.0/4.0</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">May 2025</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Relevant Coursework: Machine Learning and AI for Engineers, Engineering Computation, Computer Vision, Introduction to Deep Learning</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Vellore Institute of Technology</h4>
                    <p className="text-gray-600 dark:text-gray-300">Bachelor of Technology in Mechanical Engineering | GPA: 8.94/10</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">May 2023</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Relevant Coursework: Mechatronics System Design, CAD/CAM, AI for Beginners, Robotics, Product Design</p>
                  </div>
                </div>
              </section>

              {/* Work Experience Section */}
              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-600 text-gray-800 dark:text-white">Work Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Graduate Research Assistant</h4>
                    <p className="text-gray-600 dark:text-gray-300">Biorobotics Lab - Apple Project (CMU) | August 2023 - Present</p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Assisted in developing robot with novel whip-like linkage mechanism for battery removal</li>
                      <li>• Optimized control systems achieving 40% increase in cycle time</li>
                      <li>• Enhanced kinematics for UR5 arm operations</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Teaching Assistant</h4>
                    <p className="text-gray-600 dark:text-gray-300">Carnegie Mellon University | 2023-2024</p>
                    <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Machine Learning and AI for Engineers (Spring 2024)</li>
                      <li>• Introduction to CAD/CAM (Fall 2023)</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Mechanical Design Intern</h4>
                    <p className="text-gray-600 dark:text-gray-300">Warar Energy | February 2022 - July 2022</p>
                    <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Collaborated on outer body and chassis design for last-mile delivery electric vehicle</li>
                      <li>• Optimized chassis and component layout for increased cargo space</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Academic Projects & Leadership Section */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-blue-600 text-gray-800 dark:text-white">Academic Projects & Leadership</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Multi-functional 3D Printing Computer Vision Assistant</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">• Engineered Python-based computer vision assistant using OpenCV and Scipy</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">• Implemented algorithms for feature detection and STL conversion</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">IoT-based Vehicle-to-Vehicle Communication System</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">• Developed V2V communication system for real-time accident detection</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">• Implemented prototype circuits for various accident scenarios</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Head of Department-Design, Team EcoTitans</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">• Led 20-member team in Shell Eco Marathon</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">• Designed and manufactured space frame chassis using aluminum 6061</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Helper function to determine if a path is active
  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vishnu Vardhan Badam</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                navigate('/');
                setCurrentPage('about');
              }}
              className={`px-4 py-2 rounded ${
                isActivePath('/') && !isActivePath('/projects')
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => {
                navigate('/projects');
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
            <div className="flex items-center">
              <ModernToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {(location.pathname === '/' || location.pathname === '/resume') && renderContent()}
        {location.pathname !== '/' && location.pathname !== '/resume' && children}
        {currentPage === 'about' && location.pathname === '/' && <div className="h-20" />}
      </main>

      {currentPage === 'about' && location.pathname === '/' && (
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4">
            <div className="max-w-2xl mx-auto flex justify-center items-center space-x-4">
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Always excited to chat—be it about tech, robotics, or just life!
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