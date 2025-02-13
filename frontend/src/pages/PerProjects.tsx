import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PerProjects.css';
import CastleCamden from './pages_assets/ccmenu2.png'

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
}

// project tiles
const projects: Project[] = [
  {
    name: 'Castle Camden',
    description: `Castle Camden is a side-scrolling platformer with a classic pixel-art aesthetic. 
    Players journey through a mysterious fortress, uncovering hidden lore, battling enemies, and collecting treasures. 
    This passion project that pays tribute to my roommates and cat. It's a slow process with this project...
    I bit off more than I can chew...again...`,
    link: 'https://github.com/jenniferklaman/CastleCamden',
    image: CastleCamden,
  },
  {
    name: 'Apple API',
    description: 'Filler description for project 2. Replace this with your project details later.',
    link: '/project2',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Shower Party Trivia',
    description: `My roommates and I will shower together, but it's just one person showering as the others ask trivia questions.
    Another personal project inspired by my roommates lol.`,
    link: 'https://github.com/jenniferklaman/ShowerPartyTrivia',
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

const PersonalProjects: React.FC = () => {
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


export default PersonalProjects;
