import React, { useEffect, useState } from 'react';
import './App.css'; // Make sure this is imported
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from 'framer-motion';
import Resume from './pages/Resume';
import ProfessionalProjects from './pages/ProfProjects';
import PersonalProjects from './pages/PerProjects';
import AboutMe from './pages/Aboutme';
import RubiksCube from './assets/Rubiks';
import CatLogo from './pages/pages_assets/Logo';

/* A separate component for the "home" route's content */
const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <motion.section className="intro-container">
          <div className="intro-text">
            <h1>Jennifer K Laman</h1>
            <p>
              Linguistics, computer science, and mathematics at the University of Florida
            </p>
            <Link to="/about-me" className="btn">
              Read More ⇗
            </Link>
          </div>
        </motion.section>

        {/* Rubik's Cube container */}
        <div className="rubiks-cube-container">
          <RubiksCube />
        </div>
      </div>

      {/* Work Section */}
      <section className="home-section">
        <div className="section-header">
          <h2>Work</h2>
        </div>

        <div className="section-content">
          <div className="work-item">
            <h3>First Year Florida - Teaching Assistant</h3>
            <p className="work-details">UF | Present</p>
            <p className="work-description">
              Supporting first-year students, grading, lecturing, and mentoring.
            </p>
          </div>

          <div className="work-item">
            <h3>Undergrad Research Assistant</h3>
            <p className="work-details">UF CompLing Lab | Jan 2025 - Present</p>
            <p className="work-description">
              Developing an ASR model for low-resource speech recognition.
            </p>
          </div>
        </div>

        {/* Move the See All link to the bottom */}
        <div className="see-all-wrapper">
          <Link to="/resume" className="see-all-link">See all</Link>
        </div>
      </section>


      {/* Projects Section */}
      <section className="home-section">
        <div className="section-header">
          <h2>Projects</h2>
        </div>

        <div className="section-content">
          {/* Clickable project items */}
          <a className="project-item" href="/professional-projects">
            <h3>ProtoLang</h3>
            <p> A linguistic tool for prototyping new language systems and exploring
            morphological patterns.</p>
          </a>
          <a className="project-item" href="/professional-projects">
            <h3>ASR with CompLing @ UF</h3>
            <p>An experimental Automatic Speech Recognition system with UF's computational linguistics laboratory.
            </p>
          </a>
        </div>

        {/* Move "See all projects" here to align it at the bottom */}
        <div className="see-all-wrapper">
          <Link to="/professional-projects" className="see-all-link">
            See all projects
          </Link>
        </div>
      </section>


              <section className="home-section">
        <h2>Connect with Me!</h2>
        <p></p>
        <div className="social-icons">
          <a href="https://github.com/jenniferklaman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jennifer-laman-615843262/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="mailto:jenniferklaman@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </div>
      </section>
      </div>
  );
};

/* AnimatePresence + motion for smoother transitions */
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  // A more dramatic transition definition
  const pageTransition = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -100, scale: 0.9 },
    transition: { duration: 1.2, ease: 'easeInOut' }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <HomePage />
            </motion.div>
          }
        />

        {/* Other Routes */}
        <Route
          path="/resume"
          element={
            <motion.div {...pageTransition}>
              <Resume />
            </motion.div>
          }
        />
        <Route
          path="/professional-projects"
          element={
            <motion.div {...pageTransition}>
              <ProfessionalProjects />
            </motion.div>
          }
        />
        <Route
          path="/personal-projects"
          element={
            <motion.div {...pageTransition}>
              <PersonalProjects />
            </motion.div>
          }
        />
        <Route
          path="/about-me"
          element={
            <motion.div {...pageTransition}>
              <AboutMe />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <div className="loading-screen">
            <div className="loading-bar-container">
              <div className="progress-bar"></div>
            </div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {/* Header with transparent background */}
            <header>
              <div className="header-left">
                {/* Replace the text with <Logo /> */}
                <Link to="/" className="logo">
                  <CatLogo />
                </Link>
                <nav className="header-nav">
                  {/* Professional Dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">Professional</button>
                    <div className="dropdown-content">
                      <Link to="/resume">Resume</Link>
                      <Link to="/professional-projects">Projects</Link>
                    </div>
                  </div>

                  {/* Personal Dropdown */}
                  <div className="dropdown">
                    <button className="dropbtn">Personal</button>
                    <div className="dropdown-content">
                      <Link to="/personal-projects">Projects</Link>
                    </div>
                  </div>

                  {/* Direct Link */}
                  <Link to="/about-me" className="nav-link">About Me</Link>
                </nav>
              </div>

              <a href="frontend\src\pages\pages_assets\Resume.pdf" id="download-resume-button" download>
                Download Resume
              </a>
            </header>

            <div className="main-content">
              <AnimatedRoutes />
            </div>

            <footer className="site-footer">
              <p>© 2025 Jennifer K Laman</p>
              <button
                id="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                🔝
              </button>
            </footer>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
