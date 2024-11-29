import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { User, Mail, Github, Linkedin, FileText } from 'lucide-react';
import ProjectsPage from './ProjectsPage';
import ProjectDetails from './ProjectDetails';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('about');
  const [profileImageError, setProfileImageError] = useState(false);
  const baseUrl = process.env.PUBLIC_URL || '';
  const profileImagePath = `${baseUrl}/profile.jpg`;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Vishnu's Portfolio";
  }, []);

  const renderContent = () => {
    switch(currentPage) {
      case 'about':
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
                  Hi, I'm Vishnu, a passionate robotics engineer with a keen interest in automation, machine learning, and robotic systems design. Always excited to learn and create innovative solutions. They say engineers love fixing things, but honestly, I'm just trying to break fewer things each day.
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
      case 'projects':
        return <ProjectsPage />;
      case 'resume':
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
              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold">Carnegie Mellon University</h4>
                    <p className="text-gray-600">Master of Science in Mechanical Engineering-Research | GPA: 4.0/4.0</p>
                    <p className="text-sm text-gray-700">May 2025</p>
                    <p className="text-sm text-gray-600">Relevant Coursework: Machine Learning and AI for Engineers, Engineering Computation, Computer Vision, Introduction to Deep Learning</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold">Vellore Institute of Technology</h4>
                    <p className="text-gray-600">Bachelor of Technology in Mechanical Engineering | GPA: 8.94/10</p>
                    <p className="text-sm text-gray-700">May 2023</p>
                    <p className="text-sm text-gray-600">Relevant Coursework: Mechatronics System Design, CAD/CAM, AI for Beginners, Robotics, Product Design</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Work Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold">Graduate Research Assistant</h4>
                    <p className="text-gray-600">Biorobotics Lab - Apple Project (CMU) | August 2023 - Present</p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-700">
                      <li>• Assisted in developing robot with novel whip-like linkage mechanism for battery removal</li>
                      <li>• Optimized control systems achieving 40% increase in cycle time</li>
                      <li>• Enhanced kinematics for UR5 arm operations</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold">Teaching Assistant</h4>
                    <p className="text-gray-600">Carnegie Mellon University | 2023-2024</p>
                    <ul className="mt-2 text-sm text-gray-700">
                      <li>• Machine Learning and AI for Engineers (Spring 2024)</li>
                      <li>• Introduction to CAD/CAM (Fall 2023)</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-semibold">Mechanical Design Intern</h4>
                    <p className="text-gray-600">Warar Energy | February 2022 - July 2022</p>
                    <ul className="mt-2 text-sm text-gray-700">
                      <li>• Collaborated on outer body and chassis design for last-mile delivery electric vehicle</li>
                      <li>• Optimized chassis and component layout for increased cargo space</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4 text-blue-600">Academic Projects & Leadership</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold">Multi-functional 3D Printing Computer Vision Assistant</h4>
                    <p className="text-sm text-gray-700">• Engineered Python-based computer vision assistant using OpenCV and Scipy</p>
                    <p className="text-sm text-gray-700">• Implemented algorithms for feature detection and STL conversion</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold">IoT-based Vehicle-to-Vehicle Communication System</h4>
                    <p className="text-sm text-gray-700">• Developed V2V communication system for real-time accident detection</p>
                    <p className="text-sm text-gray-700">• Implemented prototype circuits for various accident scenarios</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold">Head of Department-Design, Team EcoTitans</h4>
                    <p className="text-sm text-gray-700">• Led 20-member team in Shell Eco Marathon</p>
                    <p className="text-sm text-gray-700">• Designed and manufactured space frame chassis using aluminum 6061</p>
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