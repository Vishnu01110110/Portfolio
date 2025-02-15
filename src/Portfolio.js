import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  Mail, Github, Linkedin, FileText, Sun, Moon, Send, Phone, Menu 
} from 'lucide-react';
import ModernToggle from './components/ModernToggle';
import AnimatedLandingPage from './AnimatedLandingPage';
import ProjectsPage from './ProjectsPage';
import HardwareProjects from './HardwareProjects';
import AllProjects from './AllProjects';
import HProjectDetails from './HProjectDetails';
import ProjectDetails from './ProjectDetails';
import ResumePage from './ResumePage';

const Portfolio = () => {
  // Set the custom viewport height variable (for mobile browsers)
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const [currentPage, setCurrentPage] = useState('home');
  const [currentSection, setCurrentSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    document.title = "Vishnu's Portfolio";
    const path = location.pathname.split('/')[1] || 'home';
    setCurrentPage(path);
  }, [location.pathname]);

  // Measure nav height (update when mobile menu toggles or route changes)
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, [isMobileMenuOpen, location.pathname]);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  const isHardwarePage = location.pathname.startsWith('/hardware-projects');
  const showNavigation = !isHardwarePage || (isHardwarePage && location.state?.fromProjectsPage);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {showNavigation && (
        <nav ref={navRef} className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vishnu Vardhan Badam</h1>
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setCurrentPage('home');
                }}
                className={`px-4 py-2 rounded ${
                  isActivePath('/') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Home
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
                Experience
              </button>
              
              <div className="ml-4">
                <ModernToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setCurrentPage('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded ${
                  isActivePath('/') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  navigate('/projects/all');
                  setCurrentPage('projects');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded ${
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
                className={`block w-full text-left px-4 py-2 rounded ${
                  isActivePath('/resume') 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Experience
              </button>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-gray-600 dark:text-gray-300">Theme toggle</span>
                  <ModernToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      <main className={`${isHardwarePage ? '' : 'mx-auto'} ${!isHardwarePage && currentPage === 'home' ? '' : 'max-w-6xl p-4 md:p-8'}`}>
        <Routes>
          <Route path="/" element={<AnimatedLandingPage navHeight={navHeight} onSectionChange={handleSectionChange} />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/all" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/hardware-projects" element={<HardwareProjects />} />
          <Route path="/hardware-projects/:projectId" element={<HProjectDetails />} />
        </Routes>
      </main>

      {currentPage === 'home' && currentSection === 'hero' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 z-20">
          <div className="max-w-2xl mx-auto flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Always excited to chat—be it about ai, tech, robotics, or just life! 
            </span>
            <a
              href="https://www.linkedin.com/messaging/compose/?to=badam-vishnu-vardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
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
