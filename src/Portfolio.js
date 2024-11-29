import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { User, Mail, Github, Linkedin, FileText, Sun, Moon } from 'lucide-react';
import ProjectsPage from './ProjectsPage';

const Portfolio = () => {
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;

  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const navigate = useNavigate();
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

  const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="relative inline-flex items-center justify-between w-16 h-8 px-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
        
        {/* Icons container */}
        <span className="flex items-center justify-between w-full absolute">
          <Sun className={`w-4 h-4 text-yellow-500 transition-opacity duration-200 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
          <Moon className={`w-4 h-4 text-blue-200 transition-opacity duration-200 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
        </span>
        
        {/* Toggle circle */}
        <span
          className={`absolute block w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-200 ${
            darkMode ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
    );
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'about':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
                <div className="flex space-x-4">
                  <a href="mailto:vishnuvardhan.badam@gmail.com" className="hover:text-blue-500">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a href="https://github.com/Vishnu01110110" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/badam-vishnu-vardhan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vishnu Vardhan Badam</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentPage('about')}
              className={`px-4 py-2 rounded ${
                currentPage === 'about' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={`px-4 py-2 rounded ${currentPage === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setCurrentPage('resume')}
              className={`px-4 py-2 rounded ${currentPage === 'resume' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Resume
            </button>
            <div className="flex items-center">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Portfolio;