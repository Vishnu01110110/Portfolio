import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectsPage from './ProjectsPage';
import ProjectDetails from './ProjectDetails';
import AllProjects from './AllProjects';
import HardwareProjects from './HardwareProjects';
import HProjectDetails from './HProjectDetails';

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Portfolio />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={null} />
          <Route path="resume" element={null} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/all" element={<AllProjects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="hardware-projects" element={<HardwareProjects />} />
          <Route path="hardware-projects/:projectId" element={<HProjectDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;