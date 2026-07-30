import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Form from '../components/Form.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import SuccessModal from '../components/SuccessModal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

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

  useEffect(() => {
    const card = formCardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (rect.height / 2 - y) / 45;
      const rotateY = (x - rect.width / 2) / 45;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_aq08eu7',
        'template_gdja99p',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'hXP0shevj76dhxcVD'
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowSuccess(true);
      createConfetti();
    } catch (err) {
      alert('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const createConfetti = () => {
    const colors = ['#E4B65A', '#F3D48C', '#8C7CF0'];
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        const c = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
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

        c.animate(
          [
            { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${targetX}px, ${targetY}px) rotate(${Math.random() * 1080}deg)`, opacity: 0 },
          ],
          { duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
        );

        setTimeout(() => c.remove(), duration);
      }, i * 25);
    }
  };

  return (
    <main className="pt-32 pb-20 section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          highlight="great"
          description="Have a role, a project, or just want to say hi? My inbox is open."
        />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div ref={formCardRef} className="glass rounded-3xl p-8 transition-transform duration-300 ease-out">
            <Form
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              characterCount={characterCount}
            />
          </div>

          <ContactInfo />
        </div>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}
