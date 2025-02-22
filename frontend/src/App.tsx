// import "../public/materialize/css/materialize.min.css";
// import "../public/materialize/js/materialize.min.js";

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet to manage head tags
import './App.css'; // Make sure this is imported
import {
  HashRouter as Router, 
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs, faReact, faRProject, faGitAlt, faLinux } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGlobe, faBrain, faCode } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from "./pages/pages_assets/Scroll2Top";
import Resume from './pages/Resume';
import ProfessionalProjects from './pages/ProfProjects';
import PersonalProjects from './pages/PerProjects';
import AboutMe from './pages/Aboutme';
import RubiksCube from './assets/Rubiks';
import CatLogo from './pages/pages_assets/Logo';
import resumeFile from './pages/pages_assets/Resume.pdf';

/* A separate component for the "home" route's content */
const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
      <motion.section className="intro-container">
        <div className="intro-text">
          <h1>Jennifer K Laman</h1>
          <h2 className="subtitle">Linguist, Programmer, Student</h2>

          <p className="intro-description">
            I am a <em> linguistics student, researcher, </em> 
            and <em>lifelong learner</em>.
          </p>

          <p className="intro-description">
            I love uncovering patterns—whether in language, data, or code. My passion lies in blending 
            linguistics with technology, using machine learning and statistics to explore how we communicate. 
            From developing language tools to designing interactive projects, I enjoy building systems 
            that connect words, logic, and computation.
          </p>

          <p className="intro-description">
            This is a personal space, where I share my work and personal projects.
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

    {/* Skills Section */}
    <section className="home-section">
      <div className="section-header">
        <h2>Skills</h2>
      </div>

    <div className="skills-content">
      <div className="skill">
        <FontAwesomeIcon icon={faPython} className="skill-icon" />
        Python
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faJs} className="skill-icon" />
        JavaScript
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faReact} className="skill-icon" />
        React
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faRProject} className="skill-icon" />
        R
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
        SQL
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faGlobe} className="skill-icon" />
        GIS
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faBrain} className="skill-icon" />
        Machine Learning
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
        Git
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faLinux} className="skill-icon" />
        Linux
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faCode} className="skill-icon" />
        C++
      </div>
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

//* AnimatePresence + motion for smoother transitions */
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -100, scale: 0.9 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <HomePage />
            </motion.div>
          }
        />
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
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Simulate a loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    // If current theme is light, next is dark; else next is light
    const newTheme = theme === "light" ? "dark" : "light";
  
    // Disable transitions while toggling
    const css = document.createElement("style");
    css.type = "text/css";
    css.appendChild(
      document.createTextNode(
        `* {
          -webkit-transition: none !important;
          -moz-transition: none !important;
          -o-transition: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`
      )
    );
    document.head.appendChild(css);
  
    // Force a reflow to apply the style before removing it
    void css.offsetHeight;
  
    document.head.removeChild(css);
  
    // Update theme state
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  
  

  return (
    <Router>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ScrollToTop />
      <div className="App">
        {isLoading ? (
          <div className="loading-screen">
            <div className="loading-logo-container">
              {/* Animated CatLogo */}
              <CatLogo className="loading-logo" />
            </div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <header>
              <div className="header-left">
                <Link to="/" className="logo">
                  <CatLogo />
                </Link>
                <nav className="header-nav">
                  <div className="dropdown">
                    <button className="dropbtn">Professional</button>
                    <div className="dropdown-content">
                      <Link to="/resume">Resume</Link>
                      <Link to="/professional-projects">Projects</Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="dropbtn">Personal</button>
                    <div className="dropdown-content">
                      <Link to="/personal-projects">Projects</Link>
                    </div>
                  </div>
                  <Link to="/about-me" className="nav-link">About Me</Link>
                </nav>
              </div>

              <div className="header-right">
                <button className="theme-toggle" onClick={toggleTheme}>
                  <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
                </button>
                <a href={resumeFile} className="resume-btn" download="Jennifer_Laman_Resume.pdf" id="download-resume-button">
                Download Resume
              </a>
              </div>
            </header>

            <div className="main-content">
              <AnimatedRoutes />
            </div>

            <footer className="site-footer">
              <p>© 2025 Jennifer K Laman</p>
              <button
                id="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                🐾Back to Top
              </button>
            </footer>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
