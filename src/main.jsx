import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';
import './assets/styles/animations.css';
import 'leaflet/dist/leaflet.css';

// Import fonts (add these to your index.html or use @font-face in CSS)
//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);