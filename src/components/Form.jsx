import React from 'react';

const fields = [
  { key: 'name', label: 'Your Name', type: 'text' },
  { key: 'email', label: 'Your Email', type: 'email' },
  { key: 'subject', label: 'Subject', type: 'text' },
];

export default function Form({ formData, setFormData, errors, isSubmitting, handleSubmit, characterCount }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map(({ key, label, type }) => (
        <div key={key}>
          <label className="block text-xs uppercase tracking-wider text-muted mb-2">{label}</label>
          <input
            type={type}
            value={formData[key]}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
            className={`w-full p-4 bg-white/[0.03] border rounded-xl text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold/60 focus:bg-white/[0.05] transition-all ${
              errors[key] ? 'border-red-500/60' : 'border-white/10'
            }`}
            required
          />
          {errors[key] && <p className="text-red-400 text-xs mt-1.5">{errors[key]}</p>}
        </div>
      ))}

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-xs uppercase tracking-wider text-muted">Message</label>
          <span className={`text-xs ${characterCount < 50 ? 'text-red-400' : 'text-muted'}`}>
            {characterCount} left
          </span>
        </div>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 1000) })}
          className={`w-full p-4 bg-white/[0.03] border rounded-xl text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold/60 focus:bg-white/[0.05] transition-all min-h-32 resize-vertical ${
            errors.message ? 'border-red-500/60' : 'border-white/10'
          }`}
          maxLength={1000}
          required
        />
        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
        {isSubmitting && (
          <span className="inline-block w-4 h-4 border-2 border-transparent border-t-[#181206] rounded-full animate-spin" />
        )}
      </button>
    </form>
  );
}
