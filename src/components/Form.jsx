import { Send, Loader2 } from 'lucide-react';

const fields = [
  { key: 'name', label: 'Your name', type: 'text', placeholder: 'Ada Lovelace', autoComplete: 'name' },
  { key: 'email', label: 'Your email', type: 'email', placeholder: 'ada@company.com', autoComplete: 'email' },
  { key: 'subject', label: 'Subject', type: 'text', placeholder: 'Backend role at …', autoComplete: 'off' },
];

const inputBase =
  'w-full rounded-xl border bg-white/[0.025] px-4 py-3.5 text-fluid-sm text-ink transition-all duration-300 placeholder:text-faint focus:bg-white/[0.05] focus:outline-none';

export default function Form({
  formData,
  setFormData,
  errors,
  isSubmitting,
  submitError,
  handleSubmit,
  characterCount,
}) {
  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {fields.map(({ key, label, type, placeholder, autoComplete }) => {
        const invalid = Boolean(errors[key]);
        return (
          <div key={key}>
            <label
              htmlFor={`field-${key}`}
              className="mb-2 block font-mono text-fluid-xs uppercase tracking-[0.15em] text-muted"
            >
              {label}
            </label>
            <input
              id={`field-${key}`}
              name={key}
              type={type}
              value={formData[key]}
              onChange={update(key)}
              placeholder={placeholder}
              autoComplete={autoComplete}
              aria-invalid={invalid}
              aria-describedby={invalid ? `error-${key}` : undefined}
              className={`${inputBase} ${
                invalid
                  ? 'border-red-500/60 focus:border-red-500'
                  : 'border-white/10 focus:border-gold/60'
              }`}
            />
            {invalid && (
              <p id={`error-${key}`} role="alert" className="mt-1.5 text-fluid-xs text-red-400">
                {errors[key]}
              </p>
            )}
          </div>
        );
      })}

      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <label
            htmlFor="field-message"
            className="font-mono text-fluid-xs uppercase tracking-[0.15em] text-muted"
          >
            Message
          </label>
          <span
            className={`font-mono text-fluid-xs ${
              characterCount < 50 ? 'text-red-400' : 'text-faint'
            }`}
          >
            {characterCount} left
          </span>
        </div>
        <textarea
          id="field-message"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value.slice(0, 1000) })
          }
          placeholder="What are you building, and where would I fit?"
          maxLength={1000}
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
          className={`${inputBase} min-h-32 resize-y ${
            errors.message
              ? 'border-red-500/60 focus:border-red-500'
              : 'border-white/10 focus:border-gold/60'
          }`}
        />
        {errors.message && (
          <p id="error-message" role="alert" className="mt-1.5 text-fluid-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {submitError && (
        <p
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-500/[0.07] px-4 py-3 text-fluid-sm text-red-300"
        >
          {submitError}
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
