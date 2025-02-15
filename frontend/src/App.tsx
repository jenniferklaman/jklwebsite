import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Resume from './pages/Resume';
import ProfessionalProjects from './pages/ProfProjects';
import PersonalProjects from './pages/PerProjects';
import AboutMe from './pages/Aboutme';
import tucciImage from './assets/tucci.png';
import ccMenu from './assets/ccMenu.png';
import BlaisePig from './assets/BlaisePig.jpg';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import nyanCat from "./assets/nyancat.gif";
import SPTrivia from './pages/SPTrivia';


const App: React.FC = () => {
const [professionalOpen, setProfessionalOpen] = useState(false);
const [personalOpen, setPersonalOpen] = useState(false);

const handleProfessionalEnter = () => setProfessionalOpen(true);
const handleProfessionalLeave = () => setProfessionalOpen(false);
const handlePersonalEnter = () => setPersonalOpen(true);
const handlePersonalLeave = () => setPersonalOpen(false);

// const dropdownVariants = {
// hidden: { opacity: 0, y: -10 },
// visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
// };

// this doesn't work well lol...
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]); // Runs when the location changes (i.e., route changes)

  return null;
}; 

const fadeIn = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

return (
<Router>
<ScrollToTop /> 
<div className="App">
{/* Header with navigation links */}
<header>
<div className="header-left">
<a href="#home" className="logo">JKL</a>

<nav className="header-nav">
<NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
<div
  className="dropdown"
  onMouseEnter={handleProfessionalEnter}
  onMouseLeave={handleProfessionalLeave}
>
  <a href="#professional">Professional</a>
  {professionalOpen && (
    <motion.div className="dropdown-content">
      <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>
      <NavLink to="/professional-projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
    </motion.div>
  )}
</div>
<div
  className="dropdown"
  onMouseEnter={handlePersonalEnter}
  onMouseLeave={handlePersonalLeave}
>
  <a href="#personal">Personal</a>
  {personalOpen && (
    <motion.div className="dropdown-content">
      <NavLink to="/personal-projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
      <NavLink to="/about-me" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink>
    </motion.div>
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
        <motion.section
          className="intro-container"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.section>

        {/* Navigation Buttons Box */}
        <motion.section
        className="explore-box"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Explore</h2>
        <p>Check out my latest projects and interests!</p>

        {/* Featured Small Project */}
        <div className="mini-project">
          <h3>📌 Current Focus</h3>
          <p>Explore <strong>Apple API</strong> (I just love apples)</p>
          <Link to="/personal-projects" className="btn">🎮 See More</Link>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <Link to="/resume" className="btn">📄 View My Resume</Link>
          <Link to="/professional-projects" className="btn">👩‍🏫 Professional Projects</Link>
        </div>
      </motion.section>
      </div>
      
      {/* Featured Project Box */}
      <motion.section
        className="featured-project-box"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Section */}
        <div className="featured-project-text">
          <h2>Featured Project: Castle Camden</h2>
          <p>
            Castle Camden is a side-scrolling platformer with a classic pixel-art aesthetic. Set in a mysterious 
            fortress filled with secrets, players navigate nine 
            levels, battle enemies, and uncover the hidden lore of Camden Castle. This project is dedicated to my roommates (and cat):
            Eden, Alyssa, and Ale. If you knew them, you would be inspired by them as well. 
            Stay tuned for updates on development progress and future releases!
          </p>
          {/* Add the button-styled link */}
          <Link to="/personal-projects" className="btn">🔍 Explore Project</Link>
        </div>
        {/* Image Section */}
        <img src={ccMenu} alt="Featured Project" className="featured-project-img" />
      </motion.section>

        {/* And this weeks hobby is... */}
        <motion.section
        className="featured-hobby-box"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Section */}
        <div className="featured-hobby">
          <h2>And this week's hobby is...</h2>
          <p>
            I have a lot of hobbies that I never have enough time for. This week's hobby is ceramics!
            I go to a beginning ceramics class with Blaise every Tuesday at the Reitz. The class is mostly graduate
            engineering students and also a girl from my high school.
            Last week we made quadrupeds. This is Blaise's pig from two weeks ago. I was working on 
            a cat last week. 
            I'll put a new picture soon don't worry everyone.

          </p>
          {/* Add the button-styled link */}
          <Link to="/personal-projects" className="btn">🔍 Explore Project</Link>
        </div>

        {/* Image Section */}
        <img 
          src={BlaisePig} 
          alt="Blaise's Pig" 
          className="featured-hobby-img"
          style={{ width: '300px', height: 'auto', maxWidth: '100%' }} 
        />

      </motion.section>

      {/* Contact Info Box */}
      <motion.section className="contact-box" variants={fadeIn} initial="hidden"   whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}>
      {/* Links Section */}
      <div className="links-container">
        <div className="contact">
          <h2>Links!</h2>
          <p>Connect with me on these platforms:</p>
          <div className="social-links">
            <a href="https://github.com/jenniferklaman" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/jennifer-laman-615843262/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a href="mailto:jenniferklaman@gmail.com">📧 Email</a>
          </div>
        </div>

        {/* Animated Nyan Cat */}
        <motion.div
          className="animated-nyancat"
          animate={{ x: ["29%", "100%"] }}  // Moves across the full width
          transition={{
            x: {
              repeat: Infinity,
              duration: 6, // Adjust speed
              ease: "linear" // Keeps a constant speed
            }
          }}
        >
          <img src={nyanCat} alt="Nyan Cat" className="nyan-cat-img" />
        </motion.div>

      </div>
    </motion.section>

    </div>

    
  }
/>
<Route path="/resume" element={<Resume />} />
<Route path="/professional-projects" element={<ProfessionalProjects />} />
<Route path="/personal-projects" element={<PersonalProjects />} />
<Route path="/about-me" element={<AboutMe />} />
{/* Add routes for games */}
<Route path="/shower-party-trivia" element={<SPTrivia />} />
{/* Add other game routes here */}
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