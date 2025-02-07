import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [professionalOpen, setProfessionalOpen] = useState(false);
  const [personalOpen, setPersonalOpen] = useState(false);

  // Handle mouse enter/leave to toggle dropdown visibility
  const handleProfessionalEnter = () => setProfessionalOpen(true);
  const handleProfessionalLeave = () => setProfessionalOpen(false);

  const handlePersonalEnter = () => setPersonalOpen(true);
  const handlePersonalLeave = () => setPersonalOpen(false);

  return (
    <div className="App">
      {/* Header with navigation links */}
      <header>
        <a href="#home" className="logo">JKL</a>
        <nav className="header-nav">
          <a href="#home" className="active">Home</a>

          {/* Professional Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={handleProfessionalEnter}
            onMouseLeave={handleProfessionalLeave}
          >
            <a href="#professional">Professional</a>
            {professionalOpen && (
              <div className="dropdown-content">
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
              </div>
            )}
          </div>

          {/* Personal Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={handlePersonalEnter}
            onMouseLeave={handlePersonalLeave}
          >
            <a href="#personal">Personal</a>
            {personalOpen && (
              <div className="dropdown-content">
                <a href="#personal-projects">Projects</a>
                <a href="#about-me">About Me</a>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main content section */}
      <div className="main-content">
        <h2>Welcome to the React App!</h2>
        <p>This is a section of the page. You can add more content here.</p>
        <button>
          <i className="fas fa-heart"></i> CLICK ME
        </button>
      </div>

      {/* Footer section */}
      <footer>
        <p>© 2025 Jennifer K Laman</p>
      </footer>
    </div>
  );
};

export default App;
