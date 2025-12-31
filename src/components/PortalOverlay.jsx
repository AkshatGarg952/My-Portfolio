import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";


const PortalOverlay = ({ onTimeStoneClick }) => {
  return (
    <svg className="portal-overlay" viewBox="0 0 455 549" xmlns="http://www.w3.org/2000/svg">
      {/* LEFT HAND PORTALS */}
      {/* About */}
      <Link to="/about" className="portal-link">
        <circle cx="145.145" cy="194.346" r="25" className="portal-circle"/>
        <line x1="145.145" y1="194.346" x2="80" y2="150" className="label-line"/>
        <polygon points="80,150 85,152 83,157" className="arrow-head"/>
        <text x="50" y="145" className="portal-label-svg">About</text>
      </Link>
      
      {/* Projects */}
      <Link to="/projects" className="portal-link">
        <circle cx="120.484" cy="267.692" r="25" className="portal-circle"/>
        <line x1="120.484" y1="267.692" x2="65" y2="267.692" className="label-line"/>
        <polygon points="65,267.692 70,265 70,270" className="arrow-head"/>
        <text x="35" y="272" className="portal-label-svg">Projects</text>
      </Link>
      
      {/* Skills */}
      <a href="/skills" className="portal-link">
        <circle cx="135.818" cy="343.674" r="25" className="portal-circle"/>
        <line x1="135.818" y1="343.674" x2="80" y2="385" className="label-line"/>
        <polygon points="80,385 85,383 83,388" className="arrow-head"/>
        <text x="50" y="400" className="portal-label-svg">Skills</text>
      </a>
      
      {/* RIGHT HAND PORTALS */}
      {/* Experience */}
      <Link to="/experience" className="portal-link">
        <circle cx="317.181" cy="213.012" r="25" className="portal-circle"/>
        <line x1="317.181" y1="213.012" x2="385" y2="170" className="label-line"/>
        <polygon points="385,170 380,172 382,177" className="arrow-head"/>
        <text x="395" y="160" className="portal-label-svg" textAnchor="start">Experience</text>
      </Link>
      
      {/* Contact */}
      <Link to="/contact" className="portal-link">
        <circle cx="341.842" cy="289.0" r="25" className="portal-circle"/>
        <line x1="341.842" y1="289.0" x2="397.326" y2="289.0" className="label-line"/>
        <polygon points="397.326,289 392.326,286.5 392.326,291.5" className="arrow-head"/>
        <text x="420" y="293" className="portal-label-svg" textAnchor="start">Contact</text>
      </Link>
      
      {/* Github */}
      <a href="https://github.com/AkshatGarg952" target="_blank" rel="noopener noreferrer" className="portal-link">
        <circle cx="323.824" cy="348.923" r="25" className="portal-circle"/>
        <line x1="323.824" y1="348.923" x2="379.824" y2="390.597" className="label-line"/>
        <polygon points="379.824,390.597 374.824,388.097 376.824,393.097" className="arrow-head"/>
        <text x="415" y="405" className="portal-label-svg" textAnchor="start">Github</text>
      </a>
      
      {/* TIME STONE */}
      <circle cx="230.503" cy="299.642" r="15" className="time-stone-circle" onClick={onTimeStoneClick} style={{ cursor: 'pointer' }}/>
    </svg>
  );
};

export default PortalOverlay;