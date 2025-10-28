import React, { useEffect, useRef, useState } from 'react';

// Background Effects Component
const BackgroundEffects = () => {
  const starsContainerRef = useRef(null);
  const nebulaContainerRef = useRef(null);
  const kaleidoscopeContainerRef = useRef(null);
  const energyStreamsContainerRef = useRef(null);
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    // Stars generation
    if (starsContainerRef.current) {
      const starsContainer = starsContainerRef.current;
      for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const size = Math.random() * 2.5;
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(s);
      }
    }

    // Nebula generation
    if (nebulaContainerRef.current) {
      const nebulaContainer = nebulaContainerRef.current;
      const nebulaColors = ['rgba(255, 140, 0, 0.2)', 'rgba(138, 43, 226, 0.2)', 'rgba(0, 191, 255, 0.15)'];
      for (let i = 0; i < 3; i++) {
        const blob = document.createElement('div');
        blob.className = 'nebula-blob';
        blob.style.width = (150 + Math.random() * 200) + 'px';
        blob.style.height = blob.style.width;
        blob.style.background = nebulaColors[i % nebulaColors.length];
        blob.style.left = Math.random() * 100 + '%';
        blob.style.top = Math.random() * 100 + '%';
        blob.style.animationDelay = Math.random() * 10 + 's';
        blob.style.animationDuration = (20 + Math.random() * 15) + 's';
        nebulaContainer.appendChild(blob);
      }
    }

    // Kaleidoscope fractals
    if (kaleidoscopeContainerRef.current) {
      const kaleidoscopeContainer = kaleidoscopeContainerRef.current;
      const fractalColors = [
        'radial-gradient(circle, rgba(255, 140, 0, 0.3), transparent)',
        'radial-gradient(circle, rgba(138, 43, 226, 0.3), transparent)'
      ];
      for (let i = 0; i < 8; i++) {
        const fractal = document.createElement('div');
        fractal.className = 'fractal-shape';
        fractal.style.width = (50 + Math.random() * 120) + 'px';
        fractal.style.height = fractal.style.width;
        fractal.style.background = fractalColors[i % fractalColors.length];
        fractal.style.left = Math.random() * 100 + '%';
        fractal.style.top = Math.random() * 100 + '%';
        fractal.style.animationDelay = Math.random() * 10 + 's';
        fractal.style.animationDuration = (15 + Math.random() * 15) + 's';
        kaleidoscopeContainer.appendChild(fractal);
      }
    }

    // Energy streams
    if (energyStreamsContainerRef.current) {
      const energyStreamsContainer = energyStreamsContainerRef.current;
      for (let i = 0; i < 6; i++) {
        const stream = document.createElement('div');
        stream.className = 'energy-stream';
        stream.style.left = (i * 16.6) + '%';
        stream.style.animationDelay = (i * 1.5) + 's';
        stream.style.animationDuration = (12 + Math.random() * 8) + 's';
        energyStreamsContainer.appendChild(stream);
      }
    }

    // Floating particles
    if (particlesContainerRef.current) {
      const particlesContainer = particlesContainerRef.current;
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 6 + 's';
        p.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(p);
      }
    }
  }, []);

  return (
    <>
      <div className="mirror-dimension" />
      <div className="mandala-layer">
        <div className="mandala" />
      </div>
      <div className="kaleidoscope" ref={kaleidoscopeContainerRef} />
      <div className="mirror-tiles" />
      <div className="cosmic-nebula" ref={nebulaContainerRef} />
      <div ref={energyStreamsContainerRef} />
      <div className="stars" ref={starsContainerRef} />
      <div ref={particlesContainerRef} />
    </>
  );
};

export default BackgroundEffects;