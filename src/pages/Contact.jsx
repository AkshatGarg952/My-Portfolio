import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Form from '../components/Form.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import SuccessModal from '../components/SuccessModal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import useSpotlight from '../hooks/useSpotlight.js';

const EMAILJS = {
  service: 'service_aq08eu7',
  template: 'template_gdja99p',
  publicKey: 'hXP0shevj76dhxcVD',
};

const MAX_MESSAGE = 1000;
const empty = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  const [formData, setFormData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const spotlight = useSpotlight();

  const characterCount = MAX_MESSAGE - formData.message.length;

  // Clear a field's error as soon as the user starts fixing it.
  useEffect(() => {
    if (!Object.keys(errors).length) return;
    setErrors((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const key of Object.keys(next)) {
        if (formData[key]?.trim()) {
          delete next[key];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const validate = () => {
    const next = {};
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name.trim()))
      next.name = 'Please enter a valid name (2–50 characters).';
    if (!emailRegex.test(formData.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (formData.subject.trim().length < 3)
      next.subject = 'Subject must be at least 3 characters.';
    if (formData.message.trim().length < 10)
      next.message = 'Message must be at least 10 characters.';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS.publicKey
      );

      setFormData(empty);
      setShowSuccess(true);
      celebrate();
    } catch {
      // An inline message beats a native alert(), and it keeps what they typed.
      setSubmitError(
        "That didn't send — please try again, or email me directly at gargakshat952@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="shell pb-20 pt-28 sm:pt-32">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something"
        highlight="together"
        description="Hiring, collaborating, or just curious about something I've built? My inbox is genuinely open — I reply to everything."
      />

      <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-6">
        <Reveal>
          {/* No tilt effect here on purpose — a form that moves while you aim
              at its inputs is a worse form. */}
          <div className="card" {...spotlight}>
            <div className="card-body">
              <Form
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                isSubmitting={isSubmitting}
                submitError={submitError}
                handleSubmit={handleSubmit}
                characterCount={characterCount}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactInfo />
        </Reveal>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}

/** Confetti burst on a successful send. Skipped entirely for reduced motion. */
function celebrate() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#E8B961', '#F6DCA0', '#8C7CF0', '#4ADE80'];

  for (let i = 0; i < 56; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      const size = Math.random() * 9 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      piece.style.cssText = `
        position:fixed; width:${size}px; height:${size}px; background:${color};
        top:-12px; left:${Math.random() * 100}%; z-index:10000;
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        box-shadow:0 0 12px ${color}; pointer-events:none;
      `;
      document.body.appendChild(piece);

      const duration = 2400 + Math.random() * 1600;
      const animation = piece.animate(
        [
          { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
          {
            transform: `translate(${(Math.random() - 0.5) * 320}px, ${
              window.innerHeight + 120
            }px) rotate(${Math.random() * 1080}deg)`,
            opacity: 0,
          },
        ],
        { duration, easing: 'cubic-bezier(0.25,0.46,0.45,0.94)' }
      );

      // Tie cleanup to the animation instead of a second timer, so nothing is
      // left in the DOM if the tab is backgrounded mid-flight.
      animation.onfinish = () => piece.remove();
    }, i * 22);
  }
}
