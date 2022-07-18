import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { selfEsteem } from './selfEsteem';

const root = document.getElementById('root');

if (!root) throw new Error;

selfEsteem();

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)