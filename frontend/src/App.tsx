import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Jen's World</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#personal">Personal</a>
            <a href="#professional">Professional</a>
          </nav>
        </div>
      </header>

      <div className="main-content">
        <h2>Welcome to the React App!</h2>
        <p>This is a section of the page. You can add more content here.</p>
        <button>
          <i className="fas fa-heart"></i> CLICK ME
        </button>
      </div>

      <footer>
        <p>© 2025 Jen's World</p>
      </footer>
    </div>
  );
};

export default App;
