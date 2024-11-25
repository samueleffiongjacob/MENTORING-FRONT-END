import '@fontsource/inter/900.css'; // Only the 900 weight
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './utils/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);