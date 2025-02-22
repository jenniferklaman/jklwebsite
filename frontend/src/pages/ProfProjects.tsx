import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import './ProfProjects.css';

interface Project {
  name: string;
  description: string;
  link: string;
}

// Updated projects from the front page
const projects: Project[] = [
  {
    name: "ProtoLang",
    description: `A linguistic tool for prototyping new language systems and exploring 
    morphological patterns. ProtoLang allows users to simulate phoneme evolution and track sound shifts 
    across various linguistic branches.`,
    link: 'https://github.com/jenniferklaman/ProtoLang',
  },
  {
    name: "ASR with CompLing @ UF",
    description: `An experimental Automatic Speech Recognition system developed with UF's Computational Linguistics Lab.
    This model is designed to improve low-resource speech recognition using advanced NLP techniques.`,
    link: 'https://github.com/jenniferklaman/ASR-Model',
  },
];

// Define a fadeIn animation for smooth transitions
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ProfessionalProjects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay for animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="professional-projects">
      <h1>Projects</h1>
      <div className="tiles-wrapper">
        {projects.map((project, index) => (
          <motion.section
            key={index}
            className={`featured-project-box ${loading ? 'loading-animation' : ''}`}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="project-link-icon" />
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjects;
