import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/About.jsx';
import Projects from './pages/Projects.jsx';


function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}


export default App; 