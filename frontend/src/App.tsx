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
            href="/path/to/your/resume.pdf"
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
                <div className="home-container">
                  {/* About Me Section */}
                  <section className="intro">
                    <h1>Hi, I'm Jennifer! 👋</h1>
                    <p>
                      I'm a **linguistics major** with a passion for **AI, computational methods, and web development**. 
                      I specialize in **geospatial data analysis, natural language processing, and creative coding**. 
                      When I'm not coding, I'm probably reading about **machine learning, cartography, or historical linguistics**.
                    </p>
                    <Link to="/about-me" className="btn">📖 Read More</Link>
                  </section>

                  {/* Navigation Buttons */}
                  <section className="quick-links">
                    <Link to="/resume" className="btn">📄 View My Resume</Link>
                    <Link to="/professional-projects" className="btn">💼 See My Projects</Link>
                    <Link to="/personal-projects" className="btn">🎨 Personal Projects</Link>
                  </section>

                  {/* Featured Project */}
                  <section className="featured-project">
                    <h2>🔥 Featured Project: AI for Linguistics</h2>
                    <p>
                      I developed an **AI-powered Greek lemmatizer** that helps trace **historical language evolution**. 
                      This project combines **machine learning with etymology** to reconstruct linguistic roots.
                    </p>
                    <img src="https://source.unsplash.com/800x400/?ai,language" alt="Featured Project" className="project-img" />
                    <Link to="/professional-projects" className="btn">🔍 Explore Project</Link>
                  </section>

                  {/* Contact & Social Links */}
                  <section className="contact">
                    <h2>📬 Get in Touch</h2>
                    <p>Connect with me on these platforms:</p>
                    <div className="social-links">
                      <a href="https://github.com/jenniferlaman" target="_blank">🐙 GitHub</a>
                      <a href="https://linkedin.com/in/jenniferlaman" target="_blank">💼 LinkedIn</a>
                      <a href="mailto:jenniferklaman@gmail.com">📧 Email</a>
                    </div>
                  </section>
                </div>
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
