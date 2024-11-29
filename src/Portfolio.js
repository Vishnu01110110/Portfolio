import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { User, Mail, Github, Linkedin, FileText } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Vishnu's Portfolio";
  }, []);

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
        <div>Current Page: {currentPage}</div>
      </main>
    </div>
  );
};

export default Portfolio;