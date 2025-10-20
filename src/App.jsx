import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}


export default App; 