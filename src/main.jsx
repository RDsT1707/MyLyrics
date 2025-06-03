import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // si tu veux des styles globaux ou resets CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
