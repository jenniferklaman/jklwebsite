import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "../public/materialize/css/materialize.min.css";
// import "../public/materialize/js/materialize.min.js";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
