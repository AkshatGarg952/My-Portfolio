import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import ContactPage from './pages/Contact.jsx';
function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}


export default App; 