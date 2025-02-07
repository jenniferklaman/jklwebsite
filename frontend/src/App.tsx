import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header with navigation links */}
      <header>
        <a href="#home" className="logo">Jen's World</a>
        <nav className="header-nav">
          <a href="#home" className="active">Home</a>
          <a href="#personal">Personal</a>
          <a href="#professional">Professional</a>
        </nav>
      </header>

      {/* Main content section */}
      <div className="main-content">
        <h2>Welcome to the React App!</h2>
        <p>This is a section of the page. You can add more content here.</p>
        <button>
          <i className="fas fa-heart"></i> CLICK ME
        </button>
      </div>

      {/* Footer section */}
      <footer>
        <p>© 2025 Jen's World</p>
      </footer>
    </div>
  );
};

export default App;
