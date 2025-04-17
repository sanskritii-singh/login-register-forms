import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import './App.css'; // ⬅️ include this for layout styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
