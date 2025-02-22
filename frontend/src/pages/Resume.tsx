import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Contact Information */}
      <section className="contact-info">
        <h1>Jennifer Laman</h1>
        <p>
          <span>jenniferklaman@gmail.com</span> ❖ <span>321-830-8615</span> ❖ <span>Orlando, FL</span>
        </p>
      </section>

      {/* Education Section */}
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="education">
          <h3>University of Florida</h3>
          <p><strong>Bachelor of Arts in Linguistics</strong></p>
          <p>Minors in <strong>Computer Science & Mathematics</strong></p>
          <p>Gainesville, FL</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="resume-section">
        <h2>WORK EXPERIENCE</h2>
        <div className="work-experience">

          <h3>University of Florida - College of Liberal Arts and Sciences</h3>
          <p><em>Teaching Assistant</em> | Present</p>
          <ul>
            <li>Assisting in instruction and grading for First-Year Florida course.</li>
            <li>Providing guidance on academic resources and professional development.</li>
          </ul>

          <h3>University of Florida - Department of Plant Pathology</h3>
          <p><em>Research Assistant</em> | Aug 2024 - Dec 2024</p>
          <ul>
            <li>Developed and implemented statistical and ecological models in <strong>RStudio</strong>.</li>
            <li>Contributed to research on rapid disease and pest risk assessment tools for crop production.</li>
          </ul>

          <h3>Orange County Public Works - Traffic Engineering</h3>
          <p><em>Student Intern</em> | May 2024 - Aug 2024</p>
          <ul>
            <li>Conducted data collection, asset management, and mapping with <strong>VBA</strong> and <strong>ArcGIS Pro</strong>.</li>
            <li>Assisted with citizen inquiries and departmental planning projects.</li>
          </ul>

          <h3>University of Florida - Classics Department</h3>
          <p><em>Undergraduate Research Assistant</em> | Jan 2024 - Jun 2024</p>
          <ul>
            <li>Collaborated on <strong>"Using AI to Trace the History of Race and (In)equality"</strong> with Dr. Eleni Bozia.</li>
            <li>Developed and applied <strong>Python-based NLP models</strong> for analyzing Ancient Greek and Latin texts.</li>
          </ul>

          <h3>University of Florida - College of Medicine</h3>
          <p><em>Undergraduate Research Assistant</em> | Jan 2024 - May 2024</p>
          <ul>
            <li>Conducted statistical analysis and literature review on <strong>meta-analysis methodologies</strong>.</li>
            <li>Investigated biases and limitations in research synthesis techniques.</li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="resume-section">
        <h2>CERTIFICATIONS</h2>
        <ul>
          <li>Adobe Premiere Pro Certified</li>
        </ul>
      </section>

      {/* Active Projects Section */}
      <section className="resume-section">
        <h2>ACTIVE PROJECTS</h2>
        <div className="projects">

          <h3>Low-Resource ASR Model</h3>
          <p><em>Jan 2025 - Present | Gainesville, FL</em></p>
          <ul>
            <li>Developing an <strong>automatic speech recognition (ASR) model</strong> optimized for low-resource languages.</li>
            <li>Training deep learning models using <strong>TensorFlow, PyTorch, and NLP techniques</strong> for speech-to-text conversion.</li>
            <li>Incorporating <strong>language models (LMs)</strong> to refine ASR outputs and improve performance in low-data environments.</li>
            <li>Preprocessing large-scale speech datasets and enhancing model accuracy through self-supervised learning techniques.</li>
          </ul>

          <h3>Markov’s Muse</h3>
          <p><em>Aug 2024 - Present | Gainesville, FL</em></p>
          <ul>
            <li>Developing a generative poetry and storytelling AI tool using Python and Markov Chains.</li>
            <li>Implementing dynamic word embeddings to enhance linguistic style variation.</li>
          </ul>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section className="resume-section">
        <h2>SKILLS & INTERESTS</h2>
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Python, C/C++, R, React, JavaScript, SQL, ESRI products, AutoCAD, PowerBI</li>
          </ul>
          <h3>Interests</h3>
          <ul>
            <li>Film, Reading, History, Fashion, Magic: The Gathering</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Resume;
