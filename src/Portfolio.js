import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { User, Mail, Github, Linkedin, FileText } from 'lucide-react';
import ProjectsPage from './ProjectsPage';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Vishnu's Portfolio";
  }, []);

  const renderContent = () => {
    if (currentPage === 'about') {
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
              <div>
                <h2 className="text-2xl font-bold">Vishnu</h2>
                <p className="text-gray-600">Engineer</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Hi, I'm Vishnu, a passionate robotics engineer with a keen interest in automation, machine learning, and robotic systems design.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:vishnuvardhan.badam@gmail.com" className="hover:text-blue-500">
                  <Mail className="w-5 h-5 text-gray-600" />
                </a>
                <a href="https://github.com/Vishnu01110110" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
                <a href="https://www.linkedin.com/in/badam-vishnu-vardhan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
          {/* Skills section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Skills & Interests</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-semibold">Technical Skills</h4>
                <p className="text-sm text-gray-700">Robotics Programming • Machine Learning • Computer Vision • Automation</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-semibold">Tools & Technologies</h4>
                <p className="text-sm text-gray-700">ROS • Python • C++ • TensorFlow • OpenCV</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-semibold">Interests</h4>
                <p className="text-sm text-gray-700">Autonomous Systems • Mechanical Design • AI in Robotics • Cooking</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (currentPage === 'projects') {
      return <ProjectsPage />;
    } else if (currentPage === 'resume') {
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
            {/* Rest of Resume content */}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Vishnu Vardhan Badam</h1>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('about')}
              className={`px-4 py-2 rounded ${currentPage === 'about' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={`px-4 py-2 rounded ${currentPage === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setCurrentPage('resume')}
              className={`px-4 py-2 rounded ${currentPage === 'resume' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={renderContent()} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default Portfolio;