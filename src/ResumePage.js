import React from 'react';
import { 
  FileText, Command, Wrench, Brain, GraduationCap, 
  Briefcase, Award 
} from 'lucide-react';

const ResumePage = () => {
  const baseUrl = process.env.PUBLIC_URL || '';

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
          {/* Rest of the skills section remains the same */}
          {/* ... Copy the skills section from your original code ... */}
        </div>

        {/* Education Section */}
        <section className="mb-8">
          {/* Rest of the education section remains the same */}
          {/* ... Copy the education section from your original code ... */}
        </section>

        {/* Work Experience Section */}
        <section className="mb-8">
          {/* Rest of the work experience section remains the same */}
          {/* ... Copy the work experience section from your original code ... */}
        </section>

        {/* Academic Projects Section */}
        <section className="mb-8">
          {/* Rest of the academic projects section remains the same */}
          {/* ... Copy the academic projects section from your original code ... */}
        </section>

        {/* Leadership Section */}
        <section>
          {/* Rest of the leadership section remains the same */}
          {/* ... Copy the leadership section from your original code ... */}
        </section>
      </div>
    </div>
  );
};

export default ResumePage;