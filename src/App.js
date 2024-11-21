import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplicationForm from './pages/ApplicationForm';
import Login from './components/login'; // Adjust path if needed
import Signup from './components/signup'; // Adjust path if needed
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/login" element={<Login />} /> {/* Add Login Route */}
          <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
