import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';  // Updated to HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* Updated to HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
);
