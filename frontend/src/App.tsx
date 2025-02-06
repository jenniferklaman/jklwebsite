import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; 

// import './styles.css'; // custom CSS file

const App = () => {
  // Initialize Materialize components like Modals, Dropdowns, etc.
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <nav className="blue">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Jen's World</a>
          <ul id="nav-mobile" className="left">
            <li><a href="#home">Home</a></li>
            <li><a href="#personal">Personal</a></li>
            <li><a href="#professional">Professional</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="section custom-section">
        <h2>Welcome to the React App!</h2>
        <p>This is a section of the page. You can add more content here.</p>

        {/* Example Button */}
        <a className="waves-effect waves-light btn">Click Me</a>
      </div>

      {/* Footer */}
      <footer className="page-footer blue">
        <div className="container">
          <p className="center-align">&copy; 2025 Jen's World</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
