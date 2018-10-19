// Node Modules
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Css
import './stylesheets/main.css';

// Components
import App from './ui';

const BrowserApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Render Method
render(<BrowserApp />, document.getElementById('app'));
