
import React from 'react';

export default function Form({
  formData,
  setFormData,
  errors,
  isSubmitting,
  handleSubmit,
  characterCount,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {['name', 'email', 'subject'].map((field) => (
        <div key={field} className="relative">
          <input
            type={field === 'email' ? 'email' : 'text'}
            value={formData[field]}
            onChange={(e) =>
              setFormData({ ...formData, [field]: e.target.value })
            }
            className={`w-full p-4 bg-white backdrop-blur-xl border-2 ${
              errors[field] ? 'border-red-500' : 'border-primary/30'
            } rounded-xl text-black caret-black placeholder-transparent
            focus:outline-none focus:border-primary
            focus:shadow-[0_0_25px_rgba(255,107,53,0.35)]
            transition-all peer`}
            placeholder=" "
            required
          />

          <label
            className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all
            peer-focus:top-[-0.6rem] peer-focus:left-3 peer-focus:text-xs
            peer-focus:text-primary peer-focus:bg-white peer-focus:px-2
            peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider
            peer-[:not(:placeholder-shown)]:top-[-0.6rem]
            peer-[:not(:placeholder-shown)]:left-3
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:text-primary
            peer-[:not(:placeholder-shown)]:bg-white
            peer-[:not(:placeholder-shown)]:px-2
            peer-[:not(:placeholder-shown)]:font-semibold
            peer-[:not(:placeholder-shown)]:uppercase
            peer-[:not(:placeholder-shown)]:tracking-wider"
          >
            Your {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>

          {errors[field] && (
            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
          )}
        </div>
      ))}

      {/* Message */}
      <div className="relative">
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value.slice(0, 1000),
            })
          }
          className={`w-full p-4 bg-white backdrop-blur-xl border-2 ${
            errors.message ? 'border-red-500' : 'border-primary/30'
          } rounded-xl text-black caret-black placeholder-transparent
          focus:outline-none focus:border-primary
          focus:shadow-[0_0_25px_rgba(255,107,53,0.35)]
          transition-all peer min-h-32 resize-vertical`}
          placeholder=" "
          maxLength={1000}
          required
        />

        <label
          className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all
          peer-focus:top-[-0.6rem] peer-focus:left-3 peer-focus:text-xs
          peer-focus:text-primary peer-focus:bg-white peer-focus:px-2
          peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider
          peer-[:not(:placeholder-shown)]:top-[-0.6rem]
          peer-[:not(:placeholder-shown)]:left-3
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:text-primary
          peer-[:not(:placeholder-shown)]:bg-white
          peer-[:not(:placeholder-shown)]:px-2
          peer-[:not(:placeholder-shown)]:font-semibold
          peer-[:not(:placeholder-shown)]:uppercase
          peer-[:not(:placeholder-shown)]:tracking-wider"
        >
          Your Message
        </label>

        <div
          className={`text-right text-xs mt-1 ${
            characterCount < 50
              ? 'text-red-500'
              : characterCount < 100
              ? 'text-yellow-600'
              : 'text-gray-500'
          }`}
        >
          {characterCount} characters remaining
        </div>

        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 bg-gradient-to-br from-primary to-secondary
        rounded-xl text-white font-bold text-lg uppercase tracking-wider
        relative overflow-hidden transition-all hover:translate-y-[-3px]
        hover:shadow-[0_10px_40px_rgba(255,107,53,0.6)]
        disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        {isSubmitting && (
          <div className="inline-block w-5 h-5 border-2 border-transparent border-t-white rounded-full animate-spin ml-2" />
        )}
        <div className="absolute inset-0 bg-white/30 transform -translate-x-full transition-transform hover:translate-x-full duration-500"></div>
      </button>
    </form>
  );
}
