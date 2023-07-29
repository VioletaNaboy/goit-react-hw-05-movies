import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </StrictMode>
);
