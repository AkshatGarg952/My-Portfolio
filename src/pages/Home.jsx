import React, { useEffect, useRef, useState } from 'react';
import BackgroundEffects from '../components/BackgroundEffects.jsx';
import CursorCanvas from '../components/CursorCanvas.jsx';
import PortalOverlay from '../components/PortalOverlay.jsx';
import MysticalEffects from '../components/MysticalEffects.jsx';

function Home() {
  const [isTimeRewind, setIsTimeRewind] = useState(false);
  const imageContainerRef = useRef(null);

  const handleTimeStoneClick = () => {
    setIsTimeRewind(true);
    setTimeout(() => {
      setIsTimeRewind(false);
    }, 3000);
  };

  useEffect(() => {
    const imgContainer = imageContainerRef.current;
    const container = document.querySelector('.container');

    const handleMouseMove = (e) => {
      if (!container || !imgContainer) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * 15;
      const rotateX = -y * 15;
      imgContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={isTimeRewind ? 'time-rewind' : ''}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a0a0f 0%, #0f0505 50%, #1a0808 100%);
          color: #fff;
          transition: filter 2s ease;
        }

        body.time-rewind {
          filter: hue-rotate(120deg) brightness(0.8) saturate(1.5);
          animation: timeDistortion 3s ease-in-out;
        }

        @keyframes timeDistortion {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.98); }
        }

        .time-rewind * {
          animation-play-state: paused !important;
        }

        .mirror-dimension {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: linear-gradient(135deg, #1a0a0f 0%, #0f0505 50%, #1a0808 100%);
          animation: dimensionShift 25s ease-in-out infinite;
        }

        @keyframes dimensionShift {
          0%, 100% { transform: scale(1) rotate(0deg); filter: hue-rotate(0deg); }
          33% { transform: scale(1.05) rotate(1deg); filter: hue-rotate(15deg); }
          66% { transform: scale(0.95) rotate(-1deg); filter: hue-rotate(-15deg); }
        }

        .mandala-layer {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 150%;
          height: 150%;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
          opacity: 0.08;
        }

        .mandala {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 140, 0, 0.1) 2deg, transparent 4deg, rgba(138, 43, 226, 0.1) 6deg, transparent 8deg);
          animation: mandalaRotate 60s linear infinite;
        }

        @keyframes mandalaRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .kaleidoscope {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.12;
          mix-blend-mode: screen;
        }

        .fractal-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          animation: fractalFloat 20s ease-in-out infinite;
        }

        @keyframes fractalFloat {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(50px, -50px) scale(1.2) rotate(90deg); opacity: 0.6; }
          50% { transform: translate(-30px, 40px) scale(0.8) rotate(180deg); opacity: 0.4; }
          75% { transform: translate(40px, 30px) scale(1.1) rotate(270deg); opacity: 0.5; }
        }

        .mirror-tiles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.04;
          background-image: linear-gradient(30deg, rgba(255, 140, 0, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 140, 0, 0.1) 87.5%), linear-gradient(150deg, rgba(255, 140, 0, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 140, 0, 0.1) 87.5%);
          background-size: 80px 140px;
          animation: tilesShift 40s linear infinite;
        }

        @keyframes tilesShift {
          0% { transform: scale(1); }
          50% { transform: scale(1.1) rotate(2deg); }
          100% { transform: scale(1); }
        }

        .energy-stream {
          position: fixed;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, rgba(255, 140, 0, 0.3), rgba(138, 43, 226, 0.3), transparent);
          z-index: 0;
          pointer-events: none;
          animation: streamFlow 15s ease-in-out infinite;
          filter: blur(1px);
        }

        @keyframes streamFlow {
          0%, 100% { transform: translateY(-100%) scaleY(1); opacity: 0.3; }
          50% { transform: translateY(100%) scaleY(1.5); opacity: 0.6; }
        }

        .cosmic-nebula {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.15;
        }

        .nebula-blob {
          position: absolute;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          filter: blur(60px);
          animation: nebulaMorph 25s ease-in-out infinite;
        }

        @keyframes nebulaMorph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(30px, -30px) rotate(90deg) scale(1.1); }
          50% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; transform: translate(-20px, 40px) rotate(180deg) scale(0.9); }
          75% { border-radius: 30% 70% 60% 40% / 50% 60% 40% 50%; transform: translate(40px, 20px) rotate(270deg) scale(1.05); }
        }

        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .star {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .particle {
          position: fixed;
          width: 3px;
          height: 3px;
          background: #ff8c00;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
          25% { transform: translateY(-40px) translateX(30px) scale(1.5); opacity: 1; }
          50% { transform: translateY(-20px) translateX(-20px) scale(1); opacity: 0.8; }
          75% { transform: translateY(-60px) translateX(40px) scale(1.3); opacity: 0.9; }
        }

        .container {
          display: flex;
          height: 100vh;
          position: relative;
          z-index: 2;
          align-items: center;
          padding: 0 50px;
          perspective: 1000px;
        }

        .left-section {
          flex: 1;
          padding-left: 20px;
          padding-right: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transform-style: preserve-3d;
          margin-top: -8vh;
          opacity: 0;
          animation: slideInFromLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-100px) translateY(50px); }
          100% { opacity: 1; transform: translateX(0) translateY(0); }
        }

        .name {
          font-size: clamp(3.5rem, 7vw, 6rem);
          font-weight: bold;
          background: linear-gradient(135deg, #ffa500, #ff6b35, #f7931e);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5vh;
          line-height: 1.1;
          opacity: 0;
          animation: slideInFromLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards, gradientShift 4s ease 1.2s infinite;
        }

        .title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: bold;
          color: #ffa500;
          margin-bottom: 2.5vh;
          line-height: 1.2;
          text-shadow: 0 0 20px rgba(255, 140, 0, 0.5);
          opacity: 0;
          animation: slideInFromLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
        }

        .description {
          font-size: clamp(1.3rem, 2.2vw, 1.8rem);
          line-height: 1.7;
          color: #d4d4d4;
          max-width: 650px;
          opacity: 0;
          animation: slideInFromLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .right-section {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          margin-top: -2vh;
          opacity: 0;
          animation: slideInFromRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }

        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(100px) translateY(50px) scale(0.8); }
          100% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
        }

        .image-container {
          position: relative;
          width: min(950px, 55vw);
          height: min(90vh, 1050px);
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }

        .strange-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 0 50px rgba(255, 140, 0, 0.4));
          transition: transform 0.3s ease;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          display: block;
        }

        .portal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .portal-link {
          pointer-events: all;
          cursor: pointer;
          outline: none;
        }

        .portal-circle {
          fill: transparent;
          stroke: transparent;
          stroke-width: 0;
          transition: all 0.3s ease;
        }

        .portal-link:hover .portal-circle {
          fill: rgba(255, 140, 0, 0.25);
          stroke: rgba(255, 140, 0, 1);
          stroke-width: 3;
          filter: drop-shadow(0 0 30px rgba(255, 140, 0, 0.9));
        }

        .portal-label-svg {
          fill: #ffa500;
          font-size: 14px;
          font-weight: bold;
          text-anchor: middle;
          pointer-events: none;
          opacity: 1;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          filter: drop-shadow(0 0 3px rgba(255, 140, 0, 0.6));
        }

        .portal-link:hover .portal-label-svg {
          fill: #ffb700;
          filter: drop-shadow(0 0 8px rgba(255, 140, 0, 1));
        }

        .label-line {
          stroke: #ffa500;
          stroke-width: 1.5;
          fill: none;
          pointer-events: none;
          opacity: 1;
          stroke-dasharray: 3, 3;
        }

        .portal-link:hover .label-line {
          stroke: #ffb700;
          stroke-width: 2;
          filter: drop-shadow(0 0 4px rgba(255, 140, 0, 0.8));
        }

        .arrow-head {
          fill: #ffa500;
          pointer-events: none;
        }

        .portal-link:hover .arrow-head {
          fill: #ffb700;
        }

        .time-stone-circle {
          fill: transparent;
          stroke: rgba(138, 43, 226, 0.6);
          stroke-width: 2;
          cursor: pointer;
          pointer-events: all;
          transition: all 0.3s ease;
          animation: stoneGlow 2s ease-in-out infinite;
        }

        @keyframes stoneGlow {
          0%, 100% { stroke: rgba(138, 43, 226, 0.6); filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.4)); }
          50% { stroke: rgba(138, 43, 226, 1); filter: drop-shadow(0 0 25px rgba(138, 43, 226, 0.8)); }
        }

        .time-stone-circle:hover {
          fill: rgba(138, 43, 226, 0.2);
          stroke: rgba(138, 43, 226, 1);
          filter: drop-shadow(0 0 35px rgba(138, 43, 226, 1)) !important;
        }

        .mystical-runes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 3;
        }

        .rune {
          position: absolute;
          width: 60px;
          height: 60px;
          font-size: 40px;
          color: #ffa500;
          text-shadow: 0 0 20px rgba(255, 165, 0, 0.8);
          animation: runeFloat 8s ease-in-out infinite, runeRotate 10s linear infinite;
          opacity: 0.6;
          transition: all 0.4s ease;
        }

        .rune:hover {
          opacity: 1;
          transform: scale(1.3) !important;
          text-shadow: 0 0 40px rgba(255, 165, 0, 1);
        }

        @keyframes runeFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-25px) translateX(15px); }
        }

        @keyframes runeRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spell-symbol {
          position: absolute;
          font-size: 24px;
          color: #ffa500;
          opacity: 0;
          pointer-events: none;
          animation: symbolAppear 5s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(255, 140, 0, 0.8);
        }

        @keyframes symbolAppear {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.5) rotate(0deg); }
          20% { opacity: 1; transform: translateY(-20px) scale(1) rotate(180deg); }
          80% { opacity: 1; transform: translateY(-40px) scale(1) rotate(360deg); }
        }

        .mandala-glow {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 250px;
          background: radial-gradient(ellipse, rgba(255, 140, 0, 0.4), rgba(255, 107, 53, 0.2), transparent);
          animation: mandalaGlow 3s ease-in-out infinite;
          pointer-events: none;
          filter: blur(20px);
          z-index: 1;
        }

        @keyframes mandalaGlow {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.15); }
        }

        .cloak-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 3;
        }

        .cloak-wave {
          position: absolute;
          width: 150px;
          height: 200px;
          background: linear-gradient(90deg, transparent, rgba(139, 0, 0, 0.3), transparent);
          animation: cloakFlutter 3s ease-in-out infinite;
          filter: blur(5px);
        }

        .cloak-wave.left { left: 25%; top: 40%; }
        .cloak-wave.right { right: 25%; top: 40%; }

        @keyframes cloakFlutter {
          0%, 100% { transform: translateX(0) skewX(0deg); opacity: 0.6; }
          25% { transform: translateX(-10px) skewX(-5deg); opacity: 0.8; }
          50% { transform: translateX(5px) skewX(3deg); opacity: 0.7; }
          75% { transform: translateX(-5px) skewX(-3deg); opacity: 0.8; }
        }

        @media (max-width: 1920px) and (min-width: 1400px) {
          .container { padding: 0 40px; }
          .name { font-size: clamp(5rem, 5.5vw, 6rem); }
          .title { font-size: clamp(3.5rem, 4vw, 4rem); }
          .description { font-size: clamp(1.6rem, 1.8vw, 1.8rem); }
          .image-container { width: min(1000px, 56vw); height: min(92vh, 1100px); }
        }

        @media (max-width: 1400px) and (min-width: 1200px) {
          .container { padding: 0 30px; }
          .name { font-size: clamp(4.5rem, 5.5vw, 5.5rem); }
          .title { font-size: clamp(3.2rem, 3.8vw, 3.8rem); }
          .description { font-size: clamp(1.5rem, 1.7vw, 1.7rem); }
          .image-container { width: min(850px, 52vw); height: min(88vh, 950px); }
        }

        @media (max-width: 1200px) and (min-width: 1024px) {
          .container { flex-direction: row; padding: 20px 30px; gap: 2vh; }
          .left-section { text-align: left; padding: 10px; margin-bottom: 0; margin-top: -4vh; }
          .name { font-size: clamp(5rem, 6vw, 6rem); }
          .title { font-size: clamp(3.5rem, 4.2vw, 4.2rem); }
          .description { font-size: clamp(1.6rem, 1.9vw, 1.9rem); max-width: 100%; }
          .image-container { width: min(750px, 50vw); height: min(84vh, 850px); }
          .right-section { margin-top: 0; }
        }

        @media (max-width: 1024px) and (min-width: 768px) and (orientation: landscape) {
          .container { flex-direction: row; padding: 0 35px; }
          .left-section { text-align: left; margin-top: -5vh; }
          .name { font-size: clamp(4.5rem, 5.5vw, 5.5rem); }
          .title { font-size: clamp(3.2rem, 4vw, 4rem); }
          .description { font-size: clamp(1.5rem, 1.8vw, 1.8rem); }
          .image-container { width: min(700px, 52vw); height: min(85vh, 850px); }
        }

        @media (max-width: 1024px) and (min-width: 768px) and (orientation: portrait) {
          .container { flex-direction: column; padding: 20px 40px; gap: 2vh; }
          .left-section { text-align: center; margin-top: -3vh; }
          .name { font-size: clamp(5rem, 6.5vw, 6.5rem); }
          .title { font-size: clamp(3.8rem, 4.8vw, 4.8rem); }
          .description { font-size: clamp(1.7rem, 2.1vw, 2.1rem); }
          .image-container { width: min(800px, 85vw); height: min(68vh, 850px); }
        }

        @media (max-width: 768px) and (min-width: 600px) {
          .container { flex-direction: column; padding: 15px 25px; gap: 1.5vh; }
          .left-section { text-align: center; margin-top: -3vh; }
          .name { font-size: clamp(4rem, 6vw, 5rem); }
          .title { font-size: clamp(2.8rem, 4.2vw, 3.5rem); }
          .description { font-size: clamp(1.4rem, 2vw, 1.7rem); }
          .image-container { width: min(600px, 88vw); height: min(62vh, 700px); }
          .right-section { margin-top: 0; }
        }

        @media (max-width: 600px) and (min-width: 480px) {
          .container { flex-direction: column; padding: 12px 20px; gap: 1vh; }
          .left-section { margin-top: -2.5vh; }
          .name { font-size: clamp(3.5rem, 7vw, 4.2rem); }
          .title { font-size: clamp(2.5rem, 5.5vw, 3rem); }
          .description { font-size: clamp(1.2rem, 2.5vw, 1.5rem); line-height: 1.6; }
          .image-container { width: 90vw; height: min(58vh, 600px); }
        }

        @media (max-width: 480px) {
          .container { flex-direction: column; padding: 10px 15px; }
          .left-section { margin-top: -2vh; }
          .name { font-size: clamp(3rem, 8vw, 3.8rem); }
          .title { font-size: clamp(2.2rem, 6vw, 2.8rem); }
          .description { font-size: clamp(1.1rem, 3vw, 1.4rem); line-height: 1.6; }
          .image-container { width: 94vw; height: min(56vh, 550px); }
        }
      `}</style>

      <BackgroundEffects />
      <CursorCanvas />

      <div className="container">
        <div className="left-section">
          <div className="name">Akshat Garg</div>
          <div className="title">Full Stack Developer</div>
         <div className="description">
  A Full-Stack Developer building clean, reliable web applications
  from end to end.
</div>

        </div>

        <div className="right-section">
          <div className="image-container" ref={imageContainerRef}>
            <img 
              src="https://res.cloudinary.com/dnd6asdiw/image/upload/v1761976776/Doctor-Strange_juvrr7.png" 
              alt="Doctor Strange" 
              className="strange-image" 
            />

            <PortalOverlay onTimeStoneClick={handleTimeStoneClick} />
            <MysticalEffects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;