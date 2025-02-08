import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Resume from './pages/Resume';
import ProfessionalProjects from './pages/ProfProjects';
import PersonalProjects from './pages/PerProjects';
import AboutMe from './pages/Aboutme';

const App: React.FC = () => {
  const [professionalOpen, setProfessionalOpen] = useState(false);
  const [personalOpen, setPersonalOpen] = useState(false);

  const handleProfessionalEnter = () => setProfessionalOpen(true);
  const handleProfessionalLeave = () => setProfessionalOpen(false);
  const handlePersonalEnter = () => setPersonalOpen(true);
  const handlePersonalLeave = () => setPersonalOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Header with navigation links */}
        <header>
          <div className="header-left">
            <a href="#home" className="logo">JKL</a>
            <nav className="header-nav">
              <Link to="/" className="active">Home</Link>
              {/* Professional Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={handleProfessionalEnter}
                onMouseLeave={handleProfessionalLeave}
              >
                <a href="#professional">Professional</a>
                {professionalOpen && (
                  <div className="dropdown-content">
                    <Link to="/resume">Resume</Link>
                    <Link to="/professional-projects">Projects</Link>
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
                    <Link to="/personal-projects">Projects</Link>
                    <Link to="/about-me">About Me</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
          {/* Download Resume Button */}
          <a
            href="/path/to/your/resume.pdf"  // Update this path to your actual resume file location
            id="download-resume-button"
            download
          >
            Download Resume
          </a>
        </header>

        {/* Main content section */}
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Welcome to the React App!</h2>
                  <p>This is a section of the page. You can add more content here.</p>
                  <button>
                    <i className="fas fa-heart"></i> CLICK ME
                  </button>
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/professional-projects" element={<ProfessionalProjects />} />
            <Route path="/personal-projects" element={<PersonalProjects />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>

        {/* Footer section */}
        <footer>
          <p>© 2025 Jennifer K Laman</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
