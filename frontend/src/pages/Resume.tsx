
import React, { useState } from 'react';
import './Resume.css';
import { NavLink } from 'react-router-dom';

const Resume = () => {
    
  return (
    <div className="resume-container">

      {/* Contact Information */}
      <section className="contact-info">
        <h1>Jennifer Laman</h1>
        <p>
          <span>jenniferklaman@gmail.com</span> &#9733; <span>321-830-8615</span> &#9733; <span>Orlando, FL</span>
        </p>
      </section>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="education">
          <h3>University of Florida</h3>
          <p>Bachelor of Arts in Linguistics</p>
          <p>Minors in Computer Science & Mathematics</p>
          <p>Gainesville, FL</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>WORK EXPERIENCE</h2>
        <div className="work-experience">
          <h3>University of Florida - College of Liberal Arts and Sciences</h3>
          <p><em>Teaching Assistantship</em> | Present</p>
          <ul>
            <li>Teaching and grading assistant for First-Year-Florida class</li>
            <li>Delivering lectures, providing academic support, and evaluating coursework</li>
          </ul>
          
          <h3>University of Florida - Department of Plant Pathology</h3>
          <p><em>Research Assistantship</em> | Aug 2024 - Dec 2024</p>
          <ul>
            <li>Programming statistical and ecological models using RStudio</li>
            <li>Investigating tools for rapid disease and pest risk assessment</li>
          </ul>

          <h3>Orange County Public Works - Traffic Engineering</h3>
          <p><em>Student Intern</em> | May 2024 - Aug 2024</p>
          <ul>
            <li>Data collection, asset management, and mapping with VBA and ArcGIS Pro</li>
            <li>Contacting citizens regarding concerns</li>
          </ul>

          <h3>University of Florida - Classics Department</h3>
          <p><em>Undergraduate Research Assistant</em> | Jan 2024 - Jun 2024</p>
          <ul>
            <li>Assisting in the research of “Using AI to Trace the History of Race and (In)equality”</li>
            <li>Exploring Python's role in interpreting Ancient Greek and Latin texts related to race</li>
          </ul>

          <h3>University of Florida - College of Medicine</h3>
          <p><em>Undergraduate Research Assistant</em> | Jan 2024 - May 2024</p>
          <ul>
            <li>Researching flaws in meta-analyses as tools for scientific research using statistical analysis</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>CERTIFICATIONS</h2>
        <ul>
          <li>Adobe Premiere Pro Certification</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>ACTIVE PROJECTS</h2>
        <div className="projects">
          <h3>Caslte Camden</h3>
          <p>Jan 2025 - Present | Gainesville, FL</p>
          <p>Designed a state-driven game menu for the side-scrolling platformer "Castle Camden" using C++ and SFML.
          </p>

          <h3>Markov’s Muse</h3>
          <p>Aug 2024 - Present | Gainesville, FL</p>
          <p>Developing a generative poetry and storytelling AI tool using Python.</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>SKILLS & INTERESTS</h2>
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Python, C/C++, R Studio, HTML, CSS, Bootstrap, ESRI products, AutoCAD, Linux, VBA</li>
          </ul>
          <h3>Interests</h3>
          <ul>
            <li>Film, Reading, History, Fashion, Magic the Gathering</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
