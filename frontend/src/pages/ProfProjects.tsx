import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProfProjects.css';
import MarkovsMuse from './pages_assets/MarkovsMuse.png'

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
}

// Example projects with filler content
const projects: Project[] = [
  {
    name: 'Markov\'s Muse',
    description: `Markov\'s Muse is a creative experiment that uses Markov chains to transform simple text
    inputs into unexpected and inspiring outputs. I wanted to combine my love of poetry and interest in statistics. 
    I'm aware about how this kind of cheapens art. This project is just for my entertainment and to show whatever future employer 
    that I LOVE MATH. Feel free to add to this on GitHub!`,
    link: 'https://github.com/jenniferklaman/MarkovsMuse',
    image: MarkovsMuse,
  },
  {
    name: 'Filler Project Title 2',
    description: 'Filler description for project 2. Replace this with your project details later.',
    link: '/project2',
    image: 'https://via.placeholder.com/300x200',
  },
  // Add more projects as needed
];

// Define a simple fadeIn animation variant for framer-motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// A small helper function to detect external links
const isExternalLink = (url: string) => url.startsWith('http');

const ProfessionalProjects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay to trigger CSS animations
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="personal-projects">
      <h1>Personal Projects</h1>
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

              {/* Conditionally render a Link or an anchor */}
              {isExternalLink(project.link) ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  🔍 Explore Project
                </a>
              ) : (
                <Link to={project.link} className="btn">
                  🔍 Explore Project
                </Link>
              )}
            </div>

            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="featured-project-img"
              />
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
};


export default ProfessionalProjects;
