import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectsPage from './ProjectsPage';
import ProjectDetails from './ProjectDetails';
import AllProjects from './AllProjects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Portfolio>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={null} />
            <Route path="/resume" element={null} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/all" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </Portfolio>
      </div>
    </BrowserRouter>
  );
}

export default App;