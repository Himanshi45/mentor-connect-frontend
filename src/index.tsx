import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Get the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
