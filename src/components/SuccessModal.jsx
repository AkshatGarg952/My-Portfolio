import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const id = setTimeout(() => buttonRef.current?.focus(), 80);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(id);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="alertdialog"
            aria-modal="true"
            aria-label="Message sent"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-w-md rounded-3xl p-9 text-center shadow-lift"
          >
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.12, type: 'spring', stiffness: 260, damping: 18 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-live/30 bg-live/10"
            >
              <Check size={28} className="text-live" />
            </motion.span>

            <h2 className="font-display text-fluid-xl text-ink">Message sent</h2>
            <p className="mt-3 text-fluid-sm leading-relaxed text-muted">
              Thanks for reaching out — I&rsquo;ll get back to you within 24 hours.
            </p>

            <button ref={buttonRef} onClick={onClose} className="btn-primary mt-8 w-full">
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
