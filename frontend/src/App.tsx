import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import PersonalPage from './pages/personal/personal';
import ProfessionalPage from './pages/professional/professional';
import PublicationsPage from './pages/professional/publications';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Jen's World</h1>
        {/* Navigation links */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/personal">Personal</a></li>
            <li><a href="/professional">Professional</a></li>
          </ul>
        </nav>

        {/* Switch to render the correct page based on the URL */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<h2>Welcome to the React App!</h2>} />

          {/* Personal Page */}
          <Route path="/personal" element={<PersonalPage />} />

          {/* Professional Page */}
          <Route path="/professional" element={<ProfessionalPage />} />

          {/* Publications Page */}
          <Route path="/professional/publications" element={<PublicationsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
