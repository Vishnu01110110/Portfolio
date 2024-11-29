import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { User, Mail, Github, Linkedin, FileText } from 'lucide-react';
import ProjectsPage from './ProjectsPage';
import ProjectDetails from './ProjectDetails';

const Portfolio = () => {
  useEffect(() => {
    document.title = "Vishnu's Portfolio";
  }, []);

  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    if (page === 'projects') {
      navigate('/projects');
    } else if (page === 'about') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Vishnu Vardhan Badam</h1>
          <div className="space-x-4">
            <button 
              onClick={() => handleNavigation('about')}
              className={`px-4 py-2 rounded ${currentPage === 'about' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('projects')}
              className={`px-4 py-2 rounded ${currentPage === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('resume')}
              className={`px-4 py-2 rounded ${currentPage === 'resume' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<AboutSection profileImagePath={profileImagePath} profileImageError={profileImageError} setProfileImageError={setProfileImageError} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/resume" element={<ResumeSection baseUrl={baseUrl} />} />
        </Routes>
      </main>
    </div>
  );
};

// Separate component for About section
const AboutSection = ({ profileImagePath, profileImageError, setProfileImageError }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src={profileImageError ? "/api/placeholder/150/150" : profileImagePath}
            alt="Profile" 
            className="rounded-full w-24 h-24"
            onError={() => setProfileImageError(true)} 
          />
          {/* Rest of your About section content */}
        </div>
      </div>
    </div>
  );
};

// Separate component for Resume section
const ResumeSection = ({ baseUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
        {/* Rest of your Resume section content */}
      </div>
    </div>
  );
};

const PortfolioWrapper = () => {
  return (
    <Router>
      <Portfolio />
    </Router>
  );
};

export default PortfolioWrapper;