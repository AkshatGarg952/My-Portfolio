// src/components/SuccessModal.jsx
import React from 'react';

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-black/80 backdrop-blur-xl border-2 border-primary rounded-3xl p-12 text-center max-w-md mx-4 shadow-[0_20px_60px_rgba(255,107,53,0.4)] scale-90 opacity-0 transition-all"
        style={{ animation: 'successPulse 0.4s ease-out forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-6 animate-success-pulse">Success</div>
        <h2 className="text-2xl font-cinzel text-accent mb-4 [text-shadow:0_0_15px_rgba(255,215,0,0.4)]">Message Sent Successfully!</h2>
        <p className="text-text-gray mb-8 leading-relaxed">Your mystical message has been delivered. I'll respond within 24 hours.</p>
        <button
          onClick={onClose}
          className="px-8 py-4 bg-gradient-to-br from-primary to-secondary rounded-xl text-white font-semibold uppercase tracking-wide transition-all hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(255,107,53,0.5)]"
        >
          Close
        </button>
      </div>
    </div>
  );
}