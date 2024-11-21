import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: global styles or reset styles
import App from './App';  // Import the main App component
import reportWebVitals from './reportWebVitals';  // For performance measuring (optional)

// React 18 Syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
