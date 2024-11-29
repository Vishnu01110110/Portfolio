import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ModernToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        relative h-8 w-20 rounded-full p-1 transition-colors duration-200
        ${darkMode ? 'bg-indigo-600' : 'bg-gray-200'}
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${darkMode ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'}
      `}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`
          flex h-6 w-6 transform items-center justify-center rounded-full 
          bg-white transition-transform duration-200 shadow-sm
          ${darkMode ? 'translate-x-12' : 'translate-x-0'}
        `}
      >
        {darkMode ? (
          <Moon className="h-4 w-4 text-indigo-600" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>

      <span className={`
        absolute top-1/2 -translate-y-1/2 
        ${darkMode ? 'left-2' : 'right-2'}
        text-xs font-medium
        ${darkMode ? 'text-white' : 'text-gray-600'}
      `}>
        {darkMode ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ModernToggle; 