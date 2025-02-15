import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Use Link from React Router
import './PerProjects.css';
import CastleCamden from './pages_assets/ccmenu2.png';
import MenuWizard from './pages_assets/menuwizard.gif';

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
  gameLink?: string; // Link to game page
}

const projects: Project[] = [
  {
    name: 'Castle Camden',
    description: `Castle Camden is a side-scrolling platformer with a classic pixel-art aesthetic. Players journey through a mysterious fortress, uncovering hidden lore, battling enemies, and collecting treasures. This passion project pays tribute to my roommates and cat.`,
    link: 'https://github.com/jenniferklaman/CastleCamden',
    image: CastleCamden,
    gameLink: '/castle-camden-game',  // Link to the game
  },
  {
    name: 'Shower Party Trivia',
    description: `My roommates and I like to have shower parties and ask trivia questions.`,
    link: 'https://github.com/jenniferklaman/ShowerPartyTrivia',
    image: MenuWizard,
    gameLink: '/shower-party-trivia',  // Link to the trivia game
  },
  // Add more projects as needed
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PersonalProjects: React.FC = () => {
  const [loading, setLoading] = useState(true);

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
              {project.gameLink && (
                <Link to={project.gameLink} className="btn">
                  🎮 Play Game
                </Link>
              )}

              {project.link && (
                <Link to={project.link} className="btn">
                  🔍 See More
                </Link>
              )}
            </div>

            {project.image && <img src={project.image} alt={project.name} className="featured-project-img" />}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
