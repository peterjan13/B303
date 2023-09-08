import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Boostrap import
import 'bootstrap/dist/css/bootstrap.min.css';

// This is where React attaches the component to the root element in the index.html file.

// StrictMode react to be able to display and handle any errors/warning that may oocur
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);