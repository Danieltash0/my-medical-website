import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './global.css';
import AppRouter from './Approuter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppRouter/>
  </React.StrictMode>
);

reportWebVitals();
