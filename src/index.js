import React from 'react';
import ReactDOM from 'react-dom/client';
// import './default.css';
import './custom.css';
import './styles.css';
import PortfolioApp from './PortfolioApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>
);

