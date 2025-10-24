// src/pages/ContactPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import Form from '../components/Form';
import ContactInfo from '../components/ContactInfo';
import SuccessModal from '../components/SuccessModal';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [characterCount, setCharacterCount] = useState(1000);
  const formCardRef = useRef(null);

  useEffect(() => {
    setCharacterCount(1000 - formData.message.length);
  }, [formData.message]);

  // 3D Tilt Effect
  useEffect(() => {
    const card = formCardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    };

    const handleLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name.trim())) newErrors.name = 'Please enter a valid name (letters only, 2-50 characters)';
    if (!emailRegex.test(formData.email.trim())) newErrors.email = 'Please enter a valid email address';
    if (formData.subject.trim().length < 3) newErrors.subject = 'Subject must be at least 3 characters';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      createConfetti();
    }, 2000);
  };

  const createConfetti = () => {
    const colors = ['#ff6b35', '#f7931e', '#ffd700', '#8b5cf6', '#3b82f6'];
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        const c = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * 5)];
        c.style.cssText = `
          position:fixed; width:${size}px; height:${size}px; background:${color};
          top:-10px; left:${Math.random() * 100}%; opacity:1; z-index:10000;
          border-radius:${Math.random() > 0.5 ? '50%' : '0'};
          box-shadow:0 0 10px ${color}; pointer-events:none;
          transform:rotate(${Math.random() * 360}deg);
        `;
        document.body.appendChild(c);

        const duration = 2500 + Math.random() * 1500;
        const targetX = (Math.random() - 0.5) * 300;
        const targetY = window.innerHeight + 100;

        c.animate([
          { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
          { transform: `translate(${targetX}px, ${targetY}px) rotate(${Math.random() * 1080}deg)`, opacity: 0 }
        ], { duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });

        setTimeout(() => c.remove(), duration);
      }, i * 25);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">

      {/* Navbar */}
     <Navbar activePage={'Contact'} />

      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-50 bg-gradient-to-r from-primary to-transparent animate-orb-float" style={{ top: '-150px', left: '-150px' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-50 bg-gradient-to-r from-mystical-purple to-transparent animate-orb-float" style={{ bottom: '-100px', right: '-100px', animationDelay: '7s' }} />
        <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-mystical-blue to-transparent animate-orb-float" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '14s' }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              background: ['#ff6b35', '#8b5cf6', '#3b82f6', '#ffd700'][i % 4],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDelay: `${Math.random() * 15}s`,
              boxShadow: `0 0 ${Math.random() * 12}px currentColor`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-cinzel mb-4">
              <span className="text-accent [text-shadow:0_0_20px_rgba(255,215,0,0.6)] animate-text-glow">Summon</span>{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold bg-[length:200%_200%] animate-gradient-shift">The Sorcerer</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-underline-glow"></div>
            <p className="text-text-gray mt-4 text-lg">Ready to embark on a mystical journey together?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Form Card */}
            <div
              ref={formCardRef}
              className="bg-white/5 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl transition-all hover:shadow-primary/30"
            >
              <div className="absolute inset-0 -m-1 rounded-3xl bg-gradient-to-br from-primary via-mystical-purple to-mystical-blue opacity-0 blur-xl transition-opacity hover:opacity-60 animate-gradient-rotate -z-10"></div>
              <h2 className="text-3xl font-cinzel text-accent text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:shadow-accent">
                Cast Your Message
              </h2>
              <Form
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                characterCount={characterCount}
              />
            </div>

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </main>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}