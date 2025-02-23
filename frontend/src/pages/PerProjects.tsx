import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faGamepad } from "@fortawesome/free-solid-svg-icons";
import './PerProjects.css';
import CastleCamden from './pages_assets/ccmenu2.png';
import MenuWizard from './pages_assets/menuwizard.gif';
import MarkovsMuse from './pages_assets/MarkovsMuse.png';

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
  gameLink?: string;
}

const projects: Project[] = [
  {
    name: "Markov's Muse",
    description: `Castle Camden is a side-scrolling platformer with a classic pixel-art aesthetic. Players journey through a mysterious fortress, uncovering hidden lore, battling enemies, and collecting treasures. This passion project pays tribute to my roommates and cat.`,
    link: 'https://github.com/jenniferklaman/MarkovsMuse',
    image: MarkovsMuse,
    gameLink: '/castle-camden-game',
  },
  {
    name: 'Castle Camden',
    description: `Castle Camden is a side-scrolling platformer with a classic pixel-art aesthetic. Players journey through a mysterious fortress, uncovering hidden lore, battling enemies, and collecting treasures. This passion project pays tribute to my roommates and cat.`,
    link: 'https://github.com/jenniferklaman/CastleCamden',
    image: CastleCamden,
    gameLink: '/castle-camden-game',
  },
  {
    name: 'Shower Party Trivia',
    description: `My roommates and I like to have shower parties and ask trivia questions.`,
    link: 'https://github.com/jenniferklaman/ShowerPartyTrivia',
    image: MenuWizard,
    gameLink: '/sp-trivia',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const PersonalProjects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
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
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="project-content">
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              
              <div className="buttons-container">
                {project.gameLink && (
                  <Link to={project.gameLink} className="btn">
                    <FontAwesomeIcon icon={faGamepad} /> Play Game
                  </Link>
                )}

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> GitHub
                </a>
              </div>
            </div>

            {project.image && <img src={project.image} alt={project.name} className="featured-project-img" />}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
