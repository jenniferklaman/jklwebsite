import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Resume from './pages/Resume';
import ProfessionalProjects from './pages/ProfProjects';
import PersonalProjects from './pages/PerProjects';
import AboutMe from './pages/Aboutme';
import tucciImage from './assets/tucci.png';
import ccMenu from './assets/ccMenu.png';


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
                  <div className="content-wrapper">
                    {/* About Me Section */}
                    <section className="intro-container">
                      {/* Text Section */}
                      <div className="intro-text">
                        <h1>Jennifer K Laman</h1>
                        <p>
                          I am currently an undergraduate student at the University of Florida studying linguistics, 
                          computer science, and mathematics. I am passionate about many subjects, including geospatial 
                          analysis, machine learning, and game development. Outside of school, 
                          I enjoy reading, writing, painting, watching movies, and playing Magic: The Gathering with 
                          my friends. I also have an awesome cat named Stanley Tucci! 
                        </p>
                        <Link to="/about-me" className="btn">📖 Read More</Link>
                      </div>
                      {/* Image Section */}
                      <img
                        src={tucciImage}
                        alt="Jennifer K Laman"
                        className="profile-image"
                      />
                    </section>

                    {/* Navigation Buttons Box */}
                    <section className="quick-links-box">
                      <h2>Explore</h2>
                      <Link to="/resume" className="btn">📄 View My Resume</Link>
                      <Link to="/professional-projects" className="btn">💼 See My Projects</Link>
                      <Link to="/personal-projects" className="btn">🎨 Personal Projects</Link>
                    </section>
                  </div>
                  
                {/* Featured Project Box */}
                <section className="featured-project-box">
                  {/* Text Section */}
                  <div className="featured-project-text">
                    <h2>Featured Project: Castle Camden</h2>
                    <p>
                      Castle Camden is a side-scrolling platformer with a classic pixel-art aesthetic. Set in a mysterious 
                      fortress filled with secrets, players navigate nine 
                      levels, battle enemies, and uncover the hidden lore of Camden Castle. This project is dedicated to my roommates (and cat):
                      Eden, Alyssa, and Ale. If you know them in real life, you would be inspired by them as well. 
                      Stay tuned for updates on development progress and future releases!
                    </p>
                    {/* Add the button-styled link */}
                    <Link to="/professional-projects" className="btn">🔍 Explore Project</Link>
                  </div>

                  {/* Image Section */}
                  <img src= {ccMenu} alt="Featured Project" className="featured-project-img" />
                </section>


                  {/* Contact Info Box */}
                  <section className="contact-box">
                    <div className="contact">
                      <h2>Get in Touch</h2>
                      <p>Connect with me on these platforms:</p>
                      <div className="social-links">
                        <a href="https://github.com/jenniferklaman" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                        <a href="https://www.linkedin.com/in/jennifer-laman-615843262/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                        <a href="mailto:jenniferklaman@gmail.com">📧 Email</a>
                      </div>
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
          {/* Back to Top Button */}
          <button id="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ⬆️ Back to Top
          </button>
        </footer>
      </div>
    </Router>
  );
};

export default App;
