import React, { useEffect, useRef, useState } from 'react';

const MysticalEffects = () => {
  const runesContainerRef = useRef(null);

  useEffect(() => {
    if (runesContainerRef.current) {
      const runesContainer = runesContainerRef.current;
      const runeSymbols = ['♦', '♦', '♦', '★', '★', '★', '⬡', '⬡'];
      const runePositions = [
        { top: '15%', left: '15%', delay: '0s' },
        { top: '15%', right: '15%', delay: '1s' },
        { top: '35%', left: '10%', delay: '2s' },
        { top: '35%', right: '10%', delay: '3s' },
        { top: '55%', left: '12%', delay: '1.5s' },
        { top: '55%', right: '12%', delay: '2.5s' },
        { top: '75%', left: '20%', delay: '0.5s' },
        { top: '75%', right: '20%', delay: '1.8s' }
      ];

      runePositions.forEach((pos, index) => {
        const rune = document.createElement('div');
        rune.className = 'rune';
        rune.textContent = runeSymbols[index % runeSymbols.length];
        Object.assign(rune.style, pos);
        rune.style.animationDelay = pos.delay;
        runesContainer.appendChild(rune);
      });
    }
  }, []);

  return (
    <>
      <div className="mystical-runes" ref={runesContainerRef} />
      
      <div className="cloak-overlay">
        <div className="cloak-wave left" />
        <div className="cloak-wave right" />
      </div>

      <div className="spell-symbol" style={{ top: '40%', left: '20%', animationDelay: '0s' }}>♦</div>
      <div className="spell-symbol" style={{ top: '35%', left: '25%', animationDelay: '1s' }}>♦</div>
      <div className="spell-symbol" style={{ top: '40%', right: '20%', animationDelay: '0.5s' }}>★</div>
      <div className="spell-symbol" style={{ top: '35%', right: '25%', animationDelay: '1.5s' }}>♦</div>
      <div className="spell-symbol" style={{ top: '50%', left: '18%', animationDelay: '2s' }}>★</div>
      <div className="spell-symbol" style={{ top: '50%', right: '18%', animationDelay: '2.5s' }}>★</div>

      <div className="mandala-glow" />
    </>
  );
};

export default MysticalEffects;