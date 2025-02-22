import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProfProjects.css';
// import ProtoLang from './pages_assets/ProtoLang.png';
import ASRModel from './pages_assets/ASR.jpg';

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
}

// Updated projects from the front page
const projects: Project[] = [
  {
    name: "ProtoLang",
    description: `A linguistic tool for prototyping new language systems and exploring 
    morphological patterns. ProtoLang allows users to simulate phoneme evolution and track sound shifts 
    across various linguistic branches.`,
    link: 'https://github.com/jenniferklaman/ProtoLang',
    // image: ProtoLang,
  },
  {
    name: "ASR with CompLing @ UF",
    description: `An experimental Automatic Speech Recognition system developed with UF's Computational Linguistics Lab.
    This model is designed to improve low-resource speech recognition using advanced NLP techniques.`,
    link: 'https://github.com/jenniferklaman/ASR-Model',
    image: ASRModel,
  },
];

// Define a fadeIn animation for smooth transitions
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Helper function to check if a link is external
const isExternalLink = (url: string) => url.startsWith('http');

const ProfessionalProjects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay for animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="professional-projects">
      <h1>Professional Projects</h1>
      <div className="tiles-wrapper">
        {projects.map((project, index) => (
          <motion.section
            key={index}
            className={`featured-project-box ${loading ? 'loading-animation' : ''}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="featured-project-text">
              <h2>{project.name}</h2>
              <p>{project.description}</p>

              {/* Conditionally render external or internal link */}
              {isExternalLink(project.link) ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  Explore Project
                </a>
              ) : (
                <Link to={project.link} className="btn">
                  Explore Project
                </Link>
              )}
            </div>

            {project.image && (
              <img src={project.image} alt={project.name} className="featured-project-img" />
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjects;
