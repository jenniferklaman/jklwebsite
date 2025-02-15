import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+

import './PerProjects.css';
import CastleCamden from './pages_assets/ccmenu2.png';
import SPTrivia from './SPTrivia'; // Import TriviaGame
//help tom please

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
  gameLink?: string;
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
    gameLink: '/castle-camden-game',  // Add a link to the game
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
    gameLink: '/shower-party-trivia',  // Add a link to the trivia game
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

// Function to open trivia game in a new window
const openTriviaGame = () => {
  const triviaWindow = window.open(
    '',
    '_blank',
    'width=600,height=600,scrollbars=yes,resizable=yes'
  );

  if (triviaWindow) {
     // Write the trivia game content into the new window
     triviaWindow.document.write('<html><head>');
     triviaWindow.document.write('<title>Trivia Game</title>');
 
     // Link to the SPTrivia.css
     triviaWindow.document.write('<link rel="stylesheet" href="./SPTrivia.css">'); 
 
     triviaWindow.document.write('</head><body>');
     triviaWindow.document.write('<div id="root"></div>'); // This is where the game will mount
     triviaWindow.document.write('</body></html>');
     triviaWindow.document.close(); // Ensure the document is fully loaded before trying to render the game
 

    // Re-render the game into the new window
    const rootElement = triviaWindow.document.getElementById('root');
    if (rootElement) {
      const triviaRoot = ReactDOM.createRoot(rootElement); // Correct for React 18
      triviaRoot.render(<SPTrivia />);
    }
  }
};

const PersonalProjects: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeGame, setActiveGame] = useState<string | null>(null); // State to track active game

  // Simulate a loading delay to trigger CSS animations
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle game toggle
  const handleGameToggle = (gameName: string) => {
    setActiveGame((prev) => (prev === gameName ? null : gameName)); // Toggle the game visibility
  };

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

              {/* Button to toggle game visibility */}
              {project.gameLink && (
                <button onClick={openTriviaGame} className="btn">
                  🎮 Play Game
                </button>
              )}
            </div>

            {project.image && <img src={project.image} alt={project.name} className="featured-project-img" />}
          </motion.section>
        ))}
      </div>

      {/* Conditionally render the active game */}
      {activeGame === 'Shower Party Trivia' && <SPTrivia />} {/* Render the trivia game if it's active */}
      {activeGame === 'Castle Camden' && <SPTrivia />} {/* Render Castle Camden game if it's active */}
    </div>
  );
};

export default PersonalProjects;
